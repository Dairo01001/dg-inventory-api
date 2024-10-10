import { Injectable } from '@nestjs/common';
import { CreateProductStatusDto } from './dto/create-product-status.dto';
import { UpdateProductStatusDto } from './dto/update-product-status.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class ProductStatusService {
  constructor(private readonly prisma: PrismaService) {}

  create(createProductStatusDto: CreateProductStatusDto) {
    return this.prisma.productStatus.create({
      data: createProductStatusDto,
    });
  }

  findAll(where?: Prisma.ProductStatusWhereInput) {
    return this.prisma.productStatus.findMany({
      where,
    });
  }

  findOne(id: number) {
    return this.prisma.productStatus.findUnique({
      where: {
        id,
      },
    });
  }

  update(id: number, updateProductStatusDto: UpdateProductStatusDto) {
    return this.prisma.productStatus.update({
      where: {
        id,
      },
      data: updateProductStatusDto,
    });
  }

  remove(id: number) {
    return this.prisma.productStatus.update({
      where: {
        id,
      },
      data: {
        status: false,
      },
    });
  }
}
