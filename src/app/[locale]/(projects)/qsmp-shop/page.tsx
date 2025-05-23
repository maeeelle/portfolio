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
              className='mb-8'
            />

            <div className='space-y-10 xl:space-y-8 has-[+*]:mb-10'>
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
          <SectionHeading>{t('sections.product_visuals')}</SectionHeading>

          <div>
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

        <section>
          <SectionHeading>{t('sections.interfaces')}</SectionHeading>

          <div className='space-y-10'>
            <ProjectImage
              width={1512}
              height={4647}
              src='/images/projects/qsmp-shop/QSMP.shop-Homepage.webp'
              alt=''
              className='w-full outline-black/10 outline-1 -outline-offset-1 rounded-sm'
            />

            <ProjectImage
              width={1513}
              height={5270}
              src='/images/projects/qsmp-shop/QSMP.shop-Catalog.webp'
              alt=''
              className='w-full outline-black/10 outline-1 -outline-offset-1 rounded-sm'
            />
            <ProjectImage
              width={1512}
              height={3609}
              src='/images/projects/qsmp-shop/QSMP.shop-PDP.webp'
              alt=''
              className='w-full outline-black/10 outline-1 -outline-offset-1 rounded-sm'
            />
          </div>
        </section>

        <section>
          <SectionHeading>{t('sections.custom_hero')}</SectionHeading>

          <div>
            <ProjectImage
              width={1512}
              height={934}
              src='/images/projects/qsmp-shop/QSMPshop_PDP_Tops.gif'
              alt=''
              className='w-full outline-black/10 outline-1 -outline-offset-1 rounded-sm'
            />
          </div>
        </section>
      </Aside>
    </Container>
  )
}
