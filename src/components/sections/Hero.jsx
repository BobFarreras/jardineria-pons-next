// src/components/sections/Hero.jsx
"use client"; // Necessari per l'esdeveniment onClick del botó

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Image from 'next/image'; // Importem el component Image de Next.js

const Hero = ({ scrollToSection }) => {
  return (
    <section id="inici" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        {/* ✅ Optimització: Usem el component Image de Next.js */}
        <Image
          priority // Prioritzem la càrrega d'aquesta imatge perquè és la principal
          fill
          src="https://images.unsplash.com/photo-1692532052157-f758fbe07881"
          alt="Jardiner professional treballant en un jardí exuberant"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-overlay"></div>
      </div>
      
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold mb-6 text-shadow"
        >
          Creem i cuidem el teu jardí amb passió i la teva puta mare
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl mb-8 text-shadow"
        >
          Serveis professionals de jardineria per transformar els teus espais exteriors
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Button
            onClick={() => scrollToSection('contacte')}
            size="lg"
            className="bg-white text-green-600 hover:bg-green-50 font-semibold px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Contacta'ns Ara
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;