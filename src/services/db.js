require('dotenv').config();
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
let isConnected;

module.exports = connectToDatabase = (databaseName = process.env.DBNAME) => {
  if (isConnected) {
    console.log('=> using existing database connection');
    return Promise.resolve();
  }

  console.log('=> using new database connection');
  const uri = `mongodb+srv://${process.env.MONGO_USERNAME}:${encodeURIComponent(
    process.env.MONGO_PSW
  )}@cluster0.6bf5k.mongodb.net/${databaseName}?retryWrites=true`;
  return mongoose.connect(uri, { useNewUrlParser: true }).then((db) => {
    isConnected = db.connections[0].readyState;
  });
};
