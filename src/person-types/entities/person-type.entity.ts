import { ApiProperty } from '@nestjs/swagger';
import { PersonType } from '@prisma/client';

export class PersonTypeEntity implements PersonType {
  @ApiProperty()
  name: string;

  @ApiProperty()
  id: number;

  @ApiProperty()
  status: boolean;
}
