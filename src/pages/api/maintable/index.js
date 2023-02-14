// import initMiddleware from "../../../lib/init-middleware";
// import validateMiddleware from "../../../lib/validate-middleware";
import { check, validationResult } from "express-validator";
// import palletService from "@/services/pallet-service";
import dbConnect from "@/utils/dbConnect";
import mainTableService from "@/services/mainTable-service";
import Item from "@/models/item-model";
import MapProduct from "@/models/map-product-model";
import Product from "@/models/product-model";
import mainTableDTO from "@/lib/mainTableDTO";

export default async (req, res) => {
  dbConnect();
  switch (req.method) {
    case "GET":
      try {
        const items = await Item.find({ submitted: false }).select("-_id -__v");

        const data = await items.forEach(async (item) => {
          const mapProductDetails = await MapProduct.findOne({
            Material: item.materialCodeScanned,
          });
          const productDetails = await Product.findOne({
            Material: item.materialCodeScanned,
            StorageBin: item.stockLocation,
            storageUnit: item.storageUnit,
          });

           await mainTableService.add(
             mainTableDTO(item, productDetails, mapProductDetails)
           );
        });

        await Item.updateMany(
          { submitted: false },
          { $set: { submitted: true } }
        );
        res.status(200).json(data);
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
