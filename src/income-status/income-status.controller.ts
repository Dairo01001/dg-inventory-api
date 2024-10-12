import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  ParseIntPipe,
} from '@nestjs/common';
import { IncomeStatusService } from './income-status.service';
import { CreateIncomeStatusDto } from './dto/create-income-status.dto';
import { UpdateIncomeStatusDto } from './dto/update-income-status.dto';
import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { IncomeStatusEntity } from './entities/income-status.entity';

@Controller('income-status')
@ApiTags('Income Status')
export class IncomeStatusController {
  constructor(private readonly incomeStatusService: IncomeStatusService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiCreatedResponse({ type: IncomeStatusEntity })
  create(@Body() createIncomeStatusDto: CreateIncomeStatusDto) {
    return this.incomeStatusService.create(createIncomeStatusDto);
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOkResponse({ type: IncomeStatusEntity, isArray: true })
  findAll() {
    return this.incomeStatusService.findAll();
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOkResponse({ type: IncomeStatusEntity })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.incomeStatusService.findOne(id);
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOkResponse({ type: IncomeStatusEntity })
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateIncomeStatusDto: UpdateIncomeStatusDto,
  ) {
    return this.incomeStatusService.update(id, updateIncomeStatusDto);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOkResponse({ type: IncomeStatusEntity })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.incomeStatusService.remove(id);
  }
}
