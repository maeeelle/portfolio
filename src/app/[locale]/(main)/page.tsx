import { Project } from '@/components/Project'
import { setRequestLocale, getTranslations } from 'next-intl/server'
import { Separator } from '@/components/Separator'

type HomeProps = {
  params: Promise<{ locale: string }>
}

export default async function Home({ params }: HomeProps) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations('home')

  return (
    <main className='relative flex flex-col gap-y-20 px-8 sm:px-20 py-10 max-w-screen-2xl mx-auto flex-1 w-full'>
      <div className='scroll-mt-8' id='collection-zoologie-sorbonne'>
        <Project
          id='collection-zoologie-sorbonne'
          organization={{
            name: t('sorbonne'),
            image: '/images/projects/sorbonne.png',
          }}
          project={{
            year: '2024',
            title: t('projects.zoologie.title'),
            subtitle: t('projects.zoologie.subtitle'),
          }}
          tags={[t('tags.research'), t('tags.ux')]}
        />
        <Separator className='mt-10 absolute left-1/2 -translate-x-1/2 w-screen' />
      </div>
      <div className='scroll-mt-8' id='easipromo'>
        <Project
          id='easipromo'
          organization={{
            name: t('carrefour'),
            image: '/images/projects/carrefour.png',
          }}
          project={{
            year: '2024',
            title: t('projects.easipromo.title'),
            subtitle: t('projects.easipromo.subtitle'),
          }}
          tags={[t('tags.research'), t('tags.ux'), t('tags.ui'), t('tags.web')]}
          isLocked
        />
        <Separator className='mt-10 absolute left-1/2 -translate-x-1/2 w-screen' />
      </div>
      <div className='scroll-mt-8' id='buddy'>
        <Project
          id='buddy'
          organization={{
            name: t('carrefour'),
            image: '/images/projects/carrefour.png',
          }}
          project={{
            year: '2024',
            title: t('projects.buddy.title'),
            subtitle: t('projects.buddy.subtitle'),
          }}
          tags={[t('tags.illustration')]}
        />
        <Separator className='mt-10 absolute left-1/2 -translate-x-1/2 w-screen' />
      </div>
      <div className='scroll-mt-8' id='qsmp-shop'>
        <Project
          id='qsmp-shop'
          organization={{
            name: t('quackity'),
            image: '/images/projects/quackity.png',
          }}
          project={{
            year: '2024',
            title: t('projects.qsmp_shop.title'),
            subtitle: t('projects.qsmp_shop.subtitle'),
          }}
          tags={[t('tags.ux'), t('tags.ui'), t('tags.ecommerce')]}
        />
        <Separator className='mt-10 absolute left-1/2 -translate-x-1/2 w-screen' />
      </div>
      <div className='scroll-mt-8' id='qsmp-co'>
        <Project
          id='qsmp-co'
          organization={{
            name: t('quackity'),
            image: '/images/projects/quackity.png',
          }}
          project={{
            year: '2023',
            title: t('projects.qsmp_co.title'),
            subtitle: t('projects.qsmp_co.subtitle'),
          }}
          tags={[
            t('tags.ux'),
            t('tags.ui'),
            t('tags.showcase'),
            t('tags.branding'),
          ]}
        />
        <Separator className='mt-10 absolute left-1/2 -translate-x-1/2 w-screen' />
      </div>
      <div className='scroll-mt-8' id='maison-laurentine'>
        <Project
          id='maison-laurentine'
          organization={{
            name: t('sorbonne'),
            image: '/images/projects/sorbonne.png',
          }}
          project={{
            year: '2023',
            title: t('projects.laurentine.title'),
            subtitle: t('projects.laurentine.subtitle'),
          }}
          tags={[t('tags.research'), t('tags.ux'), t('tags.ui'), t('tags.web')]}
        />
        <Separator className='mt-10 absolute left-1/2 -translate-x-1/2 w-screen' />
      </div>
      <div className='scroll-mt-8' id='ths-tracker'>
        <Project
          id='ths-tracker'
          organization={{
            name: t('personal'),
            image: '/images/projects/personnel.png',
          }}
          project={{
            year: '2022',
            title: t('projects.ths.title'),
            subtitle: t('projects.ths.subtitle'),
          }}
          tags={[t('tags.research'), t('tags.ux'), t('tags.mobile')]}
        />
        <Separator className='mt-10 absolute left-1/2 -translate-x-1/2 w-screen' />
      </div>
      <div className='scroll-mt-8' id='totoro'>
        <Project
          id='totoro'
          organization={{
            name: t('hetic'),
            image: '/images/projects/hetic.png',
          }}
          project={{
            year: '2022',
            title: t('projects.totoro.title'),
            subtitle: t('projects.totoro.subtitle'),
          }}
          tags={[
            t('tags.research'),
            t('tags.ux'),
            t('tags.mobile'),
            t('tags.branding'),
          ]}
        />
        <Separator className='mt-10 absolute left-1/2 -translate-x-1/2 w-screen' />
      </div>
      <div className='scroll-mt-8' id='mon-coach-bescherelle'>
        <Project
          id='mon-coach-bescherelle'
          organization={{
            name: t('hatier'),
            image: '/images/projects/hatier.png',
          }}
          project={{
            year: '2020',
            title: t('projects.bescherelle.title'),
            subtitle: t('projects.bescherelle.subtitle'),
          }}
          tags={[t('tags.ux'), t('tags.ui'), t('tags.web')]}
        />
      </div>
    </main>
  )
}
