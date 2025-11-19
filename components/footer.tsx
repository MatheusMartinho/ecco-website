'use client'

import { motion } from "framer-motion"

export default function Footer() {
  return (
    <footer className="pt-16 pb-0 bg-primary text-primary-foreground overflow-hidden">
      <div className="px-6 md:px-12 pt-20 pb-0">
        {/* Top Section: 3 Columns */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
        >
          <div>
            <p className="text-xs uppercase tracking-[0.2em] font-light opacity-80">Alessandra M Santos</p>
          </div>
          <div className="md:text-center">
            <p className="text-xs uppercase tracking-[0.2em] font-light opacity-80">Couture Production</p>
          </div>
          <div className="md:text-right">
            <p className="text-xs uppercase tracking-[0.2em] font-light opacity-80">São Paulo, Brasil</p>
          </div>
        </motion.div>

        {/* Social Links Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32"
        >
          <div>
            <a
              href="mailto:alessandra@exemplo.com"
              className="text-xs uppercase tracking-[0.2em] font-medium hover:text-accent transition-colors"
            >
              Email
            </a>
          </div>
          <div className="md:text-center">
            <a
              href="https://www.instagram.com/ecco_arte_que_ressoa/?next=%2F"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs uppercase tracking-[0.2em] font-medium hover:text-accent transition-colors"
            >
              Instagram
            </a>
          </div>
          <div className="md:text-right">
            <a
              href="https://br.linkedin.com/in/alessandra-santos-b6866022"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs uppercase tracking-[0.2em] font-medium hover:text-accent transition-colors"
            >
              Linkedin
            </a>
          </div>
        </motion.div>

        {/* Made By Section */}
        <div className="text-center mb-8">
          <p className="text-[10px] uppercase tracking-widest opacity-50">Made by Matheus Moura Martinho</p>
        </div>

        {/* Large A.S Logo */}
        <motion.div
          initial={{ y: "100%" }}
          whileInView={{ y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "circOut" }}
          className="flex items-center justify-between text-[15vw] md:text-[25rem] font-serif font-bold tracking-tighter leading-none px-4 md:px-12 pb-0 select-none opacity-20 md:opacity-100"
        >
          <span>A</span>
          <span className="w-4 h-4 md:w-12 md:h-12 bg-primary-foreground rounded-full mb-8 md:mb-24" />
          <span>S</span>
        </motion.div>
      </div>
    </footer>
  )
}