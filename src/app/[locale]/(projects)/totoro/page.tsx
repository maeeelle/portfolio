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

type PageProps = {
  params: Promise<{
    locale: string
  }>
}

function ProjectImage(props: ImageProps) {
  return (
    // eslint-disable-next-line jsx-a11y/alt-text
    <Image {...props} className='w-full select-none' />
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
        <h2 className='font-normal text-sm/none uppercase -tracking-[0.02em] text-[#818181] dark:text-[#6D6D6D] relative before:absolute before:w-full before:h-px before:bg-[#E1E1E1] dark:before:bg-[#3C3C3C] before:right-0 before:top-1/2 before:-translate-y-1/2'>
          <span className='bg-white dark:bg-black relative pr-4'>
            01. Identité visuelles
          </span>
        </h2>

        <ProjectImage
          width={3840}
          height={2160}
          src='/images/projects/totoro/cover.webp'
          alt=''
        />
        <ProjectImage
          width={3240}
          height={1317}
          src='/images/projects/totoro/styleguide.webp'
          alt=''
        />

        <h2 className='font-normal text-sm/none uppercase -tracking-[0.02em] text-[#818181] dark:text-[#6D6D6D] mt-8 relative before:absolute before:w-full before:h-px before:bg-[#E1E1E1] dark:before:bg-[#3C3C3C] before:right-0 before:top-1/2 before:-translate-y-1/2'>
          <span className='bg-white dark:bg-black relative pr-4'>
            02. Interfaces
          </span>
        </h2>

        <ProjectImage
          width={2466}
          height={1624}
          src='/images/projects/totoro/pages-1.webp'
          alt=''
        />
        <ProjectImage
          width={2388}
          height={1624}
          src='/images/projects/totoro/pages-2.webp'
          alt=''
        />
        <ProjectImage
          width={2410}
          height={1624}
          src='/images/projects/totoro/pages-3.webp'
          alt=''
        />
      </Aside>
    </Container>
  )
}
