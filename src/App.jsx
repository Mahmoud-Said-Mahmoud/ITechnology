// import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';

import Process from './components/Process';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './index.css';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';

export default function App(){
   useEffect(() => {
    AOS.init({
      // Time of Anmaition
      duration: 1000, 
      // work as one
      once: true,     
    });
  }, []);
  return (
    <>
      <Navbar />
        <Hero />
        <Services />
        <Process />
        <About />
        <Testimonials />
        <Contact />
      <Footer />
    </>
  );
}
