import * as React from 'react';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
// import Image from 'next/image';
import { Product } from '@/api/products/type';

export default function CardItem(product: Product) {
  console.log("item: " + product.id);
  
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        {/* <Image src={product.card_images.} alt=''/> */}
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}