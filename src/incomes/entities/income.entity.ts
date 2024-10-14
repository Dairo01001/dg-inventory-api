import { ApiProperty } from '@nestjs/swagger';
import { Income } from '@prisma/client';
import { Decimal } from '@prisma/client/runtime/library';

export class IncomeEntity implements Income {
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
  distributorId: string;

  @ApiProperty()
  userId: string;

  @ApiProperty()
  receiptTypeId: number;

  @ApiProperty()
  statusId: number;
}
