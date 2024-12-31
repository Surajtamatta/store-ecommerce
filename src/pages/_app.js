import React,{useState} from 'react';
import Layout from '../components/Layout';
import '../styles/globals.css'
import { CartProvider } from '@/utils/context/cartContext';


export default function App({ Component, pageProps }) {
  const [isModalOpen, setModalOpen] = useState(false);
  return ( <CartProvider>
    <Layout>
          <Component {...pageProps} />
        </Layout>
  </CartProvider>
        
  

  );
}
