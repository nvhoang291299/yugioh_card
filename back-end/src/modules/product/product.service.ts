import { HttpService } from '@nestjs/axios';
import { Injectable, Logger } from '@nestjs/common';
import { AxiosError } from 'axios';
import { catchError, firstValueFrom } from 'rxjs';


@Injectable()
export class ProductService {
  constructor(private readonly httpService: HttpService) {}

  private readonly logger = new Logger(ProductService.name);


  async findAll(): Promise<any> {
    let {data} = await firstValueFrom(
      this.httpService.get('http://localhost:8081/data'),
      );
      
    return data;
  }

  async findById(id): Promise<any> {
    let {data} = await firstValueFrom(
      this.httpService.get(`http://localhost:8081/data?id=${id}`)
    );

  return data;
  }
}
