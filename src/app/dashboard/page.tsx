'use client';

import Link from 'next/link';
import {
  User,
  FileText,
  Bell,
  Settings,
  MessageCircle,
  Briefcase,
  CheckCircle,
  Clock,
  AlertCircle,
  ArrowRight,
  Upload,
  Eye,
} from 'lucide-react';
import { Button, Card, Badge } from '@/components/ui';

export default function Dashboard() {
  // Simulated user data (would come from auth context in real app)
  const user = {
    name: 'Maria Rodriguez',
    email: 'maria.rodriguez@email.com',
    role: 'worker',
    profileCompletion: 75,
    verified: false,
  };

  const notifications = [
    { id: 1, type: 'info', message: 'Completa il tuo profilo per aumentare la visibilità', time: '2 ore fa' },
    { id: 2, type: 'success', message: 'Il tuo documento "CV" è stato verificato', time: '1 giorno fa' },
    { id: 3, type: 'warning', message: 'Aggiungi la tua iscrizione all\'albo professionale', time: '3 giorni fa' },
  ];

  const recentContacts = [
    { id: 1, company: 'Ospedale San Raffaele', date: '15 Gen 2024', status: 'pending' },
    { id: 2, company: 'RSA Villa Aurora', date: '12 Gen 2024', status: 'viewed' },
  ];

  const profileSections = [
    { name: 'Dati personali', complete: true },
    { name: 'Formazione', complete: true },
    { name: 'Esperienza lavorativa', complete: true },
    { name: 'Documenti', complete: false },
    { name: 'Albo professionale', complete: false },
    { name: 'Lingue', complete: true },
  ];

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Header */}
      <div className="bg-white border-b border-neutral-200">
        <div className="container-custom py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-neutral-900">Dashboard</h1>
              <p className="text-neutral-500">Benvenuto/a, {user.name}</p>
            </div>
            <div className="flex items-center gap-4">
              <button className="relative p-2 text-neutral-600 hover:bg-neutral-100 rounded-lg">
                <Bell className="w-6 h-6" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
              </button>
              <Link href="/dashboard/impostazioni">
                <button className="p-2 text-neutral-600 hover:bg-neutral-100 rounded-lg">
                  <Settings className="w-6 h-6" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="container-custom py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Profile Completion Card */}
            {user.profileCompletion < 100 && (
              <Card className="p-6 bg-gradient-to-r from-primary-500 to-primary-600">
                <div className="flex items-start justify-between">
                  <div className="text-white">
                    <h2 className="text-xl font-semibold mb-2">Completa il tuo profilo</h2>
                    <p className="text-primary-100 mb-4">
                      Un profilo completo aumenta le tue possibilità di essere contattato
                    </p>
                    <div className="flex items-center gap-4">
                      <div className="flex-1 bg-white/20 rounded-full h-2">
                        <div
                          className="bg-white h-2 rounded-full transition-all"
                          style={{ width: `${user.profileCompletion}%` }}
                        />
                      </div>
                      <span className="text-white font-bold">{user.profileCompletion}%</span>
                    </div>
                  </div>
                  <Link href="/dashboard/profilo">
                    <Button className="bg-white text-primary-600 hover:bg-neutral-100">
                      Completa
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </div>
              </Card>
            )}

            {/* Quick Actions */}
            <div className="grid sm:grid-cols-3 gap-4">
              <Card hover className="p-4">
                <Link href="/dashboard/profilo" className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                    <User className="w-5 h-5 text-primary-600" />
                  </div>
                  <div>
                    <p className="font-medium text-neutral-800">Il mio profilo</p>
                    <p className="text-sm text-neutral-500">Modifica dati</p>
                  </div>
                </Link>
              </Card>
              <Card hover className="p-4">
                <Link href="/dashboard/documenti" className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-secondary-100 rounded-lg flex items-center justify-center">
                    <FileText className="w-5 h-5 text-secondary-600" />
                  </div>
                  <div>
                    <p className="font-medium text-neutral-800">Documenti</p>
                    <p className="text-sm text-neutral-500">Gestisci file</p>
                  </div>
                </Link>
              </Card>
              <Card hover className="p-4">
                <Link href="/dashboard/messaggi" className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-accent-100 rounded-lg flex items-center justify-center">
                    <MessageCircle className="w-5 h-5 text-accent-600" />
                  </div>
                  <div>
                    <p className="font-medium text-neutral-800">Messaggi</p>
                    <p className="text-sm text-neutral-500">2 nuovi</p>
                  </div>
                </Link>
              </Card>
            </div>

            {/* Recent Activity */}
            <Card className="p-6">
              <h2 className="text-lg font-semibold text-neutral-900 mb-4">Contatti recenti</h2>
              {recentContacts.length > 0 ? (
                <div className="space-y-4">
                  {recentContacts.map((contact) => (
                    <div key={contact.id} className="flex items-center justify-between p-4 bg-neutral-50 rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-secondary-100 rounded-lg flex items-center justify-center">
                          <Briefcase className="w-5 h-5 text-secondary-600" />
                        </div>
                        <div>
                          <p className="font-medium text-neutral-800">{contact.company}</p>
                          <p className="text-sm text-neutral-500">{contact.date}</p>
                        </div>
                      </div>
                      <Badge variant={contact.status === 'pending' ? 'warning' : 'success'}>
                        {contact.status === 'pending' ? 'In attesa' : 'Visualizzato'}
                      </Badge>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <Briefcase className="w-12 h-12 text-neutral-300 mx-auto mb-3" />
                  <p className="text-neutral-500">Nessun contatto recente</p>
                  <p className="text-sm text-neutral-400">Le aziende interessate ti contatteranno qui</p>
                </div>
              )}
            </Card>

            {/* Profile Sections Status */}
            <Card className="p-6">
              <h2 className="text-lg font-semibold text-neutral-900 mb-4">Stato del profilo</h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {profileSections.map((section, index) => (
                  <div
                    key={index}
                    className={`flex items-center justify-between p-3 rounded-lg ${
                      section.complete ? 'bg-green-50' : 'bg-amber-50'
                    }`}
                  >
                    <span className="text-sm font-medium text-neutral-700">{section.name}</span>
                    {section.complete ? (
                      <CheckCircle className="w-5 h-5 text-green-500" />
                    ) : (
                      <AlertCircle className="w-5 h-5 text-amber-500" />
                    )}
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Profile Preview */}
            <Card className="p-6">
              <div className="text-center mb-4">
                <div className="w-20 h-20 bg-gradient-to-br from-primary-400 to-secondary-400 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-3">
                  MR
                </div>
                <h3 className="font-semibold text-neutral-900">{user.name}</h3>
                <p className="text-sm text-neutral-500">Infermiera specializzata</p>
                {user.verified ? (
                  <Badge variant="success" className="mt-2">
                    <CheckCircle className="w-3 h-3 mr-1" />
                    Verificato
                  </Badge>
                ) : (
                  <Badge variant="warning" className="mt-2">
                    <Clock className="w-3 h-3 mr-1" />
                    In verifica
                  </Badge>
                )}
              </div>
              <div className="space-y-2">
                <Link href="/dashboard/profilo">
                  <Button variant="outline" className="w-full" size="sm">
                    <User className="w-4 h-4 mr-2" />
                    Modifica profilo
                  </Button>
                </Link>
                <Button variant="ghost" className="w-full" size="sm">
                  <Eye className="w-4 h-4 mr-2" />
                  Anteprima pubblica
                </Button>
              </div>
            </Card>

            {/* Notifications */}
            <Card className="p-6">
              <h2 className="text-lg font-semibold text-neutral-900 mb-4">Notifiche</h2>
              <div className="space-y-3">
                {notifications.map((notification) => (
                  <div key={notification.id} className="flex items-start gap-3 p-3 bg-neutral-50 rounded-lg">
                    <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${
                      notification.type === 'success' ? 'bg-green-500' :
                      notification.type === 'warning' ? 'bg-amber-500' : 'bg-primary-500'
                    }`} />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-neutral-700">{notification.message}</p>
                      <p className="text-xs text-neutral-400 mt-1">{notification.time}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Button variant="ghost" className="w-full mt-4" size="sm">
                Vedi tutte le notifiche
              </Button>
            </Card>

            {/* Upload Documents CTA */}
            <Card className="p-6 bg-gradient-to-br from-secondary-50 to-primary-50">
              <Upload className="w-10 h-10 text-secondary-500 mb-3" />
              <h3 className="font-semibold text-neutral-900 mb-2">Carica i tuoi documenti</h3>
              <p className="text-sm text-neutral-600 mb-4">
                Aggiungi CV, certificati e altri documenti per completare il tuo profilo.
              </p>
              <Link href="/dashboard/documenti">
                <Button variant="secondary" size="sm" className="w-full">
                  Carica documenti
                </Button>
              </Link>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
