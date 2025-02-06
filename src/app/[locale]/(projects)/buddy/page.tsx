import Image, { ImageProps } from 'next/image'
import { ProjectTag, ProjectTagList } from '@/components/Project'
import { setRequestLocale, getTranslations } from 'next-intl/server'
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
  const t = await getTranslations('projects.buddy')

  return (
    <Container>
      <Main>
        <BackButton id='buddy' />

        <ProjectArticle>
          <div>
            <ProjectHeader
              logoSrc='/images/projects/carrefour.png'
              logoAlt='Carrefour logo'
              company='Carrefour'
              title='Data Supermarket'
              subtitle={t('subtitle')}
            />

            <div className='mt-8 space-y-10 xl:space-y-8'>
              <section>
                <Heading>{t('context.title')}</Heading>
                <Paragraph>{t('context.description')}</Paragraph>
              </section>
              <section>
                <Heading>{t('contribution.title')}</Heading>
                <Paragraph>{t('contribution.description1')}</Paragraph>
                <Paragraph>{t('contribution.description2')}</Paragraph>
              </section>
            </div>
          </div>

          <ProjectFooter year='2024'>
            <ProjectTagList>
              <ProjectTag name={t('tags.illustration')} />
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
