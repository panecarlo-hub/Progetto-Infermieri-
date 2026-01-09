'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Globe, ChevronDown } from 'lucide-react';
import { useLanguage } from '@/lib/language-context';
import { Button } from '@/components/ui';
import { cn } from '@/lib/utils';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const { locale, setLocale, t } = useLanguage();

  const navLinks = [
    { href: '/', label: t('nav.home') },
    { href: '/come-funziona', label: t('nav.howItWorks') },
    { href: '/per-le-aziende', label: t('nav.forCompanies') },
    { href: '/per-i-lavoratori', label: t('nav.forWorkers') },
    { href: '/abbonamenti', label: t('nav.subscriptions') },
    { href: '/servizi', label: t('nav.services') },
    { href: '/chi-siamo', label: t('nav.aboutUs') },
    { href: '/contatti', label: t('nav.contacts') },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-neutral-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">M</span>
            </div>
            <span className="text-xl font-heading font-bold text-neutral-800">
              Med<span className="text-primary-500">Linker</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm font-medium text-neutral-600 hover:text-primary-500 transition-colors rounded-lg hover:bg-primary-50"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="hidden lg:flex items-center space-x-3">
            {/* Language Selector */}
            <div className="relative">
              <button
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center space-x-1 px-3 py-2 text-sm font-medium text-neutral-600 hover:text-primary-500 transition-colors rounded-lg hover:bg-primary-50"
              >
                <Globe className="w-4 h-4" />
                <span>{locale.toUpperCase()}</span>
                <ChevronDown className="w-3 h-3" />
              </button>
              {isLangOpen && (
                <div className="absolute right-0 mt-2 w-32 bg-white rounded-lg shadow-lg border border-neutral-100 py-1">
                  <button
                    onClick={() => {
                      setLocale('it');
                      setIsLangOpen(false);
                    }}
                    className={cn(
                      'w-full text-left px-4 py-2 text-sm hover:bg-primary-50',
                      locale === 'it' ? 'text-primary-500 font-medium' : 'text-neutral-600'
                    )}
                  >
                    Italiano
                  </button>
                  <button
                    onClick={() => {
                      setLocale('es');
                      setIsLangOpen(false);
                    }}
                    className={cn(
                      'w-full text-left px-4 py-2 text-sm hover:bg-primary-50',
                      locale === 'es' ? 'text-primary-500 font-medium' : 'text-neutral-600'
                    )}
                  >
                    Español
                  </button>
                </div>
              )}
            </div>

            <Link href="/accedi">
              <Button variant="ghost" size="sm">
                {t('nav.login')}
              </Button>
            </Link>
            <Link href="/registrati">
              <Button variant="primary" size="sm">
                {t('nav.register')}
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-neutral-600 hover:text-primary-500 transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-neutral-100">
            <nav className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="px-4 py-3 text-base font-medium text-neutral-600 hover:text-primary-500 hover:bg-primary-50 rounded-lg transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="mt-4 pt-4 border-t border-neutral-100 flex flex-col space-y-2 px-4">
              {/* Mobile Language Selector */}
              <div className="flex items-center space-x-2 py-2">
                <Globe className="w-4 h-4 text-neutral-500" />
                <button
                  onClick={() => setLocale('it')}
                  className={cn(
                    'px-2 py-1 text-sm rounded',
                    locale === 'it' ? 'bg-primary-100 text-primary-600' : 'text-neutral-600'
                  )}
                >
                  IT
                </button>
                <button
                  onClick={() => setLocale('es')}
                  className={cn(
                    'px-2 py-1 text-sm rounded',
                    locale === 'es' ? 'bg-primary-100 text-primary-600' : 'text-neutral-600'
                  )}
                >
                  ES
                </button>
              </div>
              <Link href="/accedi" onClick={() => setIsMenuOpen(false)}>
                <Button variant="outline" className="w-full">
                  {t('nav.login')}
                </Button>
              </Link>
              <Link href="/registrati" onClick={() => setIsMenuOpen(false)}>
                <Button variant="primary" className="w-full">
                  {t('nav.register')}
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
