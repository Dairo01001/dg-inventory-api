import { ApiProperty } from '@nestjs/swagger';
import { Person } from '@prisma/client';

export class PersonEntity implements Person {
  @ApiProperty()
  name: string;

  @ApiProperty()
  id: string;

  @ApiProperty()
  phone: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  numberDocument: string;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;

  @ApiProperty()
  typeId: number;

  @ApiProperty()
  documentId: number;

  @ApiProperty()
  addressId: number;
}
