import * as Joi from 'joi';

const envSchema = Joi.object({
	DB_HOST: Joi.string().required(),
	DB_PORT: Joi.number().positive().required(),
	DB_NAME: Joi.string().required(),
	DB_USER: Joi.string().required(),
	DB_PASSWORD: Joi.string().required(),
});

export { envSchema };
