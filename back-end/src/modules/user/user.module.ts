
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { User } from './user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController } from './user.controller';
import { UserService } from './user.service';



@Module({
  imports: [ConfigModule],
  providers: [UserService],
  controllers: [UserController]
})
export class UserModule {}