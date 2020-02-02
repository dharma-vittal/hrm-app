const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Department
let User = new Schema({
    employeeCode: {
    type: String
  },
  role: {
    type: String
  },
  password: {
    type: String
  }

},{
    collection: 'user'
});

module.exports = mongoose.model('User', User);