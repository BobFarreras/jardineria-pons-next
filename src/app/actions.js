// src/app/actions.js
"use server";

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData) => {
  const name = formData.get('name');
  const email = formData.get('email');
  const phone = formData.get('phone') || 'No especificat';
  const message = formData.get('message');

  // Validació al servidor
  if (!name || !email || !message) {
    return { success: false, error: "Falten camps obligatoris." };
  }

  // Obtenim la data i l'any actuals per a la plantilla
  const currentDate = new Date().toLocaleDateString('ca-ES', {
    year: 'numeric', month: 'long', day: 'numeric',
    hour: '2-digit', minute: '2-digit'
  });
  const currentYear = new Date().getFullYear();

  // Plantilla HTML personalitzada per a Jardineria Pons
  const emailHtml = `
  <!DOCTYPE html>
  <html lang="ca">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Nou Missatge de Contacte - Jardiner Pons</title>
      <style>
          body, table, td, a { -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; }
          table, td { mso-table-lspace: 0pt; mso-table-rspace: 0pt; }
          img { -ms-interpolation-mode: bicubic; border: 0; height: auto; line-height: 100%; outline: none; text-decoration: none; }
          body { margin: 0 !important; padding: 0 !important; width: 100% !important; background-color: #f4f7f6; font-family: Arial, sans-serif; }
          .email-container { max-width: 600px; width: 100%; margin: 0 auto; }
          @media screen and (max-width: 600px) { .email-container { width: 100% !important; } }
      </style>
  </head>
  <body style="margin:0; padding:0; background-color:#f4f7f6;">
      <div style="display:none; max-height:0; overflow:hidden; font-size:1px; line-height:1px; color:#ffffff; opacity:0;">
          Has rebut un nou missatge des de jardinerpons.com
      </div>
      <table border="0" cellpadding="0" cellspacing="0" width="100%">
          <tr>
              <td align="center">
                  <table border="0" cellpadding="0" cellspacing="0" width="100%" class="email-container">
                      <tr>
                          <td align="center" style="background-color:#16a34a; padding:20px 10px;">
                              <h1 style="margin:0; font-size:24px; font-weight:bold; color:#ffffff;">
                                  🌿 Jardiner Pons
                              </h1>
                          </td>
                      </tr>
                      <tr>
                          <td style="background-color:#ffffff; padding:40px 30px;">
                              <h2 style="margin:0 0 20px 0; font-size:22px; font-weight:bold; color:#333333; text-align:center;">
                                  Has rebut un nou missatge
                              </h2>
                              <p style="margin:0 0 25px 0; font-size:16px; line-height:24px; color:#555555; text-align:center;">
                                  Aquestes són les dades enviades des del formulari de contacte.
                              </p>
                              <hr style="border:0; border-top:1px solid #eeeeee; margin:25px 0;">
                              
                              <h3 style="margin:0 0 20px 0; font-size:18px; font-weight:bold; color:#16a34a;">
                                  Dades del Contacte
                              </h3>
                              <p style="margin:0 0 10px 0; font-size:16px; line-height:24px; color:#555555;">
                                  <strong>👤 Nom:</strong> ${name}
                              </p>
                              <p style="margin:0 0 10px 0; font-size:16px; line-height:24px; color:#555555;">
                                  <strong>📧 Email:</strong> 
                                  <a href="mailto:${email}" style="color:#555555; text-decoration:none;">${email}</a>
                              </p>
                              <p style="margin:0 0 10px 0; font-size:16px; line-height:24px; color:#555555;">
                                  <strong>📞 Telèfon:</strong> ${phone}
                              </p>
                              
                              <hr style="border:0; border-top:1px solid #eeeeee; margin:25px 0;">

                              <h3 style="margin:0 0 15px 0; font-size:18px; font-weight:bold; color:#16a34a;">
                                  Missatge
                              </h3>
                              <div style="background-color:#f8f9fa; border-left:4px solid #22c55e; padding:15px 20px; font-size:16px; line-height:24px; color:#555555;">
                                  <p style="margin:0;"><i>"${message}"</i></p>
                              </div>
                          </td>
                      </tr>
                      <tr>
                          <td style="background-color:#ecf0f1; padding:20px 30px; text-align:center;">
                              <p style="margin:0 0 10px 0; font-size:12px; line-height:18px; color:#888888;">
                                  Pots respondre directament a aquest correu per contactar amb ${name}.
                              </p>
                              <p style="margin:0; font-size:12px; line-height:18px; color:#888888;">
                                  Enviat el: ${currentDate}
                              </p>
                              <p style="margin:10px 0 0 0; font-size:12px; line-height:18px; color:#888888;">
                                  &copy; ${currentYear} Jardiner Pons. Tots els drets reservats.
                              </p>
                          </td>
                      </tr>
                  </table>
              </td>
          </tr>
      </table>
  </body>
  </html>
  `;

  try {
    await resend.emails.send({
      to: 'matutano8@gmail.com', // El teu correu
      from: 'Jardiner Pons <onboarding@resend.dev>',
      subject: `Nou missatge de contacte de ${name}`,
      reply_to: email,
      html: emailHtml,
    });
    return { success: true };
  } catch (error) {
    console.error('Error de Resend:', error);
    return { success: false };
  }
};