import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {
  constructor(private readonly configService: ConfigService){};

  getHello(): string {
    const port = this.configService.get('PORT');
    console.log(`Server is running on port ${port}`);
    return `Server is running on port ${port}`;
  }
}
