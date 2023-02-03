import tokenModel from "../models/token-model";
import jwt from "jsonwebtoken";

class TokenService {
  generateToken(payload) {
    const accessToken = jwt.sign(payload, process.env.JWT_ACCESS_SECRET, {
      expiresIn: "30m",
    });
    const refreshToken = jwt.sign(payload, process.env.JWT_REFRESH_SECRET, {
      expiresIn: "365d",
    });
    return { accessToken, refreshToken };
  }

  validateAccessToken(token) {
    try {
      const userData = jwt.verify(token, process.env.JWT_ACCESS_SECRET);
      return userData;
    } catch (error) {
      return null;
    }
  }
  validateRefreshToken(token) {
    const userData = jwt.verify(token, process.env.JWT_REFRESH_SECRET);
    return userData;
  }
  catch(error) {
    return null;
  }

  async saveToken(userId, refreshToken) {
    const tokenData = await tokenModel.findOne({ user: userId });
    if (tokenData) {
      tokenData.refreshToken = refreshToken;
      return tokenData.save();
    }
    const token = await tokenModel.create({ user: userId, refreshToken });
    return token;
  }
  async removeToken(refreshToken) {
    const tokenData = tokenModel.deleteOne({ refreshToken });
    return tokenData;
  }
  async findToken(refreshToken) {
    const tokenData = tokenModel.findOne({ refreshToken });
    return tokenData;
  }
}

export default new TokenService();
