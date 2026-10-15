import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

function connectToMongoose() {
	console.log(`Connecting to MongoDB...`);
  return mongoose.connect(process.env.MONGO_URI);
}

export default connectToMongoose;
