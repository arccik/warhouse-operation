import initMiddleware from "../../../lib/init-middleware";
import validateMiddleware from "../../../lib/validate-middleware";
import { check, validationResult } from "express-validator";
import mapProductService from "@/services/map-products-service";
import dbConnect from "@/utils/dbConnect";

// const validateBody = initMiddleware(
//   validateMiddleware(
//     [
//       check("productId").isString().not().isEmpty(),
//       check("storageUnit").isString().not().isEmpty(),
//       check("material").isString().not().isEmpty(),
//       check("materialDescription").isString().not().isEmpty(),
//       check("SLOC").isString().not().isEmpty(),
//       check("specialStock").isBoolean().not().isEmpty(),
//       check("specialStockNumber").isString().not().isEmpty(),
//       check("type").isString().not().isEmpty(),
//       check("availableStock").isNumeric().not().isEmpty(),
//       check("storageBin").isString().not().isEmpty(),
//     ],
//     validationResult
//   )
// );

export default async (req, res) => {
  dbConnect();
  switch (req.method) {
    case "POST":
      //   await validateBody(req, res);

      //   const errors = validationResult(req);
      //   if (!errors.isEmpty()) {
      //     return res.status(422).json({ errors: errors.array() });
      //   }
      if (req.query.many) {
        const data = await mapProductService.addMany(req.body);
        res.status(200).json({ status: "ok", data });
        break;
      } else {
        const data = await mapProductService.add(req.body);
        res.status(200).json({ status: "ok", data });
        break;
      }

    default:
      res.status(404).json({ message: "Request HTTP Method Incorrect." });
      break;
  }
};
