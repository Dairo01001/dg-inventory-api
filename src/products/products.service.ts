import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { AddCategoryDto } from './dto/add-category.dto';

@Injectable()
export class ProductsService {
  constructor(private readonly prisma: PrismaService) {}

  create(createProductDto: CreateProductDto) {
    return this.prisma.product.create({
      data: createProductDto,
    });
  }

  addCategory(addCategoryDto: AddCategoryDto) {
    return this.prisma.subcategoryOnProduct.create({
      data: addCategoryDto,
    });
  }

  findAll() {
    return this.prisma.product.findMany();
  }

  async findOne(id: string) {
    const product = await this.prisma.product.findUnique({
      where: {
        id,
      },
      include: {
        unit: true,
        subcategoryOnProduct: {
          select: {
            subcategory: {
              select: {
                name: true,
              },
            },
          },
        },
      },
    });

    if (!product) {
      throw new NotFoundException(`Product whit id:${id} not found!`);
    }

    return product;
  }

  update(id: string, updateProductDto: UpdateProductDto) {
    return this.prisma.product.update({
      where: {
        id,
      },
      data: updateProductDto,
    });
  }

  async remove(id: string) {
    const status = await this.prisma.productStatus.upsert({
      where: {
        name: 'inactive',
      },
      create: {
        name: 'inactive',
      },
      update: {
        name: 'inactive',
      },
    });

    await this.prisma.product.update({
      where: {
        id,
      },
      data: {
        statusId: status.id,
      },
    });
  }
}
