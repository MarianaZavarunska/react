import Joi from "joi";

export const carValidator = Joi.object({
  model: Joi.string()
    .regex(new RegExp("^[[a-zA-ZА-яёЁіІїЇ]{1,20}$"))
    .required()
    .messages({
      "string.pattern.base": "Required only letters, min 1 and max 20",
      "string.empty": "You must write down a letter!",
    }),
  year: Joi.number()
    .min(1900)
    .max(new Date().getFullYear())
    .required()
    .messages({
      "number.base": "You can put year from 1900 till now!",
      "number.min": "The year must be equal or greater than 1990!",
      "number.max": "The year must be lesser than now!",
    }),
  price: Joi.number().min(0).max(1000000).messages({
    "number.base": "You can put price from 1 till 1 million!",
    "number.min": "The price must be equal or greater than 1!",
    "number.max": "The price must be equal or lesser than 1 million!",
  }),
});
