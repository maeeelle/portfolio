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

export default async function MaisonLaurentinePage({ params }: PageProps) {
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
              title='La Maison Laurentine'
              subtitle='Guider le visiteur et encourager les échanges'
            />

            <div className='mt-8 space-y-10 xl:space-y-8'>
              <section>
                <Heading>Contexte</Heading>
                <Paragraph>
                  La Grande Conversation est une exposition basée sur 21
                  personnes interviewées sur leur vie et des œuvres d’artistes
                  diverses (photographies, sculptures, installations, dessins et
                  peintures…). La demande de la Maison Laurentine est de
                  permettre aux visiteurs de sortir plus grand de cette
                  exposition et d’avoir moins peur d’entrer en conversation avec
                  les autres.
                </Paragraph>
              </section>
              <section>
                <Heading>Contribution</Heading>
                <Paragraph>
                  Lors de ce projet, j’ai participé à toute la partie d’idéation
                  et de définition des parcours utilisateur avec l’ensemble de
                  mon équipe. J’ai ensuite été en charge de la conception des
                  interfaces de la borne interactive.
                </Paragraph>
              </section>
              <section>
                <Heading>Equipe</Heading>

                <ul className='text-base text-pretty leading-normal xl:leading-[25px] font-[350] text-[#282828] dark:text-[#D3D3D3]'>
                  <li>
                    <ReferenceLink href='https://www.linkedin.com/in/britni-t-599382207/'>
                      Britni Titus Xavier
                    </ReferenceLink>{' '}
                    - UX/UI Designer
                  </li>
                  <li>
                    <ReferenceLink href='https://www.linkedin.com/in/g0y0/'>
                      Gyeongyeon Kim
                    </ReferenceLink>{' '}
                    - UX/UI Designer
                  </li>
                  <li>
                    <ReferenceLink href='https://www.linkedin.com/in/l%C3%A9onie-nollevalle-9310731b0/'>
                      Léonie Nollevalle
                    </ReferenceLink>{' '}
                    - UX/UI Designer
                  </li>
                </ul>
              </section>
            </div>
          </div>

          <ProjectFooter year='2023'>
            <ProjectTagList>
              <ProjectTag name='User Research' />
              <ProjectTag name='UX' />
              <ProjectTag name='UI' />
              <ProjectTag name='Web Application' />
            </ProjectTagList>
          </ProjectFooter>
        </ProjectArticle>
      </Main>

      <Aside>
        <section>
          <h2 className='font-normal text-sm/none uppercase -tracking-[0.02em] text-[#818181] dark:text-[#6D6D6D] relative before:absolute before:w-full before:h-px before:bg-[#E1E1E1] dark:before:bg-[#3C3C3C] before:right-0 before:top-1/2 before:-translate-y-1/2'>
            <span className='bg-white dark:bg-black relative pr-4'>
              Notre proposition
            </span>
          </h2>

          <div className='mt-8'>
            <Paragraph>
              Pour enrichir l’expérience des visiteurs, nous avons suggéré
              l’idée d’un carnet de voyage interactif. L’objectif principal de
              celui-ci est de rendre l’art plus ludique et accessible à tous en
              permettant une personnalisation complète. Tout au long de leur
              parcours, les visiteurs peuvent y consigner leurs impressions,
              ajouter des notes et ainsi créer un souvenir unique de
              l’exposition.
            </Paragraph>
            <Paragraph>
              En complément, ce carnet joue également un rôle d’outil
              d’orientation en facilitant la navigation entre les différents
              espaces grâce à une carte interactive et une fonction de
              géolocalisation. Une manière intuitive et immersive d’explorer
              l’exposition tout en conservant une trace personnelle de sa
              visite.
            </Paragraph>
          </div>
        </section>

        <section className='mt-8'>
          <h2 className='font-normal text-sm/none uppercase -tracking-[0.02em] text-[#818181] dark:text-[#6D6D6D] relative before:absolute before:w-full before:h-px before:bg-[#E1E1E1] dark:before:bg-[#3C3C3C] before:right-0 before:top-1/2 before:-translate-y-1/2'>
            <span className='bg-white dark:bg-black relative pr-4'>
              user flow
            </span>
          </h2>

          <div className='mt-8 rounded space-y-4'>
            <article className='rounded bg-[#F9F9F9] dark:bg-[#0F0F0F] px-6 py-4 space-y-2'>
              <h3 className='font-medium text-base/tight text-[#282828] dark:text-[#D3D3D3]'>
                01
              </h3>

              <p className='text-base/tight text-pretty font-[350] text-[#818181] dark:text-[#D3D3D3]'>
                Dès mon entrée dans l’exposition, je tombe sur un stand
                présentant l’expérience du carnet de voyage, où l’on m’invite à
                récupérer une carte NFC.
              </p>
            </article>

            <article className='rounded bg-[#F9F9F9] dark:bg-[#0F0F0F] px-6 py-4 space-y-2'>
              <h3 className='font-medium text-base/tight text-[#282828] dark:text-[#D3D3D3]'>
                02
              </h3>

              <p className='text-base/tight text-pretty font-[350] text-[#818181] dark:text-[#D3D3D3]'>
                Je récupère ma carte et débute ma visite de la Maison
                Laurentine. Arrivé devant une œuvre, je la scanne sur la borne
                associée.
              </p>
            </article>

            <article className='rounded bg-[#F9F9F9] dark:bg-[#0F0F0F] px-6 py-4 space-y-2'>
              <h3 className='font-medium text-base/tight text-[#282828] dark:text-[#D3D3D3]'>
                03
              </h3>

              <p className='text-base/tight text-pretty font-[350] text-[#818181] dark:text-[#D3D3D3]'>
                Je découvre un carnet numérique vierge avec diverses options de
                personnalisation (textes, images, dessins). Il contient
                notamment des éléments liés à l’œuvre, comme une photo, la
                signature de l’artiste ou encore son portrait.
              </p>
            </article>

            <article className='rounded bg-[#F9F9F9] dark:bg-[#0F0F0F] px-6 py-4 space-y-2'>
              <h3 className='font-medium text-base/tight text-[#282828] dark:text-[#D3D3D3]'>
                04
              </h3>

              <p className='text-base/tight text-pretty font-[350] text-[#818181] dark:text-[#D3D3D3]'>
                Une fois quelques pages remplies au niveau des différentes
                bornes, je scanne ma carte avec mon téléphone pour consulter les
                œuvres que j’ai découvertes et suivre l’avancement de mon carnet
                d’exploration.
              </p>
            </article>

            <article className='rounded bg-[#F9F9F9] dark:bg-[#0F0F0F] px-6 py-4 space-y-2'>
              <h3 className='font-medium text-base/tight text-[#282828] dark:text-[#D3D3D3]'>
                05
              </h3>

              <p className='text-base/tight text-pretty font-[350] text-[#818181] dark:text-[#D3D3D3]'>
                À la fin de ma visite, grâce au code unique de ma carte NFC, je
                peux partager mon expérience avec mes proches en leur montrant
                la carte retraçant mon parcours, disponible sur le site
                internet.
              </p>
            </article>
          </div>
        </section>

        <section className='mt-8'>
          <h2 className='font-normal text-sm/none uppercase -tracking-[0.02em] text-[#818181] dark:text-[#6D6D6D] relative before:absolute before:w-full before:h-px before:bg-[#E1E1E1] dark:before:bg-[#3C3C3C] before:right-0 before:top-1/2 before:-translate-y-1/2'>
            <span className='bg-white dark:bg-black relative pr-4'>
              Wireframes de la borne
            </span>
          </h2>

          <div className='space-y-10 mt-8'>
            <ProjectImage
              width={1194}
              height={834}
              src='/images/projects/maison-laurentine/1.Scan.png'
              alt=''
              className='w-full outline-black/10 outline outline-1 -outline-offset-1 rounded'
            />

            <ProjectImage
              width={1194}
              height={834}
              src='/images/projects/maison-laurentine/2.Validation.png'
              alt=''
              className='w-full outline-black/10 outline outline-1 -outline-offset-1 rounded'
            />

            <ProjectImage
              width={1194}
              height={834}
              src='/images/projects/maison-laurentine/3.Carnet.png'
              alt=''
              className='w-full outline-black/10 outline outline-1 -outline-offset-1 rounded'
            />

            <ProjectImage
              width={1194}
              height={834}
              src='/images/projects/maison-laurentine/4.Carnet.png'
              alt=''
              className='w-full outline-black/10 outline outline-1 -outline-offset-1 rounded'
            />

            <ProjectImage
              width={1194}
              height={834}
              src='/images/projects/maison-laurentine/5.Carnet.png'
              alt=''
              className='w-full outline-black/10 outline outline-1 -outline-offset-1 rounded'
            />

            <ProjectImage
              width={1194}
              height={834}
              src='/images/projects/maison-laurentine/6.Carnet.png'
              alt=''
              className='w-full outline-black/10 outline outline-1 -outline-offset-1 rounded'
            />

            <ProjectImage
              width={1194}
              height={834}
              src='/images/projects/maison-laurentine/7.Carnet.png'
              alt=''
              className='w-full outline-black/10 outline outline-1 -outline-offset-1 rounded'
            />

            <ProjectImage
              width={1194}
              height={834}
              src='/images/projects/maison-laurentine/8.Fin.png'
              alt=''
              className='w-full outline-black/10 outline outline-1 -outline-offset-1 rounded'
            />
          </div>
        </section>

        <section className='mt-8'>
          <h2 className='font-normal text-sm/none uppercase -tracking-[0.02em] text-[#818181] dark:text-[#6D6D6D] relative before:absolute before:w-full before:h-px before:bg-[#E1E1E1] dark:before:bg-[#3C3C3C] before:right-0 before:top-1/2 before:-translate-y-1/2'>
            <span className='bg-white dark:bg-black relative pr-4'>
              wireframes du Site web
            </span>
          </h2>

          <div className='space-y-10 mt-8'>
            <ProjectImage
              width={1920}
              height={1080}
              src='/images/projects/maison-laurentine/Frame-1.png'
              alt=''
              className='w-full outline-black/10 outline outline-1 -outline-offset-1 rounded'
            />

            <ProjectImage
              width={1512}
              height={982}
              src='/images/projects/maison-laurentine/Frame-2.png'
              alt=''
              className='w-full outline-black/10 outline outline-1 -outline-offset-1 rounded'
            />

            <ProjectImage
              width={1512}
              height={982}
              src='/images/projects/maison-laurentine/Frame-3.png'
              alt=''
              className='w-full outline-black/10 outline outline-1 -outline-offset-1 rounded'
            />

            <ProjectImage
              width={1512}
              height={982}
              src='/images/projects/maison-laurentine/Frame-7.png'
              alt=''
              className='w-full outline-black/10 outline outline-1 -outline-offset-1 rounded'
            />

            <ProjectImage
              width={1512}
              height={982}
              src='/images/projects/maison-laurentine/Frame-8.png'
              alt=''
              className='w-full outline-black/10 outline outline-1 -outline-offset-1 rounded'
            />
          </div>
        </section>
      </Aside>
    </Container>
  )
}
