import dbConnect from "@/utils/dbConnect";
import userService from "../../../services/user-service";

export default async function handler(req, res) {
  try {
    dbConnect();
    const data = req.body;
    const user = await userService.registration(data);
    console.log("user registre : ", user);
    if (user.error)
      return res.status(202).json({ status: "bad", message: user.error });
    return res
      .status(200)
      .json({ status: "ok", message: "User Succesfully Added" });
  } catch (error) {
    return res
      .status(403)
      .json({ status: "unauthenticated", message: "invalid credentials" });
  }
}
