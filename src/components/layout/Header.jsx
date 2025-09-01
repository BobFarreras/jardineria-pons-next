// src/components/layout/Header.jsx
"use client"; // Necessari per estats (useState), efectes (useEffect) i esdeveniments (onClick)

import React, { useState, useEffect } from 'react';
import Link from 'next/link'; // ✅ Importem Link per a la navegació
import { motion } from 'framer-motion';
import { Menu, X, Leaf } from 'lucide-react';
import Image from 'next/image'; // <-- Importem el component Image
import logoPons from '@/assets/images/logo.png'; // <-- Importem el teu logo


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Inici', href: '/#inici' },
    { label: 'Serveis', href: '/#serveis' },
    { label: 'Projectes', href: '/#projectes' },
    { label: 'Galeria', href: '/#galeria' },
    { label: 'Testimonis', href: '/#testimonis' },
    { label: 'Contacte', href: '/#contacte' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/#inici" className="flex items-center space-x-2 cursor-pointer">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center space-x-3" // Un pèl més d'espai
            >
              {/* ✅ AQUÍ HEM FET EL CANVI */}
              <Image 
                src={logoPons} 
                alt="Logo de Jardineria Pons" 
                width={70} 
                height={70} 
                className="rounded-full" // Opcional: si vols que el logo sigui rodó
              />
              <span className={`text-xl font-bold ${isScrolled ? 'text-gray-800' : 'text-white'}`}>
              
              </span>
            </motion.div>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              // ✅ Utilitzem Link en lloc de button per a la navegació
              <Link key={item.label} href={item.href} passHref>
                <motion.span
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`nav-link font-medium cursor-pointer ${
                    isScrolled ? 'text-gray-700 hover:text-green-600' : 'text-white hover:text-green-200'
                  }`}
                >
                  {item.label}
                </motion.span>
              </Link>
            ))}
          </div>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden p-2 rounded-lg ${isScrolled ? 'text-gray-700' : 'text-white'}`}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-4 py-4 bg-white rounded-lg shadow-lg"
          >
            {navItems.map((item) => (
              <Link key={item.label} href={item.href} passHref>
                <span
                  onClick={() => setIsMenuOpen(false)}
                  className="block w-full text-left px-4 py-2 text-gray-700 hover:text-green-600 hover:bg-green-50 cursor-pointer"
                >
                  {item.label}
                </span>
              </Link>
            ))}
          </motion.div>
        )}
      </nav>
    </header>
  );
};

export default Header;