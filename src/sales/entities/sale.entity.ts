import { ApiProperty } from '@nestjs/swagger';
import { Sale } from '@prisma/client';
import { Decimal } from '@prisma/client/runtime/library';

export class SaleEntity implements Sale {
  @ApiProperty()
  id: number;

  @ApiProperty()
  seriesReceipt: string;

  @ApiProperty()
  numberReceipt: string;

  @ApiProperty()
  tax: Decimal;

  @ApiProperty()
  total: Decimal;

  @ApiProperty()
  date: Date;

  @ApiProperty()
  clientId: string;

  @ApiProperty()
  userId: string;

  @ApiProperty()
  receiptTypeId: number;

  @ApiProperty()
  statusId: number;
}
