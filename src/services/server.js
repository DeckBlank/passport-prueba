const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('../graphQL/schema');
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
require('../middleware/auth');
const mainRouter = require('../routes/index');
const app = express();

app.use('/graphql',graphqlHTTP({
  schema: schema,
  graphiql: true
}));

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Proyecto de Cristian con Swagger",
      version: "0.0.1",
      description:
        "This is a simple CRUD API application made with Express and documented with Swagger",
      license: {
        name: "MIT",
        url: "https://spdx.org/licenses/MIT.html",
      },
      contact: {
        name: "Cristian",
        url: "https://logrocket.com",
        email: "cristiancinetto@gmail.com",
      },
    },
    servers: [
      {
        url: 'http://localhost:3000',
        description: 'Development server',
      },
    ],
  },
  apis: ["src/routes/*.js"],
};

const specs = swaggerJsdoc(options);
app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(specs, { explorer: true })
);

app.use(express.json());
app.use('/api', mainRouter);

module.exports = app;