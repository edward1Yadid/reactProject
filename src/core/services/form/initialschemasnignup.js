import Joi from 'joi';

const initialschemasnignup = {
    first: Joi.string().min(2).max(250).required(),
    last: Joi.string().min(2).max(250).required(),
    middle: Joi.string().min(2).max(250).allow(''),
    email: Joi.string()
    .ruleset.pattern(/^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,5})$/)
    .rule({message: "Please enter a valid email"})
    .required(),
    password: Joi.string()
    .ruleset.pattern(/((?=.*\d{1})(?=.*[A-Z]{1})(?=.*[a-z]{1})(?=.*[!@#$%^&*-]{1}).{7,20})/)
    .rule({message: "password: 7<=<20 chars, >=1 uppercase, >=1 lowercase, >=1 number, >=1 from !@#$%^&*-"})
    .required(),
    phone: Joi.string()
        .ruleset
        .pattern(/0[0-9]{1,2}-?\s?[0-9]{3}\s?[0-9]{4}/)
        .rule({
            message: "Please enter a valid phone number"
        })
        .required(),
    url: Joi.string()
        .ruleset.regex(
            /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/
        )
        .rule({
            message: "user image must be a valid url"
        })
        .allow(""),
    alt: Joi.string().min(2).max(256).allow(""),
    state: Joi.string().allow(""),
    country: Joi.string().min(2).max(256).required(),
    city: Joi.string().min(2).max(256).required(),
    street: Joi.string().min(2).max(256).required(),
    houseNumber: Joi.number().required(),
    zip: Joi.number(),
    isBusiness: Joi.boolean().allow(),
    _id: Joi.string().allow(""),

}

export default initialschemasnignup;