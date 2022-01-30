import Joi from "joi";

export const carValidator = Joi.object({
  model: Joi.string()
    .regex(new RegExp("^[[a-zA-ZА-яёЁіІїЇ]{1,20}$"))
    .required()
    .messages({
      "string.pattern.base": "Required only letters",
      "string.empty": "You must write down some letter",
    }),
  price: Joi.number().min(1).max(1000000).messages({
    "number.base": "You can put price from 1 till 1 million!",
    "number.min": "You can write number equal or greater then 1",
    "number.max": "You can write number equal or lesser then 1 million'",
  }),
  year: Joi.number().min(1900).max(1000000).messages({
    "number.base": "You can put year from 1900 till now!",
    "number.min": "The year must be equal or greater than 1990!",
    "number.max": "The year must be lesser than now",
  }),
});
