/*
Copyright 2017 - 2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with the License. A copy of the License is located at
    http://aws.amazon.com/apache2.0/
or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and limitations under the License.
*/


/* Amplify Params - DO NOT EDIT
	ENV
	REGION
	STORAGE_FORMTABLE_ARN
	STORAGE_FORMTABLE_NAME
	STORAGE_FORMTABLE_STREAMARN
Amplify Params - DO NOT EDIT */

const express = require('express')
const bodyParser = require('body-parser')
const awsServerlessExpressMiddleware = require('aws-serverless-express/middleware')

// declare a new express app
const app = express()
app.use(bodyParser.json())
app.use(awsServerlessExpressMiddleware.eventContext())

app.options('*', (req, res) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', '*');
  res.header('Access-Control-Allow-Methods', '*');
  res.sendStatus(200);
});

// Enable CORS for all methods
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "*")
  res.header("Access-Control-Allow-Methods", "*") 
  next()
});

const AWS = require('aws-sdk')
const docClient =  new AWS.DynamoDB.DocumentClient();

function id () {
  return Math.random().toString(36).substring(2) + Date.now().toString(36);
}

function time() {
  const now = new Date();
  const ISTOffset = 330; // IST is UTC+05:30
  const offsetTime = new Date(now.getTime() + ISTOffset * 60 * 1000);
  const localISOTime = offsetTime.toISOString().slice(0, -1);
  return localISOTime;
}

app.post('/register', function(req, res) {
  const params = {
    TableName: process.env.STORAGE_FORMTABLE_NAME,
    Item: {
      id: id(),
      name: req.body.name,
      email: req.body.email,
      roll: req.body.roll,
      phone: req.body.phone,
      year: req.body.year,
      onCreated: time() 
    }
  }
  docClient.put(params, function(err, data) {
    if (err) res.json({ err })
    else res.json({ success: 'Form successfully submitted' })
  })
});

app.listen(3000, function() {
    console.log("App started")
    console.log(time())
});

// Export the app object. When executing the application local this does nothing. However,
// to port it to AWS Lambda we will create a wrapper around that will load the app from
// this file
module.exports = app