
//Dependencies
const express = require('express');
const bodyParser =  require('body-parser');
const MongoClient = require('mongodb').MongoClient;

//MongoDB
const url = "mongodb://localhost:27017/RESTAPI";
MongoClient.connect(url);

//Express
const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

//Routes
app.use('/api',require('./routes/api'));
app.listen(3000)
console.log('YES')