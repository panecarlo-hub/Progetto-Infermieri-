'use client';

import Link from 'next/link';
import { ShieldCheck, ArrowLeft, Mail, Phone, CheckCircle, AlertCircle } from 'lucide-react';
import { Card, Button } from '@/components/ui';

export default function GDPR() {
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
              <ShieldCheck className="w-8 h-8 text-primary-600" />
            </div>
            <div>
              <h1 className="text-3xl lg:text-4xl font-bold text-neutral-900">
                Informativa GDPR
              </h1>
              <p className="text-neutral-500">Regolamento UE 2016/679 - Ultimo aggiornamento: Gennaio 2025</p>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-8 bg-white border-b">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="bg-primary-50 border border-primary-100 rounded-2xl p-6 lg:p-8">
              <h2 className="text-xl font-semibold text-primary-800 mb-4">
                Il tuo diritto alla privacy è fondamentale
              </h2>
              <p className="text-primary-700 mb-4">
                MedLinker si impegna a proteggere i tuoi dati personali in conformità al Regolamento
                Generale sulla Protezione dei Dati (GDPR - Regolamento UE 2016/679). Questa informativa
                ti spiega come raccogliamo, utilizziamo e proteggiamo le tue informazioni personali.
              </p>
              <p className="text-primary-600 text-sm">
                In qualità di piattaforma che tratta dati sensibili nel settore sanitario, adottiamo
                misure di sicurezza rafforzate per garantire la massima protezione.
              </p>
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
                <p className="text-neutral-600 mb-4">
                  Ai sensi dell&apos;art. 4 e dell&apos;art. 24 del GDPR, il Titolare del trattamento dei dati personali è:
                </p>
                <div className="bg-neutral-50 rounded-xl p-6 mb-6">
                  <p className="font-semibold text-neutral-800">MedLinker</p>
                  <p className="text-neutral-600">Sede: Padova (PD), Italia</p>
                  <p className="text-neutral-600">Email: info@medlinker.it</p>
                  <p className="text-neutral-600">Telefono: +39 327 881 1776</p>
                </div>

                <h2 className="text-2xl font-bold text-neutral-900 mb-4 mt-8">2. Categorie di Dati Personali Trattati</h2>

                <h3 className="text-xl font-semibold text-neutral-800 mb-3">2.1 Dati comuni</h3>
                <ul className="text-neutral-600 mb-4 list-disc pl-6 space-y-1">
                  <li>Dati identificativi (nome, cognome, data di nascita)</li>
                  <li>Dati di contatto (email, telefono, indirizzo)</li>
                  <li>Dati professionali (CV, esperienze, qualifiche)</li>
                  <li>Dati di navigazione (IP, log, cookie tecnici)</li>
                </ul>

                <h3 className="text-xl font-semibold text-neutral-800 mb-3">2.2 Categorie particolari di dati (Art. 9 GDPR)</h3>
                <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 mb-6">
                  <div className="flex items-start gap-3">
                    <AlertCircle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-yellow-800 mb-2">Dati sensibili trattati:</p>
                      <ul className="text-yellow-700 list-disc pl-6 space-y-1">
                        <li>Dati relativi alla salute (certificazioni sanitarie, idoneità)</li>
                        <li>Dati relativi all&apos;origine razziale o etnica (nazionalità, per finalità di visto)</li>
                        <li>Dati relativi ad appartenenza ad ordini professionali</li>
                      </ul>
                      <p className="text-yellow-600 mt-3 text-sm">
                        Il trattamento di questi dati avviene esclusivamente previo consenso esplicito
                        dell&apos;interessato (Art. 9.2.a GDPR) e per finalità di medicina del lavoro (Art. 9.2.h GDPR).
                      </p>
                    </div>
                  </div>
                </div>

                <h2 className="text-2xl font-bold text-neutral-900 mb-4 mt-8">3. Finalità e Base Giuridica del Trattamento</h2>

                <div className="space-y-4 mb-6">
                  <div className="border border-neutral-200 rounded-xl p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <h4 className="font-semibold text-neutral-800">Erogazione del servizio</h4>
                    </div>
                    <p className="text-neutral-600 text-sm">
                      <strong>Base giuridica:</strong> Esecuzione contrattuale (Art. 6.1.b GDPR)
                    </p>
                  </div>

                  <div className="border border-neutral-200 rounded-xl p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <h4 className="font-semibold text-neutral-800">Adempimenti legali e fiscali</h4>
                    </div>
                    <p className="text-neutral-600 text-sm">
                      <strong>Base giuridica:</strong> Obbligo legale (Art. 6.1.c GDPR)
                    </p>
                  </div>

                  <div className="border border-neutral-200 rounded-xl p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <h4 className="font-semibold text-neutral-800">Marketing e comunicazioni promozionali</h4>
                    </div>
                    <p className="text-neutral-600 text-sm">
                      <strong>Base giuridica:</strong> Consenso (Art. 6.1.a GDPR) - Revocabile in qualsiasi momento
                    </p>
                  </div>

                  <div className="border border-neutral-200 rounded-xl p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <h4 className="font-semibold text-neutral-800">Miglioramento servizi e analytics</h4>
                    </div>
                    <p className="text-neutral-600 text-sm">
                      <strong>Base giuridica:</strong> Legittimo interesse (Art. 6.1.f GDPR)
                    </p>
                  </div>
                </div>

                <h2 className="text-2xl font-bold text-neutral-900 mb-4 mt-8">4. I Tuoi Diritti (Artt. 15-22 GDPR)</h2>
                <p className="text-neutral-600 mb-4">
                  In qualità di interessato, hai il diritto di:
                </p>

                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div className="bg-neutral-50 rounded-xl p-4">
                    <h4 className="font-semibold text-neutral-800 mb-2">Diritto di Accesso (Art. 15)</h4>
                    <p className="text-neutral-600 text-sm">
                      Ottenere conferma dell&apos;esistenza di trattamenti e accesso ai tuoi dati personali.
                    </p>
                  </div>

                  <div className="bg-neutral-50 rounded-xl p-4">
                    <h4 className="font-semibold text-neutral-800 mb-2">Diritto di Rettifica (Art. 16)</h4>
                    <p className="text-neutral-600 text-sm">
                      Ottenere la correzione di dati personali inesatti che ti riguardano.
                    </p>
                  </div>

                  <div className="bg-neutral-50 rounded-xl p-4">
                    <h4 className="font-semibold text-neutral-800 mb-2">Diritto alla Cancellazione (Art. 17)</h4>
                    <p className="text-neutral-600 text-sm">
                      Ottenere la cancellazione dei tuoi dati (&quot;diritto all&apos;oblio&quot;).
                    </p>
                  </div>

                  <div className="bg-neutral-50 rounded-xl p-4">
                    <h4 className="font-semibold text-neutral-800 mb-2">Diritto di Limitazione (Art. 18)</h4>
                    <p className="text-neutral-600 text-sm">
                      Ottenere la limitazione del trattamento dei tuoi dati.
                    </p>
                  </div>

                  <div className="bg-neutral-50 rounded-xl p-4">
                    <h4 className="font-semibold text-neutral-800 mb-2">Diritto alla Portabilità (Art. 20)</h4>
                    <p className="text-neutral-600 text-sm">
                      Ricevere i tuoi dati in formato strutturato e trasferirli ad altro titolare.
                    </p>
                  </div>

                  <div className="bg-neutral-50 rounded-xl p-4">
                    <h4 className="font-semibold text-neutral-800 mb-2">Diritto di Opposizione (Art. 21)</h4>
                    <p className="text-neutral-600 text-sm">
                      Opporti al trattamento dei tuoi dati per motivi legittimi.
                    </p>
                  </div>
                </div>

                <h2 className="text-2xl font-bold text-neutral-900 mb-4 mt-8">5. Come Esercitare i Tuoi Diritti</h2>
                <p className="text-neutral-600 mb-4">
                  Puoi esercitare i tuoi diritti in qualsiasi momento:
                </p>
                <ul className="text-neutral-600 mb-6 list-disc pl-6 space-y-2">
                  <li>Inviando una email a <a href="mailto:info@medlinker.it" className="text-primary-600 hover:underline">info@medlinker.it</a></li>
                  <li>Contattandoci telefonicamente al +39 327 881 1776</li>
                  <li>Dall&apos;area riservata del tuo account</li>
                </ul>
                <p className="text-neutral-600 mb-6">
                  Risponderemo alla tua richiesta entro 30 giorni dal ricevimento, come previsto dal GDPR.
                  In caso di richieste complesse o numerose, tale termine può essere esteso di ulteriori
                  60 giorni, previa comunicazione.
                </p>

                <h2 className="text-2xl font-bold text-neutral-900 mb-4 mt-8">6. Destinatari dei Dati</h2>
                <p className="text-neutral-600 mb-4">
                  I tuoi dati personali possono essere comunicati a:
                </p>
                <ul className="text-neutral-600 mb-6 list-disc pl-6 space-y-2">
                  <li><strong>Strutture sanitarie:</strong> Registrate sulla piattaforma (previo abbonamento)</li>
                  <li><strong>Fornitori di servizi IT:</strong> Per hosting, manutenzione e sicurezza</li>
                  <li><strong>Consulenti:</strong> Commercialisti, legali (vincolati da riservatezza)</li>
                  <li><strong>Autorità:</strong> Quando richiesto dalla legge</li>
                </ul>
                <p className="text-neutral-600 mb-6">
                  Tutti i destinatari sono stati selezionati per la loro affidabilità e sono vincolati
                  da accordi contrattuali che garantiscono il rispetto del GDPR.
                </p>

                <h2 className="text-2xl font-bold text-neutral-900 mb-4 mt-8">7. Trasferimenti Extra-UE</h2>
                <p className="text-neutral-600 mb-6">
                  I dati sono conservati su server ubicati nell&apos;Unione Europea. Qualora fosse necessario
                  trasferire dati al di fuori dello SEE, ciò avverrà:
                </p>
                <ul className="text-neutral-600 mb-6 list-disc pl-6 space-y-2">
                  <li>Verso paesi con decisione di adeguatezza della Commissione UE</li>
                  <li>Con clausole contrattuali standard approvate dalla Commissione UE</li>
                  <li>Con garanzie appropriate ai sensi dell&apos;Art. 46 GDPR</li>
                </ul>

                <h2 className="text-2xl font-bold text-neutral-900 mb-4 mt-8">8. Periodo di Conservazione</h2>
                <p className="text-neutral-600 mb-4">
                  I dati personali sono conservati per il tempo necessario alle finalità per cui
                  sono raccolti:
                </p>
                <div className="bg-neutral-50 rounded-xl p-6 mb-6">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-neutral-200">
                        <th className="text-left py-2 font-semibold">Tipologia</th>
                        <th className="text-left py-2 font-semibold">Periodo</th>
                      </tr>
                    </thead>
                    <tbody className="text-neutral-600">
                      <tr className="border-b border-neutral-100">
                        <td className="py-2">Dati account attivo</td>
                        <td className="py-2">Durata del rapporto</td>
                      </tr>
                      <tr className="border-b border-neutral-100">
                        <td className="py-2">Dati fiscali/contabili</td>
                        <td className="py-2">10 anni</td>
                      </tr>
                      <tr className="border-b border-neutral-100">
                        <td className="py-2">Dati per contenziosi</td>
                        <td className="py-2">10 anni</td>
                      </tr>
                      <tr className="border-b border-neutral-100">
                        <td className="py-2">Consensi marketing</td>
                        <td className="py-2">Fino a revoca</td>
                      </tr>
                      <tr>
                        <td className="py-2">Log di sicurezza</td>
                        <td className="py-2">12 mesi</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h2 className="text-2xl font-bold text-neutral-900 mb-4 mt-8">9. Misure di Sicurezza</h2>
                <p className="text-neutral-600 mb-4">
                  MedLinker adotta misure tecniche e organizzative adeguate ai sensi dell&apos;Art. 32 GDPR:
                </p>
                <ul className="text-neutral-600 mb-6 list-disc pl-6 space-y-2">
                  <li>Crittografia SSL/TLS per tutte le comunicazioni</li>
                  <li>Crittografia dei dati sensibili a riposo</li>
                  <li>Autenticazione a due fattori (2FA) disponibile</li>
                  <li>Controlli di accesso basati su ruoli (RBAC)</li>
                  <li>Backup giornalieri con conservazione geografica distribuita</li>
                  <li>Monitoraggio continuo delle vulnerabilità</li>
                  <li>Formazione periodica del personale</li>
                  <li>Procedure di incident response</li>
                </ul>

                <h2 className="text-2xl font-bold text-neutral-900 mb-4 mt-8">10. Data Breach</h2>
                <p className="text-neutral-600 mb-6">
                  In caso di violazione dei dati personali (data breach), MedLinker:
                </p>
                <ul className="text-neutral-600 mb-6 list-disc pl-6 space-y-2">
                  <li>Notificherà l&apos;Autorità Garante entro 72 ore (Art. 33 GDPR)</li>
                  <li>Comunicherà agli interessati senza ingiustificato ritardo in caso di rischio elevato (Art. 34 GDPR)</li>
                  <li>Documenterà l&apos;accaduto nel registro delle violazioni</li>
                  <li>Adotterà misure per mitigare gli effetti negativi</li>
                </ul>

                <h2 className="text-2xl font-bold text-neutral-900 mb-4 mt-8">11. Reclamo all&apos;Autorità di Controllo</h2>
                <p className="text-neutral-600 mb-6">
                  Se ritieni che il trattamento dei tuoi dati personali sia contrario alla normativa vigente,
                  hai diritto di proporre reclamo all&apos;Autorità Garante per la Protezione dei Dati Personali:
                </p>
                <div className="bg-neutral-50 rounded-xl p-6 mb-6">
                  <p className="font-semibold text-neutral-800 mb-2">Garante per la Protezione dei Dati Personali</p>
                  <p className="text-neutral-600">Piazza Venezia 11 - 00187 Roma</p>
                  <p className="text-neutral-600">www.garanteprivacy.it</p>
                  <p className="text-neutral-600">Email: protocollo@gpdp.it</p>
                  <p className="text-neutral-600">PEC: protocollo@pec.gpdp.it</p>
                </div>

                <h2 className="text-2xl font-bold text-neutral-900 mb-4 mt-8">12. Contatti</h2>
                <p className="text-neutral-600 mb-4">
                  Per qualsiasi domanda sulla presente informativa o per esercitare i tuoi diritti:
                </p>
                <div className="bg-primary-50 rounded-xl p-6 mt-4">
                  <p className="font-semibold text-neutral-800 mb-3">MedLinker - Titolare del Trattamento</p>
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

      {/* CTA Section */}
      <section className="section-padding bg-primary-600">
        <div className="container-custom text-center">
          <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
            Hai domande sulla tua privacy?
          </h2>
          <p className="text-primary-100 mb-8 max-w-xl mx-auto">
            Il nostro team è a tua disposizione per qualsiasi chiarimento sul trattamento
            dei tuoi dati personali.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:info@medlinker.it">
              <Button size="lg" className="bg-white text-primary-600 hover:bg-neutral-100">
                <Mail className="w-4 h-4 mr-2" />
                Contattaci
              </Button>
            </a>
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
              <Link href="/cookies">
                <Card hover className="p-4 text-center">
                  <p className="font-medium text-neutral-800">Cookie Policy</p>
                </Card>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
