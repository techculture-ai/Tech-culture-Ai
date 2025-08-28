'use client'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== 'undefined') {
        const currentScrollY = window.scrollY
        
        if (currentScrollY > lastScrollY && currentScrollY > 100) {
          // Scrolling down and past 100px - hide navbar
          setIsVisible(false)
        } else if (currentScrollY < lastScrollY) {
          // Scrolling up - show navbar
          setIsVisible(true)
        }
        
        setLastScrollY(currentScrollY)
      }
    }

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar)
      
      return () => {
        window.removeEventListener('scroll', controlNavbar)
      }
    }
  }, [lastScrollY])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ease-in-out ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
      style={{ backgroundColor: 'rgb(37, 40, 43)' }}
    >
      <div className="max-w-7xl mx-auto px-10">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <div className="w-8 h-8 rounded flex items-center justify-center mr-3" style={{ backgroundColor: 'rgb(255, 99, 51)' }}>
                <svg width="20" height="20" viewBox="0 0 106 25" className="text-white">
                  <text x="5" y="18" fill="white" fontSize="18" fontWeight="bold">N</text>
                </svg>
              </div>
              <span className="text-xl font-semibold text-white">NovaaAi</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-12">
            <Link 
              href="/" 
              className="text-white hover:text-orange-400 transition-colors duration-200 font-medium text-base"
            >
              Home
            </Link>
            <Link 
              href="/services" 
              className="text-white hover:text-orange-400 transition-colors duration-200 font-medium text-base"
            >
              Services
            </Link>
            <Link 
              href="/features" 
              className="text-white hover:text-orange-400 transition-colors duration-200 font-medium text-base"
            >
              Features
            </Link>
            <Link 
              href="/pricing" 
              className="text-white hover:text-orange-400 transition-colors duration-200 font-medium text-base"
            >
              Price
            </Link>
            <Link 
              href="/integrations" 
              className="text-white hover:text-orange-400 transition-colors duration-200 font-medium text-base"
            >
              Integrations
            </Link>
            <Link 
              href="/blog" 
              className="text-white hover:text-orange-400 transition-colors duration-200 font-medium text-base"
            >
              Blog
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center">
            <Link 
              href="/contact"
              className="px-6 py-3 rounded-2xl text-white font-medium transition-all duration-200 hover:opacity-90"
              style={{ 
                background: 'linear-gradient(167deg, rgb(255, 255, 255) 0%, rgb(255, 99, 51) 42%, rgb(255, 99, 51) 100%)',
                color: 'white'
              }}
            >
              Let's Try
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-orange-400 focus:outline-none focus:text-orange-400"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 border-t border-gray-700" style={{ backgroundColor: 'rgb(37, 40, 43)' }}>
              <Link 
                href="/" 
                className="block px-3 py-2 text-white hover:text-orange-400 hover:bg-gray-800 rounded-md font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/services" 
                className="block px-3 py-2 text-white hover:text-orange-400 hover:bg-gray-800 rounded-md font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link 
                href="/features" 
                className="block px-3 py-2 text-white hover:text-orange-400 hover:bg-gray-800 rounded-md font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Features
              </Link>
              <Link 
                href="/pricing" 
                className="block px-3 py-2 text-white hover:text-orange-400 hover:bg-gray-800 rounded-md font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Price
              </Link>
              <Link 
                href="/integrations" 
                className="block px-3 py-2 text-white hover:text-orange-400 hover:bg-gray-800 rounded-md font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Integrations
              </Link>
              <Link 
                href="/blog" 
                className="block px-3 py-2 text-white hover:text-orange-400 hover:bg-gray-800 rounded-md font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </Link>
              <Link 
                href="/contact" 
                className="block mx-3 mt-4 px-6 py-3 rounded-2xl text-center font-medium hover:opacity-90 transition-all duration-200"
                style={{ 
                  background: 'linear-gradient(167deg, rgb(255, 255, 255) 0%, rgb(255, 99, 51) 42%, rgb(255, 99, 51) 100%)',
                  color: 'white'
                }}
                onClick={() => setIsMenuOpen(false)}
              >
                Let's Try
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header