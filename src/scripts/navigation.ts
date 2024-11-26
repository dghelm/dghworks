interface NavigationElement extends HTMLElement {
  querySelector(selectors: string): HTMLElement | null;
}

function updateSectionVisibility(
  section: NavigationElement,
  isExpanded: boolean
): void {
  const header = section.querySelector('h2 a');
  const submenu = section.querySelector('.artwork-submenu');

  if (!header || !submenu) return;

  header.classList.toggle('text-neutral-900', isExpanded);
  submenu.classList.toggle('hidden', !isExpanded);
}

function updateSectionHeader(
  header: HTMLElement,
  pathname: string,
  section: NavigationSection
): void {
  const isActive =
    section.title === 'Experience'
      ? section.links.some((link) => link.href === pathname) || pathname === '/'
      : pathname === '/works' || pathname.startsWith('/works/');

  header.classList.toggle('underline', isActive);
}

function updateLinkStates(
  link: HTMLAnchorElement,
  pathname: string,
  sectionTitle: string
): void {
  const href = link.getAttribute('href');
  const isActive =
    href === pathname ||
    (pathname.startsWith('/works/') &&
      href === '/works' &&
      sectionTitle === 'Artwork');

  link.classList.toggle('font-semibold', isActive);
  link.classList.toggle('text-neutral-900', isActive);
  link.classList.toggle('before:bg-neutral-900', isActive);
  link.classList.toggle('before:hidden', !isActive);
}

export function updateNavigation(): void {
  const pathname = window.location.pathname;

  document
    .querySelectorAll<NavigationElement>('nav > ul > li')
    .forEach((section) => {
      const header = section.querySelector('h2 a');
      if (!header) return;

      const title = header.textContent?.trim() ?? '';
      const links = Array.from(section.querySelectorAll('ul a')).map((a) => ({
        href: a.getAttribute('href') ?? '',
        title: a.textContent?.trim() ?? '',
      }));

      // Update section header underline
      updateSectionHeader(header, pathname, { title, href: '', links });

      // Handle Artwork section visibility
      if (title === 'Artwork') {
        const isExpanded =
          pathname === '/works' || pathname.startsWith('/works/');
        updateSectionVisibility(section, isExpanded);
      }

      // Update link states
      const allLinks = Array.from(section.querySelectorAll('a'));
      allLinks.forEach((link) =>
        updateLinkStates(link as HTMLAnchorElement, pathname, title)
      );
    });
}
