import { Container, Grid, List, ListItem, Menu, MenuItem } from "@mui/material";
import Image from "next/image";
import logo from '@/image/logo.svg';
import iconFB from '@/image/icon_social/icon_fb.svg';
import iconX from '@/image/icon_social/icon_x.svg';


function Footer() {
    return (
        <div style={{backgroundColor: "#282a41", color: "#ffffff"}}>
            <Container maxWidth="lg">
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6} md={6} lg={3}>
                    <Image src={logo} alt='' width={150} height={50}/>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                        Consequatur eius, impedit facere architecto exercitationem 
                        fugit deleniti quis minus suscipit, sequi in minima 
                        consectetur eos temporibus maxime doloribus 
                        laboriosam iusto ullam!
                    </p>
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={3}>
                    <h3>About Us</h3>
                    <List>
                        <ListItem>Careers</ListItem>
                        <ListItem>Our Stores</ListItem>
                        <ListItem>Term & Conditions</ListItem>
                        <ListItem>Privacy Policy</ListItem>
                    </List>
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={3}>
                    <h3>Customer Care</h3>
                    <List>
                        <ListItem>Help Center</ListItem>
                        <ListItem>Track Your Order</ListItem>
                        <ListItem>Corporate & Bulk Purchasing</ListItem>
                        <ListItem>Refunds</ListItem>
                    </List>
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={3}>
                    <h3>Contact Us</h3>
                    <List>
                        <ListItem>Email: nvhoang020100@gmail.com</ListItem>
                        <ListItem>Phone: 0984-879-xxx</ListItem>
                        <ListItem>
                            <Image src={iconFB} alt=""/>
                            <Image src={iconX} alt=""/>
                        </ListItem>
                    </List>
                </Grid>
            </Grid>
            </Container>
        </div>
    )
}

export default Footer;