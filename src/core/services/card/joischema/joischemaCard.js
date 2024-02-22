import Joi from "joi";

const regexPatterns = {
  phoneNumber:
    /^(?:(?:\+|00)([1-9]\d{0,2}))?[-. ]?(\(?\d{1,4}\)?[-. ]?)?(\d{1,})[-. ]?(\d{1,})[-. ]?(\d{1,})$/,
  emailAddress: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
  url: /^(https?|ftp):\/\/[^\s\/$.?#].[^\s]*$/, // Use the same pattern for both url and imageUrl
};

const errorMessages = {
  phone: "Phone must be a standard Israeli phone number",
  email: "Email must be a standard format", // More informative message
  web: "Website URL must be a valid format",
  imageURL: "Image URL must be a valid format",
};

export const schemaCard = {
  title: Joi.string().min(2).max(256).required(),
  subtitle: Joi.string().min(2).max(256).required(),
  description: Joi.string().min(2).max(1024).required(),
  phone: Joi.string()
    .length(9)
    .pattern(regexPatterns.phoneNumber)
    .rule({ message: errorMessages.phone })
    .required(),
  email: Joi.string()
    .pattern(regexPatterns.emailAddress)
    .rule({ message: errorMessages.email })
    .required(),
    webUrl: Joi.string()
    .uri()
    .pattern(regexPatterns.url)
    .rule({ message: errorMessages.web })
    .required(),
  imageUrl: Joi.string()
    .uri()
    .pattern(regexPatterns.url)
    .rule({ message: errorMessages.imageURL })
    .required(),
  imageAlt: Joi.string().min(2).max(250).allow(""),
  state: Joi.string().allow(""), 
  country: Joi.string().min(2).max(250).required(),
  city: Joi.string().min(2).max(250).required(),
  street: Joi.string().min(2).max(250).required(),
  houseNumber: Joi.number().required(),
  zip: Joi.number(), 
  _id: Joi.string().allow(""),
};
