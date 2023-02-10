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
      check("specialStock").isBoolean(),
      check("specialStoreNumber").isString(),
      check("quantity").isNumeric(),
      check("scannedBy").isMongoId(),
    ],
    validationResult
  )
);

export default async function handler(req, res) {
  switch (req.method) {
    case "POST":
      await validateBody(req, res);

      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
      }

      console.log("Item Add tO DB <<< ", req.body);
      const data = await itemService.add(req.body);
      res.status(200).json({ status: "ok", data });
      break;
    case "GET":
      const items = await itemService.getAll();
      res.status(200).json(items);
    default:
      res.status(404).json({ message: "Request HTTP Method Incorrect." });
      break;
  }
}
