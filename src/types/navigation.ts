export interface NavigationLink {
  href: string;
  title: string;
}

export interface NavigationSection {
  title: string;
  href: string;
  links: NavigationLink[];
}
