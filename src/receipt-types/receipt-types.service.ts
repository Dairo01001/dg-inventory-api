import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateReceiptTypeDto } from './dto/create-receipt-type.dto';
import { UpdateReceiptTypeDto } from './dto/update-receipt-type.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ReceiptTypesService {
  constructor(private readonly prisma: PrismaService) {}

  create(createReceiptTypeDto: CreateReceiptTypeDto) {
    return this.prisma.receiptType.create({
      data: createReceiptTypeDto,
    });
  }

  findAll() {
    return this.prisma.receiptType.findMany();
  }

  async findOne(id: number) {
    const receiptType = await this.prisma.receiptType.findUnique({
      where: {
        id,
      },
    });

    if (!receiptType) {
      throw new NotFoundException(`ReceiptType with id ${id} not found`);
    }

    return receiptType;
  }

  update(id: number, updateReceiptTypeDto: UpdateReceiptTypeDto) {
    return this.prisma.receiptType.update({
      where: {
        id,
      },
      data: updateReceiptTypeDto,
    });
  }

  remove(id: number) {
    return this.prisma.receiptType.update({
      where: {
        id,
      },
      data: {
        status: false,
      },
    });
  }
}
