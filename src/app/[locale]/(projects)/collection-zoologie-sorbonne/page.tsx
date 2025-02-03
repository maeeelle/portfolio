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
    <Image {...props} className='rounded-lg w-full select-none' />
  )
}

export default async function CollectionZoologiePage({ params }: PageProps) {
  const { locale } = await params
  setRequestLocale(locale)

  return (
    <Container>
      <Main>
        <BackButton />

        <ProjectArticle>
          <div>
            <ProjectHeader
              logoSrc='/images/projects/sorbonne.png'
              logoAlt='Université Sorbonne Paris Nord logo'
              company='Université Sorbonne Paris Nord'
              title='Collection de Zoologie de Sorbonne Université'
              subtitle='Allier transmission et réflexion autour de l’Anthropocène'
            />

            <div className='mt-8 space-y-10 xl:space-y-8'>
              <section>
                <Heading>Contexte</Heading>
                <Paragraph>
                  La Collection de Zoologie de{' '}
                  <ReferenceLink
                    href='https://www.sorbonne-universite.fr/actualites/immersion-dans-la-collection-de-zoologie'
                    className='underline-offset-[3px]'
                  >
                    Santiago Aragon
                  </ReferenceLink>{' '}
                  est un patrimoine scientifique unique, rassemblant plusieurs
                  milliers de spécimens, dont des animaux naturalisés et des
                  pièces anatomiques historiques.
                </Paragraph>
                <Paragraph>
                  Dans le cadre de ce projet, l’objectif était de valoriser
                  cette collection à travers une approche immersive et
                  pédagogique, facilitant son accessibilité au grand public et
                  aux étudiants. En s’appuyant sur des outils numériques, le
                  projet visait à moderniser la transmission du savoir, tout en
                  préservant l’héritage scientifique et culturel de cette
                  collection.
                </Paragraph>
              </section>
              <section>
                <Heading>Contribution</Heading>
                <Paragraph>
                  Pour ce projet mon rôle s’est davantage porté sur l’idéation
                  et la définition des solutions ainsi que la réflexion autour
                  des user journeys.
                </Paragraph>
              </section>
              <section>
                <Heading>Equipe</Heading>

                <ul className='text-base text-pretty leading-normal xl:leading-[25px] font-[350] text-[#282828] dark:text-[#D3D3D3]'>
                  <li>
                    <ReferenceLink>Anthony Reungère</ReferenceLink> - UX/UI
                    Designer
                  </li>
                  <li>
                    <ReferenceLink>Léonie Nollevalle</ReferenceLink> - UX/UI
                    Designer
                  </li>
                </ul>
              </section>
            </div>
          </div>

          <ProjectFooter year='2024'>
            <ProjectTagList>
              <ProjectTag name='User Research' />
              <ProjectTag name='UX' />
            </ProjectTagList>
          </ProjectFooter>
        </ProjectArticle>
      </Main>

      <Aside>
        <h2 className='font-normal text-sm/none uppercase -tracking-[0.02em] text-[#818181] relative before:absolute before:w-full before:h-px before:bg-[#E1E1E1] before:right-0 before:top-1/2 before:-translate-y-1/2'>
          <span className='bg-white relative pr-4'>01. Identité visuelle</span>
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

        <h2 className='font-normal text-sm/none uppercase -tracking-[0.02em] text-[#818181] mt-8 relative before:absolute before:w-full before:h-px before:bg-[#E1E1E1] before:right-0 before:top-1/2 before:-translate-y-1/2'>
          <span className='bg-white relative pr-4'>02. Interfaces</span>
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
