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
        "body":'{"gender":"female","name":{"title":"ms","first":"anna","last":"lilleng"},"location":{"street":"smestadhagan 4496","city":"hauge","state":"vest-agder","postcode":"6404","coordinates":{"latitude":"51.1252","longitude":"18.3624"},"timezone":{"offset":"+5:30","description":"Bombay, Calcutta, Madras, New Delhi"}},"email":"anna.lilleng@example.com","login":{"uuid":"17cbac4e-6eb8-4a5d-9171-819050135485","username":"bigleopard190","password":"hookers","salt":"4RGPv1Ze","md5":"d8db1a20ad5ed5ffe464c293c1fffb41","sha1":"2802699749457ee833ef8d66259436938e6c3abe","sha256":"14e03cefa2edc913c6a2d5f5092b284f866a521cea5147785d38d69d7aea7aaa"},"dob":{"date":"1974-11-08T11:47:04Z","age":44},"registered":{"date":"2002-05-01T21:49:38Z","age":16},"phone":"20232534","cell":"98679534","id":{"name":"FN","value":"08117437745"},"picture":{"large":"https://randomuser.me/api/portraits/women/34.jpg","medium":"https://randomuser.me/api/portraits/med/women/34.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/women/34.jpg"},"nat":"NO"}'
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
			}
			funcReadAll(event,context,callback)
		}).catch();
  });
  
  it('should return one users', function(){
		return new Promise((resolve, reject) => { 
			var event={
        "pathParameters": '{"id": "17cbac4e-6eb8-4a5d-9171-819050135485"}'
      };
			var context={};
			var callback = (ctx, data) => {
			
				if(data.statusCode == 200){
					resolve(data);
				}
				else{
					reject(data);
				}
			}
			funcReadOne(event,context,callback)
		}).catch();
  });	
  
  it('should update one users', function(){
		return new Promise((resolve, reject) => { 
			var event={
        "pathParameters": '{"id": "17cbac4e-6eb8-4a5d-9171-819050135485"}',
        "body":'{"gender":"male","name":{"title":"ms","first":"anna","last":"lilleng"},"location":{"street":"smestadhagan 4496","city":"hauge","state":"vest-agder","postcode":"6404","coordinates":{"latitude":"51.1252","longitude":"18.3624"},"timezone":{"offset":"+5:30","description":"Bombay, Calcutta, Madras, New Delhi"}},"email":"anna.lilleng@example.com","login":{"uuid":"17cbac4e-6eb8-4a5d-9171-819050135485","username":"bigleopard190","password":"hookers","salt":"4RGPv1Ze","md5":"d8db1a20ad5ed5ffe464c293c1fffb41","sha1":"2802699749457ee833ef8d66259436938e6c3abe","sha256":"14e03cefa2edc913c6a2d5f5092b284f866a521cea5147785d38d69d7aea7aaa"},"dob":{"date":"1974-11-08T11:47:04Z","age":44},"registered":{"date":"2002-05-01T21:49:38Z","age":16},"phone":"20232534","cell":"98679534","id":{"name":"FN","value":"08117437745"},"picture":{"large":"https://randomuser.me/api/portraits/women/34.jpg","medium":"https://randomuser.me/api/portraits/med/women/34.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/women/34.jpg"},"nat":"NO"}'
      };
			var context={};
			var callback = (ctx, data) => {
			
				if(data.statusCode == 200){
					resolve(data);
				}
				else{
					reject(data);
				}
			}
			funcUpdate(event,context,callback)
		}).catch();
  });	
  
  it('should delete one users', function(){
		return new Promise((resolve, reject) => { 
			var event={
        "pathParameters": '{"id": "17cbac4e-6eb8-4a5d-9171-819050135485"}'
      };
			var context={};
			var callback = (ctx, data) => {
			
				if(data.statusCode == 200){
					resolve(data);
				}
				else{
					reject(data);
				}
			}
			funcDelete(event,context,callback)
		}).catch();
  });	

  it('the notFound function should work', function(done){
		var event={};
		var context={};
		var callback = (ctx, data) => {
			done();
		}
		funcNotFound(event,context,callback)
	})
});