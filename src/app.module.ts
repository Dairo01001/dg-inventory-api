import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { ProductStatusModule } from './product-status/product-status.module';
import { RolesModule } from './roles/roles.module';
import { DocumentsModule } from './documents/documents.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [PrismaModule, ProductStatusModule, RolesModule, DocumentsModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
