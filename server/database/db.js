import mongoose from "mongoose";

const connectDb = async () => {
    try {
      console.log("MONGO_URL:", process.env.MONGO_URL); // Log the MONGO_URL to check if it's loaded
      await mongoose.connect(process.env.MONGO_URL);
      console.log("Connected");
    } catch (error) {
      console.log(error);
    }
  };
  

export default connectDb;