// src/app/page.js
"use client"; // 💡 Molt important! Indica que aquest component és interactiu i s'executa al client.

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronUp } from 'lucide-react';

// Importa les teves seccions
import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';
import BeforeAfter from '@/components/sections/BeforeAfter';
import Gallery from '@/components/sections/Gallery';
import Testimonials from '@/components/sections/Testimonials';
import Contact from '@/components/sections/Contact';

export default function Home() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Aquesta lògica depèn del 'window', per tant, necessita "use client"
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Aquesta lògica depèn del 'document', per tant, necessita "use client"
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);
    const elements = document.querySelectorAll('.fade-in');
    elements.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  // Aquesta funció ara només s'utilitza dins d'aquest component i els seus fills.
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <Hero scrollToSection={scrollToSection} />
      <Services />
      <BeforeAfter />
      <Gallery />
      <Testimonials />
     
      <Contact />

      {showScrollTop && (
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-12 h-12 bg-green-600 text-white rounded-full shadow-lg hover:bg-green-700 transition-colors z-40 flex items-center justify-center"
        >
          <ChevronUp className="w-6 h-6" />
        </motion.button>
      )}
    </>
  );
}