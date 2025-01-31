import Image from 'next/image'

// type ProjectProps = {

// }

type ProjectTagProps = {
  name: string
}

function ProjectTag({ name }: ProjectTagProps) {
  return (
    <span className='text-[#838383] text-base/none px-2 py-1.5 rounded-sm border border-[#DBDBDB]'>
      {name}
    </span>
  )
}

export function Project() {
  return (
    <article className='font-[350]'>
      <div>
        <div className='text-[#161616] text-base mb-4 inline-flex items-center gap-2'>
          <Image
            src='/images/projects/sorbonne.png'
            alt='Université Sorbonne Paris Nord'
            width={512}
            height={512}
            className='rounded-sm size-5'
            aria-hidden
          />
          <div>
            <span>Université Sorbonne Paris Nord</span>
            <span> - </span>
            <span>2024</span>
          </div>
        </div>
        <div>
          <h2 className='text-4.5xl/none text-black mb-2'>
            Collection de Zoologie de Sorbonne Université
          </h2>
          <span className='text-[#8E8E8E] text-2xl/none'>
            Allier transmission et réflexion autour de l&apos;anthropocène
          </span>
        </div>
      </div>

      <div className='inline-flex gap-2 flex-wrap mt-6'>
        <ProjectTag name='User Research' />
        <ProjectTag name='UX' />
      </div>
    </article>
  )
}
