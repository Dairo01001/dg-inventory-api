import { ApiProperty } from '@nestjs/swagger';
import { Subcategory } from '@prisma/client';

export class SubcategoryEntity implements Subcategory {
  @ApiProperty()
  name: string;

  @ApiProperty()
  id: number;

  @ApiProperty()
  status: boolean;

  @ApiProperty()
  parentId: number;
}
