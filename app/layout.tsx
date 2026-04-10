import './globals.css';
import type { Metadata } from 'next';
import { Inter, Pacifico, DM_Serif_Display } from 'next/font/google';
import { FAQSchema } from '@/components/faq/faq-schema';

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
  title: 'Courtyard Pickle | Premium Indoor Pickleball',
  description:
    'Sheltered courts. Free refreshments. Relaxing café. Book your court at Courtyard Pickle Da Nang.',
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'SportsActivityLocation',
  name: 'Courtyard Pickle',
  url: 'PLACEHOLDER_URL',
  telephone: '+84 93 215 00 06',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '27 Thị Xuân Quý, Bắc Mỹ An',
    addressLocality: 'Da Nang',
    addressRegion: 'Ngũ Hành Sơn',
    postalCode: '550000',
    addressCountry: 'VN',
  },
  openingHours: 'Mo-Su 05:00-22:00',
  sport: 'Pickleball',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
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
        <FAQSchema />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className={`${inter.className} ${pacifico.variable} ${dmSerifDisplay.variable}`}>{children}</body>
    </html>
  );
}
