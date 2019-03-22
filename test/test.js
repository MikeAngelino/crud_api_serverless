var funcCreate = require('../handler').create;
var funcReadAll = require('../handler').readAll;
var funcReadOne = require('../handler').readOne;
var funcUpdate = require('../handler').update;
var funcDelete = require('../handler').delete;
var funcNotFound = require('../handler').notFound;

var TestUtils = require('./utils');

var assert = require('chai').assert;
var should = require('chai').should();

describe("CRUD user API test", function () {
	
	before(function(done){
		this.timeout(10000);
		TestUtils.mockDB().then(function(data){
			done();
		})
		.catch(function(err){
			assert(false,"Could not create the mock DB")
			done();
		});
	});

  it('a new user should be created', function(){
    return new Promise((resolve, reject) => {
      var event={
        "body":'{"name":"John Poe","gender": "female"}'
      };
      var context={};
      var callback = (ctx, data) => {
        if(data.statusCode == 201){
          resolve(data);
        }
        else{
          reject(data);
        }
      }
      funcCreate(event,context,callback)
    }).catch();
  });
	
	it('should return all users', function(){
		return new Promise((resolve, reject) => { 
			var event={};
			var context={};
			var callback = (ctx, data) => {
			
				if(data.statusCode == 200){
					resolve(data);
				}
				else{
					reject(data);
				}
				//done();
			}
			funcReadAll(event,context,callback)
		}).catch();
	});	
});