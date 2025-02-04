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
import { ReferenceLink } from '../_components/ReferenceLink'
import clsx from 'clsx'
import { ExternalLink } from '../_components/ExternalLink'

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

export default async function QSMPCoPage({ params }: PageProps) {
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
              title='QSMP.co'
              subtitle='Concevoir une vitrine informative reflétant l’atmosphère du serveur Minecraft QSMP'
            />

            <div className='mt-8 space-y-10 xl:space-y-8'>
              <section>
                <Heading>Contexte</Heading>
                <Paragraph>
                  QSMP est un serveur Minecraft multijoueur, créé par le
                  créateur de contenu{' '}
                  <ReferenceLink className='underline-offset-[3px]' href='#'>
                    Quackity
                  </ReferenceLink>
                  , qui réunit des streamers du monde entier, parlant
                  différentes langues, grâce à un système de traduction en temps
                  réel.
                </Paragraph>
                <Paragraph>
                  Leur site QSMP.co avait pour but de réunir l’ensemble des
                  informations principales du serveur: les streamers en ligne,
                  un compte à rebours avant le prochain événement du serveur, la
                  listes des membres et leurs différents réseaux sociaux.
                </Paragraph>
              </section>
              <section>
                <Heading>Contribution</Heading>
                <Paragraph>
                  L’équipe de Quackity m’a commissionné pour concevoir
                  entièrement ce site vitrine, de l’identité visuelle à
                  l’interface finale. J’ai également eu l’occasion d’échanger
                  avec le développeur tout au long de la mise en production afin
                  de m’assurer de la cohérence entre les maquettes et le produit
                  final.
                </Paragraph>
              </section>
              <section>
                <Heading>Equipe</Heading>

                <ul className='text-base text-pretty leading-normal xl:leading-[25px] font-[350] text-[#282828] dark:text-[#D3D3D3]'>
                  <li>
                    <ReferenceLink href='https://erickgust.vercel.app/'>
                      Erick Gustavo
                    </ReferenceLink>{' '}
                    - Développeur front-end
                  </li>
                </ul>
              </section>
            </div>

            <ExternalLink href='https://qsmpco.netlify.app/'>
              Accéder au site
            </ExternalLink>
          </div>

          <ProjectFooter year='2023'>
            <ProjectTagList>
              <ProjectTag name='User Research' />
              <ProjectTag name='UX' />
              <ProjectTag name='UI' />
              <ProjectTag name='Site vitrine' />
            </ProjectTagList>
          </ProjectFooter>
        </ProjectArticle>
      </Main>

      <Aside>
        <section>
          <h2 className='font-normal text-sm/none uppercase -tracking-[0.02em] text-[#818181] relative before:absolute before:w-full before:h-px before:bg-[#E1E1E1] before:right-0 before:top-1/2 before:-translate-y-1/2'>
            <span className='bg-white relative pr-4'>
              01. Identité visuelle
            </span>
          </h2>

          <div className='mt-8'>
            <ProjectImage
              width={1856}
              height={1010}
              src='/images/projects/qsmp-co/QSMP.co-Moodboard.webp'
              alt=''
              unoptimized
              className='w-full'
            />
          </div>
        </section>

        <section className='mt-8'>
          <h2 className='font-normal text-sm/none uppercase -tracking-[0.02em] text-[#818181] relative before:absolute before:w-full before:h-px before:bg-[#E1E1E1] before:right-0 before:top-1/2 before:-translate-y-1/2'>
            <span className='bg-white relative pr-4'>02. Interfaces</span>
          </h2>

          <div className='mt-8'>
            <ProjectImage
              width={2270}
              height={7104}
              src='/images/projects/qsmp-co/QSMP.co-Desktop.webp'
              alt=''
              quality={90}
              className='w-full outline-black/10 outline outline-1 -outline-offset-1 rounded'
            />
          </div>
        </section>

        <section className='mt-8'>
          <h2 className='font-normal text-sm/none uppercase -tracking-[0.02em] text-[#818181] relative before:absolute before:w-full before:h-px before:bg-[#E1E1E1] before:right-0 before:top-1/2 before:-translate-y-1/2'>
            <span className='bg-white relative pr-4'>
              03. Color palette exploration
            </span>
          </h2>

          <div className='mt-8'>
            <ProjectImage
              width={6993}
              height={5116}
              src='/images/projects/qsmp-co/QSMP.co-Color-Test.webp'
              alt=''
              quality={90}
              className='w-full outline-black/10 outline outline-1 -outline-offset-1 rounded'
            />
          </div>
        </section>
      </Aside>
    </Container>
  )
}
