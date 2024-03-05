'use client'

import { getDetailProduct } from "@/api/products/apiProducts";
import * as React from 'react';
import { AxiosResponse } from 'axios';
import { Button, ButtonGroup, Grid } from "@mui/material";
import Image from "next/image";
import LocalMallIcon from '@mui/icons-material/LocalMall';
import PaymentIcon from '@mui/icons-material/Payment';

const ProductDetail: React.FC = (props: any) => {
    console.log("props: ", props);

    const [data, setData] = React.useState<AxiosResponse | null>(null);

    React.useEffect(() => {
        const fetchData = async () => {
            const res = await getDetailProduct(props.params.id);
            setData(res);
        };

        fetchData();
    }, []);

    console.log("data: ", data);

    return (

        <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={6} lg={6}>
                <Image src={data?.card_images[0].image_url} alt='' width={268} height={391} />
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={6}>
                <h2>{data?.name}</h2>
                <h5>{data?.card_prices[0].cardmarket_price} $</h5>
                <ButtonGroup
                      color='secondary'
                      disabled={false}
                      size="large"
                      variant="text"
                >
                    <Button><LocalMallIcon/> Add to cart</Button>
                    <Button><PaymentIcon/>Buy</Button>
                </ButtonGroup>
            </Grid>
        </Grid>
    )
}

export default ProductDetail;