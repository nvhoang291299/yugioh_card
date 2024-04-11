import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './modules/product/product.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import configuration from './config/configuration';
import typeOrmConfig from './database/typeorm.config';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import {validate} from './config/validateTypeOrm';
import { MongooseModule, MongooseModuleOptions } from '@nestjs/mongoose';
// import { getENVFile } from './config/env.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: [".env.host",".env.database"],
      isGlobal: true,
      load: [typeOrmConfig, configuration],
      cache: true,
      validate: validate,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => 
        config.get<TypeOrmModuleOptions>('typeorm', {}),
    }),
    // MongooseModule.forRootAsync({
    //   imports: [ConfigModule],
    //   inject: [ConfigService],
    //   useFactory: async (config: ConfigService) =>
    //     // uri: config.get<string>('mongodb://localhost/yugi_shop'),
    //     config.get<MongooseModuleOptions>('mongoose', {})
    // }),
    MongooseModule.forRoot("mongodb://localhost:27017/yugi_shop"),
    ProductModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
