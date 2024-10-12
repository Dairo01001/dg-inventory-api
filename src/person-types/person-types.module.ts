import { Module } from '@nestjs/common';
import { PersonTypesService } from './person-types.service';
import { PersonTypesController } from './person-types.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [PersonTypesController],
  providers: [PersonTypesService],
  imports: [PrismaModule],
})
export class PersonTypesModule {}
