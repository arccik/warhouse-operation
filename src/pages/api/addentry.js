import UserEntry from "../../models/userEntry-model";
import dbConnect from "@/utils/dbConnect";

export default async function handler(req, res) {
  try {
    dbConnect();
    const body = req.body;
    if (
      body.storageUnit &&
      body.materialCode &&
      body.quantity &&
      body.storageLocation
    ) {
      const result = await UserEntry.create(req.body);
      return res
        .status(200)
        .json({ message: "User Entry successfully added", result });
    } else {
      return res.status(503).json({ message: "Please provide all valid data" });
    }
  } catch (error) {
    console.error("Error on server", error);
    return res
      .status(503)
      .json({ message: "Error on server check console", error });
  }
}
