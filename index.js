require('dotenv').config();
const MongoClient = require('mongodb').MongoClient;

MongoClient.connect(process.env.MONGO_URI, (err, db) => {
  !err
    ? console.log('Connected')
    : console.log('Error', err);
});