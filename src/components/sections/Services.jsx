// src/components/sections/Services.jsx
"use client"; // Necessari per les animacions 'whileInView'

import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Scissors, Droplets, Shield, TreePine, Frame as Fence } from 'lucide-react';
import Image from 'next/image'; // Importem el component Image

import Construcció_i_Manteniment from '@/assets/images/contruccio-i-manteniment.jpg';
import podes from '@/assets/images/home podant.webp';
import sistemes_de_reg from '@/assets/images/sistema de reg.jpeg';
import Productes_Fitosanitaris from '@/assets/images/productes-fitosanitaris.webp';
import Desbrossament from '@/assets/images/desbrossament.jpg';
import Tanques_Perimetrals from '@/assets/images/Tanques Perimetrals.webp';

const services = [
  {
    icon: <Leaf className="w-8 h-8" />,
    title: "Construcció i Manteniment",
    description: "Creem jardins únics i els mantenim amb cura professional durant tot l'any.",
    image: Construcció_i_Manteniment
  },
  {
    icon: <Scissors className="w-8 h-8" />,
    title: "Podes",
    description: "Poda especialitzada per mantenir les teves plantes sanes i amb la forma perfecta.",
    image: podes
  },
  
  {
    icon: <Droplets className="w-8 h-8" />,
    title: "Sistemes de Reg",
    description: "Instal·lació de sistemes de reg eficients per optimitzar l'ús de l'aigua.",
    image: sistemes_de_reg
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Productes Fitosanitaris",
    description: "Tractaments ecològics per protegir les teves plantes de plagues i malalties.",
    image: Productes_Fitosanitaris
  },
  {
    icon: <TreePine className="w-8 h-8" />,
    title: "Desbrossament",
    description: "Neteja i desbrossament de parcel·les per preparar el terreny.",
    image: Desbrossament
  },
  {
    icon: <Fence className="w-8 h-8" />,
    title: "Tanques Perimetrals",
    description: "Instal·lació de tanques i elements de delimitació per al teu jardí.",
    image: Tanques_Perimetrals
  }
];


const Services = () => {
  return (
    <section id="serveis" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 sm:px-12">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Els Nostres Serveis</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Oferim una àmplia gamma de serveis de jardineria per mantenir els teus espais verds perfectes
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="service-card rounded-2xl hover-lift flex flex-col"
            >
              <div className="relative h-48">
                {/* ✅ Optimització: Usem el component Image de Next.js */}
                <Image 
                  src={service.image} 
                  alt={service.title} 
                  fill
                  className="object-cover" 
                />
              </div>
              <div className="p-8 flex-grow flex flex-col">
                <div className="text-green-600 mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed flex-grow">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;