/* eslint-disable no-console */
import AWS from 'aws-sdk';
import uuid from 'uuid/v4';
import { AttributeValue as wrapper } from 'dynamodb-data-types';

AWS.config.update({ region: 'eu-west-2' });
const db = new AWS.DynamoDB({ apiVersion: '2012-08-10' });

const params = item => ({
  TableName: 'fingerprint-ninja',
  Item: wrapper.wrap(item),
  ConditionExpression: 'attribute_not_exists(id)',
});

const response = (statusCode, body) => ({
  statusCode,
  headers: {
    'Access-Control-Allow-Origin': '*', // Required for CORS support to work
  },
  body: JSON.stringify({
    ...body,
  }),
});

export const submit = (event, context, callback) => {
  const body = event && event.body && JSON.parse(event.body);
  const transformedBody = Object.keys(body).reduce(
    (acc, val) => ({
      ...acc,
      [`hash-${val}`]: body[val].hash,
      [`components-${val}`]: body[val].components,
    }),
    {},
  );

  db.putItem(params({ id: uuid(), ...transformedBody }), err => {
    if (err) {
      callback(new Error(err)); // AWS Cloudwatch picks these up for logging
      return;
    }
    callback(
      null,
      response((err && err.statusCode) || 200, {
        message: err && err.code ? `${err.code}: ${err.message}` : undefined,
      }),
    );
  });
};

export default submit;
