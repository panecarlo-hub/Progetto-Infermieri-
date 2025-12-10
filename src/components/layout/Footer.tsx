'use client';

import Link from 'next/link';
import { Facebook, Linkedin, Instagram, Twitter, Mail, Phone, MapPin, MessageCircle } from 'lucide-react';
import { useLanguage } from '@/lib/language-context';

export default function Footer() {
  const { t } = useLanguage();

  const quickLinks = [
    { href: '/come-funziona', label: t('nav.howItWorks') },
    { href: '/per-le-aziende', label: t('nav.forCompanies') },
    { href: '/per-i-lavoratori', label: t('nav.forWorkers') },
    { href: '/abbonamenti', label: t('nav.subscriptions') },
    { href: '/servizi', label: t('nav.services') },
  ];

  const legalLinks = [
    { href: '/privacy', label: t('footer.privacy') },
    { href: '/termini', label: t('footer.terms') },
    { href: '/cookies', label: t('footer.cookies') },
    { href: '/gdpr', label: t('footer.gdpr') },
  ];

  return (
    <footer className="bg-neutral-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">M</span>
              </div>
              <span className="text-xl font-heading font-bold">
                Med<span className="text-primary-400">linker</span>
              </span>
            </Link>
            <p className="text-neutral-400 text-sm mb-6">
              {t('footer.description')}
            </p>
            <div className="flex space-x-3">
              <a
                href="#"
                className="w-10 h-10 bg-neutral-800 hover:bg-primary-500 rounded-lg flex items-center justify-center transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-neutral-800 hover:bg-primary-500 rounded-lg flex items-center justify-center transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-neutral-800 hover:bg-primary-500 rounded-lg flex items-center justify-center transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-neutral-800 hover:bg-primary-500 rounded-lg flex items-center justify-center transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.quickLinks')}</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-neutral-400 hover:text-primary-400 transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.legal')}</h3>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-neutral-400 hover:text-primary-400 transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.newsletter.title')}</h3>
            <form className="mb-6">
              <div className="flex">
                <input
                  type="email"
                  placeholder={t('footer.newsletter.placeholder')}
                  className="flex-1 px-4 py-2.5 bg-neutral-800 border border-neutral-700 rounded-l-lg text-white placeholder:text-neutral-500 focus:outline-none focus:border-primary-500"
                />
                <button
                  type="submit"
                  className="px-4 py-2.5 bg-primary-500 hover:bg-primary-600 rounded-r-lg transition-colors font-medium"
                >
                  {t('footer.newsletter.submit')}
                </button>
              </div>
            </form>
            <div className="space-y-3">
              <a
                href="mailto:info@medlinker.it"
                className="flex items-center space-x-2 text-neutral-400 hover:text-primary-400 transition-colors text-sm"
              >
                <Mail className="w-4 h-4" />
                <span>info@medlinker.it</span>
              </a>
              <a
                href="tel:+390212345678"
                className="flex items-center space-x-2 text-neutral-400 hover:text-primary-400 transition-colors text-sm"
              >
                <Phone className="w-4 h-4" />
                <span>+39 02 1234 5678</span>
              </a>
              <div className="flex items-center space-x-2 text-neutral-400 text-sm">
                <MapPin className="w-4 h-4" />
                <span>Milano, Italia</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-neutral-400 text-sm">
              {t('footer.copyright')}
            </p>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <a
                href="https://wa.me/390212345678"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 bg-green-600 hover:bg-green-700 px-4 py-2 rounded-lg transition-colors text-sm font-medium"
              >
                <MessageCircle className="w-4 h-4" />
                <span>{t('contacts.whatsapp')}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
