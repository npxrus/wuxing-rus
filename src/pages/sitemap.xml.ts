// Динамическая генерация sitemap.xml
import type { APIRoute } from 'astro';
import { GALLERY_IMAGES } from '@data/gallery';
import { PRINCIPALITIES } from '@data/principalities';
import { ALL_CREATURES } from '@data/creatures';
import { ARTIFACTS } from '@data/artifacts';

const siteUrl = 'https://YOUR_USERNAME.github.io/wuxing-rus'; // Замените на ваш URL

const staticPages = [
  '',
  '/world',
  '/principalities',
  '/creatures',
  '/magic',
  '/artifacts',
  '/calendar',
  '/gallery',
];

const dynamicPages = [
  ...PRINCIPALITIES.map(p => `/principalities/${p.id}`),
  ...ALL_CREATURES.map(c => `/creatures/${c.id}`),
  ...ARTIFACTS.map(a => `/artifacts/${a.id}`),
];

const allPages = [...staticPages, ...dynamicPages];

export const GET: APIRoute = () => {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${allPages.map(page => `
    <url>
      <loc>${siteUrl}${page}</loc>
      <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
      <changefreq>${page === '' ? 'daily' : 'monthly'}</changefreq>
      <priority>${page === '' ? '1.0' : '0.8'}</priority>
    </url>
  `).join('')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
};