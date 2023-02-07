import { Schema, model, models } from "mongoose";

const ProductSchema = new Schema(
  {
    productId: String,
    storageUnit: String,
    material: String,
    materialDescription: String,
    SLOC: String,
    specialStock: Boolean,
    specialStockNumber: String,
    type: String,
    availableStock: Number,
    storageBin: String,
  },
  { timestamps: true }
);

export default models["Product"] || model("Product", ProductSchema);
