'use client';

import Link from 'next/link';
import { FileText, ArrowLeft, Mail, Phone } from 'lucide-react';
import { Card } from '@/components/ui';

export default function Termini() {
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
              <FileText className="w-8 h-8 text-primary-600" />
            </div>
            <div>
              <h1 className="text-3xl lg:text-4xl font-bold text-neutral-900">
                Termini e Condizioni
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

                <h2 className="text-2xl font-bold text-neutral-900 mb-4">1. Premesse e Definizioni</h2>
                <p className="text-neutral-600 mb-4">
                  I presenti Termini e Condizioni (di seguito &quot;Termini&quot;) regolano l&apos;utilizzo della piattaforma
                  MedLinker (di seguito &quot;Piattaforma&quot; o &quot;Servizio&quot;), gestita da MedLinker con sede a Padova (PD), Italia.
                </p>
                <p className="text-neutral-600 mb-6">
                  <strong>Definizioni:</strong>
                </p>
                <ul className="text-neutral-600 mb-6 list-disc pl-6 space-y-2">
                  <li><strong>Piattaforma:</strong> Il sito web medlinker.it e tutti i servizi correlati</li>
                  <li><strong>Utente:</strong> Qualsiasi persona fisica o giuridica che utilizza la Piattaforma</li>
                  <li><strong>Professionista Sanitario:</strong> Utente registrato in cerca di opportunità lavorative nel settore sanitario</li>
                  <li><strong>Datore di Lavoro:</strong> Struttura sanitaria registrata in cerca di personale</li>
                  <li><strong>Abbonamento:</strong> Piano di servizi a pagamento che consente l&apos;accesso a funzionalità premium</li>
                </ul>

                <h2 className="text-2xl font-bold text-neutral-900 mb-4 mt-8">2. Accettazione dei Termini</h2>
                <p className="text-neutral-600 mb-6">
                  L&apos;accesso e l&apos;utilizzo della Piattaforma implicano l&apos;accettazione integrale dei presenti Termini.
                  Se non si accettano i Termini, si prega di non utilizzare la Piattaforma. MedLinker si riserva
                  il diritto di modificare i Termini in qualsiasi momento, dandone comunicazione agli utenti
                  registrati via email.
                </p>

                <h2 className="text-2xl font-bold text-neutral-900 mb-4 mt-8">3. Descrizione del Servizio</h2>
                <p className="text-neutral-600 mb-4">
                  MedLinker è una piattaforma di networking professionale che facilita l&apos;incontro tra:
                </p>
                <ul className="text-neutral-600 mb-6 list-disc pl-6 space-y-2">
                  <li>Professionisti sanitari (infermieri, medici, OSS, tecnici, etc.) in cerca di opportunità lavorative</li>
                  <li>Strutture sanitarie (ospedali, RSA, cliniche private, centri medici, agenzie) in cerca di personale qualificato</li>
                </ul>
                <p className="text-neutral-600 mb-6">
                  La Piattaforma offre servizi di ricerca, selezione, verifica documentale e supporto
                  alle pratiche di assunzione, incluse procedure per personale extracomunitario.
                </p>

                <h2 className="text-2xl font-bold text-neutral-900 mb-4 mt-8">4. Registrazione e Account</h2>

                <h3 className="text-xl font-semibold text-neutral-800 mb-3">4.1 Requisiti di registrazione</h3>
                <p className="text-neutral-600 mb-4">
                  Per registrarsi alla Piattaforma è necessario:
                </p>
                <ul className="text-neutral-600 mb-4 list-disc pl-6 space-y-2">
                  <li>Avere almeno 18 anni di età</li>
                  <li>Fornire informazioni veritiere e complete</li>
                  <li>Accettare i presenti Termini e la Privacy Policy</li>
                </ul>

                <h3 className="text-xl font-semibold text-neutral-800 mb-3">4.2 Per i Professionisti Sanitari</h3>
                <ul className="text-neutral-600 mb-4 list-disc pl-6 space-y-2">
                  <li>Dati anagrafici completi</li>
                  <li>Titoli di studio e specializzazioni</li>
                  <li>Documentazione professionale</li>
                  <li>Iscrizione ad albo professionale (ove richiesto)</li>
                </ul>

                <h3 className="text-xl font-semibold text-neutral-800 mb-3">4.3 Per i Datori di Lavoro</h3>
                <ul className="text-neutral-600 mb-6 list-disc pl-6 space-y-2">
                  <li>Ragione sociale e dati aziendali</li>
                  <li>Partita IVA</li>
                  <li>PEC (Posta Elettronica Certificata)</li>
                  <li>Numero REA</li>
                  <li>Sede legale e operativa</li>
                </ul>

                <h2 className="text-2xl font-bold text-neutral-900 mb-4 mt-8">5. Obblighi dell&apos;Utente</h2>
                <p className="text-neutral-600 mb-4">
                  L&apos;Utente si impegna a:
                </p>
                <ul className="text-neutral-600 mb-6 list-disc pl-6 space-y-2">
                  <li>Fornire informazioni veritiere, accurate e aggiornate</li>
                  <li>Mantenere riservate le proprie credenziali di accesso</li>
                  <li>Non cedere il proprio account a terzi</li>
                  <li>Non utilizzare la Piattaforma per scopi illeciti</li>
                  <li>Rispettare la proprietà intellettuale di MedLinker e degli altri utenti</li>
                  <li>Non tentare di aggirare le misure di sicurezza della Piattaforma</li>
                  <li>Non contattare direttamente altri utenti al di fuori dei canali previsti dalla Piattaforma</li>
                </ul>

                <h2 className="text-2xl font-bold text-neutral-900 mb-4 mt-8">6. Abbonamenti e Pagamenti</h2>

                <h3 className="text-xl font-semibold text-neutral-800 mb-3">6.1 Piani di abbonamento</h3>
                <p className="text-neutral-600 mb-4">
                  MedLinker offre diversi piani di abbonamento per i Datori di Lavoro, che consentono l&apos;accesso
                  a funzionalità premium come la visualizzazione completa dei profili e la possibilità di
                  contattare i candidati. I dettagli dei piani sono disponibili nella sezione Abbonamenti.
                </p>

                <h3 className="text-xl font-semibold text-neutral-800 mb-3">6.2 Modalità di pagamento</h3>
                <p className="text-neutral-600 mb-4">
                  I pagamenti vengono effettuati tramite gateway sicuri. Sono accettate le principali
                  carte di credito/debito e bonifico bancario.
                </p>

                <h3 className="text-xl font-semibold text-neutral-800 mb-3">6.3 Rinnovo e disdetta</h3>
                <p className="text-neutral-600 mb-6">
                  Gli abbonamenti si rinnovano automaticamente alla scadenza, salvo disdetta comunicata
                  almeno 7 giorni prima del rinnovo. La disdetta può essere effettuata dall&apos;area riservata
                  o contattando il supporto.
                </p>

                <h2 className="text-2xl font-bold text-neutral-900 mb-4 mt-8">7. Gestione dei Documenti</h2>
                <p className="text-neutral-600 mb-4">
                  I documenti caricati sulla Piattaforma:
                </p>
                <ul className="text-neutral-600 mb-6 list-disc pl-6 space-y-2">
                  <li>Sono visualizzabili solo in modalità lettura (no download)</li>
                  <li>Sono soggetti a verifica da parte del team MedLinker</li>
                  <li>Devono essere autentici e validi</li>
                  <li>Possono essere tradotti automaticamente tramite strumenti di traduzione</li>
                </ul>

                <h2 className="text-2xl font-bold text-neutral-900 mb-4 mt-8">8. Verifica e Certificazione</h2>
                <p className="text-neutral-600 mb-6">
                  MedLinker si riserva il diritto di verificare le informazioni e i documenti forniti dagli utenti.
                  I profili verificati sono contrassegnati con apposito badge. La verifica non costituisce
                  garanzia assoluta dell&apos;autenticità delle informazioni, ma un controllo di conformità formale.
                </p>

                <h2 className="text-2xl font-bold text-neutral-900 mb-4 mt-8">9. Limitazione di Responsabilità</h2>
                <p className="text-neutral-600 mb-4">
                  MedLinker:
                </p>
                <ul className="text-neutral-600 mb-6 list-disc pl-6 space-y-2">
                  <li>Non garantisce l&apos;assunzione o il reperimento di personale</li>
                  <li>Non è responsabile delle informazioni fornite dagli utenti</li>
                  <li>Non è parte dei contratti di lavoro stipulati tra utenti</li>
                  <li>Non è responsabile per interruzioni del servizio dovute a cause di forza maggiore</li>
                  <li>Si riserva il diritto di sospendere o terminare account che violano i Termini</li>
                </ul>

                <h2 className="text-2xl font-bold text-neutral-900 mb-4 mt-8">10. Proprietà Intellettuale</h2>
                <p className="text-neutral-600 mb-6">
                  Tutti i contenuti della Piattaforma (testi, grafica, loghi, software, database) sono
                  di proprietà esclusiva di MedLinker o dei rispettivi titolari e sono protetti dalle
                  leggi sul diritto d&apos;autore e sulla proprietà intellettuale. È vietata qualsiasi
                  riproduzione non autorizzata.
                </p>

                <h2 className="text-2xl font-bold text-neutral-900 mb-4 mt-8">11. Sospensione e Cancellazione Account</h2>
                <p className="text-neutral-600 mb-4">
                  MedLinker può sospendere o cancellare un account in caso di:
                </p>
                <ul className="text-neutral-600 mb-6 list-disc pl-6 space-y-2">
                  <li>Violazione dei presenti Termini</li>
                  <li>Informazioni false o fraudolente</li>
                  <li>Comportamenti illeciti o dannosi</li>
                  <li>Mancato pagamento degli abbonamenti</li>
                  <li>Richiesta dell&apos;autorità giudiziaria</li>
                </ul>

                <h2 className="text-2xl font-bold text-neutral-900 mb-4 mt-8">12. Diritto di Recesso</h2>
                <p className="text-neutral-600 mb-6">
                  Ai sensi del D.Lgs. 206/2005 (Codice del Consumo), il consumatore ha diritto di recedere
                  dal contratto entro 14 giorni dalla sottoscrizione dell&apos;abbonamento, senza dover fornire
                  alcuna motivazione e senza penalità. Il diritto di recesso si esercita inviando comunicazione
                  a info@medlinker.it.
                </p>

                <h2 className="text-2xl font-bold text-neutral-900 mb-4 mt-8">13. Legge Applicabile e Foro Competente</h2>
                <p className="text-neutral-600 mb-6">
                  I presenti Termini sono regolati dalla legge italiana. Per qualsiasi controversia
                  derivante dall&apos;interpretazione o dall&apos;esecuzione dei presenti Termini sarà competente
                  in via esclusiva il Foro di Padova, salvo diversa disposizione di legge inderogabile.
                </p>

                <h2 className="text-2xl font-bold text-neutral-900 mb-4 mt-8">14. Modifiche ai Termini</h2>
                <p className="text-neutral-600 mb-6">
                  MedLinker si riserva il diritto di modificare i presenti Termini in qualsiasi momento.
                  Le modifiche saranno comunicate via email agli utenti registrati e pubblicate su questa
                  pagina. L&apos;uso continuato della Piattaforma dopo la modifica dei Termini costituisce
                  accettazione delle modifiche.
                </p>

                <h2 className="text-2xl font-bold text-neutral-900 mb-4 mt-8">15. Contatti</h2>
                <p className="text-neutral-600 mb-4">
                  Per qualsiasi domanda relativa ai presenti Termini, contattare:
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
              <Link href="/cookies">
                <Card hover className="p-4 text-center">
                  <p className="font-medium text-neutral-800">Cookie Policy</p>
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
