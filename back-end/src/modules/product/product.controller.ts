import { Controller, Get, Param } from '@nestjs/common';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
  constructor(private service: ProductService) {}

  @Get()
  getAllProduct() {
    return this.service.findAll();
  }

  @Get("/:id")
  getProduct(@Param("id") id: any) {
    return this.service.findById(id);
  }
}
