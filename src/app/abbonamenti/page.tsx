'use client';

import Link from 'next/link';
import {
  Check,
  X,
  Star,
  Zap,
  Building2,
  Users,
  HeadphonesIcon,
  FileCheck,
  ArrowRight,
  MessageCircle,
} from 'lucide-react';
import { useLanguage } from '@/lib/language-context';
import { Button, Card, Badge } from '@/components/ui';

export default function Abbonamenti() {
  const { t } = useLanguage();

  const plans = [
    {
      id: 'starter',
      name: 'Starter',
      description: 'Ideale per piccole strutture che iniziano a cercare personale',
      monthlyPrice: 99,
      yearlyPrice: 79,
      popular: false,
      features: [
        { text: 'Accesso al database professionisti', included: true },
        { text: 'Fino a 10 contatti al mese', included: true },
        { text: 'Visualizzazione documenti', included: true },
        { text: 'Filtri di ricerca base', included: true },
        { text: 'Supporto email', included: true },
        { text: 'Filtri avanzati', included: false },
        { text: 'Contatti illimitati', included: false },
        { text: 'Supporto prioritario', included: false },
        { text: 'Account manager dedicato', included: false },
      ],
    },
    {
      id: 'professional',
      name: 'Professional',
      description: 'Per strutture in crescita con esigenze di recruiting continue',
      monthlyPrice: 249,
      yearlyPrice: 199,
      popular: true,
      features: [
        { text: 'Accesso al database professionisti', included: true },
        { text: 'Fino a 50 contatti al mese', included: true },
        { text: 'Visualizzazione documenti', included: true },
        { text: 'Filtri di ricerca base', included: true },
        { text: 'Supporto email', included: true },
        { text: 'Filtri avanzati', included: true },
        { text: 'Supporto prioritario', included: true },
        { text: 'Report mensili', included: true },
        { text: 'Account manager dedicato', included: false },
      ],
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      description: 'Soluzione completa per grandi organizzazioni sanitarie',
      monthlyPrice: 499,
      yearlyPrice: 399,
      popular: false,
      features: [
        { text: 'Accesso al database professionisti', included: true },
        { text: 'Contatti illimitati', included: true },
        { text: 'Visualizzazione documenti', included: true },
        { text: 'Filtri di ricerca base', included: true },
        { text: 'Supporto email', included: true },
        { text: 'Filtri avanzati', included: true },
        { text: 'Supporto prioritario 24/7', included: true },
        { text: 'Report personalizzati', included: true },
        { text: 'Account manager dedicato', included: true },
      ],
    },
  ];

  const faqs = [
    {
      question: 'Posso cambiare piano in qualsiasi momento?',
      answer: 'Sì, puoi passare a un piano superiore in qualsiasi momento. Il cambio sarà effettivo immediatamente e pagherai solo la differenza proporzionale.',
    },
    {
      question: 'Come funzionano i contatti mensili?',
      answer: 'I contatti rappresentano il numero di professionisti che puoi contattare ogni mese. Ogni nuovo messaggio a un candidato conta come un contatto. I contatti non utilizzati non si accumulano.',
    },
    {
      question: 'Quali metodi di pagamento accettate?',
      answer: 'Accettiamo carte di credito (Visa, Mastercard, American Express), bonifico bancario e PayPal per i piani annuali.',
    },
    {
      question: 'Posso annullare l\'abbonamento?',
      answer: 'Sì, puoi annullare in qualsiasi momento. L\'abbonamento rimarrà attivo fino alla fine del periodo pagato.',
    },
    {
      question: 'Offrite una prova gratuita?',
      answer: 'Offriamo una demo gratuita della piattaforma. Contattaci per prenotare una dimostrazione personalizzata.',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-50 via-white to-secondary-50 section-padding">
        <div className="container-custom text-center">
          <Badge variant="primary" className="mb-4">Piani flessibili</Badge>
          <h1 className="text-4xl lg:text-5xl font-bold text-neutral-900 mb-6">
            {t('subscriptions.title')}
          </h1>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto mb-8">
            {t('subscriptions.subtitle')}
          </p>
          <div className="inline-flex items-center gap-2 bg-white rounded-full p-1 shadow-sm">
            <button className="px-6 py-2 bg-primary-500 text-white rounded-full font-medium">
              {t('subscriptions.monthly')}
            </button>
            <button className="px-6 py-2 text-neutral-600 rounded-full font-medium hover:bg-neutral-100 transition-colors">
              {t('subscriptions.annual')}
              <span className="ml-2 text-xs text-secondary-500 font-bold">-20%</span>
            </button>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="section-padding bg-white -mt-8">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-8">
            {plans.map((plan) => (
              <Card
                key={plan.id}
                className={`p-8 relative ${plan.popular ? 'ring-2 ring-primary-500 shadow-elevated' : ''}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <Badge variant="primary">
                      <Star className="w-3 h-3 mr-1" />
                      {t('subscriptions.popular')}
                    </Badge>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-neutral-900 mb-2">{plan.name}</h3>
                  <p className="text-neutral-500 text-sm">{plan.description}</p>
                </div>
                <div className="text-center mb-6">
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-4xl font-bold text-neutral-900">€{plan.monthlyPrice}</span>
                    <span className="text-neutral-500">{t('subscriptions.perMonth')}</span>
                  </div>
                  <p className="text-sm text-neutral-400 mt-1">
                    o €{plan.yearlyPrice}/mese con piano annuale
                  </p>
                </div>
                <div className="space-y-3 mb-8">
                  {plan.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      {feature.included ? (
                        <Check className="w-5 h-5 text-secondary-500 flex-shrink-0" />
                      ) : (
                        <X className="w-5 h-5 text-neutral-300 flex-shrink-0" />
                      )}
                      <span className={feature.included ? 'text-neutral-700' : 'text-neutral-400'}>
                        {feature.text}
                      </span>
                    </div>
                  ))}
                </div>
                <Link href="/registrati">
                  <Button
                    variant={plan.popular ? 'primary' : 'outline'}
                    className="w-full"
                    size="lg"
                  >
                    {t('subscriptions.cta')}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Comparison */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-neutral-900 mb-12 text-center">
            Cosa include ogni piano
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Users className="w-6 h-6" />,
                title: 'Database professionisti',
                description: 'Accesso a centinaia di professionisti sanitari verificati',
              },
              {
                icon: <FileCheck className="w-6 h-6" />,
                title: 'Documenti verificati',
                description: 'Visualizza CV, certificati e titoli già verificati',
              },
              {
                icon: <Zap className="w-6 h-6" />,
                title: 'Filtri di ricerca',
                description: 'Trova candidati per specializzazione, esperienza e lingue',
              },
              {
                icon: <HeadphonesIcon className="w-6 h-6" />,
                title: 'Supporto dedicato',
                description: 'Assistenza nelle pratiche di assunzione e burocratiche',
              },
            ].map((feature, index) => (
              <Card key={index} className="p-6 text-center">
                <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center text-primary-600 mx-auto mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-neutral-900 mb-2">{feature.title}</h3>
                <p className="text-neutral-600 text-sm">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Plan CTA */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <Card variant="gradient" className="p-8 lg:p-12">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl lg:text-3xl font-bold text-neutral-900 mb-4">
                  Hai esigenze particolari?
                </h2>
                <p className="text-neutral-600 mb-6">
                  Se la tua organizzazione ha necessità specifiche, possiamo creare un piano personalizzato
                  che si adatti perfettamente alle tue esigenze di recruiting.
                </p>
                <ul className="space-y-2 mb-6">
                  {[
                    'Volume di assunzioni elevato',
                    'Integrazione con sistemi HR',
                    'Report e analytics personalizzati',
                    'Formazione del team',
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-2 text-neutral-700">
                      <Check className="w-4 h-4 text-secondary-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="text-center lg:text-right">
                <Link href="/contatti">
                  <Button size="lg">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Contattaci per un preventivo
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-neutral-900 mb-12 text-center">
            Domande frequenti
          </h2>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index} className="p-6">
                <h3 className="text-lg font-semibold text-neutral-900 mb-2">{faq.question}</h3>
                <p className="text-neutral-600">{faq.answer}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-600">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Pronto a trovare i migliori talenti?
          </h2>
          <p className="text-primary-100 mb-8 max-w-xl mx-auto">
            Inizia oggi con un piano adatto alle tue esigenze e accedi al nostro database di professionisti qualificati.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/registrati">
              <Button
                size="lg"
                className="bg-white text-primary-600 hover:bg-neutral-100"
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
                Richiedi una demo
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
