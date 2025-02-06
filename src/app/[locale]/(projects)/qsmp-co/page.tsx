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
  const t = await getTranslations('projects.qsmp')

  return (
    <Container>
      <Main>
        <BackButton id='qsmp-co' />

        <ProjectArticle>
          <div>
            <ProjectHeader
              logoSrc='/images/projects/quackity.png'
              logoAlt='Quackity Studios logo'
              company='Quackity Studios'
              title='QSMP.co'
              subtitle={t('subtitle')}
            />

            <div className='mt-8 space-y-10 xl:space-y-8'>
              <section>
                <Heading>{t('context.title')}</Heading>
                <Paragraph>
                  {t.rich('context.description1', {
                    creator: (chunk) => (
                      <ReferenceLink
                        className='underline-offset-[3px]'
                        href='https://www.twitch.tv/quackity'
                      >
                        {chunk}
                      </ReferenceLink>
                    ),
                  })}
                </Paragraph>
                <Paragraph>{t('context.description2')}</Paragraph>
              </section>
              <section>
                <Heading>{t('contribution.title')}</Heading>
                <Paragraph>{t('contribution.description')}</Paragraph>
              </section>
            </div>

            <ExternalLink href='https://qsmpco.netlify.app/'>
              {t('cta')}
            </ExternalLink>
          </div>

          <ProjectFooter year='2023'>
            <ProjectTagList>
              <ProjectTag name={t('tags.ux')} />
              <ProjectTag name={t('tags.ui')} />
              <ProjectTag name={t('tags.showcase')} />
              <ProjectTag name={t('tags.visual_identity')} />
            </ProjectTagList>
          </ProjectFooter>
        </ProjectArticle>
      </Main>

      <Aside>
        <section>
          <h2 className='font-normal text-sm/none uppercase -tracking-[0.02em] text-[#818181] dark:text-[#6D6D6D] relative before:absolute before:w-full before:h-px before:bg-[#E1E1E1] dark:before:bg-[#3C3C3C] before:right-0 before:top-1/2 before:-translate-y-1/2'>
            <span className='bg-white dark:bg-black relative pr-4'>
              {t('sections.visual_identity')}
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
          <h2 className='font-normal text-sm/none uppercase -tracking-[0.02em] text-[#818181] dark:text-[#6D6D6D] relative before:absolute before:w-full before:h-px before:bg-[#E1E1E1] dark:before:bg-[#3C3C3C] before:right-0 before:top-1/2 before:-translate-y-1/2'>
            <span className='bg-white dark:bg-black relative pr-4'>
              {t('sections.interfaces')}
            </span>
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
      </Aside>
    </Container>
  )
}
