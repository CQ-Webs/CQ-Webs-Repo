"use client"
import { useState, useEffect } from 'react'
import { Nabla } from 'next/font/google'
import Link from 'next/link'

const nabla = Nabla({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400']
})

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  
  // Simple scroll handler
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }
    
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full text-white">
      <nav 
        className={`
          w-full transition-all duration-300 ease-in-out bg-transparent
          ${scrolled ? 'md:h-[50px]' : 'md:h-[200px]'} 
          h-[50px]
          flex items-center px-4 md:px-20 justify-between
        `}
      >
        <div>
          <Link href="/">
          <h2 className={`${nabla.className} ${scrolled ? 'text-2xl' : 'md:text-5xl text-2xl'} transition-all duration-300`}>
              CQ WEBS
            </h2>
          </Link>
        </div>

        {/* Mobile menu button */}
        <button 
          className="md:hidden p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <div className="w-6 h-5 flex flex-col justify-between">
            <span className={`block h-0.5 w-full bg-white transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`block h-0.5 w-full bg-white transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
            <span className={`block h-0.5 w-full bg-white transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </div>
        </button>

        {/* Desktop menu */}
        <div className="hidden md:block">
          <ul className='flex items-center gap-6'>
            <li>
              <Link href="/work" className={` cursor-pointer hover:text-gray-300 transition-all ${scrolled ? 'text-sm' : 'text-lg'} `}>
                Work with us
              </Link>
            </li>
            <li>
              <Link href="/about" className={` cursor-pointer hover:text-gray-300 transition-all ${scrolled ? 'text-sm' : 'text-lg'} `}>
                Who we are
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <button className={`${scrolled ? 'px-4 py-1' : 'px-4 py-2' } bg-transparent cursor-pointer rounded-md border-2 border-white hover:bg-white hover:text-black transition-all duration-300`}>
                  Set up your web
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* Mobile menu dropdown */}
      <div 
        className={`md:hidden bg-black/90 backdrop-blur-sm transition-all duration-300 overflow-hidden ${mobileMenuOpen ? 'max-h-[300px] py-4' : 'max-h-0'}`}
      >
        <ul className='flex flex-col items-center gap-6 px-4'>
          <li className="w-full">
            <Link 
              href="/work" 
              className="block w-full text-center py-3 hover:bg-white/10 rounded-md transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Work with us
            </Link>
          </li>
          <li className="w-full">
            <Link 
              href="/about" 
              className="block w-full text-center py-3 hover:bg-white/10 rounded-md transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Who we are
            </Link>
          </li>
          <li className="w-full">
            <Link 
              href="/contact" 
              className="block w-full"
              onClick={() => setMobileMenuOpen(false)}
            >
              <button className="w-full bg-transparent py-3 rounded-md border-2 border-white hover:bg-white hover:text-black transition-colors">
                Set up your web
              </button>
            </Link>
          </li>
        </ul>
      </div>
    </header>
  )
}

export default Navbar