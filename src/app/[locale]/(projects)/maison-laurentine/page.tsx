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

export default async function MaisonLaurentinePage({ params }: PageProps) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations('projects.laurentine')

  return (
    <Container>
      <Main>
        <BackButton id='maison-laurentine' />

        <ProjectArticle>
          <div>
            <ProjectHeader
              logoSrc='/images/projects/sorbonne.png'
              logoAlt='Université Sorbonne Paris Nord logo'
              company='Université Sorbonne Paris Nord'
              title='La Maison Laurentine'
              subtitle={t('subtitle')}
            />

            <div className='mt-8 space-y-10 xl:space-y-8 has-[+*]:mb-10'>
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
                    {t.rich('team.members.britni', {
                      link: (chunk) => (
                        <ReferenceLink href='https://www.linkedin.com/in/britni-t-599382207'>
                          {chunk}
                        </ReferenceLink>
                      ),
                    })}
                  </li>
                  <li>
                    {t.rich('team.members.gyeongyeon', {
                      link: (chunk) => (
                        <ReferenceLink href='https://www.linkedin.com/in/g0y0'>
                          {chunk}
                        </ReferenceLink>
                      ),
                    })}
                  </li>
                  <li>
                    {t.rich('team.members.leonie', {
                      link: (chunk) => (
                        <ReferenceLink href='https://www.linkedin.com/in/l%C3%A9onie-nollevalle-9310731b0'>
                          {chunk}
                        </ReferenceLink>
                      ),
                    })}
                  </li>
                </ul>
              </section>
            </div>
          </div>

          <ProjectFooter year='2023'>
            <ProjectTagList>
              <ProjectTag name={t('tags.research')} />
              <ProjectTag name={t('tags.ux')} />
              <ProjectTag name={t('tags.ui')} />
              <ProjectTag name={t('tags.web')} />
            </ProjectTagList>
          </ProjectFooter>
        </ProjectArticle>
      </Main>

      <Aside>
        <section>
          <h2 className='font-normal text-sm/none uppercase -tracking-[0.02em] text-[#818181] dark:text-[#6D6D6D] relative before:absolute before:w-full before:h-px before:bg-[#E1E1E1] dark:before:bg-[#3C3C3C] before:right-0 before:top-1/2 before:-translate-y-1/2'>
            <span className='bg-white dark:bg-black relative pr-4'>
              {t('sections.proposal.title')}
            </span>
          </h2>

          <div className='mt-8'>
            <Paragraph>{t('sections.proposal.description1')}</Paragraph>
            <Paragraph>{t('sections.proposal.description2')}</Paragraph>
          </div>
        </section>

        <section>
          <h2 className='font-normal text-sm/none uppercase -tracking-[0.02em] text-[#818181] dark:text-[#6D6D6D] relative before:absolute before:w-full before:h-px before:bg-[#E1E1E1] dark:before:bg-[#3C3C3C] before:right-0 before:top-1/2 before:-translate-y-1/2'>
            <span className='bg-white dark:bg-black relative pr-4'>
              {t('sections.userflow.title')}
            </span>
          </h2>

          <div className='mt-8 rounded-sm space-y-4'>
            {[1, 2, 3, 4, 5].map((step) => (
              <article
                key={step}
                className='rounded-sm bg-[#F9F9F9] dark:bg-[#0F0F0F] px-6 py-4 space-y-2'
              >
                <h3 className='font-medium text-base/tight text-[#282828] dark:text-[#D3D3D3]'>
                  {t(`sections.userflow.steps.${step}.number`)}
                </h3>
                <p className='text-base/tight text-pretty font-[350] text-[#818181] dark:text-[#D3D3D3]'>
                  {t(`sections.userflow.steps.${step}.description`)}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section>
          <h2 className='font-normal text-sm/none uppercase -tracking-[0.02em] text-[#818181] dark:text-[#6D6D6D] relative before:absolute before:w-full before:h-px before:bg-[#E1E1E1] dark:before:bg-[#3C3C3C] before:right-0 before:top-1/2 before:-translate-y-1/2'>
            <span className='bg-white dark:bg-black relative pr-4'>
              {t('sections.terminal')}
            </span>
          </h2>

          <div className='space-y-10 mt-8'>
            <ProjectImage
              width={1194}
              height={834}
              src='/images/projects/maison-laurentine/1.Scan.png'
              alt=''
              className='w-full outline-black/10 outline-1 -outline-offset-1 rounded-sm'
            />

            <ProjectImage
              width={1194}
              height={834}
              src='/images/projects/maison-laurentine/2.Validation.png'
              alt=''
              className='w-full outline-black/10 outline-1 -outline-offset-1 rounded-sm'
            />

            <ProjectImage
              width={1194}
              height={834}
              src='/images/projects/maison-laurentine/3.Carnet.png'
              alt=''
              className='w-full outline-black/10 outline-1 -outline-offset-1 rounded-sm'
            />

            <ProjectImage
              width={1194}
              height={834}
              src='/images/projects/maison-laurentine/4.Carnet.png'
              alt=''
              className='w-full outline-black/10 outline-1 -outline-offset-1 rounded-sm'
            />

            <ProjectImage
              width={1194}
              height={834}
              src='/images/projects/maison-laurentine/5.Carnet.png'
              alt=''
              className='w-full outline-black/10 outline-1 -outline-offset-1 rounded-sm'
            />

            <ProjectImage
              width={1194}
              height={834}
              src='/images/projects/maison-laurentine/6.Carnet.png'
              alt=''
              className='w-full outline-black/10 outline-1 -outline-offset-1 rounded-sm'
            />

            <ProjectImage
              width={1194}
              height={834}
              src='/images/projects/maison-laurentine/7.Carnet.png'
              alt=''
              className='w-full outline-black/10 outline-1 -outline-offset-1 rounded-sm'
            />

            <ProjectImage
              width={1194}
              height={834}
              src='/images/projects/maison-laurentine/8.Fin.png'
              alt=''
              className='w-full outline-black/10 outline-1 -outline-offset-1 rounded-sm'
            />
          </div>
        </section>

        <section>
          <h2 className='font-normal text-sm/none uppercase -tracking-[0.02em] text-[#818181] dark:text-[#6D6D6D] relative before:absolute before:w-full before:h-px before:bg-[#E1E1E1] dark:before:bg-[#3C3C3C] before:right-0 before:top-1/2 before:-translate-y-1/2'>
            <span className='bg-white dark:bg-black relative pr-4'>
              {t('sections.website')}
            </span>
          </h2>

          <div className='space-y-10 mt-8'>
            <ProjectImage
              width={1920}
              height={1080}
              src='/images/projects/maison-laurentine/Frame-1.png'
              alt=''
              className='w-full outline-black/10 outline-1 -outline-offset-1 rounded-sm'
            />

            <ProjectImage
              width={1512}
              height={982}
              src='/images/projects/maison-laurentine/Frame-2.png'
              alt=''
              className='w-full outline-black/10 outline-1 -outline-offset-1 rounded-sm'
            />

            <ProjectImage
              width={1512}
              height={982}
              src='/images/projects/maison-laurentine/Frame-3.png'
              alt=''
              className='w-full outline-black/10 outline-1 -outline-offset-1 rounded-sm'
            />

            <ProjectImage
              width={1512}
              height={982}
              src='/images/projects/maison-laurentine/Frame-7.png'
              alt=''
              className='w-full outline-black/10 outline-1 -outline-offset-1 rounded-sm'
            />

            <ProjectImage
              width={1512}
              height={982}
              src='/images/projects/maison-laurentine/Frame-8.png'
              alt=''
              className='w-full outline-black/10 outline-1 -outline-offset-1 rounded-sm'
            />
          </div>
        </section>
      </Aside>
    </Container>
  )
}
