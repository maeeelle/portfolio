import { ReferenceLink } from '../../(projects)/_components/ReferenceLink'

function H1({ children }: { children: React.ReactNode }) {
  return (
    <h1 className='font-[350] text-3xl/none tracking-normal leading-[.7]'>
      {children}
    </h1>
  )
}

function H2({ children }: { children: React.ReactNode }) {
  return (
    <h2 className='font-bold text-xs mb-1 text-[#AEAEAE] dark:text-[#4C4C4C] uppercase'>
      {children}
    </h2>
  )
}

export default function LegalPage() {
  return (
    <main className='text-[#282828] dark:text-[#D3D3D3] tracking-[-.02em] px-8 sm:px-20 py-10 max-w-screen-2xl mx-auto flex-1 w-full'>
      <section className='space-y-6 has-[+section]:mb-10'>
        <H1>Crédits</H1>

        <div>
          <H2>Typographies</H2>

          <p className='font-[350]'>
            <ReferenceLink href='https://uncut.wtf/sans-serif/overused-grotesk/'>
              Overused Grotesk
            </ReferenceLink>{' '}
            par{' '}
            <ReferenceLink href='https://www.instagram.com/randommaerks'>
              RandomMaerks
            </ReferenceLink>
          </p>
        </div>

        <div>
          <H2>Éléments Graphiques</H2>

          <p className='font-[350]'>
            <ReferenceLink href=''>Léonie Nollevalle</ReferenceLink> pour les
            photographies et mockups pour la{' '}
            <ReferenceLink href=''>
              Collection Zoologique de Sorbonne Université
            </ReferenceLink>
          </p>
          <p className='font-[350]'>
            <ReferenceLink href=''>Tukimice</ReferenceLink> pour les modèles 3D
            des skins Minecraft pour{' '}
            <ReferenceLink href=''>QSMP.co</ReferenceLink>
          </p>
        </div>
      </section>

      <section className='space-y-6 has-[+section]:mb-10'>
        <H1>Mentions légales</H1>

        <div>
          <p className='font-[350] has-[+p]:mb-1'>
            Conformément aux dispositions de la loi n°2004-575 du 21 juin 2004
            pour la Confiance en l’économie numérique, il est porté à la
            connaissance des utilisateurs et visiteurs (ci-après
            l&apos;“Utilisateur&quot;), du site{' '}
            <ReferenceLink href='https://www.maelle.works/'>
              maelle.works
            </ReferenceLink>{' '}
            (ci-après le &quot;Site&quot;), les présentes mentions légales.
          </p>
          <p className='font-[350] has-[+p]:mb-1'>
            La navigation sur le Site par l’Utilisateur implique acceptation
            intégrale et sans réserve des présentes mentions légales.
          </p>
        </div>

        <div>
          <H2>01. Edition du site</H2>

          <p className='font-[350] has-[+p]:mb-1'>
            L’édition et la direction de la publication du Site est assurée par
            Maëlle Moisis, auto-entrepreneuse enregistrée sous le numéro SIRET
            851 131 656 00015 (ci-après l&apos;“Editeur”).
          </p>
        </div>

        <div>
          <H2>02. Hébergement</H2>

          <p className='font-[350] has-[+p]:mb-1'>
            Ce site est hébergé par la société Vercel Inc., située 340 S Lemon
            Ave #4133 Walnut, CA 91789, et joignable au (559) 288-7060.
          </p>
        </div>

        <div>
          <H2>03. Contact</H2>

          <p className='font-[350] has-[+p]:mb-1'>
            Pour toute question ou demande, veuillez contacter Maëlle Moisis par
            e-mail à{' '}
            <a
              href='mailto:moisismaelle@gmail.com'
              className='no-underline text-[#4F32FF] dark:text-[#B2FF5D] transition-all duration-150 sm:underline decoration-from-font decoration-wavy underline-offset-4 decoration-[#4F32FF]/0 dark:decoration-[#B2FF5D]/0 hover:decoration-[#4F32FF]/100 dark:hover:decoration-[#B2FF5D]/100'
            >
              moisismaelle@gmail.com
            </a>
            .
          </p>
        </div>
        <div>
          <H2>04. Accès au site</H2>

          <p className='font-[350] has-[+p]:mb-1'>
            Le Site est normalement accessible, à tout moment, à
            l&apos;Utilisateur. Toutefois, l&apos;Editeur pourra, à tout moment,
            suspendre, limiter ou interrompre le Site afin de procéder,
            notamment, à des mises à jour ou des modifications de son contenu.
            L&apos;Editeur ne pourra en aucun cas être tenu responsable des
            conséquences éventuelles de cette indisponibilité sur les activités
            de l&apos;Utilisateur.
          </p>
        </div>
        <div>
          <H2>05. Propriété intellectuelle</H2>

          <p className='font-[350] has-[+p]:mb-1'>
            Le Site ainsi que son contenu (textes, vidéos, images...) sont la
            propriété exclusive de Maëlle Moisis, sauf mentions contraires.
          </p>
          <p className='font-[350] has-[+p]:mb-1'>
            Toute utilisation, reproduction, diffusion, commercialisation,
            modification de toute ou partie du Site, sans autorisation expresse
            de l’Editeur est prohibée et pourra entraîner des actions et
            poursuites judiciaires telles que prévues par la règlementation en
            vigueur.
          </p>
        </div>
        <div>
          <H2>06. Liens externes</H2>

          <p className='font-[350] has-[+p]:mb-1'>
            Le Site peut contenir des liens vers des sites externes. L’éditeur
            du Site ne peut être tenu responsable du contenu de ces sites ni des
            dommages résultant de leur utilisation. L’accès à ces sites externes
            se fait sous la responsabilité de l’utilisateur.
          </p>
        </div>
        <div>
          <H2>07. Droit applicable et juridiction compétente</H2>

          <p className='font-[350] has-[+p]:mb-1'>
            Les présentes mentions légales sont soumises au droit français. En
            cas de litige, les tribunaux français seront compétents.
          </p>
        </div>

        <p className='font-[350] has-[+p]:mb-1'>
          Date de dernière mise à jour : 03/02/2025.
        </p>
      </section>
    </main>
  )
}
