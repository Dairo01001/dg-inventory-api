import { ApiProperty } from '@nestjs/swagger';
import { SubcategoryOnProduct } from '@prisma/client';

export class SubcategoryOnProductEntity implements SubcategoryOnProduct {
  @ApiProperty()
  assignedAt: Date;

  @ApiProperty()
  productId: string;

  @ApiProperty()
  subcategoryId: number;
}
