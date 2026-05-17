import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const rootDir = dirname(dirname(fileURLToPath(import.meta.url)));
const distDir = join(rootDir, 'dist');
const site = 'https://ryan-gwo.github.io';
const sitemapPath = join(distDir, 'sitemap-0.xml');
const lastmod = new Date().toISOString().slice(0, 10);

const xmlEscape = (value) =>
  value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&apos;');

const sitemapXml = await readFile(sitemapPath, 'utf8');
const urls = Array.from(sitemapXml.matchAll(/<loc>([^<]+)<\/loc>/g), (match) => match[1]);

if (urls.length === 0) {
  throw new Error(`No URLs found in ${sitemapPath}`);
}

const writeUrlSet = async (outputPath, urlList) => {
  await mkdir(dirname(outputPath), { recursive: true });

  const body = urlList
    .map((url) => [
      '  <url>',
      `    <loc>${xmlEscape(url)}</loc>`,
      `    <lastmod>${lastmod}</lastmod>`,
      '  </url>',
    ].join('\n'))
    .join('\n');

  await writeFile(outputPath, [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    body,
    '</urlset>',
    '',
  ].join('\n'));
};

const localeSitemaps = {
  'en/sitemap.xml': (url) => !url.startsWith(`${site}/zh-cn/`) && !url.startsWith(`${site}/zh-hk/`),
  'zh-cn/sitemap.xml': (url) => url.startsWith(`${site}/zh-cn/`),
  'zh-hk/sitemap.xml': (url) => url.startsWith(`${site}/zh-hk/`),
};

await writeUrlSet(join(distDir, 'sitemap.xml'), urls);

await Promise.all(
  Object.entries(localeSitemaps).map(([path, filter]) =>
    writeUrlSet(join(distDir, path), urls.filter(filter)),
  ),
);
