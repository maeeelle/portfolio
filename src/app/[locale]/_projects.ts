export type Project = {
  id: string
  organization: {
    name: string
    image: string
    year: string
  }
  project: {
    title: string
    subtitle: string
  }
  tags: string[]
  isLocked?: boolean
}

export const projects: Project[] = [
  {
    id: 'collection-zoologie-sorbonne',
    organization: {
      name: 'Université Sorbonne Paris Nord',
      image: '/images/projects/sorbonne.png',
      year: '2024',
    },
    project: {
      title: 'Collection de Zoologie de Sorbonne Université',
      subtitle: 'Allier transmission et réflexion autour de l’anthropocène',
    },
    tags: ['User Research', 'UX'],
  },
  {
    id: 'easipromo',
    organization: {
      name: 'Carrefour',
      image: '/images/projects/carrefour.png',
      year: '2024',
    },
    project: {
      title: 'EasiPromo',
      subtitle:
        'Unifier toutes les promotions en un seul outil pour une gestion centralisée et simplifiée',
    },
    tags: ['User Research', 'UX', 'UI', 'Web Application'],
    isLocked: true,
  },
  {
    id: 'buddy',
    organization: {
      name: 'Carrefour',
      image: '/images/projects/carrefour.png',
      year: '2024',
    },
    project: {
      title: 'Buddy',
      subtitle:
        'Créer une mascotte amicale pour incarner un chatbot d’accès aux données',
    },
    tags: ['Illustration'],
  },
  {
    id: 'qsmp-shop',
    organization: {
      name: 'Quackity Studios',
      image: '/images/projects/quackity.png',
      year: '2024',
    },
    project: {
      title: 'QSMP.shop',
      subtitle:
        'Mettre en valeur la première collection de figurines QSMP sur une boutique en ligne',
    },
    tags: ['User Research', 'UX', 'UI', 'E-commerce'],
  },
  {
    id: 'qsmp-co',
    organization: {
      name: 'Quackity Studios',
      image: '/images/projects/quackity.png',
      year: '2023',
    },
    project: {
      title: 'QSMP.co',
      subtitle:
        'Concevoir une vitrine informative reflétant l’atmosphère du serveur Minecraft QSMP',
    },
    tags: ['User Research', 'UX', 'UI', 'Site vitrine'],
  },
  {
    id: 'maison-laurentine',
    organization: {
      name: 'Université Sorbonne Paris Nord',
      image: '/images/projects/sorbonne.png',
      year: '2023',
    },
    project: {
      title: 'Maison Laurentine',
      subtitle:
        'Guider le visiteur et encourager les échanges au sein d’une exposition',
    },
    tags: ['User Research', 'UX', 'UI', 'Web Application'],
  },
  {
    id: 'ths-tracker',
    organization: {
      name: 'Projet personnel',
      image: '/images/projects/personnel.png',
      year: '2022',
    },
    project: {
      title: 'THS Tracker',
      subtitle:
        'Développer un outil tout-en-un pour accompagner le parcours des personnes transgenres',
    },
    tags: ['User Research', 'UX', 'Application mobile'],
  },
  {
    id: 'totoro',
    organization: {
      name: 'HETIC',
      image: '/images/projects/hetic.png',
      year: '2022',
    },
    project: {
      title: 'Totoro',
      subtitle: 'Recréer du lien à travers l’entraide entre voisins',
    },
    tags: ['UX', 'UI', 'Application mobile'],
  },
  {
    id: 'mon-coach-bescherelle',
    organization: {
      name: 'Editions Hatier',
      image: '/images/projects/hatier.png',
      year: '2020',
    },
    project: {
      title: 'Mon Coach Bescherelle',
      subtitle:
        'Repenser une application mobile en une solution web adaptée aux contraintes d’Educadhoc',
    },
    tags: ['UX', 'UI', 'Web Application'],
  },
]
