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

type PageProps = {
  params: Promise<{
    locale: string
  }>
}

function ProjectImage({ className, ...props }: ImageProps) {
  return (
    // eslint-disable-next-line jsx-a11y/alt-text
    <Image quality={90} {...props} className={clsx('select-none', className)} />
  )
}

export default async function ProjectPage({ params }: PageProps) {
  const { locale } = await params
  setRequestLocale(locale)

  return (
    <Container>
      <Main>
        <BackButton />

        <ProjectArticle>
          <div>
            <ProjectHeader
              logoSrc='/images/projects/hetic.png'
              logoAlt='HETIC logo'
              company='HETIC'
              title='Totoro'
              subtitle='Recréer du lien à travers l’entraide entre voisins'
            />

            <div className='mt-8 space-y-10 xl:space-y-8'>
              <section>
                <Heading>Contexte</Heading>
                <Paragraph>
                  Totoro est une application visant à favoriser davantage les
                  échanges de proximité et à redynamiser la vie en communauté.
                </Paragraph>
                <Paragraph>
                  En guise de récompense suite à la réalisation d’une mission
                  locale, l’utilisateur gagne des tokens qu’il peut ensuite
                  échanger contre des bons de réductions à utiliser chez les
                  commerçants proches de chez lui.
                </Paragraph>
              </section>
              <section>
                <Heading>Contribution</Heading>
                <Paragraph>
                  Lors de ce projet, j’ai activement participé au process
                  d’idéation.
                </Paragraph>
                <Paragraph>
                  J’ai ensuite eu l’occasion de réaliser l’identité visuelle et
                  ai co-construit, en binôme avec le second designer, le
                  parcours utilisateur ainsi qu’un design kit et l’ensemble des
                  écrans de l’application.
                </Paragraph>
              </section>
              <section>
                <Heading>Equipe</Heading>

                <ul className='text-base text-pretty leading-normal xl:leading-5 space-y-1 font-[350] text-[#282828] dark:text-[#D3D3D3]'>
                  <li>
                    <ReferenceLink
                      href='https://www.linkedin.com/in/jarceb'
                      className='text-[#4F32FF] dark:text-[#B2FF5D]'
                    >
                      Jarce Boukoro
                    </ReferenceLink>{' '}
                    - Développeur Fullstack
                  </li>
                  <li>
                    <ReferenceLink
                      href='https://www.maxencewolff.com'
                      className='text-[#4F32FF] dark:text-[#B2FF5D]'
                    >
                      Maxence Wolff
                    </ReferenceLink>{' '}
                    - UI Designer + Développeur Front-End
                  </li>
                  <li>
                    <ReferenceLink
                      href='https://www.linkedin.com/in/teolugat'
                      className='text-[#4F32FF] dark:text-[#B2FF5D]'
                    >
                      Téo Lugat
                    </ReferenceLink>{' '}
                    - Développeur Fullstack
                  </li>
                </ul>
              </section>
            </div>
          </div>

          <ProjectFooter year='2022'>
            <ProjectTagList>
              <ProjectTag name='UX' />
              <ProjectTag name='UI' />
              <ProjectTag name='Application mobile' />
              <ProjectTag name='Branding' />
            </ProjectTagList>
          </ProjectFooter>
        </ProjectArticle>
      </Main>

      <Aside>
        <section>
          <h2 className='font-normal text-sm/none uppercase -tracking-[0.02em] text-[#818181] dark:text-[#6D6D6D] relative before:absolute before:w-full before:h-px before:bg-[#E1E1E1] dark:before:bg-[#3C3C3C] before:right-0 before:top-1/2 before:-translate-y-1/2'>
            <span className='bg-white dark:bg-black relative pr-4'>
              Identité visuelle
            </span>
          </h2>

          <div className='space-y-8 mt-8'>
            <ProjectImage
              width={1920}
              height={1080}
              src='/images/projects/totoro/Brand.webp'
              alt=''
            />
            <ProjectImage
              width={1620}
              height={656}
              src='/images/projects/totoro/Brand-Colors.webp'
              unoptimized
              alt=''
            />
          </div>
        </section>

        <section className='mt-8'>
          <h2 className='font-normal text-sm/none uppercase -tracking-[0.02em] text-[#818181] dark:text-[#6D6D6D] relative before:absolute before:w-full before:h-px before:bg-[#E1E1E1] dark:before:bg-[#3C3C3C] before:right-0 before:top-1/2 before:-translate-y-1/2'>
            <span className='bg-white dark:bg-black relative pr-4'>
              Design kit
            </span>
          </h2>

          <div className='space-y-8 mt-8'>
            <ProjectImage
              width={1177}
              height={1359}
              src='/images/projects/totoro/Components.webp'
              unoptimized
              alt=''
            />
          </div>
        </section>

        <section className='mt-8'>
          <h2 className='font-normal text-sm/none uppercase -tracking-[0.02em] text-[#818181] dark:text-[#6D6D6D] relative before:absolute before:w-full before:h-px before:bg-[#E1E1E1] dark:before:bg-[#3C3C3C] before:right-0 before:top-1/2 before:-translate-y-1/2'>
            <span className='bg-white dark:bg-black relative pr-4'>
              Interfaces
            </span>
          </h2>

          <div className='mt-8 grid grid-cols-[repeat(auto-fill,minmax(13.25rem,1fr))] gap-6 justify-start items-start'>
            <ProjectImage
              width={375}
              height={812}
              unoptimized
              src='/images/projects/totoro/Explications.webp'
              alt=''
              className='outline-1 outline -outline-offset-1 outline-black/10 rounded min-w-0'
            />
            <ProjectImage
              width={375}
              height={812}
              unoptimized
              src='/images/projects/totoro/Explications-1.webp'
              alt=''
              className='outline-1 outline -outline-offset-1 outline-black/10 rounded min-w-0'
            />
            <ProjectImage
              width={375}
              height={812}
              unoptimized
              src='/images/projects/totoro/Explications-2.webp'
              alt=''
              className='outline-1 outline -outline-offset-1 outline-black/10 rounded min-w-0'
            />
            <ProjectImage
              width={375}
              height={812}
              unoptimized
              src='/images/projects/totoro/Missions.webp'
              alt=''
              className='outline-1 outline -outline-offset-1 outline-black/10 rounded min-w-0'
            />
            <ProjectImage
              width={375}
              height={812}
              unoptimized
              src='/images/projects/totoro/Filtres.webp'
              alt=''
              className='outline-1 outline -outline-offset-1 outline-black/10 rounded min-w-0'
            />
            <ProjectImage
              width={375}
              height={812}
              unoptimized
              src='/images/projects/totoro/Mission.webp'
              alt=''
              className='outline-1 outline -outline-offset-1 outline-black/10 rounded min-w-0'
            />
            <ProjectImage
              width={375}
              height={812}
              unoptimized
              src='/images/projects/totoro/Boutiques.webp'
              alt=''
              className='outline-1 outline -outline-offset-1 outline-black/10 rounded min-w-0'
            />
            <ProjectImage
              width={375}
              height={818}
              unoptimized
              src='/images/projects/totoro/Profile.webp'
              alt=''
              className='outline-1 outline -outline-offset-1 outline-black/10 rounded min-w-0'
            />
            <ProjectImage
              width={375}
              height={818}
              unoptimized
              src='/images/projects/totoro/Profile2.webp'
              alt=''
              className='outline-1 outline -outline-offset-1 outline-black/10 rounded min-w-0'
            />
          </div>
        </section>
      </Aside>
    </Container>
  )
}
