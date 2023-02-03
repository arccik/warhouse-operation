import dbConnect from "@/utils/dbConnect";
import User from "../../../models/user-model";
import userService from "../../../services/user-service";

export default async function handler(req, res) {
  try {
    await dbConnect();
    const { email, password } = req.body;
    const user = await userService.login(email, password);
    console.log("user registre : ", user);
    if (user.error) return res.status(401).json({ message: user.error });
    return res
      .status(200)
      .json({ status: "ok", message: "User Succesfully login" });
  } catch (error) {
    return res
      .status(403)
      .json({ status: "unauthenticated", message: "invalid credentials" });
  }
}
