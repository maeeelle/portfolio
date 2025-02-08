import { ReferenceLink } from '../../(projects)/_components/ReferenceLink'
import { getTranslations } from 'next-intl/server'

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

export default async function LegalPage() {
  const t = await getTranslations('legal')

  return (
    <main className='text-[#282828] dark:text-[#D3D3D3] tracking-[-.02em] px-8 sm:px-20 py-10 max-w-(--breakpoint-2xl) mx-auto flex-1 w-full'>
      <section className='space-y-6 has-[+section]:mb-10'>
        <H1>{t('credits.title')}</H1>

        <div>
          <H2>{t('credits.typography.title')}</H2>

          <p className='font-[350]'>
            <ReferenceLink href='https://uncut.wtf/sans-serif/overused-grotesk/'>
              {t('credits.typography.font')}
            </ReferenceLink>{' '}
            {t('credits.typography.by')}{' '}
            <ReferenceLink href='https://www.instagram.com/randommaerks'>
              {t('credits.typography.author')}
            </ReferenceLink>
          </p>
        </div>

        <div>
          <H2>{t('credits.graphics.title')}</H2>

          <p className='font-[350]'>
            {t.rich('credits.graphics.first', {
              name: (chunk) => (
                <ReferenceLink href='https://www.linkedin.com/in/l%C3%A9onie-nollevalle-9310731b0'>
                  {chunk}
                </ReferenceLink>
              ),
              project: (chunk) => (
                <ReferenceLink href='/collection-zoologie-sorbonne'>
                  {chunk}
                </ReferenceLink>
              ),
            })}
          </p>
          <p className='font-[350]'>
            {t.rich('credits.graphics.second', {
              name: (chunk) => (
                <ReferenceLink href='https://x.com/TukimiceTK'>
                  {chunk}
                </ReferenceLink>
              ),
              project: (chunk) => (
                <ReferenceLink href='/qsmp-co'>{chunk}</ReferenceLink>
              ),
            })}
          </p>
        </div>
      </section>

      <section className='space-y-6 has-[+section]:mb-10'>
        <H1>{t('legal.title')}</H1>

        <div>
          <p className='font-[350] has-[+p]:mb-1'>
            {t.rich('legal.intro.first', {
              site: (chunk) => <ReferenceLink href='/'>{chunk}</ReferenceLink>,
            })}
          </p>
          <p className='font-[350] has-[+p]:mb-1'>{t('legal.intro.second')}</p>
        </div>

        <div>
          <H2>{t('legal.publication.title')}</H2>
          <p className='font-[350] has-[+p]:mb-1'>
            {t('legal.publication.text')}
          </p>
        </div>

        <div>
          <H2>{t('legal.hosting.title')}</H2>
          <p className='font-[350] has-[+p]:mb-1'>{t('legal.hosting.text')}</p>
        </div>

        <div>
          <H2>{t('legal.contact.title')}</H2>
          <p className='font-[350] has-[+p]:mb-1'>
            {t.rich('legal.contact.text', {
              email: (chunk) => (
                <a
                  href='mailto:moisismaelle@gmail.com'
                  className='no-underline text-[#4F32FF] dark:text-[#B2FF5D] transition-all duration-150 sm:underline decoration-from-font decoration-wavy underline-offset-4 decoration-[#4F32FF]/0 dark:decoration-[#B2FF5D]/0 hover:decoration-[#4F32FF]/100 dark:hover:decoration-[#B2FF5D]/100'
                >
                  {chunk}
                </a>
              ),
            })}
          </p>
        </div>

        <div>
          <H2>{t('legal.access.title')}</H2>
          <p className='font-[350] has-[+p]:mb-1'>{t('legal.access.text')}</p>
        </div>

        <div>
          <H2>{t('legal.intellectual_property.title')}</H2>
          <p className='font-[350] has-[+p]:mb-1'>
            {t('legal.intellectual_property.first')}
          </p>
          <p className='font-[350] has-[+p]:mb-1'>
            {t('legal.intellectual_property.second')}
          </p>
        </div>

        <div>
          <H2>{t('legal.external_links.title')}</H2>
          <p className='font-[350] has-[+p]:mb-1'>
            {t('legal.external_links.text')}
          </p>
        </div>

        <div>
          <H2>{t('legal.jurisdiction.title')}</H2>
          <p className='font-[350] has-[+p]:mb-1'>
            {t('legal.jurisdiction.text')}
          </p>
        </div>

        <p className='font-[350] has-[+p]:mb-1'>{t('legal.last_updated')}</p>
      </section>
    </main>
  )
}
