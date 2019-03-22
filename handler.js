'use strict';

const todosCreate = require('./api/users/functions/users-create.js');
const todosReadAll = require('./api/users/functions/users-read-all.js');
const todosReadOne = require('./api/users/functions/users-read-one.js');
const todosUpdate = require('./api/users/functions/users-update.js');
const todosDelete = require('./api/users/functions/users-delete.js');

module.exports.create = (event, context) => {
	todosCreate(event, (result) => {
		context.succeed(result);
	});
};

module.exports.readAll = (event, context) => {
	todosReadAll(event, (result) => {
		context.succeed(result);
	});
};

module.exports.readOne = (event, context) => {
	todosReadOne(event, (result) => {
		context.succeed(result);
	});
};

module.exports.update = (event, context) => {
	todosUpdate(event, (result) => {
		context.succeed(result);
	});
};

module.exports.delete = (event, context) => {
	todosDelete(event, (result) => {
		context.succeed(result);
	});
};

module.exports.notFound = ( event, context) => {
	const response = {
		statusCode: 404,
		headers: {
			"Access-Control-Allow-Origin" : "*"
		},
		body: JSON.stringify({"message": "Not Found"})
	};

	context.succeed(response);
};