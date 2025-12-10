'use client';

import Link from 'next/link';
import {
  Building2,
  Users,
  Search,
  FileCheck,
  Shield,
  HeadphonesIcon,
  Globe,
  CreditCard,
  ArrowRight,
  CheckCircle,
  Star,
} from 'lucide-react';
import { useLanguage } from '@/lib/language-context';
import { Button, Card, Badge } from '@/components/ui';

export default function PerLeAziende() {
  const { t } = useLanguage();

  const benefits = [
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Database di professionisti qualificati',
      description: 'Accedi a centinaia di professionisti sanitari verificati, con competenze e esperienze documentate.',
    },
    {
      icon: <Search className="w-6 h-6" />,
      title: 'Filtri di ricerca avanzati',
      description: 'Trova il candidato ideale filtrando per specializzazione, esperienza, lingue, disponibilità e molto altro.',
    },
    {
      icon: <FileCheck className="w-6 h-6" />,
      title: 'Documenti verificati',
      description: 'Visualizza CV, certificati e documenti già verificati dal nostro team di esperti.',
    },
    {
      icon: <HeadphonesIcon className="w-6 h-6" />,
      title: 'Assistenza completa',
      description: 'Ti supportiamo in ogni fase: dalla selezione all\'assunzione, incluse pratiche burocratiche.',
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: 'Supporto visti e titoli',
      description: 'Assistenza per rilascio visti lavorativi e riconoscimento titoli di studio esteri.',
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Sicurezza garantita',
      description: 'Conformità GDPR totale e protezione dei dati con i più alti standard di sicurezza.',
    },
  ];

  const requirements = [
    'Partita IVA attiva',
    'Ragione sociale e indirizzo sede legale',
    'Indirizzo PEC aziendale',
    'Numero REA della Camera di Commercio',
    'Referente aziendale con contatti',
  ];

  const facilityTypes = [
    { name: 'Ospedali', icon: '🏥' },
    { name: 'RSA', icon: '🏠' },
    { name: 'Cliniche private', icon: '⚕️' },
    { name: 'Agenzie per il lavoro', icon: '🏢' },
    { name: 'Centri medici', icon: '🩺' },
    { name: 'Studi medici', icon: '👨‍⚕️' },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-secondary-50 via-white to-primary-50 section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="secondary" className="mb-4">Per le strutture sanitarie</Badge>
              <h1 className="text-4xl lg:text-5xl font-bold text-neutral-900 mb-6">
                {t('forCompanies.title')}
              </h1>
              <p className="text-lg text-neutral-600 mb-8">
                {t('forCompanies.subtitle')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/registrati">
                  <Button size="lg">
                    <Building2 className="w-5 h-5 mr-2" />
                    {t('forCompanies.cta')}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
                <Link href="/abbonamenti">
                  <Button variant="outline" size="lg">
                    <CreditCard className="w-5 h-5 mr-2" />
                    Vedi i piani
                  </Button>
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-elevated p-8">
              <h3 className="text-lg font-semibold text-neutral-800 mb-6">
                Tipologie di strutture che ci scelgono
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {facilityTypes.map((type, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-4 bg-neutral-50 rounded-xl hover:bg-secondary-50 transition-colors"
                  >
                    <span className="text-2xl">{type.icon}</span>
                    <span className="font-medium text-neutral-700">{type.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-neutral-900 mb-4">
              {t('forCompanies.benefits.title')}
            </h2>
            <p className="text-neutral-600">
              Medlinker offre tutti gli strumenti necessari per trovare e assumere personale sanitario qualificato.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} hover className="p-6">
                <div className="w-12 h-12 bg-secondary-100 rounded-xl flex items-center justify-center text-secondary-600 mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-neutral-600 text-sm">
                  {benefit.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works for Companies */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-neutral-900 mb-12 text-center">
            Come funziona per le aziende
          </h2>

          <div className="grid lg:grid-cols-4 gap-8">
            {[
              {
                step: 1,
                title: 'Registrati',
                description: 'Crea il tuo account aziendale con i dati della tua struttura sanitaria.',
              },
              {
                step: 2,
                title: 'Cerca',
                description: 'Utilizza i filtri avanzati per trovare i profili più adatti alle tue esigenze.',
              },
              {
                step: 3,
                title: 'Abbonati',
                description: 'Scegli il piano di abbonamento più adatto per contattare i candidati.',
              },
              {
                step: 4,
                title: 'Assumi',
                description: 'Contatta i candidati e gestisci l\'assunzione con il nostro supporto.',
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-16 h-16 bg-secondary-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-neutral-900 mb-2">{item.title}</h3>
                <p className="text-neutral-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-neutral-900 mb-4">
                {t('forCompanies.requirements.title')}
              </h2>
              <p className="text-neutral-600 mb-6">
                Per registrare la tua struttura sanitaria su Medlinker, assicurati di avere a portata di mano i seguenti documenti:
              </p>
              <ul className="space-y-4">
                {requirements.map((req, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-secondary-100 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 text-secondary-600" />
                    </div>
                    <span className="text-neutral-700">{req}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Card variant="gradient" className="p-8">
              <div className="flex items-center gap-2 mb-4">
                <Star className="w-5 h-5 text-accent-500" />
                <span className="font-medium text-accent-600">Registrazione veloce</span>
              </div>
              <h3 className="text-2xl font-bold text-neutral-900 mb-4">
                Inizia in meno di 5 minuti
              </h3>
              <p className="text-neutral-600 mb-6">
                Il processo di registrazione è semplice e veloce. Una volta verificati i tuoi dati,
                potrai subito iniziare a cercare i professionisti più adatti alla tua struttura.
              </p>
              <Link href="/registrati">
                <Button size="lg" className="w-full">
                  Registra la tua azienda
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="section-padding bg-secondary-600">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="w-6 h-6 text-accent-400 fill-current" />
              ))}
            </div>
            <blockquote className="text-2xl text-white mb-6 italic">
              "Grazie a Medlinker abbiamo trovato personale qualificato in tempi record.
              Il supporto del team è stato fondamentale per gestire tutte le pratiche burocratiche."
            </blockquote>
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-white font-bold">
                MR
              </div>
              <div className="text-left">
                <p className="text-white font-medium">Marco Rossi</p>
                <p className="text-secondary-200 text-sm">HR Manager, Clinica Privata Milano</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <Card className="p-8 lg:p-12 text-center bg-gradient-to-r from-secondary-500 to-secondary-600">
            <h2 className="text-3xl font-bold text-white mb-4">
              Pronto a trovare i migliori professionisti?
            </h2>
            <p className="text-secondary-100 mb-8 max-w-xl mx-auto">
              Registrati oggi e accedi al nostro database di professionisti sanitari verificati.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/registrati">
                <Button
                  size="lg"
                  className="bg-white text-secondary-600 hover:bg-neutral-100"
                >
                  Inizia gratuitamente
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <Link href="/contatti">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white/10"
                >
                  Parla con un consulente
                </Button>
              </Link>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}
