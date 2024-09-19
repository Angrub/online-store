import { Inject, Injectable } from '@nestjs/common';
import { databaseConfig } from './core/config/database.config';
import { ConfigType } from '@nestjs/config';

@Injectable()
export class AppService {
	constructor(
		@Inject(databaseConfig.KEY)
		private dbConfig: ConfigType<typeof databaseConfig>,
	) {}
	getHello(): string {
		return `env:
			${this.dbConfig.host}
			${this.dbConfig.port}
			${this.dbConfig.name}
			${this.dbConfig.password}
		`;
	}
}
