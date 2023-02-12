// import initMiddleware from "../../../lib/init-middleware";
// import validateMiddleware from "../../../lib/validate-middleware";
import { check, validationResult } from "express-validator";
// import palletService from "@/services/pallet-service";
import dbConnect from "@/utils/dbConnect";
import mainTableService from "@/services/mainTable-service";
import Item from "@/models/item-model";
import MapProduct from "@/models/map-product-model";
import Product from "@/models/product-model";

export default async (req, res) => {
  dbConnect();
  switch (req.method) {
    case "GET":
      try {
        const items = await Item.find({ submitted: false }).select("-_id -__v");

        const readyRowsForMainBD = await items.forEach(async (item) => {
          const mapProductDetails = await MapProduct.findOne({
            Material: item.materialCodeScanned,
          });
          const productDetails = await Product.findOne({
            Material: item.materialCodeScanned,
            StorageBin: item.stockLocation,
            storageUnit: item.storageUnit,
          });
          // console.log("REady ROws to send : ", {
          //   mapProductDetails,
          //   productDetails,
          // });
          const response = await mainTableService.add({
            storageUnit: item.storageUnit,
            materialCodeScanned: item.materialCodeScanned,
            materialCodeSAP: mapProductDetails.Material,
            description: mapProductDetails.Description,
            stockCategory: item.specialStock,
            specialStoreNumber: item.specialStoreNumber,
            countedQuantity: item.countedQuantity,
            scannedLocation: item.scannedLocation,
            timeAndDateOfScanning: item.createdAt,
            SAPQuantity: productDetails ? productDetails["Available Stock"] : 0,
            SAPAddress: productDetails
              ? productDetails["Storage Unit"]
              : item.storageUnit,
            customers: mapProductDetails["Prod Hierarchy Desc"],
            difference: -100,
            MAP: mapProductDetails.MAP,
            value: Number(item.countedQuantity) * mapProductDetails.MAP,
            scannedBy: item.scannedBy,
          });
          console.log("readyRowsForMainBD", response);
        });

        await Item.updateMany(
          { submitted: false },
          { $set: { submitted: true } }
        );
        res.status(200).json({ message: "test" });
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
