'use client'

 
import clsx from 'clsx'
 import { useLocation } from 'react-router-dom';
export default function Nav() {
  const location = useLocation()
  const name = location.pathname;
console.log(name)
  const links = [
  
    {
      path: '/',
      text: 'about',
    },
    {
      path: '/skills',
      text: 'skills',
    },
      {
      path: '/projects',
      text: 'projects',
    },
  ]

  return (
    <div className="  top-5 left-0 z-50 w-full">
      <nav className="text-main-foreground border-border shadow-none rounded-base bg-main font-mono w450:gap-4 mx-auto flex w-max gap-5 border-2 p-2.5 px-5 text-sm sm:text-base">
        {links.map((link) => {
          return (
            <a
              key={link.path}
              className={clsx(
                'hover:underline active:underline rounded-base   px-2 py-1 transition-colors',
                name==link.path ? "bg-black text-white":""
              )}
              href={link.path}
            >
              {link.text}
            </a>
          )
        })}
        
      </nav>
    </div>
  )
}