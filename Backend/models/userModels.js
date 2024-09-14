import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    major: { type: String, required: true }, // User's major (field of study)
    interests: { type: [String], required: true },
    password: { type: String, required: true },
    semester: { type: Number, required: true }, // Current semester (as a number)
    bio: { type: String, required: true }, // User's bio
  },
  { timestamps: true } // Correctly specify timestamps option here
);

const User = mongoose.model("User", userSchema);
export default User;
