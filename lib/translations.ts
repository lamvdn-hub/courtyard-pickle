export type Language = 'en' | 'vi';

export interface Translations {
  nav: {
    howItWorks: string;
    facility: string;
    faq: string;
    contact: string;
    secureYourCourt: string;
  };
  hero: {
    headlinePart1: string;
    headlinePart2: string;
    slogan?: string;
    description: string;
    ctaPrimary: string;
    ctaSecondary: string;
    ctaSecondaryMobile: string;
  };
  features: {
    refreshments: string;
    facilities: string;
    skillLevels: string;
  };
  mobile: {
    language: string;
    readyToPlay: string;
    secureYourCourt: string;
    howItWorks: string;
    ourFacility: string;
    pricing: string;
    testimonials: string;
    tournaments: string;
    faq: string;
    contact: string;
    openHours: string;
  };
  howItWorks: {
    kicker: string;
    header: string;
    subheader: string;
    step1Title: string;
    step1Desc: string;
    step1MobileTitle: string;
    step1MobileDesc: string;
    step2Title: string;
    step2Desc: string;
    step2MobileTitle: string;
    step2MobileDesc: string;
    step3Title: string;
    step3Desc: string;
    step3MobileTitle: string;
    step3MobileDesc: string;
  };
  facility: {
    header: string;
    subheader: string;
    outdoorCafe: string;
    indoorCafe: string;
    outdoorArea: string;
    lockerRooms: string;
    mens: string;
    womens: string;
    showers: string;
    entrance: string;
    walkway: string;
    court1: string;
    court2: string;
    comingSoon: string;
    frontDesk: string;
    openSeating: string;
    counterTablesReception: string;
  };
  cta: {
    readyTitle: string;
    reserve: string;
    disclaimer: string;
  };
  faq: {
    kicker: string;
    header: string;
    subheader: string;
  };
  footer: {
    description: string;
    contactTitle: string;
    messageFacebook: string;
    callUs: string;
    primaryPhone: string;
    secondaryPhone: string;
    copyNumber: string;
    copiedNumber: string;
    locationTitle: string;
    addressLine1: string;
    addressLine2: string;
    hours: string;
    copyright: string;
    privacyPolicy: string;
    termsOfService: string;
  };
  reviews: {
    badgeFormat: string;
  };
  pricing: {
    kicker: string;
    header: string;
    subheader: string;
    casual: {
      title: string;
      desc: string;
      offPeak: string;
      peak: string;
    };
    fixed: {
      title: string;
      desc: string;
      offPeak: string;
      peak: string;
      contactCta: string;
    };
    social: {
      title: string;
      desc: string;
      price: string;
      calloutBody: string;
      calloutLink: string;
    };
    bookNow: string;
  };
  testimonials: {
    header: string;
    viewMore: string;
    reviews: {
      name: string;
      text: string;
    }[];
  };
  tournaments: {
    header: string;
    date: string;
    description: string;
    detailsBtn: string;
    comingSoonDate: string;
    chipStatusAnnounced: string;
    chipStatusToday: string;
    chipStatusRecent: string;
  };
}

