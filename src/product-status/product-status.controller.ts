import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';
import { ProductStatusService } from './product-status.service';
import { CreateProductStatusDto } from './dto/create-product-status.dto';
import { UpdateProductStatusDto } from './dto/update-product-status.dto';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { ProductStatusEntity } from './entities/product-status.entity';

@Controller('product-status')
@ApiTags('Product Status')
export class ProductStatusController {
  constructor(private readonly productStatusService: ProductStatusService) {}

  @Post()
  @ApiCreatedResponse({ type: ProductStatusEntity })
  create(@Body() createProductStatusDto: CreateProductStatusDto) {
    return this.productStatusService.create(createProductStatusDto);
  }

  @Get()
  @ApiOkResponse({ type: ProductStatusEntity, isArray: true })
  findAll() {
    return this.productStatusService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: ProductStatusEntity })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.productStatusService.findOne(id);
  }

  @Patch(':id')
  @ApiOkResponse({ type: ProductStatusEntity })
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateProductStatusDto: UpdateProductStatusDto,
  ) {
    return this.productStatusService.update(id, updateProductStatusDto);
  }

  @Delete(':id')
  @ApiOkResponse({ type: ProductStatusEntity })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.productStatusService.remove(id);
  }
}
