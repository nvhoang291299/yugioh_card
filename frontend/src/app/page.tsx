// import Image from 'next/image';
import styles from './page.module.css';
import * as React from 'react';
import ListProduct from '@/components/ListProduct';
import { Container } from '@mui/material';
// import SlideSection from '@/components/slideSection';
// import SlideItem from '@/components/slideItem';


export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
          <Container maxWidth="lg">
            <ListProduct />
          </Container>
      </div>
    </main>
  )
}
