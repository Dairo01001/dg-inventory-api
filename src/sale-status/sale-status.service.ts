import { Injectable } from '@nestjs/common';
import { CreateSaleStatusDto } from './dto/create-sale-status.dto';
import { UpdateSaleStatusDto } from './dto/update-sale-status.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class SaleStatusService {
  constructor(private readonly prisma: PrismaService) {}

  create(createSaleStatusDto: CreateSaleStatusDto) {
    return this.prisma.saleStatus.create({
      data: createSaleStatusDto,
    });
  }

  findAll() {
    return this.prisma.saleStatus.findMany();
  }

  findOne(id: number) {
    return this.prisma.saleStatus.findUniqueOrThrow({
      where: {
        id,
      },
    });
  }

  update(id: number, updateSaleStatusDto: UpdateSaleStatusDto) {
    return this.prisma.saleStatus.update({
      data: updateSaleStatusDto,
      where: {
        id,
      },
    });
  }

  remove(id: number) {
    return this.prisma.saleStatus.update({
      where: {
        id,
      },
      data: {
        status: false,
      },
    });
  }
}
