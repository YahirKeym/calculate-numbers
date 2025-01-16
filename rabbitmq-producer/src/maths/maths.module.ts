import { Module } from '@nestjs/common';
import { MathsController } from './controllers/maths.controller';
import { MathsService } from './services/maths.services';
import { ClientsModule, Transport } from '@nestjs/microservices';
import enviroment from '../config/config';

@Module({
	imports: [
		ClientsModule.register([
			{
				name: 'MATHS_QUEUE',
				transport: Transport.RMQ,
				options: {
					urls: [enviroment.RABBITMQ_URL],
					queue: 'maths_queue',
				},
			},
		]),
	],
	controllers: [MathsController],
	providers: [MathsService],
})
export class MathsModule {}
