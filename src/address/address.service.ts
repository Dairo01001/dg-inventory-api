import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateAddressDto } from './dto/create-address.dto';
import { UpdateAddressDto } from './dto/update-address.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AddressService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createAddressDto: CreateAddressDto) {
    const { userId, ...address } = createAddressDto;

    const newAddress = await this.prisma.address.create({
      data: address,
    });

    await this.prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        addressId: newAddress.id,
      },
    });

    return newAddress;
  }

  findAll() {
    return this.prisma.address.findMany();
  }

  async findOne(id: number) {
    const address = await this.prisma.address.findUnique({
      where: {
        id,
      },
    });

    if (!address) {
      throw new NotFoundException(`Address with id ${id} not found`);
    }

    return address;
  }

  update(id: number, updateAddressDto: UpdateAddressDto) {
    return this.prisma.address.update({
      where: {
        id,
      },
      data: updateAddressDto,
    });
  }

  remove(id: number) {
    return this.prisma.address.delete({
      where: { id },
    });
  }
}
