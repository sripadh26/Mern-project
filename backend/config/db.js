// db.js
import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://eduvverse256:1HQfTOeyHpf9d6pS@cluster0.0ccylpy.mongodb.net/bitebuzz"
    );
    console.log("DB Connected");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

const MONGO_URI =
  "mongodb+srv://aj309430:abhi._.3094@cluster0.toplc.mongodb.net/userInfo";
