import { Controller } from '@nestjs/common';
import { MathsService } from '../services/maths.service';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Controller('maths')
export class MathsController {
	constructor(private readonly mathsService: MathsService) {}

	@MessagePattern('calculate')
	calculate(@Payload() body: { number: number }) {
		return this.mathsService.handleCalculate(body);
	}
}
