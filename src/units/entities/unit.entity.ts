import { ApiProperty } from '@nestjs/swagger';
import { Unit } from '@prisma/client';

export class UnitEntity implements Unit {
  @ApiProperty()
  name: string;

  @ApiProperty()
  id: number;

  @ApiProperty()
  status: boolean;
}
