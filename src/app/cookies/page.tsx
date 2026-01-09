'use client';

import Link from 'next/link';
import { Cookie, ArrowLeft, Mail, Phone } from 'lucide-react';
import { Card } from '@/components/ui';

export default function Cookies() {
  return (
    <div>
      {/* Header Section */}
      <section className="relative bg-gradient-to-br from-primary-50 via-white to-secondary-50 section-padding">
        <div className="container-custom">
          <Link
            href="/"
            className="inline-flex items-center text-primary-600 hover:text-primary-700 mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Torna alla Home
          </Link>
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center">
              <Cookie className="w-8 h-8 text-primary-600" />
            </div>
            <div>
              <h1 className="text-3xl lg:text-4xl font-bold text-neutral-900">
                Cookie Policy
              </h1>
              <p className="text-neutral-500">Ultimo aggiornamento: Gennaio 2025</p>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <Card className="p-8 lg:p-12">
              <div className="prose prose-lg max-w-none">

                <h2 className="text-2xl font-bold text-neutral-900 mb-4">1. Cosa sono i Cookie</h2>
                <p className="text-neutral-600 mb-6">
                  I cookie sono piccoli file di testo che i siti web visitati inviano al browser
                  dell&apos;utente, dove vengono memorizzati per essere poi ritrasmessi agli stessi siti
                  alla visita successiva. I cookie sono utilizzati per diverse finalità, hanno caratteristiche
                  diverse e possono essere utilizzati sia dal titolare del sito che si sta visitando,
                  sia da terze parti.
                </p>

                <h2 className="text-2xl font-bold text-neutral-900 mb-4 mt-8">2. Tipologie di Cookie Utilizzati</h2>

                <h3 className="text-xl font-semibold text-neutral-800 mb-3">2.1 Cookie Tecnici (Necessari)</h3>
                <p className="text-neutral-600 mb-4">
                  Questi cookie sono essenziali per il corretto funzionamento del sito web e non possono
                  essere disattivati. Includono:
                </p>
                <ul className="text-neutral-600 mb-6 list-disc pl-6 space-y-2">
                  <li><strong>Cookie di sessione:</strong> Necessari per la navigazione e l&apos;utilizzo delle funzionalità del sito</li>
                  <li><strong>Cookie di autenticazione:</strong> Permettono di riconoscere l&apos;utente che ha effettuato il login</li>
                  <li><strong>Cookie di preferenza lingua:</strong> Memorizzano la lingua selezionata dall&apos;utente</li>
                  <li><strong>Cookie di sicurezza:</strong> Proteggono da attacchi informatici (CSRF, XSS)</li>
                </ul>

                <div className="bg-neutral-50 rounded-xl p-6 mb-6">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-neutral-200">
                        <th className="text-left py-2 font-semibold">Nome Cookie</th>
                        <th className="text-left py-2 font-semibold">Finalità</th>
                        <th className="text-left py-2 font-semibold">Durata</th>
                      </tr>
                    </thead>
                    <tbody className="text-neutral-600">
                      <tr className="border-b border-neutral-100">
                        <td className="py-2">session_id</td>
                        <td className="py-2">Gestione sessione utente</td>
                        <td className="py-2">Sessione</td>
                      </tr>
                      <tr className="border-b border-neutral-100">
                        <td className="py-2">auth_token</td>
                        <td className="py-2">Autenticazione utente</td>
                        <td className="py-2">30 giorni</td>
                      </tr>
                      <tr className="border-b border-neutral-100">
                        <td className="py-2">locale</td>
                        <td className="py-2">Preferenza lingua</td>
                        <td className="py-2">1 anno</td>
                      </tr>
                      <tr>
                        <td className="py-2">csrf_token</td>
                        <td className="py-2">Protezione sicurezza</td>
                        <td className="py-2">Sessione</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h3 className="text-xl font-semibold text-neutral-800 mb-3">2.2 Cookie Analitici</h3>
                <p className="text-neutral-600 mb-4">
                  Questi cookie ci permettono di raccogliere informazioni anonime su come i visitatori
                  utilizzano il sito, quali pagine visitano più frequentemente e se ricevono messaggi
                  di errore. Utilizziamo queste informazioni per migliorare il funzionamento del sito.
                </p>
                <ul className="text-neutral-600 mb-6 list-disc pl-6 space-y-2">
                  <li><strong>Google Analytics:</strong> Analisi del traffico e comportamento utenti (anonimizzato)</li>
                  <li><strong>Hotjar:</strong> Mappe di calore e registrazioni sessioni (anonimizzate)</li>
                </ul>

                <div className="bg-neutral-50 rounded-xl p-6 mb-6">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-neutral-200">
                        <th className="text-left py-2 font-semibold">Nome Cookie</th>
                        <th className="text-left py-2 font-semibold">Fornitore</th>
                        <th className="text-left py-2 font-semibold">Durata</th>
                      </tr>
                    </thead>
                    <tbody className="text-neutral-600">
                      <tr className="border-b border-neutral-100">
                        <td className="py-2">_ga</td>
                        <td className="py-2">Google Analytics</td>
                        <td className="py-2">2 anni</td>
                      </tr>
                      <tr className="border-b border-neutral-100">
                        <td className="py-2">_gid</td>
                        <td className="py-2">Google Analytics</td>
                        <td className="py-2">24 ore</td>
                      </tr>
                      <tr>
                        <td className="py-2">_hjid</td>
                        <td className="py-2">Hotjar</td>
                        <td className="py-2">1 anno</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h3 className="text-xl font-semibold text-neutral-800 mb-3">2.3 Cookie di Funzionalità</h3>
                <p className="text-neutral-600 mb-6">
                  Questi cookie permettono al sito di ricordare le scelte effettuate dall&apos;utente
                  (come il nome utente, la lingua o la regione) e fornire funzionalità avanzate
                  e personalizzate.
                </p>

                <h3 className="text-xl font-semibold text-neutral-800 mb-3">2.4 Cookie di Marketing (Profilazione)</h3>
                <p className="text-neutral-600 mb-6">
                  Questi cookie vengono utilizzati per tracciare i visitatori sui siti web. L&apos;intento
                  è quello di visualizzare annunci pertinenti e coinvolgenti per il singolo utente.
                  <strong> Questi cookie sono installati solo previo consenso esplicito dell&apos;utente.</strong>
                </p>

                <h2 className="text-2xl font-bold text-neutral-900 mb-4 mt-8">3. Cookie di Terze Parti</h2>
                <p className="text-neutral-600 mb-4">
                  Il nostro sito può contenere cookie installati da terze parti:
                </p>
                <ul className="text-neutral-600 mb-6 list-disc pl-6 space-y-2">
                  <li><strong>Google:</strong> Analytics, reCAPTCHA</li>
                  <li><strong>Facebook/Meta:</strong> Pixel per remarketing (previo consenso)</li>
                  <li><strong>Stripe:</strong> Elaborazione pagamenti sicuri</li>
                  <li><strong>WhatsApp:</strong> Widget chat</li>
                </ul>
                <p className="text-neutral-600 mb-6">
                  Per maggiori informazioni sui cookie di terze parti, consultare le rispettive
                  informative privacy.
                </p>

                <h2 className="text-2xl font-bold text-neutral-900 mb-4 mt-8">4. Gestione dei Cookie</h2>

                <h3 className="text-xl font-semibold text-neutral-800 mb-3">4.1 Banner Cookie</h3>
                <p className="text-neutral-600 mb-4">
                  Al primo accesso al sito viene mostrato un banner che permette di:
                </p>
                <ul className="text-neutral-600 mb-6 list-disc pl-6 space-y-2">
                  <li>Accettare tutti i cookie</li>
                  <li>Rifiutare i cookie non necessari</li>
                  <li>Personalizzare le preferenze per categoria</li>
                </ul>

                <h3 className="text-xl font-semibold text-neutral-800 mb-3">4.2 Modifica delle Preferenze</h3>
                <p className="text-neutral-600 mb-6">
                  È possibile modificare le preferenze sui cookie in qualsiasi momento cliccando
                  sul link &quot;Gestione Cookie&quot; presente nel footer del sito o dalle impostazioni
                  del proprio browser.
                </p>

                <h3 className="text-xl font-semibold text-neutral-800 mb-3">4.3 Disattivazione tramite Browser</h3>
                <p className="text-neutral-600 mb-4">
                  È possibile gestire i cookie anche attraverso le impostazioni del proprio browser.
                  Ecco come fare per i browser più comuni:
                </p>
                <ul className="text-neutral-600 mb-6 list-disc pl-6 space-y-2">
                  <li><strong>Chrome:</strong> Impostazioni → Privacy e sicurezza → Cookie</li>
                  <li><strong>Firefox:</strong> Opzioni → Privacy e sicurezza → Cookie</li>
                  <li><strong>Safari:</strong> Preferenze → Privacy → Cookie</li>
                  <li><strong>Edge:</strong> Impostazioni → Privacy → Cookie</li>
                </ul>

                <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 mb-6">
                  <p className="text-yellow-800">
                    <strong>Nota:</strong> La disattivazione dei cookie tecnici potrebbe compromettere
                    il funzionamento del sito e impedire l&apos;accesso ad alcune funzionalità.
                  </p>
                </div>

                <h2 className="text-2xl font-bold text-neutral-900 mb-4 mt-8">5. Base Giuridica</h2>
                <p className="text-neutral-600 mb-6">
                  L&apos;installazione dei cookie avviene nel rispetto di quanto previsto dal Regolamento
                  UE 2016/679 (GDPR), dal D.Lgs. 196/2003 (Codice Privacy) come modificato dal
                  D.Lgs. 101/2018, e dalle Linee Guida del Garante Privacy sui cookie del 10 giugno 2021.
                </p>
                <ul className="text-neutral-600 mb-6 list-disc pl-6 space-y-2">
                  <li><strong>Cookie tecnici:</strong> Non richiedono consenso (legittimo interesse)</li>
                  <li><strong>Cookie analitici anonimizzati:</strong> Non richiedono consenso</li>
                  <li><strong>Cookie di profilazione:</strong> Richiedono consenso esplicito</li>
                </ul>

                <h2 className="text-2xl font-bold text-neutral-900 mb-4 mt-8">6. Conservazione dei Dati</h2>
                <p className="text-neutral-600 mb-6">
                  I dati raccolti tramite i cookie vengono conservati per il tempo strettamente
                  necessario al raggiungimento delle finalità per cui sono stati raccolti e
                  comunque non oltre i termini indicati nella tabella sopra per ciascun cookie.
                </p>

                <h2 className="text-2xl font-bold text-neutral-900 mb-4 mt-8">7. Diritti dell&apos;Utente</h2>
                <p className="text-neutral-600 mb-4">
                  In relazione al trattamento dei dati personali effettuato tramite i cookie,
                  l&apos;utente può esercitare i diritti previsti dal GDPR:
                </p>
                <ul className="text-neutral-600 mb-6 list-disc pl-6 space-y-2">
                  <li>Diritto di accesso</li>
                  <li>Diritto di rettifica</li>
                  <li>Diritto alla cancellazione</li>
                  <li>Diritto di limitazione</li>
                  <li>Diritto di opposizione</li>
                  <li>Diritto di revoca del consenso</li>
                </ul>

                <h2 className="text-2xl font-bold text-neutral-900 mb-4 mt-8">8. Aggiornamenti della Cookie Policy</h2>
                <p className="text-neutral-600 mb-6">
                  La presente Cookie Policy può essere soggetta a modifiche e aggiornamenti.
                  La versione più aggiornata è sempre consultabile su questa pagina, con indicazione
                  della data dell&apos;ultimo aggiornamento.
                </p>

                <h2 className="text-2xl font-bold text-neutral-900 mb-4 mt-8">9. Contatti</h2>
                <p className="text-neutral-600 mb-4">
                  Per qualsiasi informazione relativa alla presente Cookie Policy o per esercitare
                  i propri diritti, è possibile contattare:
                </p>
                <div className="bg-primary-50 rounded-xl p-6 mt-4">
                  <p className="font-semibold text-neutral-800 mb-3">MedLinker</p>
                  <div className="space-y-2">
                    <a href="mailto:info@medlinker.it" className="flex items-center text-primary-600 hover:text-primary-700">
                      <Mail className="w-4 h-4 mr-2" />
                      info@medlinker.it
                    </a>
                    <a href="tel:+393278811776" className="flex items-center text-primary-600 hover:text-primary-700">
                      <Phone className="w-4 h-4 mr-2" />
                      +39 327 881 1776
                    </a>
                  </div>
                </div>

              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Related Links */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-xl font-semibold text-neutral-900 mb-6 text-center">
              Documenti correlati
            </h3>
            <div className="grid md:grid-cols-3 gap-4">
              <Link href="/privacy">
                <Card hover className="p-4 text-center">
                  <p className="font-medium text-neutral-800">Privacy Policy</p>
                </Card>
              </Link>
              <Link href="/termini">
                <Card hover className="p-4 text-center">
                  <p className="font-medium text-neutral-800">Termini e Condizioni</p>
                </Card>
              </Link>
              <Link href="/gdpr">
                <Card hover className="p-4 text-center">
                  <p className="font-medium text-neutral-800">Informativa GDPR</p>
                </Card>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
