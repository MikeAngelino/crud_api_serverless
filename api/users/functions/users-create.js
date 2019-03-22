'use strict';

const AWS = require('aws-sdk');
const dynamoDb = new AWS.DynamoDB.DocumentClient();
const uuid = require('uuid');

module.exports = (event, callback) => {
	const data = JSON.parse(event.body);

	// NOTE: I would have generated a uuid again but since Randomuser.me generates one,
	// I wasnt sure if I had to use the one provided or not. Therefore, in order to make it
	// easier to test the api, I am using the one provided, and if it's not included in the 
	// default format, I am generating one.

	if ('login' in data) {
		if ('uuid' in data.login ) {
			data.id = data.login.uuid;
			delete data.login.uuid;
		}
	} else {
		data.id = uuid.v1();
	}
	
	data.updatedAt = new Date().getTime();

	const params = {
		TableName: 'users',
		Item: data
	};

	return dynamoDb.put(params, (error) => {
		if (error) {
			const response = {
				statusCode: 409,
				headers: {
					"Access-Control-Allow-Origin" : "*"
				},
				body: JSON.stringify({message : "Unable to Create User"})
			};
			callback(response);
		}
		const response = {
			statusCode: 201,
			headers: {
				"Access-Control-Allow-Origin" : "*"
			},
			body: JSON.stringify({message : "User Created"}),
		};
		callback(response);
	});
};