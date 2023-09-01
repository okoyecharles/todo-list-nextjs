import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

function connectToMongoose() {
  return mongoose.connect(process.env.MONGO_URI);
}

export default connectToMongoose;