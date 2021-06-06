const { schemaComposer } = require('graphql-compose');

const authors = [
  { id: 1, firstName: 'Tom', lastName: 'Coleman' },
  { id: 2, firstName: 'Sashko', lastName: 'Stubailo' },
  { id: 3, firstName: 'Mikhail', lastName: 'Novikov' },
];

const traerAutores = () => {
  console.log("HOLA")
  console.log(authors)
  return authors;
}

const saludoResolver = ({ source, args }) => {
  console.log(args);
  return `HOLA ${args.firstName}`;
}

const buscarAuthor = ({ source, args }) => {
  const author = authors.find(anAuthor => anAuthor.id == args.id);
  return author;
}

const agregarAuthor = ({ source, args }) => {
  authors.push(args);
  const author = authors.find(anAuthor => anAuthor.id == args.id);
  return author;
}

const AuthorTC = schemaComposer.createObjectTC({
  name: 'Author',
  fields: {
    id: 'Int!',
    firstName: 'String',
    lastName: 'String',
  }
});

AuthorTC.addResolver({
  name: 'getAuthors',
  type: [AuthorTC],
  resolve: traerAutores
})

AuthorTC.addResolver({
  name: 'saludarAutor',
  args: { firstName: 'String' },
  type: 'String',
  resolve: saludoResolver
})

AuthorTC.addResolver({
  name: 'buscarAutor',
  args: { id: 'Int' },
  type: AuthorTC,
  resolve: buscarAuthor
})

AuthorTC.addResolver({
  kind: 'mutation',
  name: 'crearAuthor',
  args: { id: 'Int!', firstName: 'String!', lastName: 'String!' },
  type: AuthorTC,
  resolve: agregarAuthor
})

const AuthorQuery = {
  autor: AuthorTC.getResolver('getAuthors'),
  saludarAutor: AuthorTC.getResolver('saludarAutor'),
  buscarAuthor: AuthorTC.getResolver('buscarAutor'),
};

const AuthorMutation = {
  crearAutor: AuthorTC.getResolver('crearAuthor'),
}

module.exports = { AuthorQuery, AuthorMutation };