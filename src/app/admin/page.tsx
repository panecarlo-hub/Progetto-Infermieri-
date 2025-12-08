'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  Users,
  Building2,
  FileCheck,
  CreditCard,
  TrendingUp,
  AlertCircle,
  CheckCircle,
  Clock,
  Search,
  Filter,
  MoreVertical,
  Eye,
  Ban,
  Mail,
  BarChart3,
  Settings,
  Shield,
} from 'lucide-react';
import { Button, Card, Badge, Input } from '@/components/ui';

export default function AdminPanel() {
  const [activeTab, setActiveTab] = useState('overview');

  // Mock statistics
  const stats = {
    totalWorkers: 523,
    totalEmployers: 156,
    pendingVerifications: 28,
    activeSubscriptions: 89,
    monthlyRevenue: 12450,
    recentSignups: 34,
  };

  // Mock recent activities
  const recentActivities = [
    { id: 1, type: 'signup', user: 'Maria R.', userType: 'worker', time: '10 min fa' },
    { id: 2, type: 'verification', user: 'Clinica Aurora', userType: 'employer', time: '25 min fa' },
    { id: 3, type: 'subscription', user: 'OSP. San Giovanni', userType: 'employer', time: '1 ora fa' },
    { id: 4, type: 'document', user: 'Carlos M.', userType: 'worker', time: '2 ore fa' },
    { id: 5, type: 'signup', user: 'RSA Villa Serena', userType: 'employer', time: '3 ore fa' },
  ];

  // Mock pending verifications
  const pendingVerifications = [
    { id: 1, name: 'Ana Lopez', type: 'worker', document: 'Diploma infermieristico', submitted: '2 giorni fa' },
    { id: 2, name: 'Giuseppe Verdi', type: 'worker', document: 'Iscrizione albo IPASVI', submitted: '3 giorni fa' },
    { id: 3, name: 'Clinica Milano', type: 'employer', document: 'Visura camerale', submitted: '1 giorno fa' },
  ];

  const tabs = [
    { id: 'overview', label: 'Panoramica', icon: <BarChart3 className="w-4 h-4" /> },
    { id: 'workers', label: 'Professionisti', icon: <Users className="w-4 h-4" /> },
    { id: 'employers', label: 'Aziende', icon: <Building2 className="w-4 h-4" /> },
    { id: 'verifications', label: 'Verifiche', icon: <FileCheck className="w-4 h-4" /> },
    { id: 'subscriptions', label: 'Abbonamenti', icon: <CreditCard className="w-4 h-4" /> },
    { id: 'settings', label: 'Impostazioni', icon: <Settings className="w-4 h-4" /> },
  ];

  return (
    <div className="min-h-screen bg-neutral-100">
      {/* Admin Header */}
      <div className="bg-neutral-900 text-white">
        <div className="container-custom py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary-500 rounded-lg flex items-center justify-center">
                <Shield className="w-5 h-5" />
              </div>
              <div>
                <h1 className="text-lg font-bold">MediLinker Admin</h1>
                <p className="text-xs text-neutral-400">Pannello di gestione</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Badge variant="warning">
                <AlertCircle className="w-3 h-3 mr-1" />
                {stats.pendingVerifications} verifiche in attesa
              </Badge>
              <div className="w-8 h-8 bg-neutral-700 rounded-full flex items-center justify-center text-sm font-medium">
                A
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="bg-white border-b border-neutral-200">
        <div className="container-custom">
          <div className="flex overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-3 text-sm font-medium border-b-2 transition-colors ${
                  activeTab === tab.id
                    ? 'border-primary-500 text-primary-600'
                    : 'border-transparent text-neutral-500 hover:text-neutral-700'
                }`}
              >
                {tab.icon}
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container-custom py-8">
        {activeTab === 'overview' && (
          <div className="space-y-6">
            {/* Stats Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <Card className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-neutral-500">Professionisti</p>
                    <p className="text-3xl font-bold text-neutral-900">{stats.totalWorkers}</p>
                    <p className="text-xs text-green-500 flex items-center mt-1">
                      <TrendingUp className="w-3 h-3 mr-1" />
                      +12% questo mese
                    </p>
                  </div>
                  <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center">
                    <Users className="w-6 h-6 text-primary-600" />
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-neutral-500">Aziende</p>
                    <p className="text-3xl font-bold text-neutral-900">{stats.totalEmployers}</p>
                    <p className="text-xs text-green-500 flex items-center mt-1">
                      <TrendingUp className="w-3 h-3 mr-1" />
                      +8% questo mese
                    </p>
                  </div>
                  <div className="w-12 h-12 bg-secondary-100 rounded-xl flex items-center justify-center">
                    <Building2 className="w-6 h-6 text-secondary-600" />
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-neutral-500">Abbonamenti attivi</p>
                    <p className="text-3xl font-bold text-neutral-900">{stats.activeSubscriptions}</p>
                    <p className="text-xs text-neutral-500 mt-1">
                      su {stats.totalEmployers} aziende
                    </p>
                  </div>
                  <div className="w-12 h-12 bg-accent-100 rounded-xl flex items-center justify-center">
                    <CreditCard className="w-6 h-6 text-accent-600" />
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-neutral-500">Revenue mensile</p>
                    <p className="text-3xl font-bold text-neutral-900">€{stats.monthlyRevenue.toLocaleString()}</p>
                    <p className="text-xs text-green-500 flex items-center mt-1">
                      <TrendingUp className="w-3 h-3 mr-1" />
                      +15% vs mese scorso
                    </p>
                  </div>
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-green-600" />
                  </div>
                </div>
              </Card>
            </div>

            <div className="grid lg:grid-cols-2 gap-6">
              {/* Recent Activity */}
              <Card className="p-6">
                <h2 className="text-lg font-semibold text-neutral-900 mb-4">Attività recenti</h2>
                <div className="space-y-3">
                  {recentActivities.map((activity) => (
                    <div key={activity.id} className="flex items-center justify-between p-3 bg-neutral-50 rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                          activity.type === 'signup' ? 'bg-primary-100' :
                          activity.type === 'verification' ? 'bg-green-100' :
                          activity.type === 'subscription' ? 'bg-accent-100' : 'bg-secondary-100'
                        }`}>
                          {activity.type === 'signup' ? <Users className="w-4 h-4 text-primary-600" /> :
                           activity.type === 'verification' ? <CheckCircle className="w-4 h-4 text-green-600" /> :
                           activity.type === 'subscription' ? <CreditCard className="w-4 h-4 text-accent-600" /> :
                           <FileCheck className="w-4 h-4 text-secondary-600" />}
                        </div>
                        <div>
                          <p className="text-sm font-medium text-neutral-800">{activity.user}</p>
                          <p className="text-xs text-neutral-500">
                            {activity.type === 'signup' ? 'Nuova registrazione' :
                             activity.type === 'verification' ? 'Verifica completata' :
                             activity.type === 'subscription' ? 'Nuovo abbonamento' : 'Documento caricato'}
                          </p>
                        </div>
                      </div>
                      <span className="text-xs text-neutral-400">{activity.time}</span>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Pending Verifications */}
              <Card className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-lg font-semibold text-neutral-900">Verifiche in attesa</h2>
                  <Badge variant="warning">{pendingVerifications.length}</Badge>
                </div>
                <div className="space-y-3">
                  {pendingVerifications.map((verification) => (
                    <div key={verification.id} className="flex items-center justify-between p-3 bg-amber-50 rounded-lg border border-amber-100">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-sm font-bold text-neutral-600">
                          {verification.name.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div>
                          <p className="text-sm font-medium text-neutral-800">{verification.name}</p>
                          <p className="text-xs text-neutral-500">{verification.document}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-neutral-400">{verification.submitted}</span>
                        <Button variant="ghost" size="sm">
                          <Eye className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="w-full mt-4" size="sm">
                  Vedi tutte le verifiche
                </Button>
              </Card>
            </div>
          </div>
        )}

        {activeTab === 'workers' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-neutral-900">Gestione Professionisti</h2>
              <div className="flex items-center gap-3">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
                  <input
                    type="text"
                    placeholder="Cerca professionista..."
                    className="pl-10 pr-4 py-2 border border-neutral-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                </div>
                <Button variant="outline" size="sm">
                  <Filter className="w-4 h-4 mr-2" />
                  Filtri
                </Button>
              </div>
            </div>

            <Card className="overflow-hidden">
              <table className="w-full">
                <thead className="bg-neutral-50 border-b border-neutral-200">
                  <tr>
                    <th className="text-left px-6 py-3 text-xs font-semibold text-neutral-500 uppercase">Utente</th>
                    <th className="text-left px-6 py-3 text-xs font-semibold text-neutral-500 uppercase">Specializzazione</th>
                    <th className="text-left px-6 py-3 text-xs font-semibold text-neutral-500 uppercase">Stato</th>
                    <th className="text-left px-6 py-3 text-xs font-semibold text-neutral-500 uppercase">Registrato</th>
                    <th className="text-right px-6 py-3 text-xs font-semibold text-neutral-500 uppercase">Azioni</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-100">
                  {[
                    { name: 'Maria Rodriguez', email: 'maria@email.com', spec: 'Infermiera', status: 'verified', date: '15/01/2024' },
                    { name: 'Carlos Mendez', email: 'carlos@email.com', spec: 'OSS', status: 'pending', date: '14/01/2024' },
                    { name: 'Ana Lopez', email: 'ana@email.com', spec: 'Fisioterapista', status: 'verified', date: '12/01/2024' },
                  ].map((user, index) => (
                    <tr key={index} className="hover:bg-neutral-50">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center text-sm font-bold text-primary-600">
                            {user.name.split(' ').map(n => n[0]).join('')}
                          </div>
                          <div>
                            <p className="text-sm font-medium text-neutral-900">{user.name}</p>
                            <p className="text-xs text-neutral-500">{user.email}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm text-neutral-600">{user.spec}</td>
                      <td className="px-6 py-4">
                        <Badge variant={user.status === 'verified' ? 'success' : 'warning'} size="sm">
                          {user.status === 'verified' ? 'Verificato' : 'In attesa'}
                        </Badge>
                      </td>
                      <td className="px-6 py-4 text-sm text-neutral-500">{user.date}</td>
                      <td className="px-6 py-4 text-right">
                        <div className="flex items-center justify-end gap-1">
                          <Button variant="ghost" size="sm"><Eye className="w-4 h-4" /></Button>
                          <Button variant="ghost" size="sm"><Mail className="w-4 h-4" /></Button>
                          <Button variant="ghost" size="sm"><MoreVertical className="w-4 h-4" /></Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </Card>
          </div>
        )}

        {activeTab !== 'overview' && activeTab !== 'workers' && (
          <div className="flex items-center justify-center py-20">
            <div className="text-center">
              <div className="w-16 h-16 bg-neutral-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <Settings className="w-8 h-8 text-neutral-400" />
              </div>
              <h2 className="text-xl font-semibold text-neutral-900 mb-2">Sezione in sviluppo</h2>
              <p className="text-neutral-500">Questa sezione sarà disponibile prossimamente.</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
