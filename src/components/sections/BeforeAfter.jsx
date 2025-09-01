// src/components/sections/BeforeAfter.jsx
"use client"; // Necessari per l'estat (useState) i l'esdeveniment onValueChange

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Slider } from '@/components/ui/slider';
import Image from 'next/image'; // Importem el component Image

const BeforeAfter = () => {
  const [sliderValue, setSliderValue] = useState(50);

  return (
    <section id="projectes" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">La Nostra Transformació</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Mira la màgia en acció. Arrossega per veure l'abans i el després.
          </p>
        </div>

        <motion.div 
          className="relative w-full max-w-4xl mx-auto aspect-video rounded-2xl overflow-hidden shadow-2xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="absolute inset-0">
            {/* ✅ Optimització: Imatge de fons "Abans" */}
            <Image 
              fill
              src="https://images.unsplash.com/photo-1638951755863-34a4b759f195" 
              alt="Jardí abans de la intervenció, amb males herbes i descuidat" 
              className="w-full h-full object-cover" 
            />
            <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
              <span className="text-white text-3xl font-bold bg-black/50 px-4 py-2 rounded">ABANS</span>
            </div>
          </div>
          
          <div 
            className="absolute inset-0 overflow-hidden" 
            style={{ clipPath: `polygon(0 0, ${sliderValue}% 0, ${sliderValue}% 100%, 0 100%)` }}
          >
            {/* ✅ Optimització: Imatge superposada "Després" */}
            <Image 
              fill
              src="https://images.unsplash.com/photo-1587566417705-719c328cbbdb"
              alt="El mateix jardí després de la intervenció, verd, frondós i ben cuidat"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-white text-3xl font-bold bg-black/50 px-4 py-2 rounded">DESPRÉS</span>
            </div>
          </div>

          <div 
            className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize"
            style={{ left: `calc(${sliderValue}% - 1px)` }} // Ajustat per centrar millor
          >
            <div className="absolute top-1/2 -translate-y-1/2 -left-4 w-9 h-9 rounded-full bg-white shadow-md flex items-center justify-center pointer-events-none">
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 9l4-4 4 4m0 6l-4 4-4-4"></path></svg>
            </div>
          </div>

          <Slider
            defaultValue={[50]}
            max={100}
            step={0.1}
            onValueChange={(value) => setSliderValue(value[0])}
            className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default BeforeAfter;