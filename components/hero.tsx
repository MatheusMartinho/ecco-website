'use client'

import { motion } from "framer-motion"
import { AnimatedText } from "./animated-text"
import { useLanguage } from "./language-provider"

export default function Hero() {
  const { t } = useLanguage()

  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 overflow-hidden pt-20">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center w-full max-w-screen-2xl mx-auto">

        {/* Left Image - Small Fashion */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="md:col-span-3 flex justify-start items-center md:items-end h-full order-2 md:order-1"
        >
          <div className="relative w-48 h-64 md:w-72 md:h-[500px] overflow-hidden">
            <motion.img
              initial={{ scale: 1.2 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              src="https://i.imgur.com/6TgcMQ7.png"
              alt={t.hero.leftAlt}
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>
        </motion.div>

        {/* Center Content - Title */}
        <div className="md:col-span-6 flex flex-col items-center justify-center text-center z-10 order-1 md:order-2 mix-blend-difference text-white">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-5xl md:text-8xl lg:text-9xl font-serif tracking-tighter leading-none"
          >
            ALESSANDRA
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-5xl md:text-8xl lg:text-9xl font-serif tracking-tighter leading-none italic"
          >
            SANTOS
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-6 text-xs md:text-sm uppercase tracking-[0.3em] font-light"
          >
            <AnimatedText id="hero-tagline" text={t.hero.tagline} />
          </motion.p>
        </div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
          className="md:col-span-3 flex justify-end items-start h-full order-3"
        >
          <div className="relative w-56 h-56 md:w-80 md:h-[400px] overflow-hidden mt-12 md:mt-0">
            <motion.img
              initial={{ scale: 1.2 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              src="https://i.imgur.com/tt7MaZh.png"
              alt={t.hero.rightAlt}
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
      >
        <span className="text-[10px] uppercase tracking-widest">
          <AnimatedText id="hero-scroll" text={t.hero.scroll} />
        </span>
        <div className="w-[1px] h-12 bg-foreground/20 overflow-hidden">
          <motion.div
            animate={{ y: ["-100%", "100%"] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
            className="w-full h-1/2 bg-foreground"
          />
        </div>
      </motion.div>
    </section>
  )
}
