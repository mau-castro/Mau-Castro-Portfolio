import { useLayoutEffect, useState } from 'react';
import { flushSync } from 'react-dom';
import { currentRoute, routes, siteUrl } from './routes';
import { animateView } from './viewTransition';

const portfolioRoutes = new Set<string>(Object.values(routes));

function readLink(event: MouseEvent) {
  if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
  const link = event.target instanceof Element && event.target.closest<HTMLAnchorElement>('a[href]');
  if (!link || link.hasAttribute('download') || (link.target && link.target !== '_self')) return;

  const url = new URL(link.href);
  if (url.origin !== window.location.origin || !url.pathname.startsWith(siteUrl())) return;
  const route = currentRoute(url.pathname);
  if (portfolioRoutes.has(route)) return { url, route };
}

function revealContent(hash: string, behavior: ScrollBehavior, focus: boolean, savedScroll?: number) {
  const section = document.getElementById(hash.slice(1));
  if (focus) {
    const target = section ?? document.getElementById('main');
    if (target && !target.hasAttribute('tabindex')) target.tabIndex = -1;
    target?.focus({ preventScroll: true });
  }

  if (savedScroll !== undefined) window.scrollTo({ top: savedScroll, behavior: 'instant' });
  else if (section) section.scrollIntoView({ behavior });
  else window.scrollTo({ top: 0, behavior });
}

export function usePortfolioRoute() {
  const [route, setRoute] = useState(currentRoute);

  useLayoutEffect(() => {
    const history = window.history;
    const previousRestoration = history.scrollRestoration;
    history.scrollRestoration = 'manual';
    const scrollPositions = new Map<number, number>();
    let nextEntry = 0;

    function ensureEntry() {
      const entry = history.state?.portfolioEntry;
      if (typeof entry === 'number') {
        nextEntry = Math.max(nextEntry, entry);
        return entry;
      }

      const key = ++nextEntry;
      history.replaceState({ ...history.state, portfolioEntry: key }, '');
      return key;
    }

    let renderedEntry = ensureEntry();
    let renderedRoute = currentRoute();
    let navigationId = 0;
    if (window.location.hash) revealContent(window.location.hash, 'instant', false);

    function navigate(nextRoute: string, hash: string, entry: number, savedScroll?: number) {
      const id = ++navigationId;
      const changesPage = nextRoute !== renderedRoute;
      const update = () => {
        if (id !== navigationId) return;
        renderedRoute = nextRoute;
        renderedEntry = entry;
        if (changesPage) flushSync(() => setRoute(nextRoute));
        revealContent(hash, changesPage ? 'instant' : 'auto', true, savedScroll);
      };

      if (!changesPage) {
        update();
        return;
      }

      if (!animateView('navigation', update)) {
        document.getElementById('main')?.animate([{ opacity: 0.6 }, { opacity: 1 }], {
          duration: 120,
          easing: 'ease-out',
        });
      }
    }

    function onClick(event: MouseEvent) {
      const destination = readLink(event);
      if (!destination) return;
      event.preventDefault();

      const { url, route } = destination;
      scrollPositions.set(renderedEntry, window.scrollY);
      if (url.href !== window.location.href) {
        history.pushState({ portfolioEntry: ++nextEntry }, '', url);
      }
      navigate(route, url.hash, ensureEntry());
    }

    function onPopState() {
      const route = currentRoute();
      if (!portfolioRoutes.has(route)) return;
      scrollPositions.set(renderedEntry, window.scrollY);
      const entry = ensureEntry();
      navigate(route, window.location.hash, entry, scrollPositions.get(entry));
    }

    document.addEventListener('click', onClick);
    window.addEventListener('popstate', onPopState);
    return () => {
      navigationId++;
      document.removeEventListener('click', onClick);
      window.removeEventListener('popstate', onPopState);
      history.scrollRestoration = previousRestoration;
    };
  }, []);

  return route;
}
