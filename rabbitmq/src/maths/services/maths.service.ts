import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class MathsService {
	constructor(@Inject('MATHS_QUEUE') private readonly client: ClientProxy) {}

	public handleCalculate(body: { number: number }) {
		const response = this.mapResponse(body.number);
		return response;
	}

	private isPair(number: number) {
		return number % 2 === 0;
	}

	private isPrime(number: number) {
		for (let i = 2; i < number; i++) {
			if (number % i === 0) return false;
		}
		return number > 1;
	}

	private factorial(number: number) {
		let result = 1;
		for (let i = 1; i <= number; i++) {
			result *= i;
		}
		return result;
	}

	private sumOfIntegers(number: number) {
		let sum = 0;
		for (let i = 1; i <= number; i++) {
			sum += i;
		}
		return sum;
	}

	private factors(number: number) {
		const factors = [];
		for (let i = 1; i <= number; i++) {
			if (number % i === 0) factors.push(i);
		}
		return factors;
	}

	private findFibonacci(number: number) {
		const fibonacci = [0, 1];
		for (let i = 2; i <= number; i++) {
			fibonacci.push(fibonacci[i - 1] + fibonacci[i - 2]);
		}
		return fibonacci[number - 1];
	}

	private mapResponse(number: number) {
		return {
			isPair: this.isPair(number),
			isPrime: this.isPrime(number),
			factorial: this.factorial(number),
			sumN: this.sumOfIntegers(number),
			factors: this.factors(number),
			fibonacci: this.findFibonacci(number),
		};
	}
}
