import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsNumberString,
  IsString,
  MinLength,
} from 'class-validator';

export class CreatePersonDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  @ApiProperty()
  name: string;

  @IsString()
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
  @ApiProperty()
  numberDocument: string;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty()
  typeId: number;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty()
  documentId: number;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty()
  addressId: number;
}