const en: Translations = {
  nav: {
    howItWorks: 'How it Works',
    facility: 'Facility',
    faq: 'FAQ',
    contact: 'CONTACT',
    secureYourCourt: 'Secure Your Court',
  },
  hero: {
    headlinePart1: 'Courtyard',
    headlinePart2: 'Pickle.',
    slogan: 'Where Every Sense Is Touched',
    description:
      'Sheltered courts. Free equipments and cleaning service. A café to unwind after your games. At Courtyard, leave the details to us so you can just enjoy the game.',
    ctaPrimary: 'Book a Court',
    ctaSecondary: 'How It Works',
    ctaSecondaryMobile: 'See how it works',
  },
  features: {
    refreshments: 'Refreshing Fruits During Your Game',
    facilities: 'Showers & Full Amenities',
    skillLevels: 'All Skill Levels Welcomed',
  },
  mobile: {
    language: 'Language',
    readyToPlay: 'Ready to play?',
    secureYourCourt: 'Secure your court',
    howItWorks: 'How it works',
    ourFacility: 'Our facility',
    pricing: 'Pricing',
    testimonials: 'Testimonials',
    tournaments: 'Tournaments',
    faq: 'FAQ',
    contact: 'Contact',
    openHours: 'Open daily 05:00 – 22:00  ·  2 courts available',
  },
  howItWorks: {
    kicker: 'Simple as 1-2-3',
    header: 'How It Works',
    subheader: 'From booking to playing in under 60 seconds.',
    step1Title: 'Pick Your Date & Court',
    step1Desc: 'View real time availability, choose your preferred date and court on our booking page.',
    step1MobileTitle: 'Pick your date & court',
    step1MobileDesc: 'Browse date and live availability on our booking page',
    step2Title: 'Confirm & Pay',
    step2Desc: 'Booking information will be sent to you directly after payment confirmation.',
    step2MobileTitle: 'Confirm & pay',
    step2MobileDesc: 'Instant payment and booking information.',
    step3Title: 'Show Up & Play',
    step3Desc: "Court's ready, refreshment prepared, even gears are included. Simply arrive and enjoy your time.",
    step3MobileTitle: 'Show up & play',
    step3MobileDesc: 'Gear ready, refreshments are prepped. Simply arrive and enjoy.',
  },
  facility: {
    header: 'Our Facility',
    subheader: 'Everything you need all under one roof.',
    outdoorCafe: 'OUTDOOR CAFÉ',
    indoorCafe: 'INDOOR CAFÉ',
    outdoorArea: 'OUTDOOR AREA',
    lockerRooms: 'LOCKER ROOMS',
    mens: "Men's",
    womens: "Women's",
    showers: 'Showers',
    entrance: 'ENTRANCE',
    walkway: 'WALKWAY',
    court1: 'COURT 1 · INTERIOR',
    court2: 'COURT 2 · STREETSIDE',
    comingSoon: 'Coming soon',
    frontDesk: '+ Front Desk',
    openSeating: 'Open seating',
    counterTablesReception: 'Counter · Tables · Reception',
  },
  cta: {
    readyTitle: 'Ready to play?',
    reserve: 'Reserve Your Court',
    disclaimer: "You'll be taken to Alobo's official booking site to complete your reservation.",
  },
  faq: {
    kicker: 'Got Questions?',
    header: 'Everything You Need to Know',
    subheader: 'Clear information. Direct support.',
  },
  footer: {
    description: 'Courtyard Pickle is Da Nang\'s premier pickleball facility, offering court rentals, coaching, and social play at 27 Dương Thị Xuân Quý, Bắc Mỹ An, Ngũ Hành Sơn, Đà Nẵng 550000, Vietnam.',
    contactTitle: 'CONTACT US',
    messageFacebook: 'Facebook',
    callUs: 'Call Us',
    primaryPhone: 'PRIMARY',
    secondaryPhone: 'SECONDARY',
    copyNumber: 'Copy',
    copiedNumber: 'Copied \u2713',
    locationTitle: 'LOCATION',
    addressLine1: '27 Dương Thị Xuân Quý',
    addressLine2: 'Bắc Mỹ An, Ngũ Hành Sơn, Đà Nẵng 550000, Vietnam',
    hours: 'Open Daily: 05:00 – 22:00',
    copyright: 'Courtyard Pickle. All rights reserved.',
    privacyPolicy: 'Privacy Policy',
    termsOfService: 'Terms of Service',
  },
  reviews: {
    badgeFormat: '4.7 / 5.0 (47 reviews on Google)',
  },
  pricing: {
    kicker: 'Clear Pricing',
    header: 'Play on Your Terms',
    subheader: 'Simple rates tailored to how often you play.',
    casual: {
      title: 'Casual Play',
      desc: 'Ideal for spontaneous games. Pay per hour.',
      offPeak: '120k VND / hr',
      peak: '160k VND / hr',
    },
    fixed: {
      title: 'Fixed Booking',
      desc: 'Secure the same time every week or month.',
      offPeak: '100k VND / hr',
      peak: '140k VND / hr',
      contactCta: 'Contact Us to Arrange',
    },
    social: {
      title: 'Social Play',
      desc: 'Join the community and play with others.',
      price: '50k VND / ticket',
      calloutBody: 'Occasional open sessions, 50k VND per ticket. Hosted at lower frequency.',
      calloutLink: 'Follow us on Facebook for upcoming dates.',
    },
    bookNow: 'Book Now',
  },
  testimonials: {
    header: 'What Players Say',
    viewMore: 'See all reviews on Google',
    reviews: [
      {
        name: 'Quan',
        text: 'Very comfortable courts, high-quality surface. Free paddle cleaning and fruits are a big plus.',
      },
      {
        name: 'Thao',
        text: 'The café area is great for waiting or relaxing after a game. Sheltered courts mean no worries about sun or rain.',
      },
      {
        name: 'Huy',
        text: 'Easy to find location, clean courts and friendly staff helping new players. Definitely coming back!',
      },
    ],
  },
  tournaments: {
    header: 'Regular Tournaments',
    date: '',
    description: 'Join our upcoming community tournament.',
    detailsBtn: 'See details on Facebook',
    comingSoonDate: 'Next tournament coming soon',
    chipStatusAnnounced: 'Upcoming Tournament',
    chipStatusToday: 'In Play Today',
    chipStatusRecent: 'Recent Results',
  },
};

