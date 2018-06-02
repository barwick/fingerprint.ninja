import AWS from 'aws-sdk';
import uuid from 'uuid/v4';

AWS.config.update({ region: 'eu-west-2' });
const db = new AWS.DynamoDB.DocumentClient({ apiVersion: '2012-08-10' });

const dynamoParams = item => ({
  TableName: 'fingerprint-ninja',
  Item: {
    id: uuid(),
    timestamp: new Date().toISOString(),
    ...item,
  },
  ConditionExpression: 'attribute_not_exists(id)',
});

const response = (statusCode, headers, body) => ({
  statusCode,
  headers: {
    'Access-Control-Allow-Origin': 'https://fingerprint.ninja', // Required for CORS support to work with AWS `LAMBDA_PROXY` integration type
    'Access-Control-Allow-Headers': Object.keys(headers).join(','), // Echo all request headers back to client. `*` wildcard adoption not universal - https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Allow-Headers
  },
  body: JSON.stringify({
    ...body,
  }),
});

export const submit = (event, context, callback) => {
  const body = event && event.body && JSON.parse(event.body);
  const transformedEvent = { ...event, body: undefined };
  const transformedBody = Object.keys(body).reduce(
    (acc, val) => ({
      ...acc,
      [`hash-${val}`]: body[val].hash,
      [`components-${val}`]: body[val].components,
    }),
    {},
  );

  db.put(dynamoParams({ event: transformedEvent, ...transformedBody }), err => {
    if (err) {
      callback(new Error(err)); // AWS Cloudwatch picks these up for nicer logging
      return;
    }
    callback(
      null,
      response((err && err.statusCode) || 200, event.headers, {
        message: err && err.code ? `${err.code}: ${err.message}` : undefined,
      }),
    );
  });
};

export default submit;
