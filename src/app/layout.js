// src/app/layout.js
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Toaster } from '@/components/ui/toaster';
import './globals.css'; // <--- AQUESTA LÍNIA ÉS CRUCIAL
const inter = Inter({ subsets: ['latin'] });

// ✅ Optimització SEO: Aquesta és la nova manera de gestionar metadades
export const metadata = {
  title: 'Jardiner Pons - Serveis de Jardineria Professional',
  description: 'Jardiner Pons ofereix serveis professionals de jardineria: construcció, manteniment, podes, sistemes de reg i més. Creem i cuidem el teu jardí amb passió.',
  manifest: '/manifest.webmanifest', // <-- AFEGEIX AQUESTA LÍNIA
  openGraph: {
    title: 'Jardiner Pons - Serveis de Jardineria Professional',
    description: 'Jardiner Pons ofereix serveis professionals de jardineria: construcció, manteniment, podes, sistemes de reg i més. Creem i cuidem el teu jardí amb passió.',
  },
};

// src/app/layout.js
// ...
export default function RootLayout({ children }) {
  return (
    <html lang="ca">
      <body className={inter.className}>
        <div className="min-h-screen bg-white">
          <Header /> {/* ❌ Sense la prop scrollToSection */}
          <main>{children}</main>
          <Footer /> {/* ❌ Sense la prop scrollToSection */}
          <Toaster />
        </div>
      </body>
    </html>
  );
}