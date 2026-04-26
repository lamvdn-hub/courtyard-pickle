import './globals.css';
import type { Metadata } from 'next';
import { Inter, Pacifico, DM_Serif_Display } from 'next/font/google';

import { headers } from 'next/headers';

const inter = Inter({ subsets: ['latin'] });
const pacifico = Pacifico({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-playfair',
});
const dmSerifDisplay = DM_Serif_Display({
  subsets: ['latin'],
  weight: '400',
  style: 'italic',
  variable: '--font-dm-serif-display',
});

export const metadata: Metadata = {
  title: 'Courtyard Pickle - Pickleball Court Rental in Da Nang',
  description:
    'Play pickleball in Da Nang at Courtyard Pickle. Free equipment, fresh fruit, café & all skill levels welcome. Easy online booking.',
  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: 'Courtyard Pickle - Pickleball Da Nang',
    description: 'Pickleball, fresh fruit, café & good vibes in Da Nang.',
    url: 'https://courtyardpickledanang.com',
    type: 'website',
    images: [
      {
        url: 'https://courtyardpickledanang.com/og-image.jpg',
      },
    ],
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const headerList = await headers();
  const lang = headerList.get('x-lang') || 'vi';

  return (
    <html lang={lang}>
      <head>
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-KSSXG57J');`,
          }}
        />
        {/* End Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if ('scrollRestoration' in history) {
                history.scrollRestoration = 'manual';
              }
              window.scrollTo(0, 0);
            `,
          }}
        />

        <link rel="icon" type="image/x-icon" href="/favicons/favicon.ico" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png" />
        <link rel="manifest" href="/favicons/site.webmanifest" />
      </head>
      <body className={`${inter.className} ${pacifico.variable} ${dmSerifDisplay.variable}`}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KSSXG57J"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        {children}
      </body>
    </html>
  );
}
