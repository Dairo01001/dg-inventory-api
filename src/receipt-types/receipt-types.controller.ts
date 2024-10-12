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
import { ReceiptTypesService } from './receipt-types.service';
import { CreateReceiptTypeDto } from './dto/create-receipt-type.dto';
import { UpdateReceiptTypeDto } from './dto/update-receipt-type.dto';
import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { ReceiptTypeEntity } from './entities/receipt-type.entity';

@Controller('receipt-types')
@ApiTags('Receipt Types')
export class ReceiptTypesController {
  constructor(private readonly receiptTypesService: ReceiptTypesService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiCreatedResponse({ type: ReceiptTypeEntity })
  create(@Body() createReceiptTypeDto: CreateReceiptTypeDto) {
    return this.receiptTypesService.create(createReceiptTypeDto);
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOkResponse({ type: ReceiptTypeEntity, isArray: true })
  findAll() {
    return this.receiptTypesService.findAll();
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOkResponse({ type: ReceiptTypeEntity })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.receiptTypesService.findOne(id);
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOkResponse({ type: ReceiptTypeEntity })
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateReceiptTypeDto: UpdateReceiptTypeDto,
  ) {
    return this.receiptTypesService.update(id, updateReceiptTypeDto);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOkResponse({ type: ReceiptTypeEntity })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.receiptTypesService.remove(id);
  }
}
