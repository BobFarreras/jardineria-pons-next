// src/app/sitemap.js
export default function sitemap() {
    const domain = 'https://www.elteudomini.com'; // Posa el teu domini real
  
    return [
      {
        url: domain,
        lastModified: new Date(),
        priority: 1, // Prioritat de la pàgina d'inici
      },
      {
        url: `${domain}/politica-de-privacitat`,
        lastModified: new Date(),
        priority: 0.5,
      },
      {
        url: `${domain}/avis-legal`,
        lastModified: new Date(),
        priority: 0.5,
      },
    ];
  }