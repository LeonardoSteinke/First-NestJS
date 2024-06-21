import { Injectable } from '@nestjs/common';
import { UpdateCatDto } from './dto/update-cat.dto';
import { Cat } from './entities/cat.entity';

@Injectable()
export class CatsService {

  private readonly cats: Cat[] = []

  create(cat: Cat) {
    this.cats.push(cat)
    return { message: 'Added a new cat' };
  }

  findAll(): Cat[] {
    return this.cats;
  }

  findOne(id: number) {
    return `This action returns a #${id} cat`;
  }

  update(id: number, updateCatDto: UpdateCatDto) {
    return `This action updates a #${id} cat`;
  }

  remove(id: number) {
    return `This action removes a #${id} cat`;
  }
}
