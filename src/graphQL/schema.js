const { SchemaComposer } = require('graphql-compose');
const { TaskQuery, TaskMutation } = require('./task');
const { UserQuery, UserMutation } = require('./user');
const { AuthorQuery, AuthorMutation } = require('./author');

const schemaComposer = new SchemaComposer();

schemaComposer.Query.addFields({
  ...UserQuery,
  ...TaskQuery,
  ...AuthorQuery,
});

schemaComposer.Mutation.addFields({
  ...UserMutation,
  ...TaskMutation,
  ...AuthorMutation,
});

module.exports = schemaComposer.buildSchema();
