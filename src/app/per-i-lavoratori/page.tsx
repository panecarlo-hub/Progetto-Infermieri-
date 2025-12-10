'use client';

import Link from 'next/link';
import {
  Stethoscope,
  UserPlus,
  FileText,
  Globe,
  Award,
  HeadphonesIcon,
  Shield,
  Briefcase,
  ArrowRight,
  CheckCircle,
  Star,
} from 'lucide-react';
import { useLanguage } from '@/lib/language-context';
import { Button, Card, Badge } from '@/components/ui';

export default function PerILavoratori() {
  const { t } = useLanguage();

  const benefits = [
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: 'Visibilità presso centinaia di strutture',
      description: 'Il tuo profilo sarà visibile a ospedali, RSA, cliniche private e centri medici in tutta Italia.',
    },
    {
      icon: <UserPlus className="w-6 h-6" />,
      title: 'Registrazione completamente gratuita',
      description: 'Crea il tuo profilo professionale senza alcun costo. È gratis per sempre.',
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: 'Traduzione documenti automatica',
      description: 'I tuoi documenti vengono tradotti automaticamente per facilitare la valutazione da parte delle aziende.',
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: 'Riconoscimento titoli in Italia',
      description: 'Ti supportiamo nelle procedure di riconoscimento dei tuoi titoli di studio in Italia.',
    },
    {
      icon: <HeadphonesIcon className="w-6 h-6" />,
      title: 'Assistenza dedicata',
      description: 'Un team di esperti ti accompagna in ogni fase, dalla candidatura all\'assunzione.',
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Protezione dei tuoi dati',
      description: 'I tuoi documenti e dati personali sono protetti secondo gli standard GDPR europei.',
    },
  ];

  const profileItems = [
    'Dati personali e contatti',
    'Formazione accademica e specializzazioni',
    'Esperienza lavorativa dettagliata',
    'Iscrizione ad albi professionali',
    'Documenti e certificati (CV, diplomi, etc.)',
    'Lingue parlate e livello di competenza',
    'Disponibilità lavorativa',
  ];

  const specializations = [
    'Infermiere/a',
    'OSS',
    'Fisioterapista',
    'Medico',
    'Ostetrica',
    'Tecnico di laboratorio',
    'Tecnico di radiologia',
    'Logopedista',
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-50 via-white to-secondary-50 section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="primary" className="mb-4">Per i professionisti sanitari</Badge>
              <h1 className="text-4xl lg:text-5xl font-bold text-neutral-900 mb-6">
                {t('forWorkers.title')}
              </h1>
              <p className="text-lg text-neutral-600 mb-8">
                {t('forWorkers.subtitle')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link href="/registrati">
                  <Button size="lg">
                    <Stethoscope className="w-5 h-5 mr-2" />
                    {t('forWorkers.cta')}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
                <Link href="/come-funziona">
                  <Button variant="outline" size="lg">
                    Come funziona
                  </Button>
                </Link>
              </div>
              <div className="flex items-center gap-3 p-4 bg-green-50 rounded-xl inline-flex">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-green-700 font-medium">100% gratuito per i professionisti</span>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-elevated p-8">
              <h3 className="text-lg font-semibold text-neutral-800 mb-6">
                Professionisti che cerchiamo
              </h3>
              <div className="flex flex-wrap gap-2">
                {specializations.map((spec, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-primary-50 text-primary-700 rounded-full text-sm font-medium"
                  >
                    {spec}
                  </span>
                ))}
              </div>
              <p className="text-neutral-500 text-sm mt-4">
                E molte altre specializzazioni del settore sanitario
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-neutral-900 mb-4">
              {t('forWorkers.benefits.title')}
            </h2>
            <p className="text-neutral-600">
              MedLinker ti offre tutti gli strumenti per trovare la tua prossima opportunità professionale in Italia.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} hover className="p-6">
                <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center text-primary-600 mb-4">
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

      {/* Profile Section */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-neutral-900 mb-4">
                {t('forWorkers.profile.title')}
              </h2>
              <p className="text-neutral-600 mb-6">
                Crea un profilo completo e professionale per aumentare le tue possibilità di essere contattato dalle strutture sanitarie italiane.
              </p>
              <ul className="space-y-3">
                {profileItems.map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 text-primary-600" />
                    </div>
                    <span className="text-neutral-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Card className="p-6">
              <div className="border-b border-neutral-200 pb-4 mb-4">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-400 to-secondary-400 rounded-full flex items-center justify-center text-white text-xl font-bold">
                    MR
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-neutral-900">Maria Rodriguez</h4>
                    <p className="text-neutral-500">Infermiera specializzata</p>
                    <div className="flex items-center gap-2 mt-1">
                      <Badge variant="success" size="sm">Verificato</Badge>
                      <Badge variant="primary" size="sm">5 anni exp.</Badge>
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-neutral-500">Specializzazione</span>
                  <span className="text-neutral-800 font-medium">Terapia intensiva</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-neutral-500">Lingue</span>
                  <span className="text-neutral-800 font-medium">Spagnolo, Italiano, Inglese</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-neutral-500">Disponibilità</span>
                  <span className="text-neutral-800 font-medium">Immediata</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-neutral-500">Albo</span>
                  <span className="text-neutral-800 font-medium">IPASVI Madrid</span>
                </div>
              </div>
              <div className="mt-6 p-4 bg-primary-50 rounded-xl">
                <p className="text-sm text-primary-700">
                  <Star className="w-4 h-4 inline mr-1" />
                  Profilo completo al 100% - Maggiori possibilità di essere contattato
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-neutral-900 mb-12 text-center">
            Inizia in 3 semplici passi
          </h2>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                step: 1,
                icon: <UserPlus className="w-8 h-8" />,
                title: 'Registrati gratis',
                description: 'Crea il tuo account con email e password. La registrazione richiede meno di 2 minuti.',
              },
              {
                step: 2,
                icon: <FileText className="w-8 h-8" />,
                title: 'Completa il profilo',
                description: 'Inserisci le tue esperienze, carica i documenti e indica le tue specializzazioni.',
              },
              {
                step: 3,
                icon: <Briefcase className="w-8 h-8" />,
                title: 'Ricevi proposte',
                description: 'Le strutture sanitarie interessate ti contatteranno con proposte di lavoro.',
              },
            ].map((item) => (
              <Card key={item.step} variant="gradient" className="p-8 text-center">
                <div className="w-16 h-16 bg-primary-500 rounded-2xl flex items-center justify-center text-white mx-auto mb-4">
                  {item.icon}
                </div>
                <div className="text-5xl font-bold text-primary-200 mb-4">{item.step}</div>
                <h3 className="text-xl font-semibold text-neutral-900 mb-2">{item.title}</h3>
                <p className="text-neutral-600">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-primary-600">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="w-6 h-6 text-accent-400 fill-current" />
              ))}
            </div>
            <blockquote className="text-2xl text-white mb-6 italic">
              "Grazie a MedLinker ho trovato lavoro in Italia in poche settimane.
              Il team mi ha aiutato con tutte le pratiche per il riconoscimento del mio titolo."
            </blockquote>
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-white font-bold">
                AC
              </div>
              <div className="text-left">
                <p className="text-white font-medium">Ana Castillo</p>
                <p className="text-primary-200 text-sm">Infermiera, da Madrid a Milano</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <Card className="p-8 lg:p-12 text-center bg-gradient-to-r from-primary-500 to-primary-600">
            <h2 className="text-3xl font-bold text-white mb-4">
              Pronto a iniziare la tua carriera in Italia?
            </h2>
            <p className="text-primary-100 mb-8 max-w-xl mx-auto">
              Registrati oggi gratuitamente e accedi a centinaia di opportunità lavorative nel settore sanitario italiano.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/registrati">
                <Button
                  size="lg"
                  className="bg-white text-primary-600 hover:bg-neutral-100"
                >
                  Crea il tuo profilo gratis
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <Link href="/contatti">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white/10"
                >
                  Hai domande? Scrivici
                </Button>
              </Link>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}
