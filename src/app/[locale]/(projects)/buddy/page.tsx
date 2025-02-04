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
                  Le Data Supermarket est un outil développé par Carrefour
                  visant à simplifier l’accès aux données métiers via un
                  catalogue structuré. Il intègre un chatbot permettant
                  d’obtenir des informations en interagissant directement avec
                  lui.
                </Paragraph>
              </section>
              <section>
                <Heading>Contribution</Heading>
                <Paragraph>
                  J’ai été chargé de concevoir une illustration et de donner une
                  identité visuelle à ce chatbot. L’objectif était de s’éloigner
                  des codes des assistants d’appel classiques en adoptant une
                  approche plus informelle, jeune et conviviale, en accord avec
                  l’interface déjà conçue.
                </Paragraph>
                <Paragraph>
                  Pour concevoir ces illustrations, je me suis inspirée de la
                  palette d’émotions des Memoji d’Apple, tout en intégrant les
                  couleurs emblématiques de Carrefour, le bleu et le rouge,
                  ainsi que les teintes pastel de l’interface du Data
                  Supermarket.
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
        <section className='flex flex-wrap gap-9 justify-center'>
          <ProjectImage
            width={1716}
            height={1644}
            src='/images/projects/buddy/Pensif.webp'
            alt=''
            className='h-auto w-full max-w-80 xl:max-w-[18.75rem] outline -outline-offset-1 outline-1 outline-black/10 rounded'
          />
          <ProjectImage
            width={1716}
            height={1644}
            src='/images/projects/buddy/Heureux.webp'
            alt=''
            className='h-auto w-full max-w-80 xl:max-w-[18.75rem] outline -outline-offset-1 outline-1 outline-black/10 rounded'
          />
          <ProjectImage
            width={1716}
            height={1644}
            src='/images/projects/buddy/Triste.webp'
            alt=''
            className='h-auto w-full max-w-80 xl:max-w-[18.75rem] outline -outline-offset-1 outline-1 outline-black/10 rounded'
          />
          <ProjectImage
            width={1716}
            height={1644}
            src='/images/projects/buddy/Gêné.webp'
            alt=''
            className='h-auto w-full max-w-80 xl:max-w-[18.75rem] outline -outline-offset-1 outline-1 outline-black/10 rounded'
          />
        </section>
      </Aside>
    </Container>
  )
}
