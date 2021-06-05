const { buildSchema } = require('graphql');

// GraphQL schema
var schema = buildSchema(`
    type Query {
        message: String,
        saludar(nombre: String!) : String,
        users: [User],
    }

    type Mutation {
      createUser(input: UserInput) : User
    }

    type User {
      _id: ID,
      email: String!,
    }

    input UserInput {
      email: String!,
      password: String!,
    },

`);

module.exports = schema;
