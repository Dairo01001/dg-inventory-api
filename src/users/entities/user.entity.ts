import { ApiProperty } from '@nestjs/swagger';
import { User } from '@prisma/client';

export class UserEntity implements User {
  @ApiProperty()
  name: string;

  @ApiProperty()
  id: string;

  @ApiProperty()
  phone: string;

  @ApiProperty()
  email: string;

  password: string;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;

  @ApiProperty()
  roleId: number;

  @ApiProperty()
  addressId: number;

  @ApiProperty()
  documentId: number;
}
