'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  Search,
  Filter,
  MapPin,
  Briefcase,
  Globe,
  CheckCircle,
  Lock,
  ChevronDown,
  Star,
} from 'lucide-react';
import { Button, Card, Badge } from '@/components/ui';

// Mock data for professionals
const mockProfessionals = [
  {
    id: 1,
    name: 'Maria R.',
    role: 'Infermiera specializzata',
    specialization: 'Terapia intensiva',
    experience: 5,
    country: 'Spagna',
    languages: ['Spagnolo', 'Italiano', 'Inglese'],
    availability: 'Immediata',
    verified: true,
    initials: 'MR',
  },
  {
    id: 2,
    name: 'Carlos M.',
    role: 'Infermiere',
    specialization: 'Pronto soccorso',
    experience: 8,
    country: 'Argentina',
    languages: ['Spagnolo', 'Italiano'],
    availability: 'Entro 1 mese',
    verified: true,
    initials: 'CM',
  },
  {
    id: 3,
    name: 'Ana L.',
    role: 'OSS',
    specialization: 'Geriatria',
    experience: 3,
    country: 'Perù',
    languages: ['Spagnolo', 'Italiano'],
    availability: 'Immediata',
    verified: true,
    initials: 'AL',
  },
  {
    id: 4,
    name: 'Giuseppe V.',
    role: 'Fisioterapista',
    specialization: 'Riabilitazione',
    experience: 6,
    country: 'Italia',
    languages: ['Italiano', 'Inglese'],
    availability: 'Entro 3 mesi',
    verified: true,
    initials: 'GV',
  },
  {
    id: 5,
    name: 'Elena S.',
    role: 'Infermiera',
    specialization: 'Pediatria',
    experience: 4,
    country: 'Romania',
    languages: ['Rumeno', 'Italiano', 'Inglese'],
    availability: 'Immediata',
    verified: true,
    initials: 'ES',
  },
  {
    id: 6,
    name: 'Marco B.',
    role: 'Tecnico di laboratorio',
    specialization: 'Analisi cliniche',
    experience: 7,
    country: 'Italia',
    languages: ['Italiano', 'Inglese'],
    availability: 'Entro 1 mese',
    verified: false,
    initials: 'MB',
  },
];

