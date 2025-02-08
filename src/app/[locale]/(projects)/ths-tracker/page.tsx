import Image, { ImageProps } from 'next/image'
import { ProjectTag, ProjectTagList } from '@/components/Project'
import { getTranslations, setRequestLocale } from 'next-intl/server'
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
import { SectionHeading } from '../_components/SectionHeading'

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

export default async function THSTrackerPage({ params }: PageProps) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations('projects.ths_tracker')

  return (
    <Container>
      <Main>
        <BackButton id='ths-tracker' />

        <ProjectArticle>
          <div>
            <ProjectHeader
              logoSrc='/images/projects/personnel.png'
              logoAlt='Centered white circle with a black background'
              company={t('company')}
              title='THS Tracker'
              subtitle={t('subtitle')}
              className='mb-8'
            />

            <div className='space-y-10 xl:space-y-8 has-[+*]:mb-10'>
              <section>
                <Heading>{t('context.title')}</Heading>
                <Paragraph>{t('context.description')}</Paragraph>
              </section>
              <section>
                <Heading>{t('contribution.title')}</Heading>
                <Paragraph>{t('contribution.description')}</Paragraph>
              </section>
              <section>
                <Heading>{t('team.title')}</Heading>

                <ul className='text-base text-pretty leading-normal xl:leading-[25px] font-[350] text-[#282828] dark:text-[#D3D3D3]'>
                  <li>
                    {t.rich('team.maxence', {
                      link: (chunk) => (
                        <ReferenceLink href='https://www.maxencewolff.com'>
                          {chunk}
                        </ReferenceLink>
                      ),
                    })}
                  </li>
                </ul>
              </section>
            </div>

            <ExternalLink href='https://www.figma.com/design/5qmv136HtPbx48h0Gh6eXY/THS-Tracker---Maëlle?node-id=1-448'>
              {t('cta')}
            </ExternalLink>
          </div>

          <ProjectFooter year='2022'>
            <ProjectTagList>
              <ProjectTag name={t('tags.research')} />
              <ProjectTag name={t('tags.ux')} />
              <ProjectTag name={t('tags.mobile')} />
            </ProjectTagList>
          </ProjectFooter>
        </ProjectArticle>
      </Main>

      <Aside>
        <section>
          <SectionHeading>{t('research.title')}</SectionHeading>

          <div>
            <Paragraph>{t('research.intro')}</Paragraph>

            <div className='mt-6 space-y-4'>
              <article className='rounded-sm bg-[#FFCADE] dark:bg-[#3C1721] px-6 py-6 sm:py-4 text-[#6E001F] dark:text-[#FFCADE] flex flex-col sm:flex-row sm:items-center gap-4'>
                <Image
                  src='/images/projects/ths-tracker/icons/bar-chart.png'
                  width={96}
                  height={96}
                  alt=''
                  className='size-6'
                />

                <p className='text-base/tight text-pretty font-[350]'>
                  {t('research.needs.symptoms')}
                </p>
              </article>

              <article className='rounded-sm bg-[#FFF0CA] dark:bg-[#3C3317] px-6 py-6 sm:py-4 text-[#5F4400] dark:text-[#FFF0CA] flex flex-col sm:flex-row sm:items-center gap-4'>
                <Image
                  src='/images/projects/ths-tracker/icons/bell.png'
                  width={96}
                  height={96}
                  alt=''
                  className='size-6'
                />

                <p className='text-base/tight text-pretty font-[350]'>
                  {t('research.needs.reminders')}
                </p>
              </article>

              <article className='rounded-sm bg-[#CAE1FF] dark:bg-[#172B3C] px-6 py-6 sm:py-4 text-[#003057] dark:text-[#CAE1FF] flex flex-col sm:flex-row sm:items-center gap-4'>
                <Image
                  src='/images/projects/ths-tracker/icons/stethoscope.png'
                  width={96}
                  height={96}
                  alt=''
                  className='size-6'
                />

                <p className='text-base/tight text-pretty font-[350]'>
                  {t('research.needs.appointments')}
                </p>
              </article>
            </div>
          </div>

          <div className='mt-8'>
            <Paragraph>
              {t.rich('research.architecture.intro', {
                link: (chunk) => (
                  <ReferenceLink href='https://www.figma.com/design/5qmv136HtPbx48h0Gh6eXY/THS-Tracker---Ma%C3%ABlle?node-id=0-1'>
                    {chunk}
                  </ReferenceLink>
                ),
              })}
            </Paragraph>
            <Paragraph>{t('research.architecture.sections_intro')}</Paragraph>

            <div className='mt-6 space-y-4'>
              <article className='rounded-sm bg-[#F9F9F9] dark:bg-[#0F0F0F] px-6 py-4 space-y-2'>
                <h3 className='font-medium text-base/tight text-[#282828] dark:text-[#D3D3D3]'>
                  {t('research.architecture.tracking.title')}
                </h3>
                <p className='text-base/tight text-pretty font-[350] text-[#818181] dark:text-[#D3D3D3]'>
                  {t('research.architecture.tracking.description')}
                </p>
              </article>

              <article className='rounded-sm bg-[#F9F9F9] dark:bg-[#0F0F0F] px-6 py-4 space-y-2'>
                <h3 className='font-medium text-base/tight text-[#282828] dark:text-[#D3D3D3]'>
                  {t('research.architecture.journal.title')}
                </h3>
                <p className='text-base/tight text-pretty font-[350] text-[#818181] dark:text-[#D3D3D3]'>
                  {t('research.architecture.journal.description')}
                </p>
              </article>

              <article className='rounded-sm bg-[#F9F9F9] dark:bg-[#0F0F0F] px-6 py-4 space-y-2'>
                <h3 className='font-medium text-base/tight text-[#282828] dark:text-[#D3D3D3]'>
                  {t('research.architecture.reminders.title')}
                </h3>
                <p className='text-base/tight text-pretty font-[350] text-[#818181] dark:text-[#D3D3D3]'>
                  {t('research.architecture.reminders.description')}
                </p>
              </article>
            </div>
          </div>
        </section>

        <section>
          <SectionHeading>{t('wireframes.title')}</SectionHeading>

          <div className='space-y-10'>
            <ProjectImage
              width={4102}
              height={1624}
              src='/images/projects/ths-tracker/onboarding.png'
              alt=''
              className='w-full'
              unoptimized
            />

            <ProjectImage
              width={4102}
              height={1624}
              src='/images/projects/ths-tracker/taux-hormonaux.png'
              alt=''
              className='w-full'
              unoptimized
            />

            <ProjectImage
              width={4102}
              height={1624}
              src='/images/projects/ths-tracker/journal-rappels.png'
              alt=''
              className='w-full'
              quality={95}
            />
          </div>
        </section>
      </Aside>
    </Container>
  )
}
