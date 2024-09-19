import { Module } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { databaseConfig } from '../config/database.config';

@Module({
	imports: [
		TypeOrmModule.forRootAsync({
			inject: [databaseConfig.KEY],
			useFactory: (dbConfig: ConfigType<typeof databaseConfig>) => ({
				type: 'postgres',
				host: dbConfig.host,
				port: dbConfig.port,
				database: dbConfig.name,
				username: dbConfig.user,
				password: dbConfig.password,
				synchronize: false,
			}),
		}),
	],
})
export class DatabaseModule {}
