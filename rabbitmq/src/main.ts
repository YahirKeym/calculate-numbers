import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import enviroment from './config/enviroment';
async function bootstrap() {
	const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
		transport: Transport.RMQ,
		options: {
			urls: [enviroment.RABBITMQ_URL],
			queue: 'maths_queue',
		},
	});
	await app.listen();
}
bootstrap();
