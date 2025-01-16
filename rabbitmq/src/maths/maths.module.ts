import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import enviroment from '../config/enviroment';
import { MathsController } from './controllers/maths.controller';
import { MathsService } from './services/maths.service';

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
