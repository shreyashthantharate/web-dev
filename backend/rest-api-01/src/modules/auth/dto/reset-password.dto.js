import Joi, { extend } from "joi";
import BaseDto from "../../../common/dto/base.dto.js";

class ResetPasswordDto extends BaseDto {
  static schem = Joi.string()
    .min(8)
    .message(
      "Password must contain at least one uppercase letter and one digit",
    )
    .required();
}

export default ResetPasswordDto;
