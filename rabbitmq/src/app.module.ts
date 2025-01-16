import { Module } from '@nestjs/common';
import { MathsModule } from './maths/maths.module';
@Module({
	imports: [MathsModule],
	controllers: [],
	providers: [],
})
export class AppModule {}
