import { Schema, models, model } from "mongoose";

const ItemSchema = new Schema(
  {
    itemId: String,
    stockLocation: String,
    storageUnit: String,
    specialStock: Boolean,
    specialStoreNumber: String,
    quantity: Number,
    scannedBy: [{ type: Schema.Types.ObjectId, ref: "User" }],
  },
  { timestamps: true }
);

export default models["Item"] || model("Item", ItemSchema);
