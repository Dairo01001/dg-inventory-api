import { ApiProperty } from '@nestjs/swagger';

export class CreateSaleStatusDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  status: boolean;
}
