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
                  Lorem ipsum dolor sit amet consectetur. Malesuada a et aliquam
                  iaculis luctus. Et cursus in fermentum suspendisse lobortis
                  pharetra consequat varius lorem. Egestas a blandit id non. Id
                  lectus aliquam vulputate auctor.
                </Paragraph>
              </section>
              <section>
                <Heading>Contribution</Heading>
                <Paragraph>
                  Lorem ipsum dolor sit amet consectetur. Malesuada a et aliquam
                  iaculis luctus. Et cursus in fermentum suspendisse lobortis
                  pharetra consequat varius lorem. Egestas a blandit id non. Id
                  lectus aliquam vulputate auctor.
                </Paragraph>
              </section>
              <section>
                <Heading>Equipe</Heading>

                <ul className='text-base text-pretty leading-normal xl:leading-[25px] font-[350] text-[#282828] dark:text-[#D3D3D3]'>
                  <li>
                    <a className='text-[#4F32FF] dark:text-[#B2FF5D]'>
                      Anthony Reungère
                    </a>{' '}
                    - UX/UI Designer
                  </li>
                  <li>
                    <a className='text-[#4F32FF] dark:text-[#B2FF5D]'>
                      Léonie Nollevalle
                    </a>{' '}
                    - UX/UI Designer
                  </li>

                  <li>
                    <a className='text-[#4F32FF] dark:text-[#B2FF5D]'>
                      Maëlle Moisis
                    </a>{' '}
                    - UX/UI Designer
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
