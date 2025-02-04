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
import { ExternalLink } from '../_components/ExternalLink'
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
                  <ReferenceLink href='#' className='underline-offset-[3px]'>
                    Quackity
                  </ReferenceLink>
                  , qui réunit des streamers du monde entier, parlant
                  différentes langues, grâce à un système de traduction en temps
                  réel.
                </Paragraph>
              </section>
              <section>
                <Heading>Contribution</Heading>
                <Paragraph>
                  Lorem ipsum dolor sit amet consectetur. Sit morbi rhoncus
                  lorem tincidunt nec sed. Etiam ipsum et quis tincidunt
                  tristique sed adipiscing dolor lobortis.
                </Paragraph>
              </section>
            </div>
            <ExternalLink href='#'>Accéder au prototype</ExternalLink>
          </div>

          <ProjectFooter year='2024'>
            <ProjectTagList>
              <ProjectTag name='User Research' />
              <ProjectTag name='UX' />
              <ProjectTag name='UI' />
              <ProjectTag name='E-commerce' />
            </ProjectTagList>
          </ProjectFooter>
        </ProjectArticle>
      </Main>

      <Aside>
        <section className='space-y-20'>
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
        </section>
      </Aside>
    </Container>
  )
}
