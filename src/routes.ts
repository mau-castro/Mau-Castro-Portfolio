import { routes } from './pagePaths';

export { routes };

export function siteUrl(path: string = routes.home) {
  return `${import.meta.env.BASE_URL}${path}`;
}

export function currentRoute(pathname = window.location.pathname) {
  const path = pathname.slice(import.meta.env.BASE_URL.length)
    .replace(/(^|\/)index\.html$/, '$1').replace(/\/+$/, '');
  return path ? `${path}/` : routes.home;
}
