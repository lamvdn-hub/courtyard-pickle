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
  state: 'hidden', // Set to 'announced', 'today', or 'recent' to show the chip
  name: {
    en: 'Bounty Hunter',
    vi: 'Bounty Hunter',
  },
  date: {
    en: 'Sat, 25 Apr 2026',
    vi: 'Thứ 7, 25/04/26',
  },
  link: 'https://facebook.com/courtyardpickleball',
  linkLabel: {
    en: 'Register Now',
    vi: 'Đăng Ký Ngay',
  },
};
