import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MONGO } from 'src/config.json';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { AuthTestModule } from './auth-test/auth-test.module';

interface MongoConfig {
	username: string;
	password: string;
	host: string;
	database: string;
}

function parseMongoConfig(config: MongoConfig) {
	return `mongodb+srv://${config.username}:${config.password}@${config.host}/${config.database}`;
}

@Module({
	imports: [
		MongooseModule.forRoot(parseMongoConfig(MONGO)),
		AuthTestModule,
		AuthModule,
		UserModule,
	],
})
export class AppModule {}
