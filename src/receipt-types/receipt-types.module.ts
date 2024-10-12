import { Module } from '@nestjs/common';
import { ReceiptTypesService } from './receipt-types.service';
import { ReceiptTypesController } from './receipt-types.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [ReceiptTypesController],
  providers: [ReceiptTypesService],
  imports: [PrismaModule],
})
export class ReceiptTypesModule {}
