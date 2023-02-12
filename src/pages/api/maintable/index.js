// import initMiddleware from "../../../lib/init-middleware";
// import validateMiddleware from "../../../lib/validate-middleware";
import { check, validationResult } from "express-validator";
// import palletService from "@/services/pallet-service";
import dbConnect from "@/utils/dbConnect";
import mainTableService from "@/services/mainTable-service";
import Item from "@/models/item-model";

export default async (req, res) => {
  dbConnect();
  switch (req.method) {
    case "POST":
      const body = req.body;
      const data = await mainTableService.add({
        storageUnit: body.storageUnit,
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
      });
      res.status(200).json(data);
      break;
    case "GET":
      try {
        const items = await Item.find({ submitted: false }).select("-_id -__v");

        const result = await mainTableService.addMany(items);
        await Item.updateMany(
          { submitted: false },
          { $set: { submitted: true } }
        );
        res.status(200).json(result);
        break;
      } catch (error) {
        console.log("Error on main Table", error);
        return res
          .status(404)
          .json({ message: "Something went wrong on main table" });
      }

    default:
      res.status(404).json({ message: "Request HTTP Method Incorrect." });
      break;
  }
};
