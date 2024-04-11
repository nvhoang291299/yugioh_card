import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';
@Injectable()
export class UserService {
  constructor(
    // @Inject()
    private readonly configService: ConfigService,
  ) {}

  async findAll(): Promise<string> {
    return "hello";
  }
}