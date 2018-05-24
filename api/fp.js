import AWS from 'aws-sdk';
import uuid from 'uuid/v4';
import { AttributeValue as wrapper } from 'dynamodb-data-types';

AWS.config.update({ region: 'eu-west-2' });
const db = new AWS.DynamoDB({ apiVersion: '2012-08-10' });

const params = fp => ({
  TableName: 'fingerprint-ninja',
  Item: wrapper.wrap(fp),
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

  // Assign random ID for table primary key
  db.putItem(params({ id: uuid(), body }), err => {
    callback(
      null,
      response((err && err.statusCode) || 200, { message: err && err.code ? err.code : undefined }),
    );
  });
};

export default submit;
