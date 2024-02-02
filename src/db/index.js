import mongoose from "mongoose";
import { DB_NAME } from "../constant.js";
const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log(`Mongodb connected at ${connectionInstance.connection.host}`);
  } catch (error) {
    console.log("error occured", error);
    process.exit(1);
  }
};
export default connectDB;
