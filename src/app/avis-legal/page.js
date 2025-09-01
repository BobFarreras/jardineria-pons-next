// src/app/avis-legal/page.js
import React from 'react';

export const metadata = {
  title: 'Avís Legal - Jardiner Pons',
  description: 'Avís legal i condicions d\'ús del lloc web de Jardiner Pons.',
};

const LegalNoticePage = () => {
  return (
    <div className="bg-white">
      <div className="container mx-auto px-6 sm:px-8 py-16 pt-32 text-gray-700">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">Avís Legal</h1>

        <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">1. Dades Identificatives</h2>
        <p className="mb-6">
          En compliment amb el deure d'informació, a continuació es reflecteixen les següents dades:
          <ul>
            <li><strong>Titular:</strong> [El teu nom complet o nom de l'empresa]</li>
            <li><strong>CIF/NIF:</strong> [El teu CIF/NIF]</li>
            <li><strong>Domicili:</strong> [La teva adreça]</li>
            <li><strong>Correu electrònic:</strong> jardineriapons@gmail.com</li>
          </ul>
        </p>

        <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">2. Usuaris</h2>
        <p className="mb-6">
          L'accés i/o ús d'aquest portal atribueix la condició d'USUARI, que accepta, des d'aquest accés i/o ús, les Condicions Generals d'Ús aquí reflectides.
        </p>

        <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">3. Propietat Intel·lectual</h2>
        <p className="mb-6">
          Tots els continguts del lloc web, entenent per aquests, a títol merament enunciatiu, els textos, fotografies, gràfics, imatges, icones, tecnologia, programari, links i altres continguts audiovisuals o sonors, així com el seu disseny gràfic i codis font, són propietat intel·lectual de Jardiner Pons o de tercers, sense que puguin entendre's cedits a l'usuari cap dels drets d'explotació reconeguts per la normativa vigent en matèria de propietat intel·lectual sobre els mateixos.
        </p>
      </div>
    </div>
  );
};

export default LegalNoticePage;