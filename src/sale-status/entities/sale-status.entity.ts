import { ApiProperty } from '@nestjs/swagger';
import { SaleStatus } from '@prisma/client';

export class SaleStatusEntity implements SaleStatus {
  @ApiProperty()
  name: string;

  @ApiProperty()
  id: number;

  @ApiProperty()
  status: boolean;
}
