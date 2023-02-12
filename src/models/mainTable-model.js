import { Schema, model, models } from "mongoose";

const dataSchema = new Schema(
  {
    storageUnit: String,
    materialCodeScanned: String,
    materialCodeSAP: String,
    description: String,
    stockCategory: String,
    specialStoreNumber: String,
    countedQuantity: Number,
    scannedLocation: String,
    timeAndDateOfScanning: Date,
    SAPQuantity: Number,
    SAPAddress: String,
    customers: String,
    difference: Number,
    MAP: String,
    value: Number,
    action: String,
    status: Boolean,
    corrections: Boolean,
    result: String,
    comment: String,
    ccUser: String,
    mistake: Boolean,
    mistakeUsername: String,
    round: Number,
    scannedBy: { type: Schema.Types.ObjectId, ref: "User" },
  },
  { timestamps: true }
);

export default models["MainTable"] || model("MainTable", dataSchema);
