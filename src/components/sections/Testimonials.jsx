// src/components/sections/Testimonials.jsx
"use client"; // Necessari per les animacions 'whileInView'

import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
  {
    name: "Laura M.",
    avatar: "https://randomuser.me/api/portraits/women/34.jpg",
    rating: 5,
    text: "Un servei impecable! El nostre jardí mai havia estat tan bonic. Són uns veritables professionals, atents a cada detall. Totalment recomanables!",
  },
  {
    name: "Carles B.",
    avatar: "https://randomuser.me/api/portraits/men/45.jpg",
    rating: 5,
    text: "La transformació del nostre pati ha estat espectacular. En Mercel va captar la idea a la perfecció. Ara gaudim cada dia del nostre petit oasi.",
  },
  {
    name: "Família Soler",
    avatar: "https://randomuser.me/api/portraits/lego/1.jpg",
    rating: 5,
    text: "Molt contents amb el manteniment del nostre jardí. Són puntuals, eficients i el tracte és excel·lent. La gespa està sempre verda i les plantes sanes.",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonis" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Què diuen els nostres clients?</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            La satisfacció dels nostres clients és la nostra millor carta de presentació.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="testimonial-card p-8 rounded-2xl flex flex-col"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Quote className="w-8 h-8 text-green-600 mb-4" />
              <p className="text-gray-600 italic mb-6 flex-grow">"{testimonial.text}"</p>
              <div className="flex items-center">
                <Avatar className="h-12 w-12 mr-4">
                  {/* El component AvatarImage de shadcn ja optimitza la imatge internament */}
                  <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                  <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div className="flex-grow">
                  <p className="font-semibold text-gray-800">{testimonial.name}</p>
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;