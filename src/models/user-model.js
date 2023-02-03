import { Schema, model, models } from "mongoose";

const userSchema = new Schema({
  password: {
    type: String,
    minLength: 5,
    maxLength: 150,
    required: true,
  },
  email: {
    type: String,
    trim: true,
    unique: true,
    required: true,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Please fill a valid email address",
    ],
  },
  activationLink: String,
});

export default models.User || model("User", userSchema);
