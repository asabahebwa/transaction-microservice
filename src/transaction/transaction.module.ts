import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { TransactionService } from './transaction.service';
import { TransactionController } from './transaction.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule, HttpModule],
  controllers: [TransactionController],
  providers: [TransactionService],
})
export class TransactionModule {}
