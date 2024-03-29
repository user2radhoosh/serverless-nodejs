'use strict';

module.exports.hello = async (event) => {
  console.log(event.queryStringParameters.name)
  return {
    statusCode: 200,
    body:  'Go Serverless v2.0! Your function executed successfully!',
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
module.exports.goodby = async (event,context, callback) => {
  console.log(context)
  return {
    statusCode: 200,
    body:  'goodby',
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};