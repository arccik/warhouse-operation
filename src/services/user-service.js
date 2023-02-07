import bcrypt from "bcrypt";
import crypto from "crypto";

import User from "../models/user-model";
import tokenService from "./token-service";

class UserService {
  async registration(email, password) {
    const condidate = await User.findOne({ email });
    if (condidate) return { error: `User ${email} already registred` };

    const hashPassword = await bcrypt.hash(password, 3);
    const activationLink = crypto.randomUUID();
    const user = await User.create({
      email,
      password: hashPassword,
      activationLink,
    });

    const tokens = tokenService.generateToken({ id: user._id, email });
    await tokenService.saveToken(user.id, tokens.refreshToken);
    return { ...tokens, user: { email, id: user._id } };
  }
  async login(email, password) {
    const users = await User.find();
    console.log("Trying to login ...... >>>>", users);
    const user = await User.findOne({ email });

    if (!user) {
      return { error: "User with given email not found" };
    }
    const isPassEquals = await bcrypt.compare(password, user.password);
    if (!isPassEquals) {
      return { error: "Invalid password" };
    }
    const tokens = tokenService.generateToken({ id: user._id, email });

    await tokenService.saveToken(user.id, tokens.refreshToken);
    return { ...tokens, status: "ok", data: { id: user._id, email } };
  }

  async logout(refreshToken) {
    const token = await tokenService.removeToken(refreshToken);
    return token;
  }
}
module.exports = new UserService();
