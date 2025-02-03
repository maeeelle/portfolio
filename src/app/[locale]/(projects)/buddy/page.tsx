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

export default async function BuddyPage({ params }: PageProps) {
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
              title='Data Supermarket'
              subtitle='Créer une mascotte amicale pour incarner un chatbot d’accès aux données'
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
              <ProjectTag name='Illustration' />
            </ProjectTagList>
          </ProjectFooter>
        </ProjectArticle>
      </Main>

      <Aside>
        <section className='flex flex-wrap gap-6 justify-center'>
          <ProjectImage
            width={3432}
            height={3432}
            src='/images/projects/buddy/image-1.webp'
            alt=''
            className='w-auto h-80 xl:h-[18.25rem]'
          />
          <ProjectImage
            width={3432}
            height={3432}
            src='/images/projects/buddy/image-2.webp'
            alt=''
            className='w-auto h-80 xl:h-[18.25rem]'
          />
          <ProjectImage
            width={3432}
            height={3432}
            src='/images/projects/buddy/image-3.webp'
            alt=''
            className='w-auto h-80 xl:h-[18.25rem]'
          />
          <ProjectImage
            width={3432}
            height={3432}
            src='/images/projects/buddy/image-4.webp'
            alt=''
            className='w-auto h-80 xl:h-[18.25rem]'
          />
        </section>
      </Aside>
    </Container>
  )
}
