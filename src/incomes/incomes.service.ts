import { Injectable } from '@nestjs/common';
import { CreateIncomeDto } from './dto/create-income.dto';
import { UpdateIncomeDto } from './dto/update-income.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class IncomesService {
  constructor(private readonly prisma: PrismaService) {}

  create(createIncomeDto: CreateIncomeDto) {
    return this.prisma.income.create({
      data: createIncomeDto,
    });
  }

  findAll() {
    return this.prisma.income.findMany();
  }

  findOne(id: number) {
    return this.prisma.income.findUniqueOrThrow({
      where: { id },
    });
  }

  update(id: number, updateIncomeDto: UpdateIncomeDto) {
    return this.prisma.income.update({
      where: { id },
      data: updateIncomeDto,
    });
  }

  async remove(id: number) {
    const status = 'INACTIVE';
    const incomeStatus = await this.prisma.incomeStatus.upsert({
      where: {
        name: status,
      },
      create: {
        name: status,
      },
      update: {},
    });

    return this.prisma.income.update({
      where: {
        id,
      },
      data: {
        statusId: incomeStatus.id,
      },
    });
  }
}
