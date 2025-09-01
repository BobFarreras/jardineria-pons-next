// src/app/politica-de-privacitat/page.js
import React from 'react';

// Metadata específica per a aquesta pàgina per al SEO
export const metadata = {
  title: 'Política de Privacitat - Jardiner Pons',
  description: 'Consulta la nostra política de privacitat sobre la recollida i ús de dades a Jardiner Pons.',
};

const PrivacyPolicyPage = () => {
  return (
    <div className="bg-white">
      <div className="container mx-auto px-6 sm:px-8 py-16 pt-32 text-gray-700">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">Política de Privacitat</h1>
        
        <p className="mb-4"><strong>Última actualització:</strong> 1 de setembre de 2025</p>

        <p className="mb-6">
          A Jardiner Pons, respectem la teva privacitat i ens comprometem a protegir les teves dades personals. Aquesta política de privacitat informarà sobre com tractem les teves dades quan visites el nostre lloc web i t'informa sobre els teus drets de privacitat.
        </p>

        <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">1. Dades que Recopilem</h2>
        <p className="mb-6">
          Recopilem les dades que ens proporciones directament a través del nostre formulari de contacte, que poden incloure: el teu nom, adreça de correu electrònic i número de telèfon.
        </p>

        <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">2. Com Utilitzem les teves Dades</h2>
        <p className="mb-6">
          Utilitzem les teves dades exclusivament per respondre a les teves consultes i proporcionar-te la informació o els serveis que ens has sol·licitat. No compartirem les teves dades amb tercers sense el teu consentiment explícit.
        </p>

        <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">3. Els Teus Drets</h2>
        <p className="mb-6">
          Tens dret a accedir, rectificar o suprimir les teves dades personals. També pots oposar-te al tractament de les teves dades. Per exercir aquests drets, pots contactar-nos a través de l'adreça de correu electrònic: <strong>jardineriapons@gmail.com</strong>.
        </p>
        
        {/* Afegeix més seccions segons les teves necessitats legals */}
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;