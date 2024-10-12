import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { ProductStatusModule } from './product-status/product-status.module';
import { RolesModule } from './roles/roles.module';
import { DocumentsModule } from './documents/documents.module';
import { UsersModule } from './users/users.module';
import { CategoriesModule } from './categories/categories.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { SubcategoriesModule } from './subcategories/subcategories.module';
import { AddressModule } from './address/address.module';
import { UnitsModule } from './units/units.module';
import { ProductsModule } from './products/products.module';
import { PersonTypesModule } from './person-types/person-types.module';
import { PersonsModule } from './persons/persons.module';
import { ReceiptTypesModule } from './receipt-types/receipt-types.module';

@Module({
  imports: [
    PrismaModule,
    ProductStatusModule,
    RolesModule,
    DocumentsModule,
    UsersModule,
    CategoriesModule,
    AuthModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    SubcategoriesModule,
    AddressModule,
    UnitsModule,
    ProductsModule,
    PersonTypesModule,
    PersonsModule,
    ReceiptTypesModule,
  ],
})
export class AppModule {}
