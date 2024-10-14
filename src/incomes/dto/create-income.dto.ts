import { ApiProperty } from '@nestjs/swagger';
import {
  IsDateString,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
  IsUUID,
} from 'class-validator';

export class CreateIncomeDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  seriesReceipt: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  numberReceipt: string;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty()
  tax: number;

  @IsNumber()
  @IsNotEmpty()
  @IsPositive()
  @ApiProperty()
  total: number;

  @IsDateString()
  @IsOptional()
  @ApiProperty({ required: false })
  date: Date;

  @IsString()
  @IsNotEmpty()
  @IsUUID()
  @ApiProperty()
  distributorId: string;

  @IsString()
  @IsNotEmpty()
  @IsUUID()
  @ApiProperty()
  userId: string;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty()
  receiptTypeId: number;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty()
  statusId: number;
}
