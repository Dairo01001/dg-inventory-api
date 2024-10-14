import { Module } from '@nestjs/common';
import { SaleStatusService } from './sale-status.service';
import { SaleStatusController } from './sale-status.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [SaleStatusController],
  providers: [SaleStatusService],
  imports: [PrismaModule],
})
export class SaleStatusModule {}
