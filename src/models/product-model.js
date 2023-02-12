import { Schema, model, models } from "mongoose";

const ProductSchema = new Schema(
  {
    ProductId: String,
    "Storage Unit": String,
    Material: String,
    "Material Description": String,
    SLOC: String,
    "Special Stock": String,
    "Special Stock Number": String,
    Type: String,
    "Available Stock": Number,
    StorageBin: String,
  },
  { timestamps: true }
);

export default models["Product"] || model("Product", ProductSchema);
