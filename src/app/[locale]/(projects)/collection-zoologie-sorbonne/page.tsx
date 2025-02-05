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

        <section className='mt-8'>
          <h2 className='font-normal text-sm/none uppercase -tracking-[0.02em] text-[#818181] dark:text-[#6D6D6D] relative before:absolute before:w-full before:h-px before:bg-[#E1E1E1] dark:before:bg-[#3C3C3C] before:right-0 before:top-1/2 before:-translate-y-1/2'>
            <span className='bg-white dark:bg-black relative pr-4'>
              Problématiques identifiées
            </span>
          </h2>

          <div className='mt-8 rounded space-y-4'>
            <article className='rounded bg-[#F9F9F9] dark:bg-[#0F0F0F] px-6 py-4 space-y-2'>
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

            <article className='rounded bg-[#F9F9F9] dark:bg-[#0F0F0F] px-6 py-4 space-y-2'>
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

            <article className='rounded bg-[#F9F9F9] dark:bg-[#0F0F0F] px-6 py-4 space-y-2'>
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
              Esquisses de solutions
            </span>
          </h2>

          <div className='mt-8 rounded space-y-4'>
            <article className='rounded bg-[#F9F9F9] dark:bg-[#0F0F0F] px-6 py-6 sm:py-4 text-[#282828] dark:text-[#D3D3D3] flex flex-col sm:flex-row sm:items-center gap-4'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                fill='none'
                viewBox='0 0 24 24'
                className='shrink-0'
              >
                <path
                  fill='currentColor'
                  d='M14.4 10.5 13 9.1l2.6-2.6L13 3.9l1.4-1.4L17 5.1l2.6-2.6L21 3.9l-2.6 2.6L21 9.1l-1.4 1.4L17 7.9l-2.6 2.6ZM2 11l5-9 5 9H2Zm5 10c-1.1 0-2.042-.392-2.825-1.175C3.392 19.042 3 18.1 3 17c0-1.117.392-2.063 1.175-2.838C4.958 13.387 5.9 12.999 7 13c1.1 0 2.042.392 2.825 1.175C10.608 14.958 11 15.9 11 17s-.392 2.042-1.175 2.825C9.042 20.608 8.1 21 7 21Zm0-2c.55 0 1.02-.196 1.412-.587A1.93 1.93 0 0 0 9 17c0-.55-.196-1.02-.587-1.412A1.93 1.93 0 0 0 7 15c-.55 0-1.02.196-1.412.588A1.93 1.93 0 0 0 5 17c0 .55.196 1.021.588 1.413.392.392.863.588 1.412.587ZM5.4 9h3.2L7 6.125 5.4 9ZM13 21v-8h8v8h-8Zm2-2h4v-4h-4v4Z'
                />
              </svg>

              <p className='text-base/tight text-pretty font-[350]'>
                Créer une identité visuelle à la collection
              </p>
            </article>

            <article className='rounded bg-[#F9F9F9] dark:bg-[#0F0F0F] px-6 py-6 sm:py-4 text-[#282828] dark:text-[#D3D3D3] flex flex-col sm:flex-row sm:items-center gap-4'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                fill='none'
                viewBox='0 0 24 24'
                className='shrink-0'
              >
                <path
                  fill='currentColor'
                  d='M12 21c-2.517 0-4.646-.387-6.387-1.162C3.872 19.063 3.001 18.118 3 17V7c0-1.1.88-2.042 2.638-2.825C7.397 3.392 9.518 3 12 3c2.483 0 4.604.392 6.363 1.175C20.123 4.958 21.001 5.9 21 7v10c0 1.117-.871 2.063-2.613 2.838-1.742.775-3.871 1.163-6.387 1.162Zm0-11.975c1.483 0 2.975-.213 4.475-.638 1.5-.425 2.342-.88 2.525-1.362-.183-.483-1.02-.942-2.512-1.375a15.853 15.853 0 0 0-8.95-.012C6.08 6.063 5.234 6.526 5 7.025c.233.5 1.08.958 2.538 1.375 1.459.417 2.946.625 4.462.625ZM12 14c.7 0 1.375-.033 2.025-.1.65-.067 1.271-.163 1.863-.288a13.75 13.75 0 0 0 1.675-.462A9.81 9.81 0 0 0 19 12.525v-3a9.951 9.951 0 0 1-1.437.625c-.525.183-1.083.338-1.675.463-.592.125-1.213.221-1.863.287-.65.066-1.325.1-2.025.1s-1.383-.033-2.05-.1a17.88 17.88 0 0 1-1.888-.288A12.92 12.92 0 0 1 6.4 10.15 9.13 9.13 0 0 1 5 9.525v3c.417.233.883.442 1.4.625.517.183 1.071.338 1.663.463.592.125 1.221.221 1.887.287.666.066 1.35.1 2.05.1Zm0 5c.767 0 1.546-.058 2.338-.175.792-.117 1.521-.27 2.187-.462.666-.191 1.224-.408 1.675-.65.45-.242.717-.488.8-.738v-2.45a9.951 9.951 0 0 1-1.437.625c-.525.183-1.083.338-1.675.463-.592.125-1.213.221-1.863.287-.65.066-1.325.1-2.025.1s-1.383-.033-2.05-.1a17.88 17.88 0 0 1-1.888-.288A12.92 12.92 0 0 1 6.4 15.15a9.13 9.13 0 0 1-1.4-.625V17c.083.25.346.492.788.725.442.233.996.446 1.662.638a16.5 16.5 0 0 0 2.2.462c.8.116 1.584.174 2.35.175Z'
                />
              </svg>

              <p className='text-base/tight text-pretty font-[350]'>
                Créer une base de données de tous les spécimens, scientifique et
                patrimoniale
              </p>
            </article>

            <article className='rounded bg-[#F9F9F9] dark:bg-[#0F0F0F] px-6 py-6 sm:py-4 text-[#282828] dark:text-[#D3D3D3] flex flex-col sm:flex-row sm:items-center gap-4'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                fill='none'
                viewBox='0 0 24 24'
                className='shrink-0'
              >
                <path
                  fill='currentColor'
                  d='M2 7V2h5v2H4v3H2Zm0 15v-5h2v3h3v2H2Zm15 0v-2h3v-3h2v5h-5Zm3-15V4h-3V2h5v5h-2Zm-2.5 10.5H19V19h-1.5v-1.5Zm0-3H19V16h-1.5v-1.5ZM16 16h1.5v1.5H16V16Zm-1.5 1.5H16V19h-1.5v-1.5ZM13 16h1.5v1.5H13V16Zm3-3h1.5v1.5H16V13Zm-1.5 1.5H16V16h-1.5v-1.5ZM13 13h1.5v1.5H13V13Zm6-8v6h-6V5h6Zm-8 8v6H5v-6h6Zm0-8v6H5V5h6ZM9.5 17.5v-3h-3v3h3Zm0-8v-3h-3v3h3Zm8 0v-3h-3v3h3Z'
                />
              </svg>

              <p className='text-base/tight text-pretty font-[350]'>
                Créer un cartelnumérique de chaque spécimens lisible sur
                smartphone
              </p>
            </article>

            <article className='rounded bg-[#F9F9F9] dark:bg-[#0F0F0F] px-6 py-6 sm:py-4 text-[#282828] dark:text-[#D3D3D3] flex flex-col sm:flex-row sm:items-center gap-4'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                fill='none'
                viewBox='0 0 24 24'
                className='shrink-0'
              >
                <path
                  fill='currentColor'
                  d='M6 17h6v-2H6v2Zm3-4h6v-2H9v2Zm3-4h6V7h-6v2ZM5 21c-.55 0-1.02-.196-1.412-.587A1.93 1.93 0 0 1 3 19V5c0-.55.196-1.02.588-1.412A1.93 1.93 0 0 1 5 3h14c.55 0 1.021.196 1.413.588.392.392.588.863.587 1.412v14c0 .55-.196 1.021-.587 1.413A1.92 1.92 0 0 1 19 21H5Zm0-2h14V5H5v14Z'
                />
              </svg>

              <p className='text-base/tight text-pretty font-[350]'>
                Créer une frise chronologique pour organiser les informations
                patrimoniales et les positionner dans le contexte de
                l’anthropocène
              </p>
            </article>

            <article className='rounded border border-[#F9F9F9] dark:border-[#0F0F0F] px-6 py-6 sm:py-4 text-[#282828] dark:text-[#D3D3D3] flex flex-col sm:flex-row sm:items-center gap-4'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                fill='none'
                viewBox='0 0 24 24'
                className='shrink-0'
              >
                <path
                  fill='currentColor'
                  d='M5 22c-.55 0-1.02-.196-1.412-.587A1.93 1.93 0 0 1 3 20V6c0-.55.196-1.02.588-1.412A1.93 1.93 0 0 1 5 4h1V2h2v2h8V2h2v2h1c.55 0 1.021.196 1.413.588.392.392.588.863.587 1.412v14c0 .55-.196 1.021-.587 1.413A1.92 1.92 0 0 1 19 22H5Zm0-2h14V10H5v10ZM5 8h14V6H5v2Zm7 6a.965.965 0 0 1-.712-.288A.973.973 0 0 1 11 13c0-.283.095-.52.288-.712A.97.97 0 0 1 12 12c.282 0 .52.096.713.288.193.192.289.43.287.712a.986.986 0 0 1-.288.713A.952.952 0 0 1 12 14Zm-4 0a.965.965 0 0 1-.712-.288A.972.972 0 0 1 7 13c0-.283.095-.52.288-.712A.97.97 0 0 1 8 12c.282 0 .52.096.713.288.193.192.289.43.287.712a.986.986 0 0 1-.288.713A.952.952 0 0 1 8 14Zm8 0a.965.965 0 0 1-.712-.288A.973.973 0 0 1 15 13c0-.283.095-.52.288-.712A.97.97 0 0 1 16 12c.282 0 .52.096.713.288.193.192.289.43.287.712a.986.986 0 0 1-.288.713A.952.952 0 0 1 16 14Zm-4 4a.965.965 0 0 1-.712-.288A.973.973 0 0 1 11 17c0-.283.095-.52.288-.712A.97.97 0 0 1 12 16c.282 0 .52.096.713.288.193.192.289.43.287.712a.986.986 0 0 1-.288.713A.952.952 0 0 1 12 18Zm-4 0a.965.965 0 0 1-.712-.288A.972.972 0 0 1 7 17c0-.283.095-.52.288-.712A.97.97 0 0 1 8 16c.282 0 .52.096.713.288.193.192.289.43.287.712a.986.986 0 0 1-.288.713A.952.952 0 0 1 8 18Zm8 0a.965.965 0 0 1-.712-.288A.973.973 0 0 1 15 17c0-.283.095-.52.288-.712A.97.97 0 0 1 16 16c.282 0 .52.096.713.288.193.192.289.43.287.712a.986.986 0 0 1-.288.713A.952.952 0 0 1 16 18Z'
                />
              </svg>

              <p className='text-base/tight text-pretty font-[350]'>
                Permettre de voir les disponibilités
              </p>
            </article>

            <article className='rounded border border-[#F9F9F9] dark:border-[#0F0F0F] px-6 py-6 sm:py-4 text-[#282828] dark:text-[#D3D3D3] flex flex-col sm:flex-row sm:items-center gap-4'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                fill='none'
                viewBox='0 0 24 24'
                className='shrink-0'
              >
                <path
                  fill='currentColor'
                  d='M12 7a.968.968 0 0 0 .713-.288A.964.964 0 0 0 13 6a.973.973 0 0 0-.288-.712A.965.965 0 0 0 12 5a.965.965 0 0 0-.712.288A.973.973 0 0 0 11 6c0 .283.095.52.288.713A.96.96 0 0 0 12 7Zm-1 8h2V9h-2v6Zm-9 7V4c0-.55.196-1.02.588-1.412A1.93 1.93 0 0 1 4 2h16c.55 0 1.021.196 1.413.588.392.392.588.863.587 1.412v12c0 .55-.196 1.021-.587 1.413A1.92 1.92 0 0 1 20 18H6l-4 4Zm3.15-6H20V4H4v13.125L5.15 16Z'
                />
              </svg>

              <p className='text-base/tight text-pretty font-[350]'>
                Informations de contact près de la porte
              </p>
            </article>
            <article className='rounded border border-[#F9F9F9] dark:border-[#0F0F0F] px-6 py-6 sm:py-4 text-[#282828] dark:text-[#D3D3D3] flex flex-col sm:flex-row sm:items-center gap-4'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                fill='none'
                viewBox='0 0 24 24'
                className='shrink-0'
              >
                <path
                  fill='currentColor'
                  d='M11 22v-4H6l-3-3 3-3h5v-2H4V4h7V2h2v2h5l3 3-3 3h-5v2h7v6h-7v4h-2ZM6 8h11.175l1-1-1-1H6v2Zm.825 8H18v-2H6.825l-1 1 1 1Z'
                />
              </svg>

              <p className='text-base/tight text-pretty font-[350]'>
                Créer une signalétique au sein de l’Université
              </p>
            </article>
            <article className='rounded border border-[#F9F9F9] dark:border-[#0F0F0F] px-6 py-6 sm:py-4 text-[#282828] dark:text-[#D3D3D3] flex flex-col sm:flex-row sm:items-center gap-4'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                fill='none'
                viewBox='0 0 24 24'
                className='shrink-0'
              >
                <path
                  fill='currentColor'
                  d='M4 21c-.55 0-1.02-.196-1.412-.587A1.93 1.93 0 0 1 2 19V3l1.675 1.675L5.325 3 7 4.675 8.675 3l1.65 1.675L12 3l1.675 1.675L15.325 3 17 4.675 18.675 3l1.65 1.675L22 3v16c0 .55-.196 1.021-.587 1.413A1.92 1.92 0 0 1 20 21H4Zm0-2h7v-6H4v6Zm9 0h7v-2h-7v2Zm0-4h7v-2h-7v2Zm-9-4h16V8H4v3Z'
                />
              </svg>

              <p className='text-base/tight text-pretty font-[350]'>
                Créer une communication et des réseaux sociaux
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

          <div className='flex flex-col sm:flex-row gap-2.5 max-w-full mt-8'>
            <ProjectImage
              width={2992}
              height={1996}
              src='/images/projects/collection-zoologie-sorbonne/DSC01915-1.webp'
              alt=''
              className='min-w-0 object-cover object-center xl:h-60'
            />
            <ProjectImage
              width={2580}
              height={1996}
              src='/images/projects/collection-zoologie-sorbonne/Porte-1.webp'
              alt=''
              className='min-w-0 object-cover object-center xl:h-60'
            />
          </div>

          <div className='flex flex-col sm:flex-row gap-2.5 max-w-full mt-2.5'>
            <ProjectImage
              width={2712}
              height={2024}
              src='/images/projects/collection-zoologie-sorbonne/mur-1.webp'
              alt=''
              className='min-w-0 object-cover object-center xl:h-56'
            />
            <ProjectImage
              width={2748}
              height={2024}
              src='/images/projects/collection-zoologie-sorbonne/DSC01971-1.webp'
              alt=''
              className='min-w-0 object-cover object-center xl:h-56'
            />
          </div>

          <div className='mt-2.5'>
            <ProjectImage
              width={3056}
              height={1996}
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
              src='/images/projects/collection-zoologie-sorbonne/home-page.png'
              alt=''
              className='w-full outline-black/10 outline outline-1 -outline-offset-1 rounded'
            />

            <ProjectImage
              width={1512}
              height={2890}
              src='/images/projects/collection-zoologie-sorbonne/base-de-donnée-page-passerelle.png'
              alt=''
              className='w-full outline-black/10 outline outline-1 -outline-offset-1 rounded'
            />

            <ProjectImage
              width={1512}
              height={1857}
              src='/images/projects/collection-zoologie-sorbonne/base-de-donnée-généraliste.png'
              alt=''
              className='w-full outline-black/10 outline outline-1 -outline-offset-1 rounded'
            />

            <ProjectImage
              width={1512}
              height={3627}
              src='/images/projects/collection-zoologie-sorbonne/page-spécimens.png'
              alt=''
              className='w-full outline-black/10 outline outline-1 -outline-offset-1 rounded'
            />

            <ProjectImage
              width={1512}
              height={1086}
              src='/images/projects/collection-zoologie-sorbonne/réserver.png'
              alt=''
              className='w-full outline-black/10 outline outline-1 -outline-offset-1 rounded'
            />
          </div>
        </section>

        <section className='mt-8'>
          <h2 className='font-normal text-sm/none uppercase -tracking-[0.02em] text-[#818181] dark:text-[#6D6D6D] relative before:absolute before:w-full before:h-px before:bg-[#E1E1E1] dark:before:bg-[#3C3C3C] before:right-0 before:top-1/2 before:-translate-y-1/2'>
            <span className='bg-white dark:bg-black relative pr-4'>
              ébauches d’expérience immersive
            </span>
          </h2>

          <div className='space-y-10 mt-8'>
            <ProjectImage
              width={1512}
              height={982}
              src='/images/projects/collection-zoologie-sorbonne/frise-chronologique.png'
              alt=''
              className='w-full outline-black/10 outline outline-1 -outline-offset-1 rounded'
            />

            <ProjectImage
              width={1512}
              height={982}
              src='/images/projects/collection-zoologie-sorbonne/carte.png'
              alt=''
              className='w-full outline-black/10 outline outline-1 -outline-offset-1 rounded'
            />
          </div>
        </section>
      </Aside>
    </Container>
  )
}
