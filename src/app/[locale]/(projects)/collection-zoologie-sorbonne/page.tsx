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

export default async function CollectionZoologiePage({ params }: PageProps) {
  const { locale } = await params
  setRequestLocale(locale)

  return (
    <Container>
      <Main>
        <BackButton />

        <ProjectArticle>
          <div>
            <ProjectHeader
              logoSrc='/images/projects/sorbonne.png'
              logoAlt='Université Sorbonne Paris Nord logo'
              company='Université Sorbonne Paris Nord'
              title='Collection de Zoologie de Sorbonne Université'
              subtitle='Allier transmission et réflexion autour de l’Anthropocène'
            />

            <div className='mt-8 space-y-10 xl:space-y-8'>
              <section>
                <Heading>Contexte</Heading>
                <Paragraph>
                  La Collection de Zoologie de{' '}
                  <ReferenceLink
                    href='https://www.sorbonne-universite.fr/actualites/immersion-dans-la-collection-de-zoologie'
                    className='underline-offset-[3px]'
                  >
                    Santiago Aragon
                  </ReferenceLink>{' '}
                  est un patrimoine scientifique unique, rassemblant plusieurs
                  milliers de spécimens, dont des animaux naturalisés et des
                  pièces anatomiques historiques.
                </Paragraph>
                <Paragraph>
                  Dans le cadre de ce projet, l’objectif était de valoriser
                  cette collection à travers une approche immersive et
                  pédagogique, facilitant son accessibilité au grand public et
                  aux étudiants. En s’appuyant sur des outils numériques, le
                  projet visait à moderniser la transmission du savoir, tout en
                  préservant l’héritage scientifique et culturel de cette
                  collection.
                </Paragraph>
              </section>
              <section>
                <Heading>Contribution</Heading>
                <Paragraph>
                  Pour ce projet mon rôle s’est davantage porté sur l’idéation
                  et la définition des solutions ainsi que la réflexion autour
                  des user journeys.
                </Paragraph>
              </section>
              <section>
                <Heading>Equipe</Heading>

                <ul className='text-base text-pretty leading-normal xl:leading-[25px] font-[350] text-[#282828] dark:text-[#D3D3D3]'>
                  <li>
                    <ReferenceLink href='https://www.linkedin.com/in/anthonyreungere/'>
                      Anthony Reungère
                    </ReferenceLink>{' '}
                    - UX/UI Designer
                  </li>
                  <li>
                    <ReferenceLink href='https://www.linkedin.com/in/l%C3%A9onie-nollevalle-9310731b0/'>
                      Léonie Nollevalle
                    </ReferenceLink>{' '}
                    - Identité visuelle + UX/UI Designer
                  </li>
                </ul>
              </section>
            </div>
          </div>

          <ProjectFooter year='2024'>
            <ProjectTagList>
              <ProjectTag name='User Research' />
              <ProjectTag name='UX' />
            </ProjectTagList>
          </ProjectFooter>
        </ProjectArticle>
      </Main>

      <Aside>
        <section>
          <h2 className='font-normal text-sm/none uppercase -tracking-[0.02em] text-[#818181] dark:text-[#6D6D6D] relative before:absolute before:w-full before:h-px before:bg-[#E1E1E1] dark:before:bg-[#3C3C3C] before:right-0 before:top-1/2 before:-translate-y-1/2'>
            <span className='bg-white dark:bg-black relative pr-4'>
              Étude du contexte et des enjeux
            </span>
          </h2>

          <div className='mt-8'>
            <Paragraph>
              Après avoir échangé avec Santiago Aragon et visité le site, nous
              avons identifié plusieurs enjeux liés à la Collection Zoologique.
              Son approche narrative, centrée sur l’histoire individuelle de
              chaque animal, offre une expérience immersive et empathique, rare
              dans les musées traditionnels.
            </Paragraph>
            <Paragraph>
              Santiago souhaite également utiliser la collection pour ouvrir des
              discussions sur l’anthropocène, dépassant ainsi son simple rôle
              scientifique. Cependant, son emplacement au sein de l’université
              limite sa visibilité et sa reconnaissance.
            </Paragraph>
            <Paragraph>
              L’absence d’informations écrites, compensée par l’interaction
              directe avec Santiago, pose la question de la transmission du
              savoir. Enfin, son rôle central dans l’expérience des visiteurs
              souligne la nécessité de préserver et pérenniser son impact sur la
              collection.
            </Paragraph>
          </div>
        </section>

        <section>
          <h2 className='font-normal text-sm/none uppercase -tracking-[0.02em] text-[#818181] dark:text-[#6D6D6D] relative before:absolute before:w-full before:h-px before:bg-[#E1E1E1] dark:before:bg-[#3C3C3C] before:right-0 before:top-1/2 before:-translate-y-1/2'>
            <span className='bg-white dark:bg-black relative pr-4'>
              Problématiques identifiées
            </span>
          </h2>

          <div className='mt-8 rounded space-y-4'>
            <article className='bg-[#F9F9F9] dark:bg-[#0F0F0F] px-6 py-4 space-y-2'>
              <h3 className='font-medium text-base/tight text-[#282828] dark:text-[#D3D3D3]'>
                Visibilité
              </h3>

              <p className='text-base/tight text-pretty font-[350] text-[#818181] dark:text-[#D3D3D3]'>
                La collection souffre d’un manque de visibilité, sans
                signalétique sur place ni réelle présence en ligne, ce qui
                complique son accès. Elle ne dispose pas non plus d’une identité
                propre la rendant identifiable.
              </p>
            </article>

            <article className='bg-[#F9F9F9] dark:bg-[#0F0F0F] px-6 py-4 space-y-2'>
              <h3 className='font-medium text-base/tight text-[#282828] dark:text-[#D3D3D3]'>
                Scénographie
              </h3>

              <p className='text-base/tight text-pretty font-[350] text-[#818181] dark:text-[#D3D3D3]'>
                La scénographie est inégale : certains objets sont mis en valeur
                tandis que d’autres restent cachés. L’absence de cartels
                informatifs complique la visite, surtout pour un public non
                initié.
              </p>
            </article>

            <article className='bg-[#F9F9F9] dark:bg-[#0F0F0F] px-6 py-4 space-y-2'>
              <h3 className='font-medium text-base/tight text-[#282828] dark:text-[#D3D3D3]'>
                Informations
              </h3>

              <p className='text-base/tight text-pretty font-[350] text-[#818181] dark:text-[#D3D3D3]'>
                Santiago Aragon est au cœur de la transmission du savoir,
                rendant la collection dépendante de sa présence. Assurer la
                pérennité de son expertise et offrir un accès minimal aux
                informations sur les spécimens pourraient enrichir l’expérience
                des visiteurs.
              </p>
            </article>
          </div>
        </section>

        <section className='mt-8'>
          <h2 className='font-normal text-sm/none uppercase -tracking-[0.02em] text-[#818181] dark:text-[#6D6D6D] relative before:absolute before:w-full before:h-px before:bg-[#E1E1E1] dark:before:bg-[#3C3C3C] before:right-0 before:top-1/2 before:-translate-y-1/2'>
            <span className='bg-white dark:bg-black relative pr-4'>
              Identité visuelle
            </span>
          </h2>

          <div className='flex flex-col xl:flex-row gap-2.5 max-w-full mt-8'>
            <ProjectImage
              width={4096}
              height={2371}
              src='/images/projects/collection-zoologie-sorbonne/DSC01915-1.webp'
              alt=''
              className='min-w-0 object-cover object-center xl:h-60'
            />
            <ProjectImage
              width={3000}
              height={3000}
              src='/images/projects/collection-zoologie-sorbonne/Porte-1.webp'
              alt=''
              className='min-w-0 object-cover object-center xl:h-60'
            />
          </div>

          <div className='flex flex-col xl:flex-row gap-2.5 max-w-full mt-2.5'>
            <ProjectImage
              width={4096}
              height={2734}
              src='/images/projects/collection-zoologie-sorbonne/mur-1.webp'
              alt=''
              className='min-w-0 object-cover object-center xl:h-56'
            />
            <ProjectImage
              width={4096}
              height={2731}
              src='/images/projects/collection-zoologie-sorbonne/DSC01971-1.webp'
              alt=''
              className='min-w-0 object-cover object-center xl:h-56'
            />
          </div>

          <div className='mt-2.5'>
            <ProjectImage
              width={4096}
              height={2731}
              src='/images/projects/collection-zoologie-sorbonne/DSC01889-1.webp'
              alt=''
              className='w-full'
            />
          </div>
        </section>

        <section className='mt-8'>
          <h2 className='font-normal text-sm/none uppercase -tracking-[0.02em] text-[#818181] dark:text-[#6D6D6D] relative before:absolute before:w-full before:h-px before:bg-[#E1E1E1] dark:before:bg-[#3C3C3C] before:right-0 before:top-1/2 before:-translate-y-1/2'>
            <span className='bg-white dark:bg-black relative pr-4'>
              Interfaces
            </span>
          </h2>

          <div className='space-y-10 mt-8'>
            <ProjectImage
              width={1512}
              height={3709}
              src='/images/projects/collection-zoologie-sorbonne/image-55.png'
              alt=''
              className='w-full outline-black/10 outline outline-1 -outline-offset-1 rounded'
            />

            <ProjectImage
              width={1512}
              height={2890}
              src='/images/projects/collection-zoologie-sorbonne/image-58.png'
              alt=''
              className='w-full outline-black/10 outline outline-1 -outline-offset-1 rounded'
            />

            <ProjectImage
              width={1512}
              height={1857}
              src='/images/projects/collection-zoologie-sorbonne/image-59.png'
              alt=''
              className='w-full outline-black/10 outline outline-1 -outline-offset-1 rounded'
            />

            <ProjectImage
              width={1512}
              height={3627}
              src='/images/projects/collection-zoologie-sorbonne/image-60.png'
              alt=''
              className='w-full outline-black/10 outline outline-1 -outline-offset-1 rounded'
            />

            <ProjectImage
              width={3024}
              height={2172}
              src='/images/projects/collection-zoologie-sorbonne/image-61.png'
              alt=''
              className='w-full outline-black/10 outline outline-1 -outline-offset-1 rounded'
            />
          </div>
        </section>
      </Aside>
    </Container>
  )
}
