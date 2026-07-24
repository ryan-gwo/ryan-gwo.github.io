import {
  competitionResources,
  getCompetitionBasePath,
  getEditionPath,
  localePrefixes,
  type ResourceLocale,
} from '../data/competitionResources';

export type SiteLocale = ResourceLocale;

export const normalizeRoute = (route: string) => {
  if (!route || route === '/') {
    return '/';
  }

  return route.endsWith('/') ? route : `${route}/`;
};

const staticRoutes = Object.keys(import.meta.glob('../pages/**/*.{astro,md,mdx}', { eager: true }))
  .filter((filePath) => !filePath.includes('['))
  .map((filePath) => {
    const route = filePath.replace('../pages', '').replace(/\.(astro|mdx?|md)$/i, '');
    return normalizeRoute(route.replace(/\/index$/, ''));
  })
  .filter((route) => !route.endsWith('/publications/'));

export const knownRoutes = new Set<string>(staticRoutes);

for (const locale of Object.keys(localePrefixes) as SiteLocale[]) {
  for (const competition of Object.values(competitionResources[locale])) {
    knownRoutes.add(normalizeRoute(getCompetitionBasePath(locale, competition.slug)));
    for (const edition of competition.editions) {
      knownRoutes.add(normalizeRoute(getEditionPath(locale, competition.slug, edition)));
    }
  }
}

export const localeHomeLinks: Record<SiteLocale, string> = {
  en: '/',
  'zh-cn': '/zh-cn/',
  'zh-hk': '/zh-hk/',
};

export const getLocalePrefix = (locale: SiteLocale) => localePrefixes[locale];

export const getCurrentLocalePrefix = (pathname: string) => {
  const path = normalizeRoute(pathname);

  if (path.startsWith('/zh-cn/')) {
    return '/zh-cn';
  }

  if (path.startsWith('/zh-hk/')) {
    return '/zh-hk';
  }

  return '';
};

export const localizedPath = (pathname: string, targetLocale: SiteLocale) => {
  const currentPrefix = getCurrentLocalePrefix(pathname);
  const pathWithoutLocale = currentPrefix ? normalizeRoute(pathname).slice(currentPrefix.length) || '/' : normalizeRoute(pathname);
  const candidate = normalizeRoute(`${getLocalePrefix(targetLocale)}${pathWithoutLocale}`);

  return knownRoutes.has(candidate) ? candidate : localeHomeLinks[targetLocale];
};

export const exactLocalizedPath = (pathname: string, targetLocale: SiteLocale) => {
  const currentPrefix = getCurrentLocalePrefix(pathname);
  const pathWithoutLocale = currentPrefix
    ? normalizeRoute(pathname).slice(currentPrefix.length) || '/'
    : normalizeRoute(pathname);
  return normalizeRoute(`${getLocalePrefix(targetLocale)}${pathWithoutLocale}`);
};

export const getLocaleAlternates = (pathname: string, site: URL) => {
  return (Object.keys(localePrefixes) as SiteLocale[])
    .map((locale) => {
      const path = exactLocalizedPath(pathname, locale);
      return { locale, path, href: new URL(path, site).toString() };
    })
    .filter((alternate) => knownRoutes.has(alternate.path))
    .filter((alternate, index, entries) => entries.findIndex((entry) => entry.href === alternate.href) === index);
};
