'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { useLanguage } from './language-provider'
import { AnimatedText } from './animated-text'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const { t, language, setLanguage } = useLanguage()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { id: 'work', label: t.nav.work, href: '/' },
    { id: 'about', label: t.nav.about, href: '/about' },
    { id: 'contact', label: t.nav.contact, href: '/contact' }
  ]

  return (
    <motion.header
      style={{
        backgroundColor: isScrolled ? "hsl(var(--background) / 0.8)" : "transparent",
        borderBottomColor: isScrolled ? "hsl(var(--border) / 0.5)" : "transparent",
        backdropFilter: isScrolled ? "blur(12px)" : "none"
      }}
      className="fixed top-0 left-0 right-0 z-50 transition-colors duration-300 border-b"
    >
      <div className="px-6 md:px-12 py-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-sm font-bold tracking-widest text-foreground font-serif cursor-pointer"
          >
            A.S
          </motion.div>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <Link key={item.id} href={item.href} passHref>
              <motion.span
                initial={false}
                className="text-xs font-medium uppercase tracking-widest hover:text-muted-foreground transition relative group cursor-pointer overflow-hidden"
              >
                <AnimatedText id={`nav-${item.id}`} text={item.label} className="block" />
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-foreground transition-all duration-300 group-hover:w-full" />
              </motion.span>
            </Link>
          ))}
          <div className="flex items-center gap-2 border border-border rounded-full px-3 py-1 text-[10px] uppercase tracking-[0.2em]">
            <button
              onClick={() => setLanguage('pt')}
              className={`transition-colors ${language === 'pt' ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'}`}
              aria-label="Selecionar português"
            >
              PT
            </button>
            <span className="text-muted-foreground">/</span>
            <button
              onClick={() => setLanguage('en')}
              className={`transition-colors ${language === 'en' ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'}`}
              aria-label="Switch to English"
            >
              EN
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <div className="md:hidden flex items-center gap-4">
          <div className="flex items-center gap-1 text-[10px] uppercase tracking-[0.2em]">
            <button
              onClick={() => setLanguage('pt')}
              className={`transition-colors ${language === 'pt' ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'}`}
              aria-label="Selecionar português"
            >
              PT
            </button>
            <span className="text-muted-foreground">/</span>
            <button
              onClick={() => setLanguage('en')}
              className={`transition-colors ${language === 'en' ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'}`}
              aria-label="Switch to English"
            >
              EN
            </button>
          </div>
          <button className="text-xs uppercase tracking-widest">Menu</button>
        </div>
      </div>
    </motion.header>
  )
}
