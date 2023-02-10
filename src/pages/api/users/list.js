import dbConnect from "@/utils/dbConnect";
import User from "../../../models/user-model";
import userService from "../../../services/user-service";

export default async function handler(req, res) {
  try {
    dbConnect();
    const users = await userService.getAllUsers();
    if (!users)
      return res.status(401).json({ message: "Problem to get users" });
    return res.status(200).json(users);
  } catch (error) {
    return res
      .status(403)
      .json({ status: "unauthenticated", message: "invalid credentials" });
  }
}
