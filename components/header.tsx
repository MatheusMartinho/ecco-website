'use client'

import { useState, useEffect } from 'react'
import { motion, useScroll } from 'framer-motion'
import Link from 'next/link'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const { scrollY } = useScroll()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Work', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' }
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
        <nav className="hidden md:flex items-center gap-12">
          {navItems.map((item, index) => (
            <Link key={item.name} href={item.href} passHref>
              <motion.span
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-xs font-medium uppercase tracking-widest hover:text-muted-foreground transition relative group cursor-pointer"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-foreground transition-all duration-300 group-hover:w-full" />
              </motion.span>
            </Link>
          ))}
        </nav>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <button className="text-xs uppercase tracking-widest">Menu</button>
        </div>
      </div>
    </motion.header>
  )
}
