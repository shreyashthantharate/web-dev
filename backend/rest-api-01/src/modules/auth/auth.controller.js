import * as authService from "./auth.service.js";
import ApiResponse from "../../common/utils/api-response.js";
import { response } from "express";
import ApiError from "../../common/utils/api-error.js";

const register = async (req, res) => {
  const user = await authService.register(req.body);
  ApiResponse.created(res, "Registration success", user);
};

const login = async (req, res) => {
  const { user, accessToken, refreshToken } = await authService.login(req.body);

  res.cookie("refreshToken", authService.refreshToken, {
    httpOnly: true,
    secure: true,
    maxAge: 7 * 24 * 60 * 60 * 1000,
  });
  res.cookie("accessToken", authService.accessToken, {
    httpOnly: true,
    secure: true,
    maxAge: 1 * 24 * 60 * 60 * 1000,
  });

  ApiResponse.ok(res, "Login successful", { user, accessToken, refreshToken });
};

const logout = async (req, res) => {
  await authService.logout(req.user.id);
  res.clearCookie("refreshToken");
  ApiResponse.ok(res, "Logout Success");
};

const getMe = async (req, res) => {
  const user = await authService.getMe(req.user.id);
  ApiResponse.ok(res, "User Profile", user);
};

const verifyEmail = async (req, res) => {
  let token = req.params.token;
  const user = await authService.verifyEmail(token);

  ApiResponse.ok(res, "Verification Successfull", user);
};

export { register, login, logout, getMe, verifyEmail };
