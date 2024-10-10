import { Module } from '@nestjs/common';
import { ProductStatusService } from './product-status.service';
import { ProductStatusController } from './product-status.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [ProductStatusController],
  providers: [ProductStatusService],
  imports: [PrismaModule],
})
export class ProductStatusModule {}
