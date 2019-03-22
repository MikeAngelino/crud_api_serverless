'use strict';
		
const AWS = require('aws-sdk');
const dynamoDb = new AWS.DynamoDB.DocumentClient();

module.exports = (event, callback) => {
	const params = {
		TableName: 'users',
	};

	return dynamoDb.scan(params, (error, data) => {
		if (error) {
			const response = {
				statusCode: 409,
				headers: {
					"Access-Control-Allow-Origin" : "*"
				},
				body: JSON.stringify({message : "Unable to get users"})
			};
			callback(response);
		}
		const response = {
			statusCode: 200,
			headers: {
				"Access-Control-Allow-Origin" : "*"
			},
			body: JSON.stringify(data.Items)
		};
		callback(response);
	});
};