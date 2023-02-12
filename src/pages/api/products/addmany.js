import { body, check, validationResult } from "express-validator";
import productService from "@/services/product-service";
import dbConnect from "@/utils/dbConnect";
import initMiddleware from "@/lib/init-middleware";
import validateMiddleware from "@/lib/validate-middleware";

// const validateBody = initMiddleware(
//   validateMiddleware(
//     [
//       body("*.StorageUnit").isString(),
//       body("*.Material").isString(),
//       body("*.Material Description").isString(),
//       body("*.SLOC").isString(),

//       body("*.Type").isString(),
//       body("*.Available Stock").isNumeric(),
//       body("*.StorageBin").isString(),
//     ],
//     validationResult
//   )
// );

export default async (req, res) => {
  dbConnect();
  switch (req.method) {
    case "POST":
      // await validateBody(req, res);

      // const errors = validationResult(req);
      // if (!errors.isEmpty()) {
      //   return res.status(422).json({ errors: errors.array() });
      // }
      const preData = req.body;
      console.log("preData", preData);
      const response = await productService.addMany(preData);
      res.status(200).json({ status: "ok", response });
      break;
    default:
      res.status(404).json({ message: "Request HTTP Method Incorrect." });
      break;
  }
};
