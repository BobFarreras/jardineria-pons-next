// src/components/sections/Contact.jsx
"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Mail, Phone, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from "@/lib/hooks/use-toast";
import { sendEmail } from '@/app/actions';

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [privacyAccepted, setPrivacyAccepted] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    
    const name = formData.get('name')?.toString().trim();
    const email = formData.get('email')?.toString().trim();
    const message = formData.get('message')?.toString().trim();

    if (!name || !email || !message) {
      toast("Camps Incomplets", {
        description: "Si us plau, omple tots els camps obligatoris per continuar.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    const result = await sendEmail(formData);
    setIsSubmitting(false);

    if (result.success) {
      toast("Missatge enviat!", {
        description: "Ens posarem en contacte amb tu aviat.",
      });
      event.target.reset();
      setPrivacyAccepted(false);
    } else {
      toast("Error", {
        description: "Hi ha hagut un problema en enviar el missatge.",
        variant: "destructive",
      });
    }
  };

  return (
    <section id="contacte" className="py-20 bg-green-50">
      <div className="container mx-auto px-6 sm:px-8">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Contacta amb Nosaltres</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Estem aquí per ajudar-te a crear el jardí dels teus somnis
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Email</h3>
                  <p className="text-gray-600">jardinerpons@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Telèfon</h3>
                  <p className="text-gray-600">615 061 164</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <h3 className="font-semibold text-gray-800 mb-4">Horaris d'Atenció</h3>
                <div className="space-y-2 text-gray-600">
                  <p>Dilluns - Divendres: 8:00 - 18:00</p>
                  <p>Dissabte: 9:00 - 14:00</p>
                  <p>Diumenge: Tancat</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white p-8 rounded-2xl shadow-lg"
            >
              <form onSubmit={handleSubmit} className="contact-form space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Nom complet</label>
                  <input
                    type="text" id="name" name="name" required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                    placeholder="El teu nom"
                    disabled={isSubmitting}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input
                    type="email" id="email" name="email" required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                    placeholder="el.teu.email@exemple.com"
                    disabled={isSubmitting}
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Telèfon</label>
                  <input
                    type="tel" id="phone" name="phone"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                    placeholder="123 456 789"
                    disabled={isSubmitting}
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Missatge</label>
                  <textarea
                    id="message" name="message" required rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg resize-none"
                    placeholder="Explica'ns el teu projecte..."
                    disabled={isSubmitting}
                  />
                </div>
                
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="privacy"
                    name="privacy"
                    checked={privacyAccepted}
                    onChange={(e) => setPrivacyAccepted(e.target.checked)}
                    className="h-4 w-4 rounded border-gray-300 text-green-600 focus:ring-green-500"
                  />
                  <label htmlFor="privacy" className="text-sm text-gray-600">
                    He llegit i accepto la 
                    <Link href="/politica-de-privacitat" target="_blank" className="font-semibold text-green-600 hover:underline ml-1">
                      política de privacitat
                    </Link>
                    .
                  </label>
                </div>
                
                <Button
                  type="submit"
                  disabled={isSubmitting || !privacyAccepted}
                  className="w-full gradient-bg text-white font-semibold py-3 rounded-lg transition-opacity duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Enviant...' : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Enviar Missatge
                    </>
                  )}
                </Button>
              </form>
            </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;