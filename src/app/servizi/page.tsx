'use client';

import Link from 'next/link';
import {
  Users,
  FileText,
  Globe,
  Award,
  Briefcase,
  HeadphonesIcon,
  ArrowRight,
  CheckCircle,
  Shield,
} from 'lucide-react';
import { useLanguage } from '@/lib/language-context';
import { Button, Card, Badge } from '@/components/ui';

export default function Servizi() {
  const { t } = useLanguage();

  const services = [
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Ricerca e selezione personale',
      description: 'Identifichiamo i migliori talenti sanitari per la tua struttura attraverso un processo di selezione accurato e personalizzato.',
      features: [
        'Screening preliminare dei candidati',
        'Verifica referenze e esperienze',
        'Colloqui di pre-selezione',
        'Shortlist candidati qualificati',
        'Supporto durante il colloquio finale',
      ],
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Assistenza visti lavorativi',
      description: 'Supporto completo per il rilascio di visti lavorativi per personale sanitario extracomunitario.',
      features: [
        'Consulenza sulla documentazione necessaria',
        'Assistenza nella compilazione delle domande',
        'Follow-up con autorità competenti',
        'Supporto per rinnovi e variazioni',
        'Gestione tempistiche e scadenze',
      ],
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: 'Traduzione e validazione documenti',
      description: 'Servizio professionale di traduzione e validazione di documenti e certificati professionali.',
      features: [
        'Traduzione certificata di titoli di studio',
        'Traduzione CV e lettere di presentazione',
        'Validazione documenti per uso legale',
        'Apostille e legalizzazioni',
        'Traduzioni giurate',
      ],
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Riconoscimento titoli di studio',
      description: 'Assistenza completa nelle procedure di riconoscimento dei titoli di studio e professionali in Italia.',
      features: [
        'Consulenza sulla procedura di riconoscimento',
        'Preparazione documentazione necessaria',
        'Interfaccia con Ministero della Salute',
        'Supporto per iscrizione albi professionali',
        'Follow-up pratica fino all\'esito',
      ],
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: 'Gestione contrattuale',
      description: 'Supporto nella redazione e gestione dei contratti di lavoro per personale sanitario.',
      features: [
        'Consulenza CCNL sanità',
        'Redazione contratti di assunzione',
        'Gestione pratiche di assunzione',
        'Supporto per adempimenti fiscali',
        'Consulenza normativa del lavoro',
      ],
    },
    {
      icon: <HeadphonesIcon className="w-8 h-8" />,
      title: 'Consulenza HR specializzata',
      description: 'Servizi di consulenza per la gestione delle risorse umane nel settore sanitario.',
      features: [
        'Analisi fabbisogno del personale',
        'Pianificazione organico',
        'Ottimizzazione processi HR',
        'Formazione e sviluppo',
        'Retention del personale',
      ],
    },
  ];

  const processSteps = [
    {
      step: 1,
      title: 'Analisi delle esigenze',
      description: 'Comprendiamo le tue necessità specifiche di recruiting e definiamo insieme il profilo ideale.',
    },
    {
      step: 2,
      title: 'Ricerca e selezione',
      description: 'Identifichiamo i candidati più qualificati nel nostro database e attraverso ricerca attiva.',
    },
    {
      step: 3,
      title: 'Verifica e presentazione',
      description: 'Verifichiamo documenti e referenze, poi presentiamo una shortlist di candidati selezionati.',
    },
    {
      step: 4,
      title: 'Supporto all\'assunzione',
      description: 'Ti accompagniamo in tutte le fasi burocratiche fino all\'inserimento del nuovo collaboratore.',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-50 via-white to-secondary-50 section-padding">
        <div className="container-custom text-center">
          <Badge variant="primary" className="mb-4">I nostri servizi</Badge>
          <h1 className="text-4xl lg:text-5xl font-bold text-neutral-900 mb-6">
            {t('services.title')}
          </h1>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            {t('services.subtitle')}
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} hover className="p-8">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center text-primary-600 flex-shrink-0">
                    {service.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-neutral-900 mb-2">{service.title}</h3>
                    <p className="text-neutral-600 mb-4">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-neutral-700">
                          <CheckCircle className="w-4 h-4 text-secondary-500 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-neutral-900 mb-4">
              Il nostro processo
            </h2>
            <p className="text-neutral-600">
              Un approccio strutturato per garantire risultati di qualità
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold text-neutral-900 mb-2">{item.title}</h3>
                <p className="text-neutral-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-neutral-900 mb-4">
                Perché scegliere MediLinker
              </h2>
              <p className="text-neutral-600 mb-6">
                Con anni di esperienza nel settore sanitario, offriamo un servizio completo
                e professionale che ti accompagna dalla ricerca del candidato fino all'assunzione.
              </p>
              <ul className="space-y-4">
                {[
                  'Team di esperti del settore sanitario',
                  'Database di professionisti verificati',
                  'Supporto completo in ogni fase',
                  'Conformità GDPR garantita',
                  'Assistenza multilingue',
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-secondary-100 rounded-lg flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-secondary-600" />
                    </div>
                    <span className="text-neutral-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Card variant="gradient" className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <Shield className="w-8 h-8 text-primary-600" />
                <h3 className="text-xl font-bold text-neutral-900">Garanzia di qualità</h3>
              </div>
              <p className="text-neutral-600 mb-6">
                Tutti i nostri servizi sono erogati da professionisti qualificati
                e seguono rigidi standard di qualità. La soddisfazione del cliente
                è la nostra priorità.
              </p>
              <div className="bg-white rounded-xl p-4 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-neutral-600">Soddisfazione clienti</span>
                  <span className="font-bold text-primary-600">98%</span>
                </div>
                <div className="w-full bg-neutral-200 rounded-full h-2">
                  <div className="bg-primary-500 h-2 rounded-full" style={{ width: '98%' }} />
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-600">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Hai bisogno di un servizio specifico?
          </h2>
          <p className="text-primary-100 mb-8 max-w-xl mx-auto">
            Contattaci per una consulenza gratuita e scopri come possiamo aiutarti
            a soddisfare le tue esigenze di recruiting sanitario.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contatti">
              <Button
                size="lg"
                className="bg-white text-primary-600 hover:bg-neutral-100"
              >
                Richiedi una consulenza
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
            <Link href="/abbonamenti">
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white/10"
              >
                Scopri i piani
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
