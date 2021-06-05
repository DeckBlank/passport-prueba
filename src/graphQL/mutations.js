const UserModel = require('../model/user');

const createTaskMutation = async(args) => {
  console.log("HOLA")
  console.log(args.input)
  const newUser = new UserModel(args.input);
  await newUser.save()
  return newUser;
}

const mutation = {
  createUser:createTaskMutation
};

module.exports = mutation