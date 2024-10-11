import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsUUID, MinLength } from 'class-validator';

export class CreateAddressDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  number: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  @ApiProperty()
  city: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  street: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  complement: string;

  @IsString()
  @IsNotEmpty()
  @IsUUID()
  @ApiProperty()
  userId: string;
}
