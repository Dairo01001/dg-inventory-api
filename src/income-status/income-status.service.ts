import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateIncomeStatusDto } from './dto/create-income-status.dto';
import { UpdateIncomeStatusDto } from './dto/update-income-status.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class IncomeStatusService {
  constructor(private readonly prisma: PrismaService) {}

  create(createIncomeStatusDto: CreateIncomeStatusDto) {
    return this.prisma.incomeStatus.create({
      data: createIncomeStatusDto,
    });
  }

  findAll() {
    return this.prisma.incomeStatus.findMany();
  }

  async findOne(id: number) {
    const incomeStatus = await this.prisma.incomeStatus.findUnique({
      where: {
        id,
      },
    });

    if (!incomeStatus) {
      throw new NotFoundException(`Income Status whit ${id} not found!`);
    }

    return incomeStatus;
  }

  update(id: number, updateIncomeStatusDto: UpdateIncomeStatusDto) {
    return this.prisma.incomeStatus.update({
      where: {
        id,
      },
      data: updateIncomeStatusDto,
    });
  }

  remove(id: number) {
    return this.prisma.incomeStatus.update({
      where: { id },
      data: {
        status: true,
      },
    });
  }
}
