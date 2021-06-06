const mongoose = require('mongoose');
const { composeWithMongoose } = require('graphql-compose-mongoose');

const Schema = mongoose.Schema;

const TaskSchema = new Schema({
  title: {
    type: String,
    required: true,
    unique: true
  },
  description: {
    type: String,
    required: true,
    unique: true
  },
  duration:{
    type: Number,
    required: true
  },
},{
  timestamps: true,
});

const TaskModel = mongoose.model('task', TaskSchema);
const TaskTC = composeWithMongoose(TaskModel);

module.exports = {TaskModel, TaskTC};