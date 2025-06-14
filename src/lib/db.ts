import mongoose from "mongoose";

const connectDB = async () => {
  try {
    if (mongoose.connection.readyState) {
      console.log("MongoDB is already connected");
      return;
    }
    if (!process.env.MONGODB_URI) {
      throw new Error("MONGODB_URI is not defined in environment variables");
    }
    await mongoose.connect(process.env.MONGODB_URI!);
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1);
  }
};

export default connectDB;