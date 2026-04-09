import './globals.css';
import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });
const playfair = Playfair_Display({
  subsets: ['latin', 'vietnamese'],
  style: ['italic'],
  variable: '--font-playfair',
});

export const metadata: Metadata = {
  title: 'Courtyard Pickle | Premium Indoor Pickleball',
  description:
    'Sheltered courts. Free refreshments. Relaxing café. Book your court at Courtyard Pickle.',
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
      </head>
      <body className={`${inter.className} ${playfair.variable}`}>{children}</body>
    </html>
  );
}
