import { Body, Controller, Post } from '@nestjs/common';
import { MathsService } from '../services/maths.services';

@Controller('maths')
export class MathsController {
	constructor(private readonly mathsService: MathsService) {}

	@Post()
	handleCalculate(@Body() body: { number: number }) {
		return this.mathsService.handleCalculate(body);
	}
}
