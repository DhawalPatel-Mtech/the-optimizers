import { Injectable } from '@nestjs/common';
import { CategoryType, Prisma } from 'prisma/client';
import { PrismaService } from 'src/shared/database/prisma.service';

@Injectable()
export class CategoriesService {
  constructor(private prisma: PrismaService) {}

  // async createCategory(data: any) {
  //   return this.prisma.Category.create({ data });
  // }
  // async findAll() {
  //   return this.prisma.categories.findMany();
  // }
  // async findOne(id: string) {
  //   return this.prisma.categories.findUnique({ where: { id } });
  // }
  // async updateCategory(id: string, data: any) {
  //   return this.prisma.categories.update({ where: { id }, data });
  // }
  // async deleteCategory(id: string) {
  //   return this.prisma.categories.delete({ where: { id } });
  // }
  async findByTypeAndSearch(type: CategoryType, search?: string) {
    const conditions: any = {
      type,
      OR: search
        ? [
            { name: { contains: search, mode: 'insensitive' } },
            { description: { contains: search, mode: 'insensitive' } },
          ]
        : undefined,
    };
    return this.prisma.category.findMany({
      where: conditions,
    });
  }
}
