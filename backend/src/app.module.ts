import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './shared/database/database.module';
import { UsersModule } from './modules/users/users.module';
import { UsersController } from './modules/users/users.controller';
import { AuthModule } from './modules/auth/auth.module';
import { CategoriesModule } from './modules/categories/categories.module';
import { TranscationModule } from './modules/transcation/transcation.module';

@Module({
  imports: [DatabaseModule, UsersModule, AuthModule, CategoriesModule, TranscationModule],
  controllers: [AppController, UsersController],
  providers: [AppService],
})
export class AppModule {}
