import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/lib/language-context";
import { Header, Footer } from "@/components/layout";

export const metadata: Metadata = {
  title: "Medlinker - La piattaforma di incontro tra professionisti sanitari e strutture mediche",
  description: "Medlinker connette personale sanitario qualificato con ospedali, RSA, cliniche private e centri medici italiani. Trova il candidato perfetto o la tua prossima opportunità professionale.",
  keywords: "infermieri, personale sanitario, lavoro sanità, ospedali, RSA, cliniche, recruiting sanitario, Italia",
  authors: [{ name: "Medlinker" }],
  openGraph: {
    title: "Medlinker - LinkedIn Sanitario",
    description: "La piattaforma che connette il talento sanitario con le opportunità",
    type: "website",
    locale: "it_IT",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <body className="antialiased min-h-screen flex flex-col">
        <LanguageProvider>
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
