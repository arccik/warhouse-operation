import { Schema, models, model } from "mongoose";

const PalletSchema = new Schema(
  {
    productId: String,
    description: String,
    SAPcode: String,
    quantity: Number,
    location: String,
    size: { width: Number, heigth: Number, length: Number },
    type: String,
  },
  { timestamps: true }
);

export default models["Pallet"] || model("Pallet", PalletSchema);
