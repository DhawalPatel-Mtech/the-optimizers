import { IsUUID, IsNumber, IsString, IsEnum } from 'class-validator';
import { TransactionType } from 'prisma/client';

export class CreateTransactionDto {
  @IsUUID()
  categoryId: string;

  @IsNumber()
  amount: number;

  @IsString()
  date: string;

  @IsEnum(TransactionType)
  type: TransactionType;
}
