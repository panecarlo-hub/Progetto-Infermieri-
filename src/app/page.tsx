'use client';

import Link from 'next/link';
import {
  ShieldCheck,
  Users,
  Globe,
  HeadphonesIcon,
  BadgeCheck,
  Zap,
  Building2,
  Stethoscope,
  ArrowRight,
  CheckCircle,
  Star,
} from 'lucide-react';
import { useLanguage } from '@/lib/language-context';
import { Button, Card } from '@/components/ui';

export default function Home() {
  const { t } = useLanguage();

  const features = [
    {
      icon: <BadgeCheck className="w-8 h-8 text-primary-500" />,
      title: t('features.verified.title'),
      description: t('features.verified.description'),
    },
    {
      icon: <Zap className="w-8 h-8 text-primary-500" />,
      title: t('features.matching.title'),
      description: t('features.matching.description'),
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-primary-500" />,
      title: t('features.secure.title'),
      description: t('features.secure.description'),
    },
    {
      icon: <HeadphonesIcon className="w-8 h-8 text-primary-500" />,
      title: t('features.support.title'),
      description: t('features.support.description'),
    },
    {
      icon: <Globe className="w-8 h-8 text-primary-500" />,
      title: t('features.multilingual.title'),
      description: t('features.multilingual.description'),
    },
    {
      icon: <Users className="w-8 h-8 text-primary-500" />,
      title: t('features.whatsapp.title'),
      description: t('features.whatsapp.description'),
    },
  ];

  const stats = [
    { value: '500+', label: 'Professionisti registrati' },
    { value: '150+', label: 'Strutture sanitarie' },
    { value: '200+', label: 'Assunzioni completate' },
    { value: '98%', label: 'Tasso di soddisfazione' },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-50 via-white to-secondary-50">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-200 rounded-full opacity-20 blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary-200 rounded-full opacity-20 blur-3xl" />
        </div>

        <div className="relative container-custom section-padding">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <span className="inline-flex items-center px-4 py-1.5 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-6">
                <Star className="w-4 h-4 mr-2" />
                Il LinkedIn del settore sanitario
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-neutral-900 mb-6 leading-tight">
                {t('hero.title')}
              </h1>
              <p className="text-lg text-neutral-600 mb-8 max-w-xl">
                {t('hero.subtitle')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/per-le-aziende">
                  <Button size="lg" className="w-full sm:w-auto group">
                    <Building2 className="w-5 h-5 mr-2" />
                    {t('hero.ctaEmployer')}
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link href="/per-i-lavoratori">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto group">
                    <Stethoscope className="w-5 h-5 mr-2" />
                    {t('hero.ctaWorker')}
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
              <div className="mt-8 flex items-center gap-4">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-400 to-secondary-400 border-2 border-white flex items-center justify-center text-white text-xs font-medium"
                    >
                      {String.fromCharCode(64 + i)}
                    </div>
                  ))}
                </div>
                <div>
                  <p className="text-sm font-medium text-neutral-800">
                    {t('hero.trustedBy')} <span className="text-primary-500">150+</span>
                  </p>
                  <p className="text-xs text-neutral-500">{t('hero.facilities')}</p>
                </div>
              </div>
            </div>

            {/* Hero Image/Illustration */}
            <div className="relative animate-slide-up">
              <div className="relative bg-white rounded-2xl shadow-elevated p-8">
                <div className="absolute -top-4 -right-4 bg-secondary-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                  100% Verificato
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-4 bg-neutral-50 rounded-xl">
                    <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                      <Stethoscope className="w-6 h-6 text-primary-600" />
                    </div>
                    <div>
                      <p className="font-medium text-neutral-800">Infermiere specializzato</p>
                      <p className="text-sm text-neutral-500">5 anni di esperienza</p>
                    </div>
                    <CheckCircle className="w-6 h-6 text-green-500 ml-auto" />
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-neutral-50 rounded-xl">
                    <div className="w-12 h-12 bg-secondary-100 rounded-full flex items-center justify-center">
                      <Building2 className="w-6 h-6 text-secondary-600" />
                    </div>
                    <div>
                      <p className="font-medium text-neutral-800">Ospedale San Raffaele</p>
                      <p className="text-sm text-neutral-500">Milano, Italia</p>
                    </div>
                    <CheckCircle className="w-6 h-6 text-green-500 ml-auto" />
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-primary-50 to-secondary-50 rounded-xl border border-primary-200">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm">
                      <Users className="w-6 h-6 text-primary-600" />
                    </div>
                    <div>
                      <p className="font-medium text-primary-700">Match perfetto!</p>
                      <p className="text-sm text-neutral-500">Candidato ideale trovato</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-primary-600 py-12">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-3xl lg:text-4xl font-bold text-white mb-1">{stat.value}</p>
                <p className="text-primary-100 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-4">
              {t('features.title')}
            </h2>
            <p className="text-lg text-neutral-600">
              {t('features.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {features.map((feature, index) => (
              <Card key={index} hover className="p-6">
                <div className="w-14 h-14 bg-primary-50 rounded-xl flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-neutral-800 mb-2">
                  {feature.title}
                </h3>
                <p className="text-neutral-600">
                  {feature.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Preview */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-4">
              {t('howItWorks.title')}
            </h2>
            <p className="text-lg text-neutral-600">
              {t('howItWorks.subtitle')}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* For Workers */}
            <Card variant="gradient" className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-primary-500 rounded-xl flex items-center justify-center">
                  <Stethoscope className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-neutral-800">
                  {t('howItWorks.forWorkers.title')}
                </h3>
              </div>
              <div className="space-y-4">
                {['step1', 'step2', 'step3'].map((step, index) => (
                  <div key={step} className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-primary-500 font-bold shadow-sm flex-shrink-0">
                      {index + 1}
                    </div>
                    <div>
                      <p className="font-medium text-neutral-800">
                        {t(`howItWorks.forWorkers.${step}.title`)}
                      </p>
                      <p className="text-sm text-neutral-600">
                        {t(`howItWorks.forWorkers.${step}.description`)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6">
                <Link href="/per-i-lavoratori">
                  <Button variant="primary" className="w-full">
                    {t('forWorkers.cta')}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>
            </Card>

            {/* For Employers */}
            <Card variant="gradient" className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-secondary-500 rounded-xl flex items-center justify-center">
                  <Building2 className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-neutral-800">
                  {t('howItWorks.forEmployers.title')}
                </h3>
              </div>
              <div className="space-y-4">
                {['step1', 'step2', 'step3'].map((step, index) => (
                  <div key={step} className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-secondary-500 font-bold shadow-sm flex-shrink-0">
                      {index + 1}
                    </div>
                    <div>
                      <p className="font-medium text-neutral-800">
                        {t(`howItWorks.forEmployers.${step}.title`)}
                      </p>
                      <p className="text-sm text-neutral-600">
                        {t(`howItWorks.forEmployers.${step}.description`)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6">
                <Link href="/per-le-aziende">
                  <Button variant="secondary" className="w-full">
                    {t('forCompanies.cta')}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary-600 to-primary-700">
        <div className="container-custom text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Pronto a iniziare?
          </h2>
          <p className="text-lg text-primary-100 mb-8 max-w-2xl mx-auto">
            Unisciti a MedLinker oggi e scopri come possiamo aiutarti a trovare il candidato perfetto o la tua prossima opportunità professionale.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/registrati">
              <Button
                variant="accent"
                size="lg"
                className="w-full sm:w-auto bg-white text-primary-600 hover:bg-neutral-100"
              >
                Registrati gratuitamente
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
            <Link href="/contatti">
              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto border-white text-white hover:bg-white/10"
              >
                Contattaci
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
