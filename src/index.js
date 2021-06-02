const connectToDatabase = require('./services/db');
const app = require('./services/server');

connectToDatabase().then(
  app.listen(3000, () => {
    console.log('Server started.')
  })
);