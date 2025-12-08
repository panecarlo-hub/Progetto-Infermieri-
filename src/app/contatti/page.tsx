'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  MessageCircle,
  Send,
  CheckCircle,
} from 'lucide-react';
import { useLanguage } from '@/lib/language-context';
import { Button, Card, Input } from '@/components/ui';

export default function Contatti() {
  const { t } = useLanguage();
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: t('contacts.info.email'),
      value: 'info@medilinker.it',
      href: 'mailto:info@medilinker.it',
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: t('contacts.info.phone'),
      value: '+39 02 1234 5678',
      href: 'tel:+390212345678',
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: t('contacts.info.address'),
      value: 'Via Milano 123, 20121 Milano (MI)',
      href: null,
    },
    {
      icon: <Clock className="w-6 h-6" />,
      label: t('contacts.info.hours'),
      value: t('contacts.info.hoursValue'),
      href: null,
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-50 via-white to-secondary-50 section-padding">
        <div className="container-custom text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-neutral-900 mb-6">
            {t('contacts.title')}
          </h1>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            {t('contacts.subtitle')}
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="p-8">
                <h2 className="text-2xl font-bold text-neutral-900 mb-6">
                  Inviaci un messaggio
                </h2>

                {formSubmitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-8 h-8 text-green-500" />
                    </div>
                    <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                      {t('contacts.form.success')}
                    </h3>
                    <p className="text-neutral-600">
                      Ti risponderemo il prima possibile.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <Input
                        label={t('contacts.form.name')}
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Mario Rossi"
                      />
                      <Input
                        label={t('contacts.form.email')}
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="mario@email.com"
                      />
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                      <Input
                        label={t('contacts.form.phone')}
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+39 123 456 7890"
                      />
                      <Input
                        label={t('contacts.form.company')}
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Nome azienda"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-neutral-700 mb-1.5">
                        {t('contacts.form.subject')}
                      </label>
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2.5 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      >
                        <option value="">Seleziona un argomento</option>
                        <option value="info">Informazioni generali</option>
                        <option value="employer">Sono una struttura sanitaria</option>
                        <option value="worker">Sono un professionista sanitario</option>
                        <option value="partnership">Proposta di partnership</option>
                        <option value="support">Supporto tecnico</option>
                        <option value="other">Altro</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-neutral-700 mb-1.5">
                        {t('contacts.form.message')}
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        placeholder="Scrivi il tuo messaggio qui..."
                        className="w-full px-4 py-2.5 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 resize-none"
                      />
                    </div>
                    <Button type="submit" size="lg" className="w-full md:w-auto">
                      <Send className="w-4 h-4 mr-2" />
                      {t('contacts.form.submit')}
                    </Button>
                  </form>
                )}
              </Card>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <Card variant="gradient" className="p-6">
                <h3 className="text-lg font-semibold text-neutral-900 mb-4">
                  {t('contacts.info.title')}
                </h3>
                <div className="space-y-4">
                  {contactInfo.map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600 flex-shrink-0">
                        {item.icon}
                      </div>
                      <div>
                        <p className="text-sm text-neutral-500">{item.label}</p>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="text-neutral-800 font-medium hover:text-primary-500 transition-colors"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-neutral-800 font-medium">{item.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              {/* WhatsApp CTA */}
              <Card className="p-6 bg-green-50 border border-green-200">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-900">Preferisci WhatsApp?</h3>
                    <p className="text-sm text-neutral-600">Rispondiamo in pochi minuti</p>
                  </div>
                </div>
                <a
                  href="https://wa.me/390212345678"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="w-full bg-green-500 hover:bg-green-600">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    {t('contacts.whatsapp')}
                  </Button>
                </a>
              </Card>

              {/* FAQ Link */}
              <Card className="p-6">
                <h3 className="font-semibold text-neutral-900 mb-2">Hai domande frequenti?</h3>
                <p className="text-sm text-neutral-600 mb-4">
                  Consulta la nostra sezione FAQ per trovare risposte immediate alle domande più comuni.
                </p>
                <Link href="/abbonamenti#faq">
                  <Button variant="outline" className="w-full">
                    Vai alle FAQ
                  </Button>
                </Link>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section (Placeholder) */}
      <section className="bg-neutral-100">
        <div className="h-96 flex items-center justify-center">
          <div className="text-center">
            <MapPin className="w-12 h-12 text-neutral-400 mx-auto mb-4" />
            <p className="text-neutral-500">
              Mappa interattiva - Via Milano 123, 20121 Milano
            </p>
            <p className="text-sm text-neutral-400 mt-2">
              Qui verrà integrata una mappa Google Maps o simile
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-600">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Non hai ancora trovato quello che cerchi?
          </h2>
          <p className="text-primary-100 mb-8 max-w-xl mx-auto">
            Il nostro team è a tua disposizione per qualsiasi esigenza.
            Non esitare a contattarci!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+390212345678">
              <Button
                size="lg"
                className="bg-white text-primary-600 hover:bg-neutral-100"
              >
                <Phone className="w-4 h-4 mr-2" />
                Chiamaci ora
              </Button>
            </a>
            <a href="mailto:info@medilinker.it">
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white/10"
              >
                <Mail className="w-4 h-4 mr-2" />
                Invia email
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
