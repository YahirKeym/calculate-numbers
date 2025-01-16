import { Module } from '@nestjs/common';
import { MathsModule } from './maths/maths.module';
import { ConfigModule } from '@nestjs/config';
@Module({
	imports: [
		ConfigModule.forRoot({
			isGlobal: true,
		}),
		MathsModule,
	],
	controllers: [],
	providers: [],
})
export class AppModule {}
