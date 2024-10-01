const mongoose = require("mongoose");
require('dotenv').config();


// Define the MongoDB connection URL

// use local URL
// const mongoURL = "mongodb://localhost:27017/hotels";
// using .env
// const mongoURL = process.env.MONGODB_URL_LOCAL;

// use cluster URL
const mongoURL = process.env.MONGODB_URL;
// Connect to the MongoDB database (establish connectionn)

mongoose.connect(mongoURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Get the default connection
// Mongoose maintains a default connection object representing the MongoDB connection
const db = mongoose.connection;

// Define event listeners for database connection

// for connected
db.on("connected", () => {
  console.log("Connected to MongoDB successfully");
});

// for disconnected
db.on("disconnected", () => {
  console.log("Disconnected from MongoDB");
});

// for error
db.on("error", (err) => {
  console.log("Error in MongoDB connection: ", err);
});

// db.on('error', console.error.bind(console, 'connection error:'))

module.exports = db;