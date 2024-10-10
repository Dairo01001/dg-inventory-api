import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { ProductStatusModule } from './product-status/product-status.module';

@Module({
  imports: [PrismaModule, ProductStatusModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
