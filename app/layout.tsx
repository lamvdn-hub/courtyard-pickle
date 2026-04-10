import './globals.css';
import type { Metadata } from 'next';
import { Inter, Pacifico, DM_Serif_Display } from 'next/font/google';

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
    'Sheltered courts. Free refreshments. Relaxing café. Book your court at Courtyard Pickle.',
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How do I book a court at Courtyard Pickle?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Clicking any \"Book\" or \"Reserve\" button on this page takes you to our booking partner's secure site, where you can select your preferred date, time, and court at Courtyard Pickle in Da Nang. After finalizing the payment you will receive the confirmation instantly in your email.",
      },
    },
    {
      '@type': 'Question',
      name: 'How much does it cost to rent a court at Courtyard Pickle?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Court rental pricing varies by time slot, ranging from 120k-160k per hour with social play ticket at 50k per section. Courtyard Pickle also offer monthly regular schedule from 100k-140k per hour.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are your opening hours?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Courtyard Pickle Da Nang is open daily from 05:00 to 22:00. Hours may vary on public holidays, please check our booking calendar for live availability.',
      },
    },
    {
      '@type': 'Question',
      name: 'Where is Courtyard Pickle located?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You can find us at 27 Thị Xuân Quý, Bắc Mỹ An, Ngũ Hành Sơn, Đà Nẵng.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need to bring my own paddle?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: ' Courtyard Pickle provides free paddles and balls for all our players. Just simply show up and play.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can beginners play at Courtyard Pickle?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Absolutely! We welcome all level of players to Courtyard Pickle, and we are especially proud of our amazing community that always extend a helping hand to beginners.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you offer pickleball lessons at Courtyard?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, we offer both private and group lessons suitable for all levels and ages at Courtyard Pickle. Lessons can be booked by contacting us directly.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is there parking at Courtyard Pickle?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, dedicated motorcycle parking is available on-site. Car parking is available curbside directly in front of the facility on Dương Thị Xuân Quý.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is your cancellation and refund policy?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You can reschedule any booking up to 5 hours in advance at no charge. Cancellations made more than 5 hours before your session are eligible for a full refund. Cancellations within 5 hours are non-refundable.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I book pickleball courts for a group or private event?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. We accommodate group sessions, events, and private tournaments at Courtyard Pickle, serving Da Nang and surrounding areas. Please contact us at +84 932150006 or message us on Facebook to discuss availability, pricing, and setup.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I walk in without a reservation?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Walk-ins are welcome when courts are available, but we highly recommend booking in advance to guarantee your slot, especially on weekends.',
      },
    },
  ],
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className={`${inter.className} ${pacifico.variable} ${dmSerifDisplay.variable}`}>{children}</body>
    </html>
  );
}
