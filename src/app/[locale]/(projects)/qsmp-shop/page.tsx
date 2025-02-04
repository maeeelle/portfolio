import Image, { ImageProps } from 'next/image'
import { ProjectTag, ProjectTagList } from '@/components/Project'
import { setRequestLocale } from 'next-intl/server'
import { Heading } from '../_components/Heading'
import { Paragraph } from '../_components/Paragraph'
import { BackButton } from '../_components/BackButton'
import { ProjectHeader } from '../_components/ProjectHeader'
import { Container } from '../_components/Container'
import { Main } from '../_components/Main'
import { ProjectFooter } from '../_components/Footer'
import { Aside } from '../_components/Aside'
import { ProjectArticle } from '../_components/ProjectArticle'
import clsx from 'clsx'
import { ReferenceLink } from '../_components/ReferenceLink'

type PageProps = {
  params: Promise<{
    locale: string
  }>
}

function ProjectImage({ className, ...props }: ImageProps) {
  return (
    // eslint-disable-next-line jsx-a11y/alt-text
    <Image {...props} className={clsx('select-none', className)} />
  )
}

export default async function QSMPShopPage({ params }: PageProps) {
  const { locale } = await params
  setRequestLocale(locale)

  return (
    <Container>
      <Main>
        <BackButton />

        <ProjectArticle>
          <div>
            <ProjectHeader
              logoSrc='/images/projects/quackity.png'
              logoAlt='Quackity Studios logo'
              company='Quackity Studios'
              title='QSMP.shop'
              subtitle='Mettre en valeur la première collection de figurines QSMP sur une boutique en ligne'
            />

            <div className='mt-8 space-y-10 xl:space-y-8'>
              <section>
                <Heading>Contexte</Heading>
                <Paragraph>
                  QSMP est un serveur Minecraft multijoueur, créé par le
                  créateur de contenu{' '}
                  <ReferenceLink
                    href='https://www.twitch.tv/quackity'
                    className='underline-offset-[3px]'
                  >
                    Quackity
                  </ReferenceLink>
                  , qui réunit des streamers du monde entier, parlant
                  différentes langues, grâce à un système de traduction en temps
                  réel.
                </Paragraph>
                <Paragraph>
                  <ReferenceLink
                    href='https://qsmp.shop/'
                    className='underline-offset-[3px]'
                  >
                    QSMP.shop
                  </ReferenceLink>{' '}
                  est le site e-commerce de QSMP, sur lequel sont mis en vente
                  des produits dérivés en lien avec le projet. Ce design n’a
                  malheureusement jamais été mis en ligne, mais le design avait
                  tout de même été finalisé.
                </Paragraph>
              </section>
              <section>
                <Heading>Contribution</Heading>
                <Paragraph>
                  J’ai été commissionné pour concevoir l’ensemble du design d’un
                  site Shopify dédié à la première collection de figurines
                  inspirées des personnages de la série. Chaque personnage ayant
                  une identité et une histoire uniques, j’ai veillé à refléter
                  leur singularité à travers les product cards et les pages
                  détails.
                </Paragraph>
              </section>
              <section>
                <Heading>Equipe</Heading>
                <Paragraph>
                  <ReferenceLink href='https://www.instagram.com/foxie_fern_/'>
                    Foxie Fern
                  </ReferenceLink>{' '}
                  - 3D Designer
                </Paragraph>
              </section>
            </div>
          </div>

          <ProjectFooter year='2024'>
            <ProjectTagList>
              <ProjectTag name='UX' />
              <ProjectTag name='UI' />
              <ProjectTag name='E-commerce' />
            </ProjectTagList>
          </ProjectFooter>
        </ProjectArticle>
      </Main>

      <Aside>
        <section>
          <h2 className='font-normal text-sm/none uppercase -tracking-[0.02em] text-[#818181] relative before:absolute before:w-full before:h-px before:bg-[#E1E1E1] before:right-0 before:top-1/2 before:-translate-y-1/2'>
            <span className='bg-white relative pr-4'>
              01. Visuels des produits
            </span>
          </h2>

          <div className='mt-8'>
            <ProjectImage
              width={3864}
              height={2863}
              src='/images/projects/qsmp-shop/QSMP.shop-Product-Cards.webp'
              alt=''
              className='w-full'
            />
          </div>
        </section>

        <section className='mt-8'>
          <h2 className='font-normal text-sm/none uppercase -tracking-[0.02em] text-[#818181] relative before:absolute before:w-full before:h-px before:bg-[#E1E1E1] before:right-0 before:top-1/2 before:-translate-y-1/2'>
            <span className='bg-white relative pr-4'>02. Interfaces</span>
          </h2>

          <div className='space-y-10 mt-8'>
            <ProjectImage
              width={1512}
              height={4647}
              src='/images/projects/qsmp-shop/QSMP.shop-Homepage.webp'
              alt=''
              className='w-full outline-black/10 outline outline-1 -outline-offset-1 rounded'
            />

            <ProjectImage
              width={1513}
              height={5270}
              src='/images/projects/qsmp-shop/QSMP.shop-Catalog.webp'
              alt=''
              className='w-full outline-black/10 outline outline-1 -outline-offset-1 rounded'
            />
            <ProjectImage
              width={1512}
              height={3609}
              src='/images/projects/qsmp-shop/QSMP.shop-PDP.webp'
              alt=''
              className='w-full outline-black/10 outline outline-1 -outline-offset-1 rounded'
            />
          </div>
        </section>

        <section className='mt-8'>
          <h2 className='font-normal text-sm/none uppercase -tracking-[0.02em] text-[#818181] relative before:absolute before:w-full before:h-px before:bg-[#E1E1E1] before:right-0 before:top-1/2 before:-translate-y-1/2'>
            <span className='bg-white relative pr-4'>
              03. Hero personnalisé des pages détails des produits
            </span>
          </h2>

          <div className='mt-8'>
            <ProjectImage
              width={4776}
              height={4096}
              src='/images/projects/qsmp-shop/QSMP.shop-PDP-Tops.webp'
              alt=''
              className='w-full\'
            />
          </div>
        </section>
      </Aside>
    </Container>
  )
}
