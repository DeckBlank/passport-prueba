const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('../graphQL/schema');
const resolver = require('../graphQL/resolvers');
const mutation = require('../graphQL/mutations');

require('../middleware/auth');

const mainRouter = require('../routes/index');
const app = express();

app.use(express.json());
app.use('/api', mainRouter);

app.use('/graphql',graphqlHTTP({
  schema: schema,
  rootValue: {...resolver,...mutation},
  graphiql: true
}));

module.exports = app;