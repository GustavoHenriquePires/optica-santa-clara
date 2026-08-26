import type { Metadata } from "next";
import { Manrope, Playfair_Display } from "next/font/google";
import "./globals.css";

const siteUrl = "https://optica-santa-clara-demo.vercel.app";
const manrope = Manrope({ variable: "--font-sans", subsets: ["latin"] });
const playfair = Playfair_Display({ variable: "--font-serif", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "Óptica Santa Clara | Óculos e lentes em Campo Grande", template: "%s | Óptica Santa Clara" },
  description: "Óculos, lentes e atendimento próximo em três unidades da Óptica Santa Clara em Campo Grande, MS.",
  keywords: ["óptica em Campo Grande", "Óptica Santa Clara", "óculos de grau", "óculos de sol", "lentes", "armações", "Campo Grande MS"],
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "/",
    siteName: "Óptica Santa Clara",
    title: "Óptica Santa Clara | Cuidado para a sua visão",
    description: "Óculos, lentes, curadoria e atendimento próximo em três unidades de Campo Grande, MS.",
    images: [{ url: "/logo-santa-clara.png", alt: "Óptica Santa Clara" }],
  },
  twitter: { card: "summary", title: "Óptica Santa Clara", description: "Óculos, lentes e atendimento próximo em Campo Grande, MS." },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Optician",
    name: "Óptica Santa Clara",
    url: siteUrl,
    image: `${siteUrl}/logo-santa-clara.png`,
    areaServed: "Campo Grande, MS",
    address: [
      { "@type": "PostalAddress", streetAddress: "Rua Antônio Maria Coelho, 1735", addressLocality: "Campo Grande", addressRegion: "MS", addressCountry: "BR" },
      { "@type": "PostalAddress", streetAddress: "Rua Padre João Crippa, 903", addressLocality: "Campo Grande", addressRegion: "MS", addressCountry: "BR" },
      { "@type": "PostalAddress", streetAddress: "Av. Ezequiel Ferreira Lima, 715", addressLocality: "Campo Grande", addressRegion: "MS", addressCountry: "BR" },
    ],
  };

  return (
    <html lang="pt-BR">
      <body className={`${manrope.variable} ${playfair.variable}`}>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
        {children}
      </body>
    </html>
  );
}
