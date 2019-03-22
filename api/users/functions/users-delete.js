'use strict';

const AWS = require('aws-sdk');
const dynamoDb = new AWS.DynamoDB.DocumentClient();

module.exports = (event, callback) => {
	const params = {
		TableName : 'users',
		Key: {
			id: event.pathParameters.id
		}
	};

	return dynamoDb.delete(params, (error) => {
		if (error) {
      const response = {
        statusCode: 409,
        headers: {
          "Access-Control-Allow-Origin" : "*"
        },
        body: JSON.stringify({message : "Unable to remove user"})
      };
      callback(response);
    }
    const response = {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin" : "*"
      },
      body: JSON.stringify({message : "User Removed"})
    };
    callback(response);
	});
};