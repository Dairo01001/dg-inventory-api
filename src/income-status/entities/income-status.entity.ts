import { ApiProperty } from '@nestjs/swagger';
import { IncomeStatus } from '@prisma/client';

export class IncomeStatusEntity implements IncomeStatus {
  @ApiProperty()
  name: string;

  @ApiProperty()
  id: number;

  @ApiProperty()
  status: boolean;
}
