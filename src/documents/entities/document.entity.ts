import { ApiProperty } from '@nestjs/swagger';
import { Document } from '@prisma/client';

export class DocumentEntity implements Document {
  @ApiProperty()
  name: string;

  @ApiProperty()
  id: number;

  @ApiProperty()
  status: boolean;
}
