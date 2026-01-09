'use client';

import Link from 'next/link';
import { Shield, ArrowLeft, Mail, Phone } from 'lucide-react';
import { Card } from '@/components/ui';

export default function Privacy() {
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
              <Shield className="w-8 h-8 text-primary-600" />
            </div>
            <div>
              <h1 className="text-3xl lg:text-4xl font-bold text-neutral-900">
                Privacy Policy
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

                <h2 className="text-2xl font-bold text-neutral-900 mb-4">1. Titolare del Trattamento</h2>
                <p className="text-neutral-600 mb-6">
                  Il Titolare del trattamento dei dati personali è <strong>MedLinker</strong>, con sede legale in Padova (PD), Italia.
                </p>
                <ul className="text-neutral-600 mb-6 space-y-2">
                  <li><strong>Email:</strong> info@medlinker.it</li>
                  <li><strong>Telefono:</strong> +39 327 881 1776</li>
                </ul>

                <h2 className="text-2xl font-bold text-neutral-900 mb-4 mt-8">2. Tipologie di Dati Raccolti</h2>
                <p className="text-neutral-600 mb-4">
                  MedLinker raccoglie le seguenti categorie di dati personali:
                </p>

                <h3 className="text-xl font-semibold text-neutral-800 mb-3">2.1 Dati di identificazione</h3>
                <ul className="text-neutral-600 mb-4 list-disc pl-6 space-y-1">
                  <li>Nome e cognome</li>
                  <li>Data e luogo di nascita</li>
                  <li>Codice fiscale</li>
                  <li>Documento di identità</li>
                  <li>Nazionalità</li>
                </ul>

                <h3 className="text-xl font-semibold text-neutral-800 mb-3">2.2 Dati di contatto</h3>
                <ul className="text-neutral-600 mb-4 list-disc pl-6 space-y-1">
                  <li>Indirizzo email</li>
                  <li>Numero di telefono</li>
                  <li>Indirizzo di residenza/domicilio</li>
                </ul>

                <h3 className="text-xl font-semibold text-neutral-800 mb-3">2.3 Dati professionali</h3>
                <ul className="text-neutral-600 mb-4 list-disc pl-6 space-y-1">
                  <li>Titoli di studio e specializzazioni</li>
                  <li>Iscrizione ad albi professionali</li>
                  <li>Esperienze lavorative</li>
                  <li>Competenze linguistiche</li>
                  <li>Certificazioni professionali</li>
                </ul>

                <h3 className="text-xl font-semibold text-neutral-800 mb-3">2.4 Dati aziendali (per datori di lavoro)</h3>
                <ul className="text-neutral-600 mb-6 list-disc pl-6 space-y-1">
                  <li>Ragione sociale</li>
                  <li>Partita IVA</li>
                  <li>PEC</li>
                  <li>Numero REA</li>
                  <li>Sede legale e operativa</li>
                </ul>

                <h2 className="text-2xl font-bold text-neutral-900 mb-4 mt-8">3. Finalità del Trattamento</h2>
                <p className="text-neutral-600 mb-4">
                  I dati personali vengono trattati per le seguenti finalità:
                </p>
                <ul className="text-neutral-600 mb-6 list-disc pl-6 space-y-2">
                  <li><strong>Erogazione del servizio:</strong> Gestione della piattaforma di matching tra professionisti sanitari e strutture sanitarie</li>
                  <li><strong>Gestione account:</strong> Creazione e gestione degli account utente</li>
                  <li><strong>Comunicazioni di servizio:</strong> Invio di comunicazioni relative ai servizi richiesti</li>
                  <li><strong>Adempimenti legali:</strong> Adempimento di obblighi previsti dalla legge</li>
                  <li><strong>Marketing:</strong> Previo consenso, invio di comunicazioni promozionali</li>
                  <li><strong>Miglioramento servizi:</strong> Analisi anonime per migliorare la piattaforma</li>
                </ul>

                <h2 className="text-2xl font-bold text-neutral-900 mb-4 mt-8">4. Base Giuridica del Trattamento</h2>
                <p className="text-neutral-600 mb-6">
                  Il trattamento dei dati personali si fonda sulle seguenti basi giuridiche ai sensi dell&apos;art. 6 del GDPR:
                </p>
                <ul className="text-neutral-600 mb-6 list-disc pl-6 space-y-2">
                  <li><strong>Esecuzione contrattuale:</strong> Per l&apos;erogazione dei servizi richiesti</li>
                  <li><strong>Consenso:</strong> Per attività di marketing e comunicazioni promozionali</li>
                  <li><strong>Obbligo legale:</strong> Per adempiere a obblighi di legge</li>
                  <li><strong>Legittimo interesse:</strong> Per il miglioramento dei servizi</li>
                </ul>

                <h2 className="text-2xl font-bold text-neutral-900 mb-4 mt-8">5. Modalità di Trattamento</h2>
                <p className="text-neutral-600 mb-6">
                  Il trattamento dei dati personali viene effettuato mediante strumenti informatici e/o telematici,
                  con logiche strettamente correlate alle finalità indicate e, comunque, in modo da garantire
                  la sicurezza e la riservatezza dei dati stessi, nel rispetto delle misure tecniche e
                  organizzative adeguate ai sensi dell&apos;art. 32 del GDPR.
                </p>

                <h2 className="text-2xl font-bold text-neutral-900 mb-4 mt-8">6. Conservazione dei Dati</h2>
                <p className="text-neutral-600 mb-6">
                  I dati personali saranno conservati per il tempo necessario al conseguimento delle finalità
                  per le quali sono trattati e comunque:
                </p>
                <ul className="text-neutral-600 mb-6 list-disc pl-6 space-y-2">
                  <li>Per la durata del rapporto contrattuale</li>
                  <li>Per i successivi 10 anni per adempimenti fiscali e contabili</li>
                  <li>Per il tempo necessario alla tutela dei diritti in sede giudiziaria</li>
                </ul>

                <h2 className="text-2xl font-bold text-neutral-900 mb-4 mt-8">7. Comunicazione e Diffusione dei Dati</h2>
                <p className="text-neutral-600 mb-4">
                  I dati personali potranno essere comunicati a:
                </p>
                <ul className="text-neutral-600 mb-6 list-disc pl-6 space-y-2">
                  <li>Strutture sanitarie registrate sulla piattaforma (previo abbonamento attivo)</li>
                  <li>Fornitori di servizi tecnici e informatici</li>
                  <li>Consulenti e professionisti</li>
                  <li>Autorità competenti, quando richiesto dalla legge</li>
                </ul>
                <p className="text-neutral-600 mb-6">
                  I dati non saranno in alcun modo diffusi al pubblico.
                </p>

                <h2 className="text-2xl font-bold text-neutral-900 mb-4 mt-8">8. Trasferimento Dati Extra-UE</h2>
                <p className="text-neutral-600 mb-6">
                  I dati personali sono conservati su server ubicati all&apos;interno dell&apos;Unione Europea.
                  Qualora fosse necessario trasferire i dati al di fuori dell&apos;UE, ciò avverrà
                  nel rispetto delle garanzie previste dal GDPR (decisioni di adeguatezza, clausole
                  contrattuali standard, etc.).
                </p>

                <h2 className="text-2xl font-bold text-neutral-900 mb-4 mt-8">9. Diritti dell&apos;Interessato</h2>
                <p className="text-neutral-600 mb-4">
                  Ai sensi degli artt. 15-22 del GDPR, l&apos;interessato ha diritto di:
                </p>
                <ul className="text-neutral-600 mb-6 list-disc pl-6 space-y-2">
                  <li><strong>Accesso:</strong> Ottenere conferma dell&apos;esistenza di trattamenti e accesso ai propri dati</li>
                  <li><strong>Rettifica:</strong> Ottenere la rettifica di dati inesatti</li>
                  <li><strong>Cancellazione:</strong> Ottenere la cancellazione dei dati (&quot;diritto all&apos;oblio&quot;)</li>
                  <li><strong>Limitazione:</strong> Ottenere la limitazione del trattamento</li>
                  <li><strong>Portabilità:</strong> Ricevere i dati in formato strutturato</li>
                  <li><strong>Opposizione:</strong> Opporsi al trattamento</li>
                  <li><strong>Revoca consenso:</strong> Revocare il consenso in qualsiasi momento</li>
                </ul>

                <h2 className="text-2xl font-bold text-neutral-900 mb-4 mt-8">10. Reclamo all&apos;Autorità di Controllo</h2>
                <p className="text-neutral-600 mb-6">
                  L&apos;interessato ha diritto di proporre reclamo all&apos;Autorità Garante per la Protezione
                  dei Dati Personali (www.garanteprivacy.it) qualora ritenga che il trattamento dei
                  propri dati personali sia contrario alla normativa vigente.
                </p>

                <h2 className="text-2xl font-bold text-neutral-900 mb-4 mt-8">11. Sicurezza dei Dati</h2>
                <p className="text-neutral-600 mb-6">
                  MedLinker adotta misure tecniche e organizzative adeguate per garantire un livello
                  di sicurezza appropriato al rischio, incluse:
                </p>
                <ul className="text-neutral-600 mb-6 list-disc pl-6 space-y-2">
                  <li>Crittografia dei dati sensibili</li>
                  <li>Controlli di accesso basati su ruoli</li>
                  <li>Backup regolari</li>
                  <li>Monitoraggio costante dei sistemi</li>
                  <li>Formazione del personale</li>
                </ul>

                <h2 className="text-2xl font-bold text-neutral-900 mb-4 mt-8">12. Modifiche alla Privacy Policy</h2>
                <p className="text-neutral-600 mb-6">
                  MedLinker si riserva il diritto di modificare questa Privacy Policy in qualsiasi momento.
                  Le modifiche saranno pubblicate su questa pagina con indicazione della data di aggiornamento.
                  Si consiglia di consultare periodicamente questa pagina.
                </p>

                <h2 className="text-2xl font-bold text-neutral-900 mb-4 mt-8">13. Contatti</h2>
                <p className="text-neutral-600 mb-4">
                  Per esercitare i propri diritti o per qualsiasi informazione relativa al trattamento
                  dei dati personali, è possibile contattare il Titolare del trattamento:
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
              <Link href="/termini">
                <Card hover className="p-4 text-center">
                  <p className="font-medium text-neutral-800">Termini e Condizioni</p>
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
