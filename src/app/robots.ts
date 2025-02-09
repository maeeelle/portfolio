import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/doc/',
    },
    sitemap: 'https://www.maelle.works/sitemap.xml',
  }
}
