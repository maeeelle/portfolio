'use client'

export function LockIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='28'
      height='28'
      fill='none'
      viewBox='0 0 28 28'
      className={className}
      onAnimationStart={(event) => {
        event.currentTarget.classList.add('group-focus:text-red-500')
      }}
      onAnimationEnd={(event) => {
        event.currentTarget.classList.remove('group-focus:text-red-500')
      }}
    >
      <path
        fill='currentColor'
        d='M4.667 25.667V9.333h3.5V7c0-1.614.569-2.99 1.706-4.126C11.011 1.736 12.387 1.167 14 1.167c1.613-.001 2.989.568 4.128 1.707C19.266 4.012 19.835 5.388 19.833 7v2.333h3.5v16.334H4.667ZM7 23.333h14V11.667H7v11.666Zm7-3.5a2.25 2.25 0 0 0 1.649-.684 2.241 2.241 0 0 0 .684-1.649 2.25 2.25 0 0 0-.684-1.647A2.255 2.255 0 0 0 14 15.167a2.227 2.227 0 0 0-1.647.686 2.27 2.27 0 0 0-.686 1.647c-.003.64.226 1.189.686 1.648.46.46 1.008.689 1.647.685Zm-3.5-10.5h7V7c0-.972-.34-1.799-1.02-2.48-.681-.68-1.508-1.02-2.48-1.02s-1.799.34-2.48 1.02c-.68.681-1.02 1.508-1.02 2.48v2.333Z'
      />
    </svg>
  )
}
