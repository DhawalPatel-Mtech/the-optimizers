import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/shared/database/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}
  async create(createUserDto: CreateUserDto) {
    // Hash the password before saving
    const hashedPassword = await bcrypt.hash(createUserDto.password, 10);
    // Create the user in the database
    const userData: any = { ...createUserDto, password: hashedPassword };
    const user = await this.prisma.user.create({
      data: userData,
    });
    // Remove password from the response
    const { password, ...result } = user;
    return result;
  }
  async findByEmail(email: string) {
    return this.prisma.user.findUnique({
      where: { email },
    });
  }
  async findById(id: string) {
    return this.prisma.user.findUnique({
      where: { id },
    });
  }
}
