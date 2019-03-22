'use strict';

const AWS = require('aws-sdk');
const dynamoDb = new AWS.DynamoDB.DocumentClient();

module.exports = (event, callback) => {
  const params = {
    TableName: 'users',
    Key: {
      id: event.pathParameters.id
    }
  };

  return dynamoDb.get(params, (error, data) => {
    if (error) {
      const response = {
        statusCode: 404,
        headers: {
          "Access-Control-Allow-Origin" : "*"
        },
        body: JSON.stringify({"message" : "Unable to get user"})
      };
      callback(response);
    }
    const response = {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin" : "*"
      },
      body: JSON.stringify(data.Item)
    };
    callback(response);
  });
};