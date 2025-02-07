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
import { ReferenceLink } from '../_components/ReferenceLink'

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

export default async function QSMPShopPage({ params }: PageProps) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations('projects.qsmp_shop')

  return (
    <Container>
      <Main>
        <BackButton id='qsmp-shop' />

        <ProjectArticle>
          <div>
            <ProjectHeader
              logoSrc='/images/projects/quackity.png'
              logoAlt='Quackity Studios logo'
              company='Quackity Studios'
              title='QSMP.shop'
              subtitle={t('subtitle')}
            />

            <div className='mt-8 space-y-10 xl:space-y-8'>
              <section>
                <Heading>{t('context.title')}</Heading>
                <Paragraph>
                  {t.rich('context.description1', {
                    creator: (chunk) => (
                      <ReferenceLink
                        href='https://www.twitch.tv/quackity'
                        className='underline-offset-[3px]'
                      >
                        {chunk}
                      </ReferenceLink>
                    ),
                  })}
                </Paragraph>
                <Paragraph>
                  {t.rich('context.description2', {
                    shop: (chunk) => (
                      <ReferenceLink
                        href='https://qsmp.shop/'
                        className='underline-offset-[3px]'
                      >
                        {chunk}
                      </ReferenceLink>
                    ),
                  })}
                </Paragraph>
              </section>
              <section>
                <Heading>{t('contribution.title')}</Heading>
                <Paragraph>{t('contribution.description')}</Paragraph>
              </section>
              <section>
                <Heading>{t('team.title')}</Heading>
                <Paragraph>
                  {t.rich('team.foxie', {
                    designer: (chunk) => (
                      <ReferenceLink href='https://www.instagram.com/foxie_fern_/'>
                        {chunk}
                      </ReferenceLink>
                    ),
                  })}
                </Paragraph>
              </section>
            </div>
          </div>

          <ProjectFooter year='2024'>
            <ProjectTagList>
              <ProjectTag name={t('tags.ux')} />
              <ProjectTag name={t('tags.ui')} />
              <ProjectTag name={t('tags.ecommerce')} />
            </ProjectTagList>
          </ProjectFooter>
        </ProjectArticle>
      </Main>

      <Aside>
        <section>
          <h2 className='font-normal text-sm/none uppercase -tracking-[0.02em] text-[#818181] dark:text-[#6D6D6D] relative before:absolute before:w-full before:h-px before:bg-[#E1E1E1] dark:before:bg-[#3C3C3C] before:right-0 before:top-1/2 before:-translate-y-1/2'>
            <span className='bg-white dark:bg-black relative pr-4'>
              {t('sections.product_visuals')}
            </span>
          </h2>

          <div className='mt-8'>
            <ProjectImage
              width={1932}
              height={1432}
              src='/images/projects/qsmp-shop/QSMP.shop-Product-Cards.webp'
              alt=''
              className='w-full'
              priority
            />
          </div>
        </section>

        <section className='mt-8'>
          <h2 className='font-normal text-sm/none uppercase -tracking-[0.02em] text-[#818181] dark:text-[#6D6D6D] relative before:absolute before:w-full before:h-px before:bg-[#E1E1E1] dark:before:bg-[#3C3C3C] before:right-0 before:top-1/2 before:-translate-y-1/2'>
            <span className='bg-white dark:bg-black relative pr-4'>
              {t('sections.interfaces')}
            </span>
          </h2>

          <div className='space-y-10 mt-8'>
            <ProjectImage
              width={1512}
              height={4647}
              src='/images/projects/qsmp-shop/QSMP.shop-Homepage.webp'
              alt=''
              className='w-full outline-black/10 outline outline-1 -outline-offset-1 rounded'
            />

            <ProjectImage
              width={1513}
              height={5270}
              src='/images/projects/qsmp-shop/QSMP.shop-Catalog.webp'
              alt=''
              className='w-full outline-black/10 outline outline-1 -outline-offset-1 rounded'
            />
            <ProjectImage
              width={1512}
              height={3609}
              src='/images/projects/qsmp-shop/QSMP.shop-PDP.webp'
              alt=''
              className='w-full outline-black/10 outline outline-1 -outline-offset-1 rounded'
            />
          </div>
        </section>

        <section className='mt-8'>
          <h2 className='font-normal text-sm/none uppercase -tracking-[0.02em] text-[#818181] dark:text-[#6D6D6D] relative before:absolute before:w-full before:h-px before:bg-[#E1E1E1] dark:before:bg-[#3C3C3C] before:right-0 before:top-1/2 before:-translate-y-1/2'>
            <span className='bg-white dark:bg-black relative pr-4'>
              {t('sections.custom_hero')}
            </span>
          </h2>

          <div className='mt-8'>
            <ProjectImage
              width={1512}
              height={934}
              src='/images/projects/qsmp-shop/QSMPshop_PDP_Tops.gif'
              alt=''
              className='w-full outline-black/10 outline outline-1 -outline-offset-1 rounded'
            />
          </div>
        </section>
      </Aside>
    </Container>
  )
}
