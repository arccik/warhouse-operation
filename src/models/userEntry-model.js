import { Schema, model, models } from "mongoose";

const userEntry = new Schema(
  {
    storageUnit: Number,
    materialCode: Number,
    quantity: Number,
    storageLocation: String,
  },
  { timestamps: true }
);

export default models["UserEntry"] || model("UserEntry", userEntry);
