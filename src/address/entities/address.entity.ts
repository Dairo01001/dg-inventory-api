import { ApiProperty } from '@nestjs/swagger';
import { Address } from '@prisma/client';

export class AddressEntity implements Address {
  @ApiProperty()
  number: string;

  @ApiProperty()
  id: number;

  @ApiProperty()
  city: string;

  @ApiProperty()
  street: string;

  @ApiProperty()
  complement: string;
}
