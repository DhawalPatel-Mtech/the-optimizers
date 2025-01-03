import { Controller, Get, Query, UseGuards } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { JwtAuthGuard } from 'src/shared/guards/jwt-auth.guard';
import { CategoryType } from 'prisma/client';

@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoryService: CategoriesService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  async getCategories(
    @Query('type') type: CategoryType,
    @Query('search') search?: string,
  ) {
    return this.categoryService.findByTypeAndSearch(type, search);
  }
}
