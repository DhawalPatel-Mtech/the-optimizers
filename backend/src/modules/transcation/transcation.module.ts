import { Module } from '@nestjs/common';
import { TranscationController } from './transcation.controller';
import { TranscationService } from './transcation.service';
import { DatabaseModule } from 'src/shared/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [TranscationController],
  providers: [TranscationService],
})
export class TranscationModule {}
