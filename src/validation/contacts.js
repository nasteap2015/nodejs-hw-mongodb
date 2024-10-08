import Joi from 'joi';

export const createContactSchema = Joi.object({
  name: Joi.string().min(3).max(20).required().messages({
    'string.base': 'Username should be a string',
    'string.min': 'Username should have at least {#limit} characters',
    'string.max': 'Username should have at most {#limit} characters',
    'any.required': 'Username is required',
  }),
  phoneNumber: Joi.string().min(3).max(20).required().messages({
    'string.base': 'Phone number should be a string',
    'string.min': 'Phone number should have at least {#limit} characters',
    'string.max': 'Phone number should have at most {#limit} characters',
    'any.required': 'Phone number is required',
  }),
  email: Joi.string().email().messages({
    'string.base': 'Email should be a string',
    'string.email': 'Email should be a valid email address',
  }),
  isFavourite: Joi.boolean().messages({
    'boolean.base': 'Is favourite should be a boolean',
  }),
  contactType: Joi.string()
    .valid('work', 'home', 'personal')
    .required()
    .messages({
      'string.base': 'Contact type should be a string',
      'string.valid':
        'Contact type should contain "work", "home" or "personal"',
      'any.required': 'Username is required',
    }),
  photo: Joi.string(),
});

export const updateContactSchema = Joi.object({
  name: Joi.string().min(3).max(20).messages({
    'string.base': 'Username should be a string',
    'string.min': 'Username should have at least {#limit} characters',
    'string.max': 'Username should have at most {#limit} characters',
  }),
  phoneNumber: Joi.string().min(3).max(20).messages({
    'string.base': 'Phone number should be a string',
    'string.min': 'Phone number should have at least {#limit} characters',
    'string.max': 'Phone number should have at most {#limit} characters',
  }),
  email: Joi.string().email().messages({
    'string.base': 'Email should be a string',
    'string.email': 'Email should be a valid email address',
  }),
  isFavourite: Joi.boolean().messages({
    'boolean.base': 'Is favourite should be a boolean',
  }),
  contactType: Joi.string().valid('work', 'home', 'personal').messages({
    'string.base': 'Contact type should be a string',
    'string.valid': 'Contact type should contain "work", "home" or "personal"',
    'any.required': 'Username is required',
  }),
  photo: Joi.string(),
});
