const mongoose = require("mongoose");
const url ="mongodb+srv://racha:racha1234@cluster0.lwqrczc.mongodb.net/?retryWrites=true&w=majority"
require("dotenv").config();
const connecterDB = async () => {
    console.log('geheheh')
  try {
    await mongoose.connect(url);
    console.log("db is connected");
  } catch (error) {
    console.log("failed to connect to db ");
  }
};
module.exports = connecterDB;
