import React from 'react';
import Navbar from '@/components/shared/Navbar';
import FloatingWhatsApp from '@/components/shared/FloatingWhatsApp';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import CoursesPricing from '@/components/sections/CoursesPricing';
import WhyChoose from '@/components/sections/WhyChoose';
import Payment from '@/components/sections/Payment';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/sections/Footer';

export default function Home() {
  return (
    <div className="min-h-screen font-body">
      <Navbar />
      <Hero />
      <About />
      <CoursesPricing />
      <WhyChoose />
      <Payment />
      <Contact />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}