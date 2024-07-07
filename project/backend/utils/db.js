import mongoose from "mongoose";

const DbCon = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/project');
    console.log('MongoDB connected');
  } catch (error) {
    console.error('MongoDB connection error:', error);
  }
};

export default DbCon;