import initMiddleware from "../../../lib/init-middleware";
import validateMiddleware from "../../../lib/validate-middleware";
import { check, validationResult } from "express-validator";
import productService from "@/services/product-service";
import dbConnect from "@/utils/dbConnect";

export const validateBody = initMiddleware(
  validateMiddleware(
    [
      check("Storage Unit").isString(),
      check("Material").isString(),
      check("Material Description").isString(),
      check("SLOC").isString(),
      check("Special Stock").isBoolean(),
      check("Special Stock Number").isString(),
      check("Type").isString(),
      check("Available Stock").isNumeric(),
      check("StorageBin").isString(),
      check("scannedBy").isMongoId(),
    ],
    validationResult
  )
);

export default async (req, res) => {
  dbConnect();
  switch (req.method) {
    case "POST":
      await validateBody(req, res);

      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
      }

      const data = await productService.add(req.body);
      res.status(200).json({ status: "ok", data });
      break;
    default:
      res.status(404).json({ message: "Request HTTP Method Incorrect." });
      break;
  }
};
