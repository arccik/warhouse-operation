import productService from "@/services/product-service";
import dbConnect from "@/utils/dbConnect";
import { validateBody } from "./add";
import { validationResult } from "express-validator";

export default async function handler(req, res) {
  try {
    dbConnect();
    if (req.method === "PUT") {
      await validateBody(req, res);

      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
      }
      const id = req.query.id;
      if (id) {
        const dataToDB = req.body;
        delete dataToDB._id;
        delete dataToDB.createdAt;
        delete dataToDB.updatedAt;
        delete dataToDB.__v;
        const data = await productService.update(id, dataToDB);
        return res.status(200).json({ status: "ok", data });
      }
      return res.status(404).json({ message: "NOT VALID ID" });
    }
    return res
      .status(405)
      .json({ message: "Couldnt Update product, wrong method" });
  } catch (error) {
    return res.status(503).json({ message: "Something went wrong", error });
  }
}
