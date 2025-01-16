import { Injectable, Inject, BadRequestException } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class MathsService {
	constructor(@Inject('MATHS_QUEUE') private readonly client: ClientProxy) {}

	handleCalculate(body: { number: number }) {
		if (body.number < 0 || isNaN(body.number)) throw new BadRequestException('Invalid number');
		return this.client.send('calculate', { number: body.number });
	}
}
