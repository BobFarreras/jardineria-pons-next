// src/app/actions.js
"use server"; // <-- Això defineix que totes les funcions d'aquest fitxer s'executen al servidor

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData) => {
  const name = formData.get('name');
  const email = formData.get('email');
  const phone = formData.get('phone');
  const message = formData.get('message');

  try {
    await resend.emails.send({
      from: 'Jardiner Pons <onboarding@resend.dev>', // Correu que envia (per defecte de Resend)
      to: 'matutano8@gmail.com', // El teu correu on rebràs els missatges
      subject: `Nou missatge de contacte de ${name}`,
      reply_to: email,
      html: `
        <h1>Nou Missatge de la Web</h1>
        <p><strong>Nom:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Telèfon:</strong> ${phone}</p>
        <hr />
        <p><strong>Missatge:</strong></p>
        <p>${message}</p>
      `,
    });
    return { success: true };
  } catch (error) {
    console.error('Error enviant el correu:', error);
    return { success: false };
  }
};