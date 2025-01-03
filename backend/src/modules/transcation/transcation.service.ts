import { Injectable } from '@nestjs/common';
import { TransactionType } from 'prisma/client';
import { PrismaService } from 'src/shared/database/prisma.service';
import { CreateTransactionDto } from './dto/create-transaction.dto';

@Injectable()
export class TranscationService {
  constructor(private prisma: PrismaService) {}

  async createTransaction(userId: string, data: CreateTransactionDto) {
    const transactionData: any = { userId, ...data };
    return this.prisma.transaction.create({
      data: transactionData,
    });
  }

  async getAllByUser(userId: string, type?: TransactionType, search?: string) {
    return this.prisma.transaction.findMany({
      where: {
        userId,
        type,
        Category: {
          OR: search
            ? [
                { name: { contains: search, mode: 'insensitive' } },
                { description: { contains: search, mode: 'insensitive' } },
              ]
            : undefined,
        },
      },
      orderBy: { id: 'desc' },
      include: { Category: true },
    });
  }

  async getByType(userId: string, type: TransactionType) {
    return this.prisma.transaction.findMany({
      where: { userId, type },
    });
  }

  async getTotalAmountByType(userId: string, type: TransactionType) {
    const result = await this.prisma.transaction.aggregate({
      where: { userId, type },
      _sum: { amount: true },
    });
    return { total: result._sum.amount || 0 };
  }

  async getTotalByCategory(userId: string) {
    const groupedTransactions = await this.prisma.transaction.groupBy({
      by: ['categoryId'],
      where: { userId },
      _sum: { amount: true },
      _count: true,
    });
    console.log('Data: ', groupedTransactions);

    // Enrich with category descriptions
    const categoryDetails = await Promise.all(
      groupedTransactions.map(async (group) => {
        const category = await this.prisma.category.findUnique({
          where: { id: group.categoryId },
        });
        return {
          categoryId: group.categoryId,
          categoryDescription: category?.description || 'Unknown',
          totalAmount: group._sum.amount,
          transactionCount: group._count,
        };
      }),
    );

    return categoryDetails;
  }
}
