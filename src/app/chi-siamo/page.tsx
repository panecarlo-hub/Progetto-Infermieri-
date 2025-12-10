'use client';

import Link from 'next/link';
import {
  Heart,
  Shield,
  Users,
  Target,
  Award,
  Globe,
  ArrowRight,
  CheckCircle,
} from 'lucide-react';
import { useLanguage } from '@/lib/language-context';
import { Button, Card, Badge } from '@/components/ui';

export default function ChiSiamo() {
  const { t } = useLanguage();

  const values = [
    {
      icon: <Heart className="w-6 h-6" />,
      title: 'Fiducia',
      description: 'Costruiamo relazioni basate sulla trasparenza e l\'affidabilità. Ogni interazione è guidata dall\'onestà e dal rispetto reciproco.',
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: 'Qualità',
      description: 'Selezioniamo e verifichiamo ogni profilo con la massima attenzione. La qualità del nostro servizio è la nostra priorità.',
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Supporto',
      description: 'Accompagniamo utenti e aziende in ogni fase del percorso. Non siamo solo una piattaforma, siamo un partner.',
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: 'Inclusione',
      description: 'Crediamo nel valore della diversità e dell\'integrazione. Facilitiamo l\'incontro tra culture e competenze diverse.',
    },
  ];

  const milestones = [
    { year: '2023', title: 'Fondazione', description: 'Nasce Medlinker con la missione di rivoluzionare il recruiting sanitario' },
    { year: '2023', title: 'Prime partnership', description: 'Accordi con le prime strutture sanitarie in Lombardia' },
    { year: '2024', title: 'Espansione', description: 'Apertura a livello nazionale e primi 100 professionisti registrati' },
    { year: '2024', title: 'Internazionalizzazione', description: 'Lancio della piattaforma in spagnolo per il mercato iberoamericano' },
  ];

  const team = [
    { name: 'Marco Bianchi', role: 'CEO & Founder', initials: 'MB' },
    { name: 'Laura Rossi', role: 'Head of Operations', initials: 'LR' },
    { name: 'Giuseppe Verdi', role: 'CTO', initials: 'GV' },
    { name: 'Anna Colombo', role: 'Head of HR', initials: 'AC' },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-50 via-white to-secondary-50 section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <Badge variant="primary" className="mb-4">La nostra storia</Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-neutral-900 mb-6">
              {t('aboutUs.title')}
            </h1>
            <p className="text-lg text-neutral-600">
              {t('aboutUs.description')}
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-neutral-900 mb-4">
                {t('aboutUs.mission.title')}
              </h2>
              <p className="text-lg text-neutral-600 mb-6">
                {t('aboutUs.mission.text')}
              </p>
              <p className="text-neutral-600 mb-6">
                Il settore sanitario italiano affronta una carenza cronica di personale qualificato.
                Allo stesso tempo, migliaia di professionisti sanitari in tutto il mondo cercano
                opportunità di lavoro in Italia, ma si scontrano con barriere burocratiche e linguistiche.
              </p>
              <p className="text-neutral-600">
                Medlinker nasce per colmare questo gap, creando una piattaforma che semplifica
                l'incontro tra domanda e offerta, garantendo sicurezza, trasparenza e supporto
                professionale in ogni fase del processo.
              </p>
            </div>
            <Card variant="gradient" className="p-8">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-neutral-900 mb-2">La nostra visione</h3>
                    <p className="text-neutral-600">
                      Diventare il punto di riferimento europeo per il recruiting nel settore sanitario,
                      facilitando la mobilità professionale e l'integrazione dei talenti.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-secondary-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-neutral-900 mb-2">Il nostro impegno</h3>
                    <p className="text-neutral-600">
                      Garantire un servizio sicuro, trasparente e professionale,
                      tutelando gli interessi di candidati e aziende.
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-neutral-900 mb-4">
              {t('aboutUs.values.title')}
            </h2>
            <p className="text-neutral-600">
              I principi che guidano ogni nostra azione e decisione
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} hover className="p-6 text-center">
                <div className="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center text-primary-600 mx-auto mb-4">
                  {value.icon}
                </div>
                <h3 className="text-lg font-semibold text-neutral-900 mb-2">{value.title}</h3>
                <p className="text-neutral-600 text-sm">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-neutral-900 mb-12 text-center">
            La nostra storia
          </h2>

          <div className="max-w-3xl mx-auto">
            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-primary-200" />
              {milestones.map((milestone, index) => (
                <div key={index} className="relative pl-12 pb-8 last:pb-0">
                  <div className="absolute left-0 w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <div className="bg-neutral-50 rounded-xl p-6">
                    <span className="text-sm text-primary-600 font-bold">{milestone.year}</span>
                    <h3 className="text-lg font-semibold text-neutral-900 mt-1 mb-2">{milestone.title}</h3>
                    <p className="text-neutral-600">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-neutral-900 mb-4">
              Il nostro team
            </h2>
            <p className="text-neutral-600">
              Un gruppo di professionisti appassionati e dedicati alla missione di Medlinker
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <Card key={index} hover className="p-6 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-primary-400 to-secondary-400 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                  {member.initials}
                </div>
                <h3 className="text-lg font-semibold text-neutral-900">{member.name}</h3>
                <p className="text-neutral-500 text-sm">{member.role}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-primary-600">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { value: '500+', label: 'Professionisti registrati' },
              { value: '150+', label: 'Strutture partner' },
              { value: '200+', label: 'Assunzioni completate' },
              { value: '15+', label: 'Nazionalità rappresentate' },
            ].map((stat, index) => (
              <div key={index}>
                <p className="text-4xl lg:text-5xl font-bold text-white mb-2">{stat.value}</p>
                <p className="text-primary-100">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <Card className="p-8 lg:p-12 text-center bg-gradient-to-r from-primary-500 to-secondary-500">
            <h2 className="text-3xl font-bold text-white mb-4">
              Vuoi far parte della nostra storia?
            </h2>
            <p className="text-white/90 mb-8 max-w-xl mx-auto">
              Che tu sia un professionista sanitario in cerca di opportunità o una struttura
              in cerca di talenti, Medlinker è qui per te.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/registrati">
                <Button
                  size="lg"
                  className="bg-white text-primary-600 hover:bg-neutral-100"
                >
                  Inizia ora
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <Link href="/contatti">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white/10"
                >
                  Contattaci
                </Button>
              </Link>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}
