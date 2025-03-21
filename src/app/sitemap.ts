import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://www.maelle.works',
      lastModified: new Date(),
    },
    {
      url: 'https://www.maelle.works/collection-zoologie-sorbonne',
      lastModified: new Date(),
    },
    {
      url: 'https://www.maelle.works/buddy',
      lastModified: new Date(),
    },
    {
      url: 'https://www.maelle.works/qsmp-shop',
      lastModified: new Date(),
    },
    {
      url: 'https://www.maelle.works/qsmp-co',
      lastModified: new Date(),
    },
    {
      url: 'https://www.maelle.works/maison-laurentine',
      lastModified: new Date(),
    },
    {
      url: 'https://www.maelle.works/ths-tracker',
      lastModified: new Date(),
    },
    {
      url: 'https://www.maelle.works/totoro',
      lastModified: new Date(),
    },
    {
      url: 'https://www.maelle.works/mon-coach-bescherelle',
      lastModified: new Date(),
    },
    {
      url: 'https://www.maelle.works/legal',
      lastModified: new Date(),
    },
  ]
}
