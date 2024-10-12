import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePersonTypeDto } from './dto/create-person-type.dto';
import { UpdatePersonTypeDto } from './dto/update-person-type.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PersonTypesService {
  constructor(private readonly prisma: PrismaService) {}

  create(createPersonTypeDto: CreatePersonTypeDto) {
    return this.prisma.personType.create({
      data: createPersonTypeDto,
    });
  }

  findAll() {
    return this.prisma.personType.findMany();
  }

  async findOne(id: number) {
    const personType = await this.prisma.personType.findUnique({
      where: {
        id,
      },
    });

    if (!personType) {
      throw new NotFoundException(`PersonType with id ${id} not found`);
    }

    return personType;
  }

  update(id: number, updatePersonTypeDto: UpdatePersonTypeDto) {
    return this.prisma.personType.update({
      where: {
        id,
      },
      data: updatePersonTypeDto,
    });
  }

  remove(id: number) {
    return this.prisma.personType.update({
      where: {
        id,
      },
      data: {
        status: false,
      },
    });
  }
}
