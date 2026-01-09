'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
  Stethoscope,
  Building2,
  CheckCircle,
} from 'lucide-react';
import { useLanguage } from '@/lib/language-context';
import { Button, Card } from '@/components/ui';

export default function Registrati() {
  const { t } = useLanguage();
  const [showPassword, setShowPassword] = useState(false);
  const [userType, setUserType] = useState<'worker' | 'employer' | null>(null);
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    terms: false,
    privacy: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 1 && userType) {
      setStep(2);
    } else if (step === 2) {
      // Here you would typically handle registration
      console.log('Registration:', { userType, ...formData });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-primary-50 via-white to-secondary-50 py-12 px-4">
      <div className="w-full max-w-lg">
        <Card className="p-8">
          {/* Logo */}
          <div className="text-center mb-8">
            <Link href="/" className="inline-flex items-center space-x-2">
              <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-2xl">M</span>
              </div>
            </Link>
            <h1 className="text-2xl font-bold text-neutral-900 mt-4">
              {t('auth.register.title')}
            </h1>
            <p className="text-neutral-500 mt-2">
              Inizia a usare MedLinker
            </p>
          </div>

          {/* Progress Indicator */}
          <div className="flex items-center justify-center mb-8">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${step >= 1 ? 'bg-primary-500 text-white' : 'bg-neutral-200 text-neutral-500'}`}>
              1
            </div>
            <div className={`w-16 h-1 mx-2 ${step >= 2 ? 'bg-primary-500' : 'bg-neutral-200'}`} />
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${step >= 2 ? 'bg-primary-500 text-white' : 'bg-neutral-200 text-neutral-500'}`}>
              2
            </div>
          </div>

          {/* Step 1: User Type Selection */}
          {step === 1 && (
            <div className="space-y-4">
              <h2 className="text-lg font-semibold text-neutral-800 text-center mb-4">
                {t('auth.register.userType')}
              </h2>

              <button
                type="button"
                onClick={() => setUserType('worker')}
                className={`w-full p-6 rounded-xl border-2 transition-all ${
                  userType === 'worker'
                    ? 'border-primary-500 bg-primary-50'
                    : 'border-neutral-200 hover:border-primary-300'
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center ${
                    userType === 'worker' ? 'bg-primary-500' : 'bg-neutral-100'
                  }`}>
                    <Stethoscope className={`w-7 h-7 ${userType === 'worker' ? 'text-white' : 'text-neutral-500'}`} />
                  </div>
                  <div className="text-left flex-1">
                    <p className="font-semibold text-neutral-900">{t('auth.register.worker')}</p>
                    <p className="text-sm text-neutral-500">
                      Infermiere, OSS, medico, fisioterapista, etc.
                    </p>
                  </div>
                  {userType === 'worker' && (
                    <CheckCircle className="w-6 h-6 text-primary-500" />
                  )}
                </div>
              </button>

              <button
                type="button"
                onClick={() => setUserType('employer')}
                className={`w-full p-6 rounded-xl border-2 transition-all ${
                  userType === 'employer'
                    ? 'border-secondary-500 bg-secondary-50'
                    : 'border-neutral-200 hover:border-secondary-300'
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center ${
                    userType === 'employer' ? 'bg-secondary-500' : 'bg-neutral-100'
                  }`}>
                    <Building2 className={`w-7 h-7 ${userType === 'employer' ? 'text-white' : 'text-neutral-500'}`} />
                  </div>
                  <div className="text-left flex-1">
                    <p className="font-semibold text-neutral-900">{t('auth.register.employer')}</p>
                    <p className="text-sm text-neutral-500">
                      Ospedale, RSA, clinica, agenzia, etc.
                    </p>
                  </div>
                  {userType === 'employer' && (
                    <CheckCircle className="w-6 h-6 text-secondary-500" />
                  )}
                </div>
              </button>

              <Button
                type="button"
                onClick={() => userType && setStep(2)}
                disabled={!userType}
                size="lg"
                className="w-full mt-6"
                variant={userType === 'employer' ? 'secondary' : 'primary'}
              >
                Continua
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          )}

          {/* Step 2: Account Details */}
          {step === 2 && (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="flex items-center gap-3 p-3 bg-neutral-50 rounded-lg mb-4">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                  userType === 'worker' ? 'bg-primary-100' : 'bg-secondary-100'
                }`}>
                  {userType === 'worker' ? (
                    <Stethoscope className="w-5 h-5 text-primary-600" />
                  ) : (
                    <Building2 className="w-5 h-5 text-secondary-600" />
                  )}
                </div>
                <div className="flex-1">
                  <p className="text-sm text-neutral-500">Registrazione come</p>
                  <p className="font-medium text-neutral-800">
                    {userType === 'worker' ? t('auth.register.worker') : t('auth.register.employer')}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="text-sm text-primary-500 hover:text-primary-600"
                >
                  Cambia
                </button>
              </div>

              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-1.5">
                  {t('auth.register.email')}
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="nome@email.com"
                    className="w-full pl-11 pr-4 py-2.5 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-1.5">
                  {t('auth.register.password')}
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    placeholder="Minimo 8 caratteri"
                    className="w-full pl-11 pr-11 py-2.5 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-600"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-1.5">
                  {t('auth.register.confirmPassword')}
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    required
                    placeholder="Ripeti la password"
                    className="w-full pl-11 pr-4 py-2.5 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  />
                </div>
              </div>

              <div className="space-y-3">
                <label className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    name="terms"
                    checked={formData.terms}
                    onChange={handleChange}
                    required
                    className="w-4 h-4 mt-0.5 rounded border-neutral-300 text-primary-500 focus:ring-primary-500"
                  />
                  <span className="text-sm text-neutral-600">
                    {t('auth.register.terms')}{' '}
                    <Link href="/termini" className="text-primary-500 hover:text-primary-600">
                      Termini e condizioni
                    </Link>
                  </span>
                </label>
                <label className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    name="privacy"
                    checked={formData.privacy}
                    onChange={handleChange}
                    required
                    className="w-4 h-4 mt-0.5 rounded border-neutral-300 text-primary-500 focus:ring-primary-500"
                  />
                  <span className="text-sm text-neutral-600">
                    {t('auth.register.privacy')}{' '}
                    <Link href="/privacy" className="text-primary-500 hover:text-primary-600">
                      Privacy Policy
                    </Link>
                  </span>
                </label>
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full"
                variant={userType === 'employer' ? 'secondary' : 'primary'}
              >
                {t('auth.register.submit')}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </form>
          )}

          {/* Login Link */}
          <p className="text-center mt-6 text-neutral-600">
            {t('auth.register.hasAccount')}{' '}
            <Link href="/accedi" className="text-primary-500 hover:text-primary-600 font-medium">
              {t('auth.register.login')}
            </Link>
          </p>
        </Card>
      </div>
    </div>
  );
}
