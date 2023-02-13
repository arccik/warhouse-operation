import { Schema, models, model } from "mongoose";

const ItemSchema = new Schema(
  {
    itemId: { type: String },
    stockLocation: { type: String },
    storageUnit: { type: String },
    materialCodeScanned: { type: String },
    specialStock: { type: Boolean },
    specialStockNumber: { type: String },
    countedQuantity: { type: Number },
    scannedBy: { type: Schema.Types.ObjectId, ref: "User" },
    submitted: { type: Boolean, default: false },
    countedQuantity: { type: Number },
  },
  { timestamps: true }
);

export default models["Item"] || model("Item", ItemSchema);
