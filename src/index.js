require('dotenv').config();
const connectToDatabase = require('./services/db');
var DbConnection = require('./services/db');
const app = require('./services/server');
const port = process.env.PORT;

DbConnection.Get().then(
    app.listen(port, () => {
    console.log(`Server started. Listening on port ${port}`);
  })
)