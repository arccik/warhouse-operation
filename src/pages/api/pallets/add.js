import initMiddleware from "../../../lib/init-middleware";
import validateMiddleware from "../../../lib/validate-middleware";
import { check, validationResult } from "express-validator";
import palletService from "@/services/pallet-service";
import dbConnect from "@/utils/dbConnect";

const validateBody = initMiddleware(
  validateMiddleware(
    [
      check("productId").isLength({ min: 1, max: 100 }),
      check("description").isLength({ min: 1, max: 250 }),
      check("name").not().isEmpty().isString(),
      check("storageLocation").not().isEmpty(),
      check("quantity").isNumeric(),
      check("price"),
      // check("SAPcode").isLength({ min: 1, max: 100 }),
      // check("location").isLength({ min: 1, max: 100 }),
      // check("type").isLength({ min: 1, max: 100 }),
      // check("size.width").isNumeric(),
      // check("size.heigth").isNumeric(),
      // check("size.length").isNumeric(),
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
      const data = await palletService.addPallet(req.body);
      res.status(200).json(data);
      break;
    default:
      res.status(404).json({ message: "Request HTTP Method Incorrect." });
      break;
  }
};
