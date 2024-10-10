import { Injectable, NotFoundException } from '@nestjs/common';
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

  async findOne(id: number) {
    const productStatus = await this.prisma.productStatus.findUnique({
      where: {
        id,
      },
    });

    if (!productStatus) {
      throw new NotFoundException(`Product Status with id ${id} not found`);
    }

    return productStatus;
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
