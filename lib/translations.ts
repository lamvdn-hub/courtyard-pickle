export type Language = 'en' | 'vi';

export interface Translations {
  nav: {
    howItWorks: string;
    facility: string;
    faq: string;
    secureYourCourt: string;
  };
  hero: {
    headlinePart1: string;
    headlinePart2: string;
    description: string;
    ctaPrimary: string;
    ctaSecondary: string;
    ctaSecondaryMobile: string;
  };
  features: {
    equipment: string;
    sheltered: string;
    skillLevels: string;
  };
  mobile: {
    language: string;
    readyToPlay: string;
    secureYourCourt: string;
    howItWorks: string;
    ourFacility: string;
    faq: string;
    openHours: string;
  };
}

const en: Translations = {
  nav: {
    howItWorks: 'How it Works',
    facility: 'Facility',
    faq: 'FAQ',
    secureYourCourt: 'Secure Your Court',
  },
  hero: {
    headlinePart1: 'Courtyard',
    headlinePart2: 'Awaits You.',
    description:
      'Covered courts. Free equipment care. A caf\u00e9 to unwind after your games. At Courtyard, leave the details to us and just enjoy.',
    ctaPrimary: 'Book a Court',
    ctaSecondary: 'How It Works',
    ctaSecondaryMobile: 'See how it works',
  },
  features: {
    equipment: 'Free Equipment and Cleaning',
    sheltered: 'Covered & Sheltered',
    skillLevels: 'All Skill Levels',
  },
  mobile: {
    language: 'Language',
    readyToPlay: 'Ready to play?',
    secureYourCourt: 'Secure your court',
    howItWorks: 'How it works',
    ourFacility: 'Our facility',
    faq: 'FAQ',
    openHours: 'Open daily 05:00 \u2013 22:00  \u00b7  2 courts available',
  },
};

const vi: Translations = {
  nav: {
    howItWorks: 'C\u00e1ch th\u1ee9c ho\u1ea1t \u0111\u1ed9ng',
    facility: 'C\u01a1 s\u1edf v\u1eadt ch\u1ea5t',
    faq: 'C\u00e2u h\u1ecfi th\u01b0\u1eddng g\u1eb7p',
    secureYourCourt: '\u0110\u1eb7t s\u00e2n ngay',
  },
  hero: {
    headlinePart1: 'Courtyard',
    headlinePart2: 'Ch\u1edd \u0110\u00f3n B\u1ea1n.',
    description:
      'H\u1ec7 th\u1ed1ng s\u00e2n m\u00e1i che. D\u1ecbch v\u1ee5 ch\u0103m s\u00f3c d\u1ee5ng c\u1ee5 mi\u1ec5n ph\u00ed. Caf\u00e9 th\u01b0 gi\u00e3n sau tr\u1eadn \u0111\u1ea5u. T\u1ea1i Courtyard, h\u00e3y \u0111\u1ec3 ch\u00fang t\u00f4i lo m\u1ecdi th\u1ee9, vi\u1ec7c c\u1ee7a b\u1ea1n l\u00e0 t\u1eadn h\u01b0\u1edfng cu\u1ed9c ch\u01a1i.',
    ctaPrimary: '\u0110\u1eb7t s\u00e2n ngay',
    ctaSecondary: 'T\u00ecm hi\u1ec3u th\u00eam',
    ctaSecondaryMobile: 'T\u00ecm hi\u1ec3u th\u00eam',
  },
  features: {
    equipment: 'Mi\u1ec5n ph\u00ed d\u1ee5ng c\u1ee5 & v\u1ec7 sinh',
    sheltered: 'S\u00e2n c\u00f3 m\u00e1i che hi\u1ec7n \u0111\u1ea1i',
    skillLevels: 'Ph\u00f9 h\u1ee3p m\u1ecdi c\u1ea5p \u0111\u1ed9',
  },
  mobile: {
    language: 'Ng\u00f4n ng\u1eef',
    readyToPlay: 'S\u1eb5n s\u00e0ng ch\u01a1i?',
    secureYourCourt: '\u0110\u1eb7t s\u00e2n ngay',
    howItWorks: 'C\u00e1ch th\u1ee9c ho\u1ea1t \u0111\u1ed9ng',
    ourFacility: 'C\u01a1 s\u1edf v\u1eadt ch\u1ea5t',
    faq: 'C\u00e2u h\u1ecfi th\u01b0\u1eddng g\u1eb7p',
    openHours: 'M\u1edf c\u1eeda h\u00e0ng ng\u00e0y 05:00 \u2013 22:00  \u00b7  2 s\u00e2n',
  },
};

const translations: Record<Language, Translations> = { en, vi };

export function getTranslations(lang: string): Translations {
  return translations[lang as Language] ?? translations.en;
}
