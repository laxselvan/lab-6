const mongoose = require("mongoose");

const schema = mongoose.Schema({
  employee_id: String,
  name: String,
  email: String,
  phone_no: Number,
  gender: String,
  age:Number,
  password: String,
  designation: String,

});

const empModal = mongoose.model("employee", schema);

module.exports = empModal;
