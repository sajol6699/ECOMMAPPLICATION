import mongoose from "mongoose";

const DbConn = async () => {
  try {
    const conn = await mongoose.connect("mongodb://localhost:27017/ecomm");
    console.log("connected to mongodb".bgGreen.white);
  } catch (error) {
    console.log(`connection to mongodb failederror: ${error}`);
  }
};

export default DbConn;
