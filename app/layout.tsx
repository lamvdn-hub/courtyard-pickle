import './globals.css';
import type { Metadata } from 'next';
import { Inter, Lora } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });
const lora = Lora({
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
      <body className={`${inter.className} ${lora.variable}`}>{children}</body>
    </html>
  );
}
