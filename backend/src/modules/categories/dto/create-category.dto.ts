import { IsEnum, IsString, MaxLength } from 'class-validator';

enum CategoryType {
  INCOME = 'INCOME',
  EXPENSE = 'EXPENSE',
}
export class CreateCategoryDto {
  @IsString()
  @MaxLength(50)
  iconName: string;

  @IsString()
  @MaxLength(40)
  name: string;

  @IsString()
  @MaxLength(256)
  description: string;

  @IsEnum(CategoryType)
  type: CategoryType;
}
