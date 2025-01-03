import { PrismaClient } from './client';

enum CategoryType {
  INCOME = 'INCOME',
  EXPENSE = 'EXPENSE',
}

const prisma = new PrismaClient();

async function main() {
  const user = {
    firstName: 'John',
    lastName: 'Doe',
    username: 'john123',
    email: 'john.doe@example.com',
    password: '$2b$10$fmQdtZcaWt/VezR5sRrjR.BzNSWAJr0ml/ZHYKmzJIKJp11G7HBkG',
  };
  await prisma.user.create({
    data: user,
  });
  const categories = [
    {
      iconName: '💰',
      name: 'Allowance',
      description: 'Allowance income',
      type: CategoryType.INCOME,
    },
    {
      iconName: '💼',
      name: 'Salary',
      description: 'Salary income',
      type: CategoryType.INCOME,
    },
    {
      iconName: '💵',
      name: 'Petty cash',
      description: 'Petty cash income',
      type: CategoryType.INCOME,
    },
    {
      iconName: '🏅',
      name: 'Bonus',
      description: 'Bonus income',
      type: CategoryType.INCOME,
    },
    {
      iconName: '🍜',
      name: 'Food',
      description: 'Food expense',
      type: CategoryType.EXPENSE,
    },
    {
      iconName: '👬🏼',
      name: 'Social Life',
      description: 'Social Life expense',
      type: CategoryType.EXPENSE,
    },
    {
      iconName: '🚕',
      name: 'Transport',
      description: 'Transport expense',
      type: CategoryType.EXPENSE,
    },
    {
      iconName: '🖼',
      name: 'Culture',
      description: 'Culture expense',
      type: CategoryType.EXPENSE,
    },
    {
      iconName: '🪑',
      name: 'Household',
      description: 'Household expense',
      type: CategoryType.EXPENSE,
    },
    {
      iconName: '🧥',
      name: 'Apparel',
      description: 'Apparel expense',
      type: CategoryType.EXPENSE,
    },
    {
      iconName: '💄',
      name: 'Beauty',
      description: 'Beauty expense',
      type: CategoryType.EXPENSE,
    },
    {
      iconName: '🧘🏽‍♂️',
      name: 'Health',
      description: 'Health expense',
      type: CategoryType.EXPENSE,
    },
    {
      iconName: '📙',
      name: 'Education',
      description: 'Education expense',
      type: CategoryType.EXPENSE,
    },
    {
      iconName: '🎁',
      name: 'Gift',
      description: 'Gift expense',
      type: CategoryType.EXPENSE,
    },
  ];

  for (const category of categories) {
    await prisma.category.create({
      data: category,
    });
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
