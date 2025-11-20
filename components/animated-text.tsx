'use client'

import { AnimatePresence, motion } from "framer-motion"
import { useLanguage } from "./language-provider"

type AnimatedTextProps = {
  id: string
  text: string
  className?: string
}

export function AnimatedText({ id, text, className }: AnimatedTextProps) {
  const { language } = useLanguage()

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.span
        key={`${id}-${language}`}
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -6 }}
        transition={{ duration: 0.18, ease: "easeOut" }}
        className={className}
      >
        {text}
      </motion.span>
    </AnimatePresence>
  )
}
