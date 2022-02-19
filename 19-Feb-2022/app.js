//create an instance of a mongoose
const mongoose = require("mongoose");

//connect with mongodb uri
mongoose.connect("mongodb://localhost:27017/mybidb", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//check mongodb connection
const db = mongoose.connection;
db.on("error", (err) => {
  console.log(err);
});
db.once("open", () => {
  console.log("Connection to db is successful");
});

//define schema
const studentSchema = mongoose.Schema({
  rollno: Number,
  name: String,
  marks: Number,
});

//create a model
const studentModel = mongoose.model("students", studentSchema);

//initialize data with model
const student = new studentModel({
  rollno: 1,
  name: "Mahesh",
  marks: 75,
});

//save the document
student.save((err, document) => {
  if (err) throw err;
  console.log("Student Added", document);
});
