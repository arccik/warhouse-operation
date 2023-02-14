import dbConnect from "@/utils/dbConnect";
import DataModel from "../../../models/mainTable-model";

export default async function handler(req, res) {
  try {
    dbConnect();
    // if (req.method === "POST") {
    //   const randomValue = () => Math.random().toString().slice(2, 10);

    //   //   this data here just for test, TODO: validation on backend and frontend
    //   const response = await DataModel.create({
    //     storageUnit: randomValue(),
    //     materialCodeScanned: randomValue(),
    //     materialCodeSAP: randomValue(),
    //     description: randomValue(),
    //     stockCategory: randomValue(),
    //     specialStockNumber: randomValue(),
    //     countedQuantity: Number(randomValue()),
    //     scannedLocation: randomValue(),
    //     timeAndDateOfScanning: new Date(),
    //     SAPQuantity: Number(randomValue()),
    //     SAPAddress: randomValue(),
    //     customers: randomValue(),
    //     difference: Number(randomValue()),
    //     MAP: randomValue(),
    //     value: Number(randomValue()),
    //     action: randomValue(),
    //     status: true,
    //     corrections: true,
    //     result: randomValue(),
    //     comment: randomValue(),
    //     ccUser: randomValue(),
    //     mistake: true,
    //     mistakeUsername: randomValue(),
    //     round: Number(randomValue()),
    //   });
    //   return res.status(200).json({ data: response, message: "See you data" });
    // }
    if (req.method === "GET") {
      const data = await DataModel.find().populate("scannedBy");
      return res.status(200).json(data);
    }

    // const res = await Data.find();
  } catch (e) {
    return res
      .status(503)
      .json({ data: null, message: "Cannot resolve request" });
  }
}
