'use client';
import { useEffect } from 'react';
import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import ProductivityCounter from '@/components/ProductivityCounter/ProductivityCounter';

import Features from '@/components/Features/Features';
import Partners from '@/components/Partners/Partners';
import Card from '@/components/Card/Card';
import WhyErp from '@/components/WhyErp/WhyErp';
import ProductNavtab from '@/components/ProductNavtab/ProductNavtab';
import KeyFeature from '@/components/KeyFeature/KeyFeature';
import DownloadApp from '@/components/DownloadApp/DownloadApp';
import Contact from '@/components/Contact/Contact';
import Footer from '@/components/Footer/Footer';
import Contactmailjs from '@/components/Contact/Contactmail';







export default function Home() {

  useEffect( () => {

    (

      async () => {

          const LocomotiveScroll = (await import('locomotive-scroll')).default

          const locomotiveScroll = new LocomotiveScroll();

      }

    )()

  }, [])

  return (
    <main >
      
   <Header />
   <Hero/>
   <ProductivityCounter/>
   <Features/>
   <Partners/>
<WhyErp/>
 {/* <ProductNavtab/> */}
 <KeyFeature/>
 <DownloadApp/>
 <Contact/>

<Footer/>
    </main>
  );
}
