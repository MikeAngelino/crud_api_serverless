'use strict';

const todosCreate = require('./api/users/functions/users-create.js');
const todosReadAll = require('./api/users/functions/users-read-all.js');
const todosReadOne = require('./api/users/functions/users-read-one.js');
const todosUpdate = require('./api/users/functions/users-update.js');
const todosDelete = require('./api/users/functions/users-delete.js');

module.exports.create = (event, context, callback) => {
	todosCreate(event, (result) => {
		callback(null, result);
	});
};

module.exports.readAll = (event, context, callback) => {
	todosReadAll(event, (result) => {
		callback(null, result);
	});
};

module.exports.readOne = (event, context, callback) => {
	todosReadOne(event, (result) => {
		callback(null, result);
	});
};

module.exports.update = (event, context, callback) => {
	todosUpdate(event, (result) => {
		callback(null, result);
	});
};

module.exports.delete = (event, context, callback) => {
	todosDelete(event, (result) => {
		callback(null, result);
	});
};

module.exports.notFound = ( event, context, callback) => {
	const response = {
		statusCode: 404,
		headers: {
			"Access-Control-Allow-Origin" : "*"
		},
		body: JSON.stringify({"message": "Not Found"})
	};

	callback(null, response);
};