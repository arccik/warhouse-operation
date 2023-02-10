import bcrypt from "bcrypt";
import crypto from "crypto";

import User from "../models/user-model";
import tokenService from "./token-service";

class UserService {
  async registration(data) {
    const { firstName, lastName, role, department, email, password } = data;
    console.log("user service registration", lastName, firstName, role, {
      data,
    });
    const condidate = await User.findOne({ email });
    if (condidate) return { error: `User ${email} already registred` };

    const hashPassword = await bcrypt.hash(password, 3);
    const activationLink = crypto.randomUUID();
    const user = await User.create({
      email,
      firstName,
      lastName,
      password: hashPassword,
      activationLink,
      role,
      department,
    });

    const tokens = tokenService.generateToken({ id: user._id, email, role });
    await tokenService.saveToken(user.id, tokens.refreshToken);
    return { ...tokens, user: { email, id: user._id, role } };
  }
  async login(email, password) {
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
  async getAllUsers() {
    const users = await User.find();
    return users;
  }
  async addUser(data) {
    const condidate = await User.find({ email: data.email });
    if (condidate) return { message: "User with given email already exist!" };
    const user = await User.create({ data });
    return user;
  }
  async updateUser(id, data) {
    const condidate = await User.findByIdAndUpdate(id, data);
    return condidate;
  }
}
module.exports = new UserService();
