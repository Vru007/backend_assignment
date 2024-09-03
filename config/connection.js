const mongoose=require('mongoose');
require('dotenv').config();

const MONGO_URI=process.env.MONGO_URI;

const connectToDatabase = async () => {
    try {
      await mongoose.connect(MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log('Connected to MongoDB successfully');
    } catch (error) {
      console.error('Error connecting to MongoDB:', error);
      process.exit(1); 
    }
  };
  
  module.exports = connectToDatabase;