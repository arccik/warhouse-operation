import UserEntry from "../../models/userEntry-model";
import dbConnect from "@/lib/dbConnect";

export default async function handler(req, res) {
  try {
    await dbConnect();
    const result = await UserEntry.find({});
    return res.status(200).json({ data: result, message: "Status ok" });
  } catch (error) {
    console.error("Error on server", error);
    return res
      .status(503)
      .json({ message: "Error on server check console", error });
  }
}
