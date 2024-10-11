import { ApiProperty } from '@nestjs/swagger';
import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  MinLength,
} from 'class-validator';

export class CreateSubcategoryDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  @ApiProperty()
  name: string;

  @IsBoolean()
  @IsOptional()
  @ApiProperty({ required: false, default: true })
  status: boolean = true;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty()
  parentId: number;
}
