// import initMiddleware from "../../../lib/init-middleware";
// import validateMiddleware from "../../../lib/validate-middleware";
import { check, validationResult } from "express-validator";
import dbConnect from "@/utils/dbConnect";
import mainTableService from "@/services/mainTable-service";


export default async (req, res) => {
  dbConnect();
  try {
    switch (req.method) {
      case "DELETE":
        const { id } = req.query;
        if (!id) {
          return res.status(404).json({ message: "ID Must be provided" });
        }
        const reponse = await mainTableService.delete(id);
        res.status(200).json(reponse);
        break;

      default:
        res.status(404).json({ message: "Request HTTP Method Incorrect." });
        break;
    }
  } catch (error) {
    console.log("Error on main Table", error);
    return res
      .status(404)
      .json({ message: "Something went wrong on main table" });
  }
};
