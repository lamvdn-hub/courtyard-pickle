export type TournamentState = 'announced' | 'today' | 'recent' | 'hidden';

export interface LocalizedString {
  en: string;
  vi: string;
}

export interface TournamentConfig {
  state: TournamentState;
  name: LocalizedString;
  date: LocalizedString;
  link: string;
  linkLabel: LocalizedString;
}

export const tournamentConfig: TournamentConfig = {
  state: 'announced', // Set to 'announced', 'today', or 'recent' to show the chip
  name: {
    en: 'Bounty Hunter',
    vi: 'Bounty Hunter',
  },
  date: {
    en: 'May 15th, 2026',
    vi: 'Ngày 15 tháng 5, 2026',
  },
  link: 'https://facebook.com/courtyardpickleball',
  linkLabel: {
    en: 'Register Now',
    vi: 'Đăng Ký Ngay',
  },
};
