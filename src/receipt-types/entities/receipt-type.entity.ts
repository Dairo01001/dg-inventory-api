import { ApiProperty } from '@nestjs/swagger';
import { ReceiptType } from '@prisma/client';

export class ReceiptTypeEntity implements ReceiptType {
  @ApiProperty()
  name: string;

  @ApiProperty()
  id: number;

  @ApiProperty()
  status: boolean;
}
