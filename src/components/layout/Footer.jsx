// src/components/layout/Footer.jsx
import React from 'react';
import Link from 'next/link'; // ✅ Importem Link per a la navegació
import { Leaf } from 'lucide-react';

// ❌ Ja no necessitem la prop 'scrollToSection'
const Footer = () => {
  const navItems = [
    { label: 'Inici', href: '/#inici' },
    { label: 'Serveis', href: '/#serveis' },
    { label: 'Projectes', href: '/#projectes' },
    { label: 'Galeria', href: '/#galeria' },
    { label: 'Testimonis', href: '/#testimonis' },
    { label: 'Contacte', href: '/#contacte' },
  ];

  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                <Leaf className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">Jardiner Pons</span>
            </div>
            <p className="text-gray-400">
              Professionals en jardineria amb anys d'experiència creant espais verds únics.
            </p>
          </div>

          <div>
            <span className="text-lg font-semibold mb-4 block">Enllaços Ràpids</span>
            <div className="space-y-2">
              {navItems.map((item) => (
                // ✅ Utilitzem Link en lloc de button per a la navegació
                <Link
                  key={item.label}
                  href={item.href}
                  className="block text-gray-400 hover:text-green-400 transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <span className="text-lg font-semibold mb-4 block">Contacte</span>
            <div className="space-y-2 text-gray-400">
              <p>📧 jardinerpons@gmail.com</p>
              <p>📞 615 061 164</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <div className="flex justify-center gap-6 mb-4">
            {/* ✅ NOUS ENLLAÇOS LEGALS */}
            <Link href="/politica-de-privacitat" className="text-sm text-gray-400 hover:text-green-400">
              Política de Privacitat
            </Link>
            <Link href="/avis-legal" className="text-sm text-gray-400 hover:text-green-400">
              Avís Legal
            </Link>
          </div>
          <p>&copy; {new Date().getFullYear()} Jardiner Pons. Tots els drets reservats.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;