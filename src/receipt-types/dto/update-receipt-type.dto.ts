import { PartialType } from '@nestjs/swagger';
import { CreateReceiptTypeDto } from './create-receipt-type.dto';

export class UpdateReceiptTypeDto extends PartialType(CreateReceiptTypeDto) {}
