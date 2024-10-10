import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateDocumentDto } from './dto/create-document.dto';
import { UpdateDocumentDto } from './dto/update-document.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class DocumentsService {
  constructor(private readonly prisma: PrismaService) {}

  create(createDocumentDto: CreateDocumentDto) {
    return this.prisma.document.create({
      data: createDocumentDto,
    });
  }

  findAll() {
    return this.prisma.document.findMany();
  }

  async findOne(id: number) {
    const document = await this.prisma.document.findUnique({
      where: {
        id,
      },
    });

    if (!document) {
      throw new NotFoundException(`Document with id ${id} not found`);
    }

    return document;
  }

  update(id: number, updateDocumentDto: UpdateDocumentDto) {
    return this.prisma.document.update({
      where: { id },
      data: updateDocumentDto,
    });
  }

  remove(id: number) {
    return this.prisma.document.update({
      where: { id },
      data: { status: false },
    });
  }
}
