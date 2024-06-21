import { Injectable } from '@nestjs/common';
import { Cat } from './entities/cat.entity';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class CatsService {
  private readonly cats: Cat[] = [];
  constructor(private prismaService: PrismaService) { }

  async create(cat: Cat) {
    await this.prismaService.cat.create({ data: cat })
    return { message: 'Added a new cat' };
  }

  findAll(): Cat[] {
    return this.cats;
  }

  findOne(id: number) {
    return `This action returns a #${id} cat`;
  }

  update(id: number) {
    return `This action updates a #${id} cat`;
  }

  remove(id: number) {
    return `This action removes a #${id} cat`;
  }
}
