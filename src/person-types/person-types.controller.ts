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
import { PersonTypesService } from './person-types.service';
import { CreatePersonTypeDto } from './dto/create-person-type.dto';
import { UpdatePersonTypeDto } from './dto/update-person-type.dto';
import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { PersonTypeEntity } from './entities/person-type.entity';

@Controller('person-types')
@ApiTags('Person Types')
export class PersonTypesController {
  constructor(private readonly personTypesService: PersonTypesService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiCreatedResponse({ type: PersonTypeEntity })
  create(@Body() createPersonTypeDto: CreatePersonTypeDto) {
    return this.personTypesService.create(createPersonTypeDto);
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOkResponse({ type: PersonTypeEntity, isArray: true })
  findAll() {
    return this.personTypesService.findAll();
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOkResponse({ type: PersonTypeEntity })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.personTypesService.findOne(id);
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOkResponse({ type: PersonTypeEntity })
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updatePersonTypeDto: UpdatePersonTypeDto,
  ) {
    return this.personTypesService.update(id, updatePersonTypeDto);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOkResponse({ type: PersonTypeEntity })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.personTypesService.remove(id);
  }
}
