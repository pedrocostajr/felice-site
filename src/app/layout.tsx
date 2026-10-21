import type { Metadata } from 'next';
import Script from 'next/script';
import { Archivo } from 'next/font/google';
import './globals.css';
import { SITE, UNIDADES } from '@/data/site';
import { CotacaoProvider } from '@/components/CotacaoProvider';
import { CestaDrawer } from '@/components/CestaDrawer';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { JsonLd } from '@/components/JsonLd';
import { WhatsAppFlutuante } from '@/components/WhatsAppFlutuante';

const archivo = Archivo({ subsets: ['latin'], axes: ['wdth'], variable: '--font-archivo', display: 'swap' });

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: 'Locação de Equipamentos para Construção em Gramado e Canela | Felice Locações',
    template: '%s',
  },
  description: SITE.descricao,
  openGraph: { siteName: SITE.nome, locale: 'pt_BR', type: 'website' },
  alternates: { canonical: '/' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={archivo.variable}>
      <head>
        <Script id="gtm" strategy="afterInteractive">{`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});
          var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
          j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','${SITE.gtmId}');
        `}</Script>
      </head>
      <body className="font-sans">
        <noscript>
          <iframe src={`https://www.googletagmanager.com/ns.html?id=${SITE.gtmId}`} height="0" width="0" style={{ display: 'none', visibility: 'hidden' }} />
        </noscript>
        <CotacaoProvider>
          <a href="#conteudo" className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:bg-trator focus:p-2">
            Ir para o conteúdo
          </a>
          <Header />
          <main id="conteudo">{children}</main>
          <Footer />
          <CestaDrawer />
          <WhatsAppFlutuante />
        </CotacaoProvider>
        <JsonLd
          data={{
            '@context': 'https://schema.org',
            '@graph': UNIDADES.map((u) => ({
              '@type': 'LocalBusiness',
              '@id': `${SITE.url}/#${u.id}`,
              name: `${SITE.nome} - ${u.nome}`,
              image: SITE.logo,
              url: SITE.url,
              telephone: '+55 54 99340-2000',
              email: u.email,
              address: {
                '@type': 'PostalAddress',
                streetAddress: u.endereco,
                addressLocality: u.cidade,
                addressRegion: u.uf,
                addressCountry: 'BR',
              },
              areaServed: ['Gramado', 'Canela', 'Nova Petrópolis', 'São Francisco de Paula', 'Caxias do Sul'],
              sameAs: [SITE.redes.instagram, SITE.redes.facebook],
            })),
          }}
        />
      </body>
    </html>
  );
}
