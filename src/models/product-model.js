import { Schema, model, models } from "mongoose";

const ProductSchema = new Schema(
  {
    ProductId: String,
    StorageUnit: String,
    Material: String,
    "Material Description": String,
    SLOC: String,
    "Special Stock": Boolean,
    "Special Stock Number": String,
    Type: String,
    "Available Stock": Number,
    StorageBin: String,
  },
  { timestamps: true }
);

export default models["Product"] || model("Product", ProductSchema);
