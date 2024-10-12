import { PartialType } from '@nestjs/swagger';
import { CreatePersonTypeDto } from './create-person-type.dto';

export class UpdatePersonTypeDto extends PartialType(CreatePersonTypeDto) {}
