const UserModel = require('../model/user');

const messageResolver = () => {
  return 'Hello World';
}

const saludarResolver = (args) => {
  console.log(args);
  return `Hello ${args.nombre}`;
}

const userResolver = async () => {
  const users = await UserModel.find();
  return users;
}

// Root resolver
const resolver = {
  message: messageResolver,
  saludar: saludarResolver,
  users: userResolver,
};

module.exports = resolver