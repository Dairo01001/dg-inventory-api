import { Module } from '@nestjs/common';
import { IncomeStatusService } from './income-status.service';
import { IncomeStatusController } from './income-status.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [IncomeStatusController],
  providers: [IncomeStatusService],
  imports: [PrismaModule],
})
export class IncomeStatusModule {}
