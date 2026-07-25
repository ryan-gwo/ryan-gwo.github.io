import {
  competitionResources,
  getCompetitionBasePath,
  getEditionPath,
  localePrefixes,
  type CompetitionEdition,
  type CompetitionSlug,
  type ResourceLocale,
} from "../data/competitionResources";

export type SiteLocale = ResourceLocale;
export type RouteId =
  | "home"
  | "research"
  | "cv"
  | "writings"
  | "writing"
  | "writingMetric"
  | "interests"
  | "resources"
  | "training"
  | "publications";

export const normalizeRoute = (route: string) => {
  if (!route || route === "/") return "/";
  const withLeadingSlash = route.startsWith("/") ? route : `/${route}`;
  return withLeadingSlash.endsWith("/") ? withLeadingSlash : `${withLeadingSlash}/`;
};

const routePaths: Record<RouteId, string> = {
  home: "/",
  research: "/research/",
  cv: "/cv/",
  writings: "/writings/",
  writing: "/writing/",
  writingMetric: "/writing/metric/",
  interests: "/interests/",
  resources: "/resources/",
  training: "/resources/training/",
  publications: "/publications/",
};

const staticRoutes = Object.keys(import.meta.glob("../pages/**/*.{astro,md,mdx}", { eager: true }))
  .filter((filePath) => !filePath.includes("["))
  .map((filePath) => {
    const route = filePath.replace("../pages", "").replace(/\.(astro|mdx?|md)$/i, "");
    return normalizeRoute(route.replace(/\/index$/, ""));
  })
  .filter((route) => !route.endsWith("/publications/"));

export const knownRoutes = new Set<string>(staticRoutes);

for (const locale of Object.keys(localePrefixes) as SiteLocale[]) {
  knownRoutes.add(normalizeRoute(`${localePrefixes[locale]}/writing/metric/`));
  for (const competition of Object.values(competitionResources[locale])) {
    knownRoutes.add(normalizeRoute(getCompetitionBasePath(locale, competition.slug)));
    for (const edition of competition.editions) {
      knownRoutes.add(normalizeRoute(getEditionPath(locale, competition.slug, edition)));
    }
  }
}

export const localeHomeLinks: Record<SiteLocale, string> = {
  en: "/",
  "zh-cn": "/zh-cn/",
  "zh-hk": "/zh-hk/",
};

export const getLocalePrefix = (locale: SiteLocale) => localePrefixes[locale];

export const getRoutePath = (route: RouteId) => routePaths[route];

export const getCurrentLocalePrefix = (pathname: string) => {
  const path = normalizeRoute(pathname);
  if (path.startsWith("/zh-cn/")) return "/zh-cn";
  if (path.startsWith("/zh-hk/")) return "/zh-hk";
  return "";
};

const stripLocalePrefix = (pathname: string) => {
  const normalized = normalizeRoute(pathname);
  const prefix = getCurrentLocalePrefix(normalized);
  return prefix ? normalized.slice(prefix.length) || "/" : normalized;
};

export const exactLocalizedPath = (pathname: string, targetLocale: SiteLocale) => {
  const pathWithoutLocale = stripLocalePrefix(pathname);
  const prefix = getLocalePrefix(targetLocale);
  return normalizeRoute(`${prefix}${pathWithoutLocale}`);
};

type RouteParams = {
  slug?: string;
  competition?: CompetitionSlug;
  edition?: CompetitionEdition;
};

export const localizedPath = (
  route: RouteId,
  targetLocale: SiteLocale,
  params: RouteParams = {},
) => {
  if (route === "writing") {
    if (!params.slug) throw new Error("A writing slug is required.");
    return normalizeRoute(`${getLocalePrefix(targetLocale)}/writing/${params.slug}/`);
  }

  if (params.competition && params.edition) {
    return getEditionPath(targetLocale, params.competition, params.edition);
  }

  if (params.competition) {
    return getCompetitionBasePath(targetLocale, params.competition);
  }

  const candidate = normalizeRoute(`${getLocalePrefix(targetLocale)}${getRoutePath(route)}`);
  return knownRoutes.has(candidate) || route === "publications" ? candidate : localeHomeLinks[targetLocale];
};

export const localizedRoute = (route: RouteId, targetLocale: SiteLocale) => localizedPath(route, targetLocale);

export const getLocaleAlternates = (pathname: string, site: URL) => {
  return (Object.keys(localePrefixes) as SiteLocale[])
    .map((locale) => {
      const path = exactLocalizedPath(pathname, locale);
      return { locale, path, href: new URL(path, site).toString() };
    })
    .filter((alternate) => knownRoutes.has(alternate.path))
    .filter((alternate, index, entries) => entries.findIndex((entry) => entry.href === alternate.href) === index);
};
