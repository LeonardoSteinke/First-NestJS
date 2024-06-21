import { Controller, Get, Post, Body, Patch, Param, Delete, Res, Req, HttpCode, Redirect } from '@nestjs/common';
import { CatsService } from './cats.service';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';
import { Response } from 'express';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) { }

  @Post()
  create(@Body() createCatDto: CreateCatDto) {
    this.catsService.create(createCatDto);
  }

  @Get()
  findAll() {
    return this.catsService.findAll();
  }

  @Get('/breed/:id')
  breedByPath(@Res() res: Response, @Param('id') id: string) {
    return res.status(404).json({ message: "Não foi encontrado nenhuma raça de gato com ID = " + id })
  }

  @Get('/breed')
  breedByBody(@Body() body, @Res() res: Response) {
    const { id } = body;
    return res.status(404).json({ message: "Não foi encontrado nenhuma raça de gato com ID = " + id })
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.catsService.findOne(+id);
  }

  @Get('/:id/breed')
  findCatBreed(@Res() res: Response, @Param('id') id: string) {
    return res.status(404).json({ message: "Não foi encontrado nenhum gato com ID = " + id })
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCatDto: UpdateCatDto) {
    return this.catsService.update(+id, updateCatDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.catsService.remove(+id);
  }
}
