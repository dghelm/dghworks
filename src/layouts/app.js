import Swup from 'swup';
import SwupA11yPlugin from '@swup/a11y-plugin';
import SwupHeadPlugin from '@swup/head-plugin';
import SwupPreloadPlugin from '@swup/preload-plugin';
import SwupScrollPlugin from '@swup/scroll-plugin';
import SwupFadeTheme from '@swup/fade-theme';

const swup = new Swup({
  plugins: [
    new SwupPreloadPlugin(),
    new SwupA11yPlugin(),
    new SwupHeadPlugin(),
    new SwupFadeTheme(),
    new SwupScrollPlugin({
      animateScroll: !window.matchMedia('(prefers-reduced-motion: reduce)')
        .matches,
    }),
  ],
  containers: ['#swup', '#page-nav'],
  animationSelector: '[class*="swup-transition-"]',
});
