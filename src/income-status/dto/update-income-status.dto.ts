import { PartialType } from '@nestjs/swagger';
import { CreateIncomeStatusDto } from './create-income-status.dto';

export class UpdateIncomeStatusDto extends PartialType(CreateIncomeStatusDto) {}