export default function Database() {
  const [searchTerm, setSearchTerm] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [isLoggedIn] = useState(false); // Simulated login state

  const filteredProfessionals = mockProfessionals.filter(
    (p) =>
      p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.specialization.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 via-white to-secondary-50 py-12">
        <div className="container-custom">
          <h1 className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-4 text-center">
            Database Professionisti Sanitari
          </h1>
          <p className="text-neutral-600 text-center max-w-2xl mx-auto mb-8">
            Esplora il nostro database di professionisti sanitari qualificati e verificati.
            {!isLoggedIn && ' Registrati per visualizzare i profili completi e contattare i candidati.'}
          </p>

          {/* Search and Filters */}
          <div className="max-w-3xl mx-auto">
            <div className="flex gap-4 mb-4">
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400" />
                <input
                  type="text"
                  placeholder="Cerca per ruolo, specializzazione..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 rounded-xl border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                />
              </div>
              <Button
                variant="outline"
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center gap-2"
              >
                <Filter className="w-5 h-5" />
                Filtri
                <ChevronDown className={`w-4 h-4 transition-transform ${showFilters ? 'rotate-180' : ''}`} />
              </Button>
            </div>

            {/* Filters Panel */}
            {showFilters && (
              <Card className="p-6 mb-6">
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">
                      Specializzazione
                    </label>
                    <select className="w-full px-3 py-2 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary-500">
                      <option>Tutte</option>
                      <option>Terapia intensiva</option>
                      <option>Pronto soccorso</option>
                      <option>Geriatria</option>
                      <option>Pediatria</option>
                      <option>Riabilitazione</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">
                      Esperienza minima
                    </label>
                    <select className="w-full px-3 py-2 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary-500">
                      <option>Qualsiasi</option>
                      <option>1+ anni</option>
                      <option>3+ anni</option>
                      <option>5+ anni</option>
                      <option>10+ anni</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">
                      Disponibilità
                    </label>
                    <select className="w-full px-3 py-2 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary-500">
                      <option>Tutte</option>
                      <option>Immediata</option>
                      <option>Entro 1 mese</option>
                      <option>Entro 3 mesi</option>
                    </select>
                  </div>
                </div>
                <div className="flex justify-end mt-4 gap-2">
                  <Button variant="ghost">Reset</Button>
                  <Button>Applica filtri</Button>
                </div>
              </Card>
            )}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="flex items-center justify-between mb-6">
            <p className="text-neutral-600">
              <span className="font-semibold text-neutral-900">{filteredProfessionals.length}</span> professionisti trovati
            </p>
            <select className="px-3 py-2 rounded-lg border border-neutral-300 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500">
              <option>Ordina per: Rilevanza</option>
              <option>Esperienza (decrescente)</option>
              <option>Esperienza (crescente)</option>
              <option>Più recenti</option>
            </select>
          </div>

          {/* Professional Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProfessionals.map((professional) => (
              <Card key={professional.id} hover className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-primary-400 to-secondary-400 rounded-full flex items-center justify-center text-white text-lg font-bold">
                    {professional.initials}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <h3 className="font-semibold text-neutral-900">{professional.name}</h3>
                      {professional.verified && (
                        <CheckCircle className="w-4 h-4 text-secondary-500" />
                      )}
                    </div>
                    <p className="text-sm text-neutral-500">{professional.role}</p>
                  </div>
                </div>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm text-neutral-600">
                    <Briefcase className="w-4 h-4 text-neutral-400" />
                    <span>{professional.specialization}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-neutral-600">
                    <Star className="w-4 h-4 text-neutral-400" />
                    <span>{professional.experience} anni di esperienza</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-neutral-600">
                    <MapPin className="w-4 h-4 text-neutral-400" />
                    <span>{professional.country}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-neutral-600">
                    <Globe className="w-4 h-4 text-neutral-400" />
                    <span>{professional.languages.join(', ')}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-neutral-100">
                  <Badge variant={professional.availability === 'Immediata' ? 'success' : 'neutral'} size="sm">
                    {professional.availability}
                  </Badge>
                  {isLoggedIn ? (
                    <Button size="sm">Visualizza profilo</Button>
                  ) : (
                    <Button size="sm" variant="outline" disabled>
                      <Lock className="w-3 h-3 mr-1" />
                      Accedi
                    </Button>
                  )}
                </div>
              </Card>
            ))}
          </div>

          {/* CTA for non-logged users */}
          {!isLoggedIn && (
            <Card className="mt-12 p-8 bg-gradient-to-r from-primary-500 to-primary-600 text-center">
              <Lock className="w-12 h-12 text-white/80 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-white mb-2">
                Vuoi vedere i profili completi?
              </h2>
              <p className="text-primary-100 mb-6 max-w-xl mx-auto">
                Registrati gratuitamente per visualizzare tutti i dettagli dei professionisti
                e contattarli attraverso la piattaforma.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/registrati">
                  <Button
                    size="lg"
                    className="bg-white text-primary-600 hover:bg-neutral-100"
                  >
                    Registrati gratuitamente
                  </Button>
                </Link>
                <Link href="/accedi">
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-white text-white hover:bg-white/10"
                  >
                    Hai già un account? Accedi
                  </Button>
                </Link>
              </div>
            </Card>
          )}

          {/* Pagination placeholder */}
          <div className="flex justify-center mt-8">
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" disabled>
                Precedente
              </Button>
              <Button variant="primary" size="sm">1</Button>
              <Button variant="outline" size="sm">2</Button>
              <Button variant="outline" size="sm">3</Button>
              <span className="px-2 text-neutral-400">...</span>
              <Button variant="outline" size="sm">10</Button>
              <Button variant="outline" size="sm">
                Successivo
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
