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

export default async function THSTrackerPage({ params }: PageProps) {
  const { locale } = await params
  setRequestLocale(locale)

  return (
    <Container>
      <Main>
        <BackButton />

        <ProjectArticle>
          <div>
            <ProjectHeader
              logoSrc='/images/projects/personnel.png'
              logoAlt='Centered white circle with a black background'
              company='Projet personnel'
              title='THS Tracker'
              subtitle='Développer un outil tout-en-un pour accompagner le parcours des personnes transgenres'
            />

            <div className='mt-8 space-y-10 xl:space-y-8'>
              <section>
                <Heading>Contexte</Heading>
                <Paragraph>
                  En 2023, j’ai été témoin d’une vague de demandes de la part de
                  personnes transgenres sur Twitter d’un outil permettant de
                  faciliter le suivi de prise d’hormones. Suite à ce constat,
                  j’ai décidé avec un ami développeur de travailler sur un outil
                  permettant de répondre à ce besoin.
                </Paragraph>
              </section>
              <section>
                <Heading>Contribution</Heading>
                <Paragraph>
                  Ce projet est aujourd’hui toujours en cours. Nous avons
                  commencé à réaliser un parcours utilisateur et des wireframes
                  à partir de réponses à une enquête quantitative. Ces écrans,
                  une fois terminés, seront ensuite testés par des utilisateurs
                  potentiels au cours d’interviews.
                </Paragraph>
              </section>
              <section>
                <Heading>Equipe</Heading>

                <ul className='text-base text-pretty leading-normal xl:leading-[25px] font-[350] text-[#282828] dark:text-[#D3D3D3]'>
                  <li>
                    <ReferenceLink href='https://www.maxencewolff.com'>
                      Maxence Wolff
                    </ReferenceLink>{' '}
                    - Développeur Fullstack
                  </li>
                </ul>
              </section>
            </div>

            <ExternalLink href='https://www.figma.com/design/5qmv136HtPbx48h0Gh6eXY/THS-Tracker---Maëlle?node-id=1-448'>
              Accéder au fichier Figma
            </ExternalLink>
          </div>

          <ProjectFooter year='2022'>
            <ProjectTagList>
              <ProjectTag name='User Research' />
              <ProjectTag name='UX' />
              <ProjectTag name='Application mobile' />
            </ProjectTagList>
          </ProjectFooter>
        </ProjectArticle>
      </Main>

      <Aside>
        <section>
          <h2 className='font-normal text-sm/none uppercase -tracking-[0.02em] text-[#818181] dark:text-[#6D6D6D] relative before:absolute before:w-full before:h-px before:bg-[#E1E1E1] dark:before:bg-[#3C3C3C] before:right-0 before:top-1/2 before:-translate-y-1/2'>
            <span className='bg-white dark:bg-black relative pr-4'>
              User research
            </span>
          </h2>

          <div className='mt-8'>
            <Paragraph>
              Après avoir réalisé un sondage auprès de plus de 170 personnes,
              nous avons identifié les principaux besoins de nos futur·e·s
              utilisateur·rice·s.
            </Paragraph>

            <div className='mt-6 space-y-4'>
              <article className='rounded bg-[#FFCADE] dark:bg-[#3C1721] px-6 py-6 sm:py-4 text-[#6E001F] dark:text-[#FFCADE] flex flex-col sm:flex-row sm:items-center gap-4'>
                <Image
                  src='/images/projects/ths-tracker/icons/bar-chart.png'
                  width={96}
                  height={96}
                  alt=''
                  className='size-6'
                />

                <p className='text-base/tight text-pretty font-[350]'>
                  Suivre l’évolution de leurs symptômes et humeurs
                </p>
              </article>

              <article className='rounded bg-[#FFF0CA] dark:bg-[#3C3317] px-6 py-6 sm:py-4 text-[#5F4400] dark:text-[#FFF0CA] flex flex-col sm:flex-row sm:items-center gap-4'>
                <Image
                  src='/images/projects/ths-tracker/icons/bell.png'
                  width={96}
                  height={96}
                  alt=''
                  className='size-6'
                />

                <p className='text-base/tight text-pretty font-[350]'>
                  Avoir un rappel de leur prise d’hormones
                </p>
              </article>

              <article className='rounded bg-[#CAE1FF] dark:bg-[#172B3C] px-6 py-6 sm:py-4 text-[#003057] dark:text-[#CAE1FF] flex flex-col sm:flex-row sm:items-center gap-4'>
                <Image
                  src='/images/projects/ths-tracker/icons/stethoscope.png'
                  width={96}
                  height={96}
                  alt=''
                  className='size-6'
                />

                <p className='text-base/tight text-pretty font-[350]'>
                  Enregistrer leurs rendez-vous médicaux
                </p>
              </article>
            </div>
          </div>

          <div className='mt-8'>
            <Paragraph>
              À partir de ces données, j’ai identifié les fonctionnalités
              essentielles à inclure dès la V1 et élaboré une première
              architecture de l’application,{' '}
              <ReferenceLink href='https://www.figma.com/design/5qmv136HtPbx48h0Gh6eXY/THS-Tracker---Ma%C3%ABlle?node-id=0-1'>
                accessible à ce lien
              </ReferenceLink>
              .
            </Paragraph>
            <Paragraph>
              Celle-ci s’articule autour des sections principales suivantes.
            </Paragraph>

            <div className='mt-6 space-y-4'>
              <article className='rounded bg-[#F9F9F9] dark:bg-[#0F0F0F] px-6 py-4 space-y-2'>
                <h3 className='font-medium text-base/tight text-[#282828] dark:text-[#D3D3D3]'>
                  Mon suivi
                </h3>

                <p className='text-base/tight text-pretty font-[350] text-[#818181] dark:text-[#D3D3D3]'>
                  Consulter un aperçu de mes rappels à venir et de mes taux
                  hormonaux.
                </p>
              </article>

              <article className='rounded bg-[#F9F9F9] dark:bg-[#0F0F0F] px-6 py-4 space-y-2'>
                <h3 className='font-medium text-base/tight text-[#282828] dark:text-[#D3D3D3]'>
                  Journal
                </h3>

                <p className='text-base/tight text-pretty font-[350] text-[#818181] dark:text-[#D3D3D3]'>
                  Enregistrer mes symptômes et humeurs du moment, ainsi que des
                  notes personnelles.
                </p>
              </article>

              <article className='rounded bg-[#F9F9F9] dark:bg-[#0F0F0F] px-6 py-4 space-y-2'>
                <h3 className='font-medium text-base/tight text-[#282828] dark:text-[#D3D3D3]'>
                  Rappels
                </h3>

                <p className='text-base/tight text-pretty font-[350] text-[#818181] dark:text-[#D3D3D3]'>
                  Créer et modifier des rappels avec un large choix
                  d&apos;options de personnalisation.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className='mt-8'>
          <h2 className='font-normal text-sm/none uppercase -tracking-[0.02em] text-[#818181] dark:text-[#6D6D6D] relative before:absolute before:w-full before:h-px before:bg-[#E1E1E1] dark:before:bg-[#3C3C3C] before:right-0 before:top-1/2 before:-translate-y-1/2'>
            <span className='bg-white dark:bg-black relative pr-4'>
              Wireframes
            </span>
          </h2>

          <div className='space-y-10 mt-8'>
            <ProjectImage
              width={4102}
              height={1624}
              src='/images/projects/ths-tracker/onboarding.png'
              alt=''
              className='w-full'
              unoptimized
            />

            <ProjectImage
              width={4102}
              height={1624}
              src='/images/projects/ths-tracker/taux-hormonaux.png'
              alt=''
              className='w-full'
              unoptimized
            />

            <ProjectImage
              width={4102}
              height={1624}
              src='/images/projects/ths-tracker/journal-rappels.png'
              alt=''
              className='w-full'
              quality={95}
            />
          </div>
        </section>
      </Aside>
    </Container>
  )
}
