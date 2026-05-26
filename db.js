
const mongoose = require('mongoose');

const connectDB = async () => {
  let db ="mongodb+srv://dotpitch123_db_user:2prwOa1mEJwijfwH@cluster0.ffga0v5.mongodb.net/dotpitchDB?retryWrites=true&w=majority"
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,

    });
    console.log("MongoDB connected!");
    console.log('db connected successfully')
  } catch (err) {
    console.error("DB connection error:", err.message);
    process.exit(1);
  }
};




module.exports = connectDB;
