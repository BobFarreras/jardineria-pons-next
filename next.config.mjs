/*
Aixo es per a Vercel!
/** @type {import('next').NextConfig} 
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'images.unsplash.com',
        },
        {
          protocol: 'https',
          hostname: 'randomuser.me',
        },
        {
          protocol: 'https',
          hostname: 'horizons-cdn.hostinger.com',
        },
      ],
    },
  };

export default nextConfig; 
*/

/** @type {import('next').NextConfig} */
const nextConfig = {
  // ✅ Activa l'exportació estàtica
  output: 'export',

  // ✅ Desactiva l'optimització d'imatges en temps real
  // i permet utilitzar imatges externes sense configuració addicional.
  images: {
    unoptimized: true,
  },
};

// Ara (sintaxi moderna - ES Modules)
export default nextConfig;