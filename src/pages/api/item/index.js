import dbConnect from "@/utils/dbConnect";
import initMiddleware from "../../../lib/init-middleware";
import validateMiddleware from "../../../lib/validate-middleware";
import { check, validationResult } from "express-validator";
import itemService from "@/services/item-service";

const validateBody = initMiddleware(
  validateMiddleware(
    [
      check("itemId"),
      check("stockLocation").isString().isLength({ min: 1, max: 100 }),
      check("storageUnit").isString().isLength({ min: 1, max: 100 }),
      check("materialCodeScanned").isString().isLength({ min: 1, max: 100 }),
      check("specialStock").isBoolean(),
      check("specialStoreNumber").isString(),
      check("countedQuantity").isNumeric(),
      check("scannedBy").isMongoId(),
    ],
    validationResult
  )
);

export default async function handler(req, res) {
  dbConnect();
  switch (req.method) {
    case "GET":
      if (req.query.recent) {
        const items = await itemService.getRecent();
        res.status(200).json(items);
        break;
      }
      const items = await itemService.getAll();
      res.status(200).json(items);
      break;
    case "POST":
      await validateBody(req, res);

      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
      }
      const data = await itemService.add(req.body);
      res.status(200).json(data);
      break;
    case "PUT":
      await validateBody(req, res);

      const updateDataErrors = validationResult(req);
      if (!updateDataErrors.isEmpty()) {
        return res.status(422).json({ errors: updateDataErrors.array() });
      }
      const { _id, ...updateData } = req.body;
      if (!_id) return res.status(404).json({ message: "ID is required" });
      const updateItem = await itemService.update(_id, updateData);
      res.status(200).json(updateItem);
      break;
    case "DELETE":
      const id = req.body;
      if (!id)
        return res
          .status(404)
          .json({ message: "Couldn't find anything with given ID" });
      const response = await itemService.delete(id);
      res.status(200).json({ message: "Item Successfully deleted", response });
      break;
    default:
      res.status(404).json({ message: "Request HTTP Method Incorrect." });
      break;
  }
}
