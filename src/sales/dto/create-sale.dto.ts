import { ApiProperty } from '@nestjs/swagger';

export class CreateSaleDto {
  @ApiProperty()
  seriesReceipt: string;

  @ApiProperty()
  numberReceipt: string;

  @ApiProperty()
  tax: number;

  @ApiProperty()
  total: number;

  @ApiProperty()
  clientId: string;

  @ApiProperty()
  userId: string;

  @ApiProperty()
  receiptTypeId: number;

  @ApiProperty()
  statusId: number;
}
