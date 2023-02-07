import { Schema, model, models } from "mongoose";

const dataSchema = new Schema(
  {
    storageUnit: Number,
    materialCodeScanned: Number,
    materialCodeSAP: Number,
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
  },
  { timestamps: true }
);

export default models["Data"] || model("Data", dataSchema);
