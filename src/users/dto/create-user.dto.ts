import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsNumberString,
  IsOptional,
  IsString,
  MinLength,
} from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(5)
  @ApiProperty()
  name: string;

  @IsNumberString()
  @IsNotEmpty()
  @MinLength(10)
  @ApiProperty()
  phone: string;

  @IsString()
  @IsNotEmpty()
  @IsEmail()
  @ApiProperty()
  email: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(8)
  @ApiProperty()
  password: string;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty()
  roleId: number;

  @IsNumber()
  @IsOptional()
  @ApiProperty({ required: false })
  addressId: number;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty()
  documentId: number;
}
