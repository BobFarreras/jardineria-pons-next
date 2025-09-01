// src/components/sections/Gallery.jsx
"use client"; // Necessari per les animacions 'whileInView'

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image'; // Importem el component Image
// Pas 1: Importem cada imatge com si fos un mòdul
import projecte1 from '@/assets/images/projecte-1.jpg';
import projecte2 from '@/assets/images/projecte-2.jpg';
import projecte3 from '@/assets/images/projecte-3.webp';
import projecte4 from '@/assets/images/projecte-4.jpeg';
import projecte5 from '@/assets/images/projecte-5.jpg';
import projecte6 from '@/assets/images/projecte-6.webp';

// Pas 2: Utilitzem les imatges importades a l'array
const galleryImages = [
  { src: projecte1, alt: "Projecte de jardineria 1 - Jardí professional dissenyat per Jardiner Pons" },
  { src: projecte2, alt: "Projecte de jardineria 2 - Disseny de jardí amb flors" },
  { src: projecte3, alt: "Projecte de jardineria 3 - Manteniment de gespa" },
  { src: projecte4, alt: "Projecte de jardineria 4 - Jardí amb il·luminació" },
  { src: projecte5, alt: "Projecte de jardineria 5 - Detall de plantes i flors" },
  { src: projecte6, alt: "Projecte de jardineria 6 - Espai exterior amb mobiliari" },
];

const Gallery = () => {
  return (
    <section id="galeria" className="py-20 bg-white">
       <div className="container mx-auto px-6 sm:px-12">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Galeria de Projectes</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Descobreix alguns dels nostres projectes més destacats
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="gallery-item relative h-64"
            >
              <Image 
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover"
                placeholder="blur" // Opcional: Afegeix un efecte de desenfocament mentre carrega
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;