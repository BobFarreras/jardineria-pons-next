// src/app/layout.js
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Toaster } from '@/components/ui/toaster';
import './globals.css'; // <--- AQUESTA LÍNIA ÉS CRUCIAL
const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  // ✅ Defineix la base de la teva URL
  metadataBase: new URL('https://www.jardineriapons.com'), // Posa el teu domini real

  title: 'Jardiner Pons - Serveis de Jardineria Professional',
  description: 'Jardiner Pons ofereix serveis professionals de jardineria',
  manifest: '/manifest.webmanifest',

  // ✅ Defineix la URL canònica
  alternates: {
    canonical: '/',
  },

  // ✅ Afegeix les imatges per a xarxes socials
  openGraph: {
    title: 'Jardiner Pons - Serveis de Jardineria Professional',
    description: 'Serveis professionals de jardineria',
    images: [
      {
        url: '/opengraph-image.jpg', // Aquesta imatge ha d'estar a la carpeta /public
        width: 1200,
        height: 630,
        alt: 'Jardí cuidat per Jardiner Pons',
      },
    ],
  },
};

export default function RootLayout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Jardiner Pons",
    "description": "Serveis professionals de jardineria: construcció, manteniment, podes, sistemes de reg i més.",
    "telephone": "+34615061164",
    "email": "jardineriapons@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "[Carrer Puig d'en Vidal]",
      "addressLocality": "[La Bisbal d'Empordà]",
      "postalCode": "[17100]",
      "addressCountry": "ES"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "08:00",
        "closes": "18:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "09:00",
        "closes": "14:00"
      }
    ],
    "url": "https://www.jardineriapons.com" // Important: posa aquí el teu domini real
  };

  return (
    <html lang="ca">
      <body className={inter.className}>
        <div className="min-h-screen bg-white overflow-hidden">
          <Header />
          <main>{children}</main>
          <Footer />
          <Toaster />
        </div>
        {/* ✅ AFEGEIX AIXÒ AQUÍ */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </body>
    </html>
  );
}