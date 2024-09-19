import { registerAs } from '@nestjs/config';

const databaseConfig = registerAs('database', () => ({
	// database
	host: process.env.DB_HOST,
	port: Number(process.env.DB_PORT),
	name: process.env.DB_NAME,
	user: process.env.DB_USER,
	password: process.env.DB_PASSWORD,

	// others
}));

export { databaseConfig };
