import { Injectable } from '@nestjs/common';
import { CreateSaleDto } from './dto/create-sale.dto';
import { UpdateSaleDto } from './dto/update-sale.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class SalesService {
  constructor(private readonly prisma: PrismaService) {}

  create(createSaleDto: CreateSaleDto) {
    return this.prisma.sale.create({
      data: createSaleDto,
    });
  }

  findAll() {
    return this.prisma.sale.findMany();
  }

  findOne(id: number) {
    return this.prisma.sale.findUniqueOrThrow({
      where: {
        id,
      },
    });
  }

  update(id: number, updateSaleDto: UpdateSaleDto) {
    return this.prisma.sale.update({
      data: updateSaleDto,
      where: {
        id,
      },
    });
  }

  async remove(id: number) {
    const status = 'INACTIVE';
    const saleStatus = await this.prisma.saleStatus.upsert({
      where: {
        name: status,
      },
      create: {
        name: status,
      },
      update: {},
    });

    return this.prisma.sale.update({
      where: {
        id,
      },
      data: {
        statusId: saleStatus.id,
      },
    });
  }
}
