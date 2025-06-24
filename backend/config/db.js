const mongoose = require('mongoose');

// Use the MongoDB URI from .env file
const connectDB = async () => {
  try {
    // Use the MONGO_URI from the .env file
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected successfully');
  } catch (err) {
    console.error('Error connecting to MongoDB', err);
    process.exit(1); // Exit with failure code
  }
};

module.exports = connectDB;
