import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Res,
} from '@nestjs/common';
import { CatsService } from './cats.service';
import { Response } from 'express';
import { Cat } from './entities/cat.entity';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) { }

  @Post()
  create(@Res() res: Response, @Body() cat: Cat) {
    if (cat.name && cat.age && cat.breed) {
      this.catsService.create(cat);
      return res.status(200).json({ message: 'Gato Criado com Sucesso!' })
    }
    return res.status(400).json({ message: "Está faltando informações no Payload" })
  }

  @Get()
  findAll() {
    return this.catsService.findAll();
  }

  @Get('/breed/:id')
  breedByPath(@Res() res: Response, @Param('id') id: string) {
    return res.status(404).json({
      message: 'Não foi encontrado nenhuma raça de gato com ID = ' + id,
    });
  }

  @Get('/breed')
  breedByBody(@Body() body, @Res() res: Response) {
    const { id } = body;
    return res.status(404).json({
      message: 'Não foi encontrado nenhuma raça de gato com ID = ' + id,
    });
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.catsService.findOne(+id);
  }

  @Get('/:id/breed')
  findCatBreed(@Res() res: Response, @Param('id') id: string) {
    return res
      .status(404)
      .json({ message: 'Não foi encontrado nenhum gato com ID = ' + id });
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.catsService.remove(+id);
  }
}
