import { Project } from '@/components/Project'
import { setRequestLocale } from 'next-intl/server'
import { Separator } from '@/components/Separator'

type HomeProps = {
  params: Promise<{ locale: string }>
}

export default async function Home({ params }: HomeProps) {
  const { locale } = await params
  setRequestLocale(locale)

  return (
    <main className='relative flex flex-col gap-y-20 px-8 sm:px-20 py-10 max-w-screen-2xl mx-auto flex-1 w-full'>
      <div>
        <Project
          id='collection-zoologie-sorbonne'
          organization={{
            name: 'Université Sorbonne Paris Nord',
            image: '/images/projects/sorbonne.png',
            year: '2024',
          }}
          project={{
            title: 'Collection de Zoologie de Sorbonne Université',
            subtitle:
              'Allier transmission et réflexion autour de l’anthropocène',
          }}
          tags={['User Research', 'UX']}
        />
        <Separator className='mt-10 absolute left-1/2 -translate-x-1/2 w-screen' />
      </div>

      <div>
        <Project
          id='easipromo'
          organization={{
            name: 'Carrefour',
            image: '/images/projects/carrefour.png',
            year: '2024',
          }}
          project={{
            title: 'EasiPromo',
            subtitle:
              'Unifier toutes les promotions en un seul outil pour une gestion centralisée et simplifiée',
          }}
          tags={['User Research', 'UX', 'UI', 'Web Application']}
          isLocked
        />
        <Separator className='mt-10 absolute left-1/2 -translate-x-1/2 w-screen' />
      </div>

      <div>
        <Project
          id='buddy'
          organization={{
            name: 'Carrefour',
            image: '/images/projects/carrefour.png',
            year: '2024',
          }}
          project={{
            title: 'Buddy',
            subtitle:
              'Créer une mascotte amicale pour incarner un chatbot d’accès aux données',
          }}
          tags={['Illustration']}
        />
        <Separator className='mt-10 absolute left-1/2 -translate-x-1/2 w-screen' />
      </div>

      <div>
        <Project
          id='qsmp-shop'
          organization={{
            name: 'Quackity Studios',
            image: '/images/projects/quackity.png',
            year: '2024',
          }}
          project={{
            title: 'QSMP.Shop',
            subtitle:
              'Mettre en valeur la première collection de figurines QSMP sur une boutique en ligne',
          }}
          tags={['UX', 'UI', 'E-commerce']}
        />
        <Separator className='mt-10 absolute left-1/2 -translate-x-1/2 w-screen' />
      </div>

      <div>
        <Project
          id='qsmp-co'
          organization={{
            name: 'Quackity Studios',
            image: '/images/projects/quackity.png',
            year: '2023',
          }}
          project={{
            title: 'QSMP.co',
            subtitle:
              'Concevoir une vitrine informative reflétant l’atmosphère du serveur Minecraft QSMP',
          }}
          tags={['UX', 'UI', 'Site vitrine', 'Identité visuelle']}
        />
        <Separator className='mt-10 absolute left-1/2 -translate-x-1/2 w-screen' />
      </div>

      <div>
        <Project
          id='maison-laurentine'
          organization={{
            name: 'Université Sorbonne Paris Nord',
            image: '/images/projects/sorbonne.png',
            year: '2023',
          }}
          project={{
            title: 'Maison Laurentine',
            subtitle:
              'Guider le visiteur et encourager les échanges au sein d’une exposition',
          }}
          tags={['User Research', 'UX', 'UI', 'Web Application']}
        />
        <Separator className='mt-10 absolute left-1/2 -translate-x-1/2 w-screen' />
      </div>

      <div>
        <Project
          id='ths-tracker'
          organization={{
            name: 'Projet personnel',
            image: '/images/projects/personnel.png',
            year: '2022',
          }}
          project={{
            title: 'THS Tracker',
            subtitle:
              'Développer un outil tout-en-un pour accompagner le parcours des personnes transgenres',
          }}
          tags={['User Research', 'UX', 'Application mobile']}
        />
        <Separator className='mt-10 absolute left-1/2 -translate-x-1/2 w-screen' />
      </div>

      <div>
        <Project
          id='totoro'
          organization={{
            name: 'HETIC',
            image: '/images/projects/hetic.png',
            year: '2022',
          }}
          project={{
            title: 'Totoro',
            subtitle: 'Recréer du lien à travers l’entraide entre voisins',
          }}
          tags={[
            'User Research',
            'UX',
            'Application mobile',
            'Identité visuelle',
          ]}
        />
        <Separator className='mt-10 absolute left-1/2 -translate-x-1/2 w-screen' />
      </div>

      <div>
        <Project
          id='mon-coach-bescherelle'
          organization={{
            name: 'Editions Hatier',
            image: '/images/projects/hatier.png',
            year: '2020',
          }}
          project={{
            title: 'Mon Coach Bescherelle',
            subtitle: 'Repenser une application mobile en une solution web',
          }}
          tags={['UX', 'UI', 'Web Application']}
        />
      </div>
    </main>
  )
}