const vi: Translations = {
  nav: {
    howItWorks: 'Cách thức đặt sân',
    facility: 'Cơ sở vật chất',
    faq: 'Câu hỏi thường gặp',
    contact: 'LIÊN HỆ',
    secureYourCourt: 'Đặt sân ngay',
  },
  hero: {
    headlinePart1: 'Courtyard',
    headlinePart2: 'Pickle.',
    slogan: 'Nơi Cảm Xúc Được Chạm Tới',
    description:
      'Hệ thống sân có mái che. Cho mượn vợt, bóng và vệ sinh dụng cụ miễn phí. Café thư giãn sau trận đấu. Tại Courtyard, hãy để chúng tôi lo mọi thứ để bạn có thể tận hưởng cuộc chơi.',
    ctaPrimary: 'Đặt sân ngay',
    ctaSecondary: 'Tìm hiểu thêm',
    ctaSecondaryMobile: 'Tìm hiểu thêm',
  },
  features: {
    refreshments: 'Trái cây giải nhiệt khi chơi',
    facilities: 'Phòng tắm & tiện nghi đầy đủ',
    skillLevels: 'Phù hợp mọi cấp độ',
  },
  mobile: {
    language: 'Ngôn ngữ',
    readyToPlay: 'Sẵn sàng chơi?',
    secureYourCourt: 'Đặt sân ngay',
    howItWorks: 'Cách thức đặt sân',
    ourFacility: 'Cơ sở vật chất',
    pricing: 'Bảng giá',
    testimonials: 'Đánh giá',
    tournaments: 'Giải đấu',
    faq: 'Câu hỏi thường gặp',
    contact: 'Liên hệ',
    openHours: 'Mở cửa hàng ngày 05:00 – 22:00  ·  2 sân',
  },
  howItWorks: {
    kicker: 'ĐƠN GIẢN TRONG 3 BƯỚC',
    header: 'Quy Trình Đặt Sân',
    subheader: 'Xác nhận chỉ trong 60 giây.',
    step1Title: 'Chọn ngày & đặt sân',
    step1Desc: 'Xem lịch trống thời gian thực, chọn ngày và sân bạn muốn ngay trên trang đặt chỗ.',
    step1MobileTitle: 'Chọn ngày & đặt sân',
    step1MobileDesc: 'Xem ngày và thời gian trống thực tế trên trang đặt chỗ.',
    step2Title: 'Xác nhận & thanh toán',
    step2Desc: 'Sau khi xác nhận thanh toàn, thông tin đặt sân sẽ được gửi ngay đến email của bạn.',
    step2MobileTitle: 'Xác nhận & thanh toán',
    step2MobileDesc: 'Thanh toán và xác nhận thông tin đặt sân tức thì.',
    step3Title: 'Đến sân & trải nghiệm',
    step3Desc: 'Sân đã sẵn sàng, giải khát phục vụ tận nơi, hỗ trợ cả dụng cụ chơi. Bạn chỉ cần đến và tận hưởng.',
    step3MobileTitle: 'Đến sân & trải nghiệm',
    step3MobileDesc: 'Dụng cụ và giải khát đã sẵn sàng. Xin mời bạn đến và trải nghiệm.',
  },
  facility: {
    header: 'Cơ Sở Vật Chất',
    subheader: 'Tiện ích toàn diện.',
    outdoorCafe: 'CAFÉ NGOÀI TRỜI',
    indoorCafe: 'CAFÉ TRONG NHÀ',
    outdoorArea: 'KHU VỰC NGOÀI TRỜI',
    lockerRooms: 'PHÒNG THAY ĐỒ',
    mens: 'Nam',
    womens: 'Nữ',
    showers: 'Phòng tắm',
    entrance: 'LỐI VÀO',
    walkway: 'LỐI ĐI BỘ',
    court1: 'SÂN 1 · TRONG NHÀ',
    court2: 'SÂN 2 · MẶT ĐƯỜNG',
    comingSoon: 'Sắp ra mắt',
    frontDesk: '+ Quầy lễ tân',
    openSeating: 'Chỗ ngồi tự do',
    counterTablesReception: 'Bàn ghế · Ổ điện',
  },
  cta: {
    readyTitle: 'Bạn Đã Sẵn Sàng?',
    reserve: 'Đặt Sân Ngay',
    disclaimer: 'Bạn sẽ được chuyển đến trang đặt sân chính thức của Alobo để hoàn tất quá trình.',
  },
  faq: {
    kicker: 'BẠN CÒN THẮC MẮC?',
    header: 'Giải Đáp Mọi Thắc Mắc',
    subheader: 'Thông tin rõ ràng. Hỗ trợ trực tiếp.',
  },
  footer: {
    description: 'Courtyard Pickle là tổ hợp sân pickleball uy tín tại Đà Nẵng, chuyên cung cấp dịch vụ thuê sân, lớp học và giao lưu cộng đồng tại số 27 Dương Thị Xuân Quý, Bắc Mỹ An, Ngũ Hành Sơn, Đà Nẵng 550000, Việt Nam.',
    contactTitle: 'LIÊN HỆ',
    messageFacebook: 'Facebook',
    callUs: 'Gọi điện',
    primaryPhone: 'CHÍNH',
    secondaryPhone: 'PHỤ',
    copyNumber: 'Sao chép',
    copiedNumber: 'Đã sao chép \u2713',
    locationTitle: 'ĐỊA ĐIỂM',
    addressLine1: '27 Dương Thị Xuân Quý',
    addressLine2: 'Bắc Mỹ An, Ngũ Hành Sơn, Đà Nẵng 550000, Việt Nam',
    hours: 'Mở cửa hàng ngày: 05:00 – 22:00',
    copyright: 'Courtyard Pickle. Bảo lưu mọi quyền.',
    privacyPolicy: 'Chính sách bảo mật',
    termsOfService: 'Điều khoản dịch vụ',
  },
  reviews: {
    badgeFormat: '4.7 / 5.0 (47 đánh giá trên Google)',
  },
  pricing: {
    kicker: 'Bảng Giá Rõ Ràng',
    header: 'Lựa Chọn Phù Hợp Cho Bạn',
    subheader: 'Mức giá linh hoạt tùy theo nhu cầu của bạn.',
    casual: {
      title: 'Sân Vãng Lai',
      desc: 'Dành cho những trận đấu ngẫu hứng. Thanh toán theo giờ.',
      offPeak: '120.000 VNĐ / giờ',
      peak: '160.000 VNĐ / giờ',
    },
    fixed: {
      title: 'Sân Cố Định',
      desc: 'Đảm bảo thời gian cố định hàng tuần/tháng.',
      offPeak: '100.000 VNĐ / giờ',
      peak: '140.000 VNĐ / giờ',
      contactCta: 'Liên hệ để đặt chỗ',
    },
    social: {
      title: 'Giao Lưu - Social Play',
      desc: 'Tham gia vào cộng đồng và giao lưu.',
      price: '50.000 VNĐ / lượt',
      calloutBody: 'Các buổi chơi mở thỉnh thoảng diễn ra, 50.000 VNĐ một lượt. Tổ chức với tần suất thấp hơn.',
      calloutLink: 'Theo dõi chúng tôi trên Facebook để cập nhật lịch chơi.',
    },
    bookNow: 'Đặt Sân Ngay',
  },
  testimonials: {
    header: 'Khách Hàng Nói Gì',
    viewMore: 'Xem tất cả đánh giá trên Google',
    reviews: [
      {
        name: 'Quân',
        text: 'Sân chơi rất thoải mái, mặt sân chất lượng. Dịch vụ vệ sinh vợt và trái cây miễn phí là điểm cộng lớn.',
      },
      {
        name: 'Thảo',
        text: 'Không gian café ngồi chờ hay nghỉ ngơi sau khi chơi đều rất tuyệt. Sân có mái che nên không lo nắng mưa.',
      },
      {
        name: 'Huy',
        text: 'Vị trí dễ tìm, sân sạch sẽ và nhân viên nhiệt tình hỗ trợ người mới chơi. Chắc chắn sẽ quay lại!',
      },
    ],
  },
  tournaments: {
    header: 'Giải Đấu Thường Xuyên',
    date: '',
    description: 'Tham gia giải đấu cộng đồng sắp tới của chúng tôi.',
    detailsBtn: 'Xem chi tiết trên Facebook',
    comingSoonDate: 'Giải đấu tiếp theo sắp được công bố',
    chipStatusAnnounced: 'Giải đấu sắp tới',
    chipStatusToday: 'Đang diễn ra',
    chipStatusRecent: 'Kết quả gần đây',
  },
};

const translations: Record<Language, Translations> = { en, vi };

export function getTranslations(lang: string): Translations {
  return translations[lang as Language] ?? translations.en;
}
