import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePersonDto } from './dto/create-person.dto';
import { UpdatePersonDto } from './dto/update-person.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PersonsService {
  constructor(private readonly prisma: PrismaService) {}

  create(createPersonDto: CreatePersonDto) {
    return this.prisma.person.create({
      data: createPersonDto,
    });
  }

  findAll() {
    return this.prisma.person.findMany();
  }

  async findOne(id: string) {
    const person = await this.prisma.person.findUnique({
      where: {
        id,
      },
    });

    if (!person) {
      throw new NotFoundException(`Person with id ${id} not found`);
    }

    return person;
  }

  update(id: string, updatePersonDto: UpdatePersonDto) {
    return this.prisma.person.update({
      where: {
        id,
      },
      data: updatePersonDto,
    });
  }

  remove(id: string) {
    return this.prisma.person.delete({
      where: {
        id,
      },
    });
  }
}
