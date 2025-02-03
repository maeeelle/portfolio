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
              logoSrc='/images/projects/carrefour.png'
              logoAlt='Carrefour logo'
              company='Carrefour'
              title='EasiPromo'
              subtitle='Unifier toutes les promotions en un seul outil pour une gestion centralisée et simplifiée'
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
            </div>
          </div>

          <ProjectFooter year='2024'>
            <ProjectTagList>
              <ProjectTag name='User Research' />
              <ProjectTag name='UX' />
              <ProjectTag name='UI' />
              <ProjectTag name='Web Application' />
            </ProjectTagList>
          </ProjectFooter>
        </ProjectArticle>
      </Main>

      <Aside>
        <section className='space-y-10'>
          <ProjectImage
            width={2880}
            height={2620}
            src='/images/projects/easipromo/image-64.webp'
            alt=''
            unoptimized
            className='w-full outline-black/10 outline outline-1 -outline-offset-1 rounded'
          />

          <ProjectImage
            width={2880}
            height={2620}
            src='/images/projects/easipromo/image-65.webp'
            alt=''
            unoptimized
            className='w-full outline-black/10 outline outline-1 -outline-offset-1 rounded'
          />
        </section>
      </Aside>
    </Container>
  )
}
