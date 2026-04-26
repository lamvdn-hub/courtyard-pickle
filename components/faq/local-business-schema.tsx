const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'SportsActivityLocation',
  name: 'Courtyard Pickle',
  url: 'https://courtyardpickledanang.com',
  telephone: '+84 93 215 00 06',
  email: 'info@courtyardpickledanang.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '27 Dương Thị Xuân Quý, Bắc Mỹ An',
    addressLocality: 'Da Nang',
    addressRegion: 'Ngũ Hành Sơn',
    postalCode: '550000',
    addressCountry: 'VN',
  },
  openingHours: 'Mo-Su 05:30-22:30',
  sport: 'Pickleball',
};

export function LocalBusinessSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
    />
  );
}
