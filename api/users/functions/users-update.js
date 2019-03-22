'use strict';

const AWS = require('aws-sdk');
const dynamoDb = new AWS.DynamoDB.DocumentClient();

module.exports = (event, callback) => {
	const data = JSON.parse(event.body);

	data.id = event.pathParameters.id;
	if ('login' in data) {
		if ('uuid' in data.login ) {
			delete data.login.uuid;
		}
	}
	data.updatedAt = new Date().getTime();

	const params = {
		TableName : 'users',
		Item: data
	};

	return dynamoDb.put(params, (error) => {
		if (error) {
      const response = {
        statusCode: 204,
        headers: {
          "Access-Control-Allow-Origin" : "*"
        },
        body: JSON.stringify({message : "Unable to update user"})
      };
      callback(response);
    }
    const response = {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin" : "*"
      },
      body: JSON.stringify({"message" : "User Updated"})
    };
    callback(response);
	});
};