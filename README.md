# crud_api_serverless
A CRUD Serverless user API designed for Lambda, DynamoDB and Nodejs.  
Live URL (for 7 Days): https://gixoyznkl7.execute-api.us-east-1.amazonaws.com/dev/users  
Use Users generated at: https://randomuser.me/api/  
ONLY USE the "response[0]" object sent, DO NOT include the "info" object provided in the response.  

VALID REQUEST BODY EXAMPLE: {"gender":"male","name":{"title":"mr","first":"arquimedes","last":"peixoto"},"location":{"street":"186 rua dezessete ","city":"mauá","state":"minas gerais","postcode":38020,"coordinates":{"latitude":"-72.1055","longitude":"-90.5116"},"timezone":{"offset":"+8:00","description":"Beijing, Perth, Singapore, Hong Kong"}},"email":"arquimedes.peixoto@example.com","login":{"uuid":"2bd04874-2836-4cdb-9eae-ac3afc033859","username":"redtiger687","password":"twinkie","salt":"jHpAX3U3","md5":"4ee3a5516c86fe3af46823e9d0d959df","sha1":"3be7c6e5bad359842351376adaa64accf1b0934c","sha256":"1d9a3d3d5e903d6faf926fde98cf3ae5b77d87ae50761bfe5b8fa1f772df5d1c"},"dob":{"date":"1986-12-24T19:58:54Z","age":32},"registered":{"date":"2006-02-14T01:29:08Z","age":13},"phone":"(97) 0225-3538","cell":"(63) 5033-8860","id":{"name":"","value":null},"picture":{"large":"https://randomuser.me/api/portraits/men/67.jpg","medium":"https://randomuser.me/api/portraits/med/men/67.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/men/67.jpg"},"nat":"BR"}

# API Documentation
https://documenter.getpostman.com/view/6584640/S17qU9xk

# Installation
1- Clone Repository.  
2- Navigate to Repo root directory.  
3- Run "npm install" to install local dependencies.  
4- Setup serverless AWS IAM credentials using "serverless config ..."   
(4.1 OPTIONAL)- Use "export AWS_ACCESS_KEY_ID=<your-key-here>"   
    and "export AWS_SECRET_ACCESS_KEY=<your-secret-key-here>".  
5- Run "serverless deploy" to deploy the functions into AWS Lambda  

# Unit Testing
I am using "dynalite" to generate a Mock DynamoDB in the dev environment.  
If you would like to modify the settings of this DB, refer to "./test/utils.js".  
If you would like to modify the unit tests, refer to "./test/test.js".  
To Run Unit Tests: "npm test".  


