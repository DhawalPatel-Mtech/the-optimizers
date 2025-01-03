import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Query,
  Req,
  UseGuards,
} from '@nestjs/common';
import { TranscationService } from './transcation.service';
import { TransactionType } from 'prisma/client';
import { JwtAuthGuard } from 'src/shared/guards/jwt-auth.guard';
import { CreateTransactionDto } from './dto/create-transaction.dto';

@UseGuards(JwtAuthGuard)
@Controller('transcation')
export class TranscationController {
  constructor(private transactionService: TranscationService) {}

  @Get()
  async getAllByUser(
    @Req() req: any,
    @Query('type') type?: TransactionType,
    @Query('search') search?: string,
  ) {
    return this.transactionService.getAllByUser(req.user.id, type, search);
  }

  @Get('total')
  async getTotalAmountByType(
    @Req() req: any,
    @Query('type') type?: TransactionType,
  ) {
    if (!type) {
      return this.transactionService.getTotalByCategory(req.user.id);
    }
    return this.transactionService.getTotalAmountByType(req.user.id, type);
  }

  @Post()
  async createTransaction(
    @Body() createTransactionDto: CreateTransactionDto,
    @Req() req: any,
  ) {
    return this.transactionService.createTransaction(
      req.user.id,
      createTransactionDto,
    );
  }
}
