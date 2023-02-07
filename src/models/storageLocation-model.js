import { Schema, models, model } from "mongoose";

const StorageLocationSchema = new Schema(
  {
    width: String,
    Height: String,
    size: String,
    name: String,
    barcode: String,
  },
  { timestamps: true }
);

export default models["StorageLocation"] ||
  model("StorageLocation", StorageLocationSchema);
