const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const DbConnection = function () {

  var db = null;
  var instance = 0;

  async function DbConnect() {
    try {
      const uri = `mongodb+srv://${process.env.MONGO_USERNAME}:${encodeURIComponent(
        process.env.MONGO_PSW
      )}@cluster0.6bf5k.mongodb.net/${process.env.DBNAME}?retryWrites=true`;

      return mongoose.connect(uri, { useNewUrlParser: true });
    } catch (e) {
      return e;
    }
  }

  async function Get() {
    try {
      instance++;     // this is just to count how many times our singleton is called.
      console.log(`DbConnection called ${instance} times`);

      if (db != null) {
        console.log(`db connection is already alive`);
        return db;
      } else {
        console.log(`getting new db connection`);
        db = await DbConnect();
        return db;
      }
    } catch (e) {
      return e;
    }
  }

  return {
    Get: Get
  }
}


module.exports = DbConnection();
