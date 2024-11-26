import type { NavigationSection } from '../types/navigation';

export const NAVIGATION_CONFIG: NavigationSection[] = [
  {
    title: 'Experience',
    href: '/resume',
    links: [
      { href: '/resume', title: 'Resume' },
      { href: '/talks', title: 'Talks' },
      { href: '/artist-cv', title: 'Artist CV' },
    ],
  },
  {
    title: 'Artwork',
    href: '/works',
    links: [], // This will be populated dynamically in Navigation.astro
  },
];

export const isExperiencePath = (path: string): boolean => {
  return (
    path === '/' ||
    NAVIGATION_CONFIG[0].links.some((link) => link.href === path)
  );
};

export const isArtworkPath = (path: string): boolean => {
  return path === '/works' || path.startsWith('/works/');
};
