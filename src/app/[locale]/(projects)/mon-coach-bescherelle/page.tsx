import Image from 'next/image'
import { ProjectTag, ProjectTagList } from '@/components/Project'
import { setRequestLocale, getTranslations } from 'next-intl/server'
import { Heading } from '../_components/Heading'
import { Paragraph } from '../_components/Paragraph'
import { BackButton } from '../_components/BackButton'
import { ProjectHeader } from '../_components/ProjectHeader'
import { Container } from '../_components/Container'
import { Main } from '../_components/Main'
import { ExternalLink } from '../_components/ExternalLink'
import { ProjectFooter } from '../_components/Footer'
import { Aside } from '../_components/Aside'
import { ProjectArticle } from '../_components/ProjectArticle'

type PageProps = {
  params: Promise<{
    locale: string
  }>
}

function ProjectImage({ src, alt }: { src: string; alt: string }) {
  return (
    <Image
      src={src}
      alt={alt}
      width={1920}
      height={1080}
      className='rounded w-full select-none border border-black/10 dark:border-white/10'
    />
  )
}

export default async function ProjectPage({ params }: PageProps) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations('projects.bescherelle')

  return (
    <Container>
      <Main>
        <BackButton />

        <ProjectArticle>
          <div>
            <ProjectHeader
              logoSrc='/images/projects/hatier.png'
              logoAlt='Editions Hatier logo'
              company='Editions Hatier'
              title='Mon Coach Bescherelle'
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
                <Paragraph>{t('contribution.description')}</Paragraph>
              </section>
            </div>

            <ExternalLink href='https://mesmanuels.fr/demo/9782401037151'>
              {t('cta')}
            </ExternalLink>
          </div>

          <ProjectFooter year='2020'>
            <ProjectTagList>
              <ProjectTag name={t('tags.ux')} />
              <ProjectTag name={t('tags.ui')} />
              <ProjectTag name={t('tags.web')} />
            </ProjectTagList>
          </ProjectFooter>
        </ProjectArticle>
      </Main>

      <Aside>
        <ProjectImage
          src='/images/projects/mon-coach-bescherelle/pré-accueil-1.png'
          alt=''
        />
        <ProjectImage
          src='/images/projects/mon-coach-bescherelle/tableau-de-bord-test.png'
          alt=''
        />
        <ProjectImage
          src='/images/projects/mon-coach-bescherelle/tableau-de-bord-n1-td.png'
          alt=''
        />
        <ProjectImage
          src='/images/projects/mon-coach-bescherelle/parcours-test.png'
          alt=''
        />
        <ProjectImage
          src='/images/projects/mon-coach-bescherelle/parcours-conjugaison-intermédiaire.png'
          alt=''
        />
        <ProjectImage
          src='/images/projects/mon-coach-bescherelle/parcours-rédaction-Intermédiaire.png'
          alt=''
        />
        <ProjectImage
          src='/images/projects/mon-coach-bescherelle/parcours-confusions-exercice.png'
          alt=''
        />
        <ProjectImage
          src='/images/projects/mon-coach-bescherelle/parcours-accords-exercice.png'
          alt=''
        />
        <ProjectImage
          src='/images/projects/mon-coach-bescherelle/vidéos-accords.png'
          alt=''
        />
      </Aside>
    </Container>
  )
}
