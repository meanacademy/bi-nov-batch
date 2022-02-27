const mongoose = require("mongoose");

//create to-do list schema
const todoSchema = mongoose.Schema({
  title: { type: String, maxLength: 25, required: true },
  description: { type: String, maxLength: 200, required: false },
  createdAt: { type: Date, default: Date.now },
});

//export as module
module.exports = mongoose.model("todos", todoSchema);
