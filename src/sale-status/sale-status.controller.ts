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
import { SaleStatusService } from './sale-status.service';
import { CreateSaleStatusDto } from './dto/create-sale-status.dto';
import { UpdateSaleStatusDto } from './dto/update-sale-status.dto';
import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { SaleStatusEntity } from './entities/sale-status.entity';

@Controller('sale-status')
@ApiTags('Sale Status')
export class SaleStatusController {
  constructor(private readonly saleStatusService: SaleStatusService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiCreatedResponse({ type: SaleStatusEntity })
  create(@Body() createSaleStatusDto: CreateSaleStatusDto) {
    return this.saleStatusService.create(createSaleStatusDto);
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOkResponse({ type: SaleStatusEntity, isArray: true })
  findAll() {
    return this.saleStatusService.findAll();
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOkResponse({ type: SaleStatusEntity })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.saleStatusService.findOne(id);
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOkResponse({ type: SaleStatusEntity })
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateSaleStatusDto: UpdateSaleStatusDto,
  ) {
    return this.saleStatusService.update(id, updateSaleStatusDto);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOkResponse({ type: SaleStatusEntity })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.saleStatusService.remove(id);
  }
}
