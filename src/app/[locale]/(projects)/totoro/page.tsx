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
import { getTranslations } from 'next-intl/server'

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
  const t = await getTranslations('projects.totoro')

  return (
    <Container>
      <Main>
        <BackButton id='totoro' />

        <ProjectArticle>
          <div>
            <ProjectHeader
              logoSrc='/images/projects/hetic.png'
              logoAlt='HETIC logo'
              company='HETIC'
              title='Totoro'
              subtitle={t('subtitle')}
            />

            <div className='mt-8 space-y-10 xl:space-y-8'>
              <section>
                <Heading>{t('context.title')}</Heading>
                <Paragraph>{t('context.description1')}</Paragraph>
                <Paragraph>{t('context.description2')}</Paragraph>
              </section>
              <section>
                <Heading>{t('contribution.title')}</Heading>
                <Paragraph>{t('contribution.description1')}</Paragraph>
                {t('contribution.description2').length > 0 && (
                  <Paragraph>{t('contribution.description2')}</Paragraph>
                )}
              </section>
              <section>
                <Heading>{t('team.title')}</Heading>

                <ul className='text-base text-pretty leading-normal xl:leading-5 space-y-1 font-[350] text-[#282828] dark:text-[#D3D3D3]'>
                  <li>
                    {t.rich('team.members.jarce', {
                      link: (chunk) => (
                        <ReferenceLink
                          href='https://www.linkedin.com/in/jarceb'
                          className='text-[#4F32FF] dark:text-[#B2FF5D]'
                        >
                          {chunk}
                        </ReferenceLink>
                      ),
                    })}
                  </li>
                  <li>
                    {t.rich('team.members.maxence', {
                      link: (chunk) => (
                        <ReferenceLink
                          href='https://www.maxencewolff.com'
                          className='text-[#4F32FF] dark:text-[#B2FF5D]'
                        >
                          {chunk}
                        </ReferenceLink>
                      ),
                    })}
                  </li>
                  <li>
                    {t.rich('team.members.teo', {
                      link: (chunk) => (
                        <ReferenceLink
                          href='https://www.linkedin.com/in/teolugat'
                          className='text-[#4F32FF] dark:text-[#B2FF5D]'
                        >
                          {chunk}
                        </ReferenceLink>
                      ),
                    })}
                  </li>
                </ul>
              </section>
            </div>
          </div>

          <ProjectFooter year='2022'>
            <ProjectTagList>
              <ProjectTag name={t('tags.ux')} />
              <ProjectTag name={t('tags.ui')} />
              <ProjectTag name={t('tags.mobile')} />
              <ProjectTag name={t('tags.branding')} />
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

          <div className='space-y-8 mt-8'>
            <ProjectImage
              width={1920}
              height={1080}
              src='/images/projects/totoro/Brand.webp'
              alt=''
              priority
            />
            <ProjectImage
              width={1620}
              height={656}
              src='/images/projects/totoro/Brand-Colors.webp'
              unoptimized
              alt=''
              priority
            />
          </div>
        </section>

        <section className='mt-8'>
          <h2 className='font-normal text-sm/none uppercase -tracking-[0.02em] text-[#818181] dark:text-[#6D6D6D] relative before:absolute before:w-full before:h-px before:bg-[#E1E1E1] dark:before:bg-[#3C3C3C] before:right-0 before:top-1/2 before:-translate-y-1/2'>
            <span className='bg-white dark:bg-black relative pr-4'>
              {t('sections.design_kit')}
            </span>
          </h2>

          <div className='space-y-8 mt-8'>
            <ProjectImage
              width={2290}
              height={2638}
              src='/images/projects/totoro/Components.webp'
              alt=''
            />
          </div>
        </section>

        <section className='mt-8'>
          <h2 className='font-normal text-sm/none uppercase -tracking-[0.02em] text-[#818181] dark:text-[#6D6D6D] relative before:absolute before:w-full before:h-px before:bg-[#E1E1E1] dark:before:bg-[#3C3C3C] before:right-0 before:top-1/2 before:-translate-y-1/2'>
            <span className='bg-white dark:bg-black relative pr-4'>
              {t('sections.interfaces')}
            </span>
          </h2>

          <div className='mt-8 grid grid-cols-[repeat(auto-fill,minmax(13.25rem,1fr))] gap-6 justify-start items-start'>
            <ProjectImage
              width={750}
              height={1624}
              src='/images/projects/totoro/Explications.webp'
              alt=''
              className='outline-1 -outline-offset-1 outline-black/10 rounded-sm min-w-0'
            />
            <ProjectImage
              width={750}
              height={1624}
              src='/images/projects/totoro/Explications-1.webp'
              alt=''
              className='outline-1 -outline-offset-1 outline-black/10 rounded-sm min-w-0'
            />
            <ProjectImage
              width={750}
              height={1624}
              src='/images/projects/totoro/Explications-2.webp'
              alt=''
              className='outline-1 -outline-offset-1 outline-black/10 rounded-sm min-w-0'
            />
            <ProjectImage
              width={750}
              height={1624}
              src='/images/projects/totoro/Missions.webp'
              alt=''
              className='outline-1 -outline-offset-1 outline-black/10 rounded-sm min-w-0'
            />
            <ProjectImage
              width={750}
              height={1624}
              src='/images/projects/totoro/Filtres.webp'
              alt=''
              className='outline-1 -outline-offset-1 outline-black/10 rounded-sm min-w-0'
            />
            <ProjectImage
              width={750}
              height={1624}
              src='/images/projects/totoro/Mission.webp'
              alt=''
              className='outline-1 -outline-offset-1 outline-black/10 rounded-sm min-w-0'
            />
            <ProjectImage
              width={750}
              height={1624}
              src='/images/projects/totoro/Messagerie.webp'
              alt=''
              className='outline-1 -outline-offset-1 outline-black/10 rounded-sm min-w-0'
            />
            <ProjectImage
              width={750}
              height={1624}
              src='/images/projects/totoro/Conversation-ouverte.webp'
              alt=''
              className='outline-1 -outline-offset-1 outline-black/10 rounded-sm min-w-0'
            />
            <ProjectImage
              width={750}
              height={1624}
              src='/images/projects/totoro/Boutiques.webp'
              alt=''
              className='outline-1 -outline-offset-1 outline-black/10 rounded-sm min-w-0'
            />
            <ProjectImage
              width={750}
              height={1624}
              src='/images/projects/totoro/Boutique.webp'
              alt=''
              className='outline-1 -outline-offset-1 outline-black/10 rounded-sm min-w-0'
              unoptimized
            />
            <ProjectImage
              width={750}
              height={1624}
              src='/images/projects/totoro/Profile.webp'
              alt=''
              className='outline-1 -outline-offset-1 outline-black/10 rounded-sm min-w-0'
            />
            <ProjectImage
              width={750}
              height={1624}
              src='/images/projects/totoro/Profile2.webp'
              alt=''
              className='outline-1 -outline-offset-1 outline-black/10 rounded-sm min-w-0'
            />
          </div>
        </section>
      </Aside>
    </Container>
  )
}
