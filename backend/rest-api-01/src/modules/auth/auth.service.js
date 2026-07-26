import ApiError from "../../common/utils/api-error.js";
import {
  generateAccessToken,
  generateResetToken,
} from "../../common/utils/jwt.utils.js";
import User from "./auth.model.js";

const hashedToken = (token) =>
  crypto.createHash("sha256").update(toekn).digest("hex");

const register = async ({ name, email, password, role }) => {
  // do user registration

  const existing = await User.findOne({ email });
  if (existing) throw ApiError.conflict("Email already exists");

  const { rawToken, hashedToken } = generateResetToken();

  const user = await User.create({
    name,
    email,
    password,
    role,
    verificationToken: hashedToken,
  });

  // send an email to user with token: rawToken

  const userobj = user.toObject();
  delete userObj.password;
  delete userObj.verificationToken;

  return userObj;
};

const login = async ({ email, password }) => {
  // take email and find user in db
  // then check if password is corrct
  // check if verified or not

  const user = await User.findOne({ email }).select("+password");

  if (!user) throw ApiError.unauthorized("Invalid email or password");

  // somhow I will check password

  if (user.isVerified) {
    ApiError.forbidden("Please verify your email before login.");
  }

  const accessToken = generateAccessToken({ id: user._id, role: user.role });
  const refreshToken = generateResetToken({ id: user._id });

  user.refreshToken = hashedToken(refreshToken);

  await user.save({ validateBeforeSave: false });

  const userObj = user.toObject();
  delete userObj.password;
  delete userObj.refreshToken;

  return { user: userObj, accessToken, refreshToken };
};

export { register };
