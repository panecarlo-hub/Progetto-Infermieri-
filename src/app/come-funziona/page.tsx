'use client';

import Link from 'next/link';
import {
  UserPlus,
  Search,
  FileCheck,
  MessageCircle,
  Briefcase,
  Shield,
  Building2,
  Stethoscope,
  ArrowRight,
  CheckCircle,
} from 'lucide-react';
import { useLanguage } from '@/lib/language-context';
import { Button, Card } from '@/components/ui';

export default function ComeFunziona() {
  const { t } = useLanguage();

  const workerSteps = [
    {
      icon: <UserPlus className="w-8 h-8" />,
      title: 'Crea il tuo profilo',
      description: 'Registrati gratuitamente e completa il tuo profilo professionale con esperienze, titoli di studio, specializzazioni e documenti.',
      details: [
        'Registrazione gratuita in pochi minuti',
        'Upload CV e documenti',
        'Inserimento esperienza lavorativa',
        'Indicazione specializzazioni e lingue',
      ],
    },
    {
      icon: <FileCheck className="w-8 h-8" />,
      title: 'Verifica del profilo',
      description: 'Il nostro team verifica i tuoi documenti e certificati per garantire l\'autenticità del tuo profilo professionale.',
      details: [
        'Controllo documenti di identità',
        'Verifica titoli di studio',
        'Validazione iscrizione albo',
        'Certificazione profilo completo',
      ],
    },
    {
      icon: <Search className="w-8 h-8" />,
      title: 'Diventa visibile',
      description: 'Il tuo profilo sarà visibile alle strutture sanitarie italiane che cercano professionisti qualificati come te.',
      details: [
        'Presenza nel database professionale',
        'Visibilità per centinaia di aziende',
        'Notifiche per opportunità compatibili',
        'Supporto nella candidatura',
      ],
    },
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: 'Ricevi proposte',
      description: 'Le aziende interessate ti contatteranno attraverso la piattaforma. Noi ti supportiamo in ogni fase del processo.',
      details: [
        'Contatti diretti dalle aziende',
        'Assistenza nelle trattative',
        'Supporto burocratico completo',
        'Accompagnamento all\'assunzione',
      ],
    },
  ];

  const employerSteps = [
    {
      icon: <Building2 className="w-8 h-8" />,
      title: 'Registra la tua azienda',
      description: 'Crea un account aziendale inserendo i dati della tua struttura sanitaria per accedere alla piattaforma.',
      details: [
        'Inserimento dati aziendali',
        'Verifica Partita IVA e REA',
        'Configurazione account aziendale',
        'Attivazione profilo struttura',
      ],
    },
    {
      icon: <Search className="w-8 h-8" />,
      title: 'Cerca nel database',
      description: 'Utilizza i nostri filtri avanzati per trovare professionisti con le competenze e l\'esperienza che cerchi.',
      details: [
        'Filtro per specializzazione',
        'Ricerca per esperienza',
        'Selezione per lingue parlate',
        'Visualizzazione profili verificati',
      ],
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: 'Scegli un abbonamento',
      description: 'Attiva un piano di abbonamento per sbloccare la possibilità di contattare i candidati che ti interessano.',
      details: [
        'Piani flessibili mensili/annuali',
        'Contatti illimitati disponibili',
        'Accesso documenti verificati',
        'Supporto dedicato incluso',
      ],
    },
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: 'Contatta i candidati',
      description: 'Entra in contatto con i professionisti selezionati e gestisci l\'intero processo di assunzione con il nostro supporto.',
      details: [
        'Messaggistica integrata',
        'Assistenza pratiche burocratiche',
        'Supporto visti e permessi',
        'Gestione contrattuale',
      ],
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-50 via-white to-secondary-50 section-padding">
        <div className="container-custom text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-neutral-900 mb-6">
            {t('howItWorks.title')}
          </h1>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            MediLinker rende semplice e sicuro l'incontro tra professionisti sanitari e strutture mediche.
            Ecco come funziona per ogni tipo di utente.
          </p>
        </div>
      </section>

      {/* For Workers Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-14 h-14 bg-primary-500 rounded-xl flex items-center justify-center">
              <Stethoscope className="w-7 h-7 text-white" />
            </div>
            <div>
              <h2 className="text-2xl lg:text-3xl font-bold text-neutral-900">
                Per i professionisti sanitari
              </h2>
              <p className="text-neutral-600">Registrazione gratuita e accesso a centinaia di opportunità</p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {workerSteps.map((step, index) => (
              <Card key={index} variant="bordered" className="p-6" hover>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center text-primary-600">
                      {step.icon}
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-sm font-bold text-primary-500">STEP {index + 1}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-neutral-900 mb-2">{step.title}</h3>
                    <p className="text-neutral-600 mb-4">{step.description}</p>
                    <ul className="space-y-2">
                      {step.details.map((detail, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-neutral-600">
                          <CheckCircle className="w-4 h-4 text-secondary-500 flex-shrink-0" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link href="/registrati">
              <Button size="lg">
                <Stethoscope className="w-5 h-5 mr-2" />
                Crea il tuo profilo gratuito
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* For Employers Section */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-14 h-14 bg-secondary-500 rounded-xl flex items-center justify-center">
              <Building2 className="w-7 h-7 text-white" />
            </div>
            <div>
              <h2 className="text-2xl lg:text-3xl font-bold text-neutral-900">
                Per le strutture sanitarie
              </h2>
              <p className="text-neutral-600">Trova i migliori professionisti per la tua struttura</p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {employerSteps.map((step, index) => (
              <Card key={index} className="p-6" hover>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-secondary-100 rounded-xl flex items-center justify-center text-secondary-600">
                      {step.icon}
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-sm font-bold text-secondary-500">STEP {index + 1}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-neutral-900 mb-2">{step.title}</h3>
                    <p className="text-neutral-600 mb-4">{step.description}</p>
                    <ul className="space-y-2">
                      {step.details.map((detail, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-neutral-600">
                          <CheckCircle className="w-4 h-4 text-primary-500 flex-shrink-0" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link href="/per-le-aziende">
              <Button variant="secondary" size="lg">
                <Building2 className="w-5 h-5 mr-2" />
                Registra la tua azienda
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <Card variant="gradient" className="p-8 lg:p-12">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="w-16 h-16 bg-primary-500 rounded-2xl flex items-center justify-center mb-6">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-2xl lg:text-3xl font-bold text-neutral-900 mb-4">
                  Sicurezza e conformità GDPR
                </h2>
                <p className="text-neutral-600 mb-6">
                  La protezione dei tuoi dati è la nostra priorità. MediLinker è conforme al GDPR e utilizza
                  i più alti standard di sicurezza per proteggere le informazioni personali e i documenti sensibili.
                </p>
                <ul className="space-y-3">
                  {[
                    'Documenti visibili solo nel browser, mai scaricabili',
                    'Crittografia end-to-end per tutti i dati',
                    'Livelli di permesso differenziati',
                    'Verifica identità per tutti gli utenti',
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-secondary-500 flex-shrink-0" />
                      <span className="text-neutral-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-4 bg-green-50 rounded-xl">
                    <CheckCircle className="w-6 h-6 text-green-500" />
                    <span className="font-medium text-green-700">Conformità GDPR verificata</span>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-blue-50 rounded-xl">
                    <Shield className="w-6 h-6 text-blue-500" />
                    <span className="font-medium text-blue-700">Dati criptati SSL/TLS</span>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-purple-50 rounded-xl">
                    <FileCheck className="w-6 h-6 text-purple-500" />
                    <span className="font-medium text-purple-700">Documenti protetti</span>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-600">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Pronto a iniziare?
          </h2>
          <p className="text-primary-100 mb-8 max-w-xl mx-auto">
            Registrati oggi e scopri tutte le opportunità che MediLinker può offrirti.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/registrati">
              <Button
                size="lg"
                className="bg-white text-primary-600 hover:bg-neutral-100"
              >
                Inizia ora - È gratis
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
            <Link href="/contatti">
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white/10"
              >
                Hai domande? Contattaci
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
