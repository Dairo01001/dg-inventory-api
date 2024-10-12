import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString, IsUUID } from 'class-validator';

export class AddCategoryDto {
  @IsString()
  @IsNotEmpty()
  @IsUUID()
  @ApiProperty()
  productId: string;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty()
  subcategoryId: number;
}
