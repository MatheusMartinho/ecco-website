'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLanguage } from './language-provider'
import { AnimatedText } from './animated-text'

export default function Gallery() {
  const { t } = useLanguage()
  const imageUrls = [
    'https://i.imgur.com/EI4VFNQ.png',
    'https://i.imgur.com/ktkqL7I.png',
    'https://i.imgur.com/bScEkDq.png',
    'https://i.imgur.com/8SdoFgX.png',
    'https://i.imgur.com/EI4VFNQ.png',
    'https://i.imgur.com/YyjqfYl.png',
    'https://i.imgur.com/4sgYnY5.png',
    'https://i.imgur.com/CLmwQlS.png',
    'https://i.imgur.com/NeXNUz9.png',
    'https://i.imgur.com/6TgcMQ7.png',
    'https://i.imgur.com/2DD5vMH.png',
    'https://i.imgur.com/aekzPSj.png',
    'https://i.imgur.com/ZgpzLiw.png',
    'https://i.imgur.com/kIWryJd.png',
    'https://i.imgur.com/atfAXYE.png',
    'https://i.imgur.com/ODeVWi7.png',
    'https://i.imgur.com/6adFMs3.png',
    'https://i.imgur.com/9XJbvLu.png',
    'https://i.imgur.com/tt7MaZh.png',
    'https://i.imgur.com/4A5dbAE.png',
    'https://i.imgur.com/vzPKDiT.png',
    'https://i.imgur.com/0DRWtSq.png',
    'https://i.imgur.com/kRMZkFy.png',
    'https://i.imgur.com/W98iA7K.png',
    'https://i.imgur.com/tkFPYcr.png',
    'https://i.imgur.com/UFd1aqT.png',
    'https://i.imgur.com/UFd1aqT.png',
    'https://i.imgur.com/UFd1aqT.png'
  ]
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const openImage = (index: number) => {
    setSelectedImage(index)
  }

  const closeImage = () => {
    setSelectedImage(null)
  }

  const nextImage = () => {
    if (selectedImage !== null && selectedImage < imageUrls.length - 1) {
      setSelectedImage(selectedImage + 1)
    }
  }

  const prevImage = () => {
    if (selectedImage !== null && selectedImage > 0) {
      setSelectedImage(selectedImage - 1)
    }
  }

  // Navegação por teclado
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (selectedImage === null) return

      if (e.key === 'ArrowRight') {
        nextImage()
      } else if (e.key === 'ArrowLeft') {
        prevImage()
      } else if (e.key === 'Escape') {
        closeImage()
      }
    }

    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [selectedImage])

  // Handle click outside the modal
  const handleOutsideClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      closeImage()
    }
  }

  return (
    <section className="py-16 md:py-24 px-6 md:px-12 border-t border-border bg-background">
      {/* Section Header */}
      <div className="text-center mb-12 md:mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-xs uppercase tracking-widest text-muted-foreground mb-2"
        >
          <AnimatedText id="gallery-title" text={t.gallery.title} />
        </motion.h2>
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {imageUrls.map((url, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index % 4 * 0.1 }}
            className="aspect-[3/4] bg-muted overflow-hidden cursor-pointer group relative"
            onClick={() => openImage(index)}
          >
            <motion.img
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
              src={url}
              alt={`${t.gallery.altPrefix} ${index + 1}`}
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
            />
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.div>
        ))}
      </div>

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-background/95 backdrop-blur-xl flex items-center justify-center"
            onClick={handleOutsideClick}
          >
            {/* Botão Fechar - Topo Direito */}
            <button
              onClick={closeImage}
              className="absolute top-6 right-6 text-foreground hover:text-muted-foreground transition z-50"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Seta Esquerda */}
            {selectedImage > 0 && (
              <button
                onClick={(e) => { e.stopPropagation(); prevImage(); }}
                className="absolute left-6 top-1/2 -translate-y-1/2 text-foreground hover:text-muted-foreground transition z-50 p-4"
              >
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
            )}

            {/* Seta Direita */}
            {selectedImage < imageUrls.length - 1 && (
              <button
                onClick={(e) => { e.stopPropagation(); nextImage(); }}
                className="absolute right-6 top-1/2 -translate-y-1/2 text-foreground hover:text-muted-foreground transition z-50 p-4"
              >
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            )}

            {/* Imagem Centralizada */}
            <motion.div
              key={selectedImage}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="w-full h-full flex items-center justify-center p-8 md:p-12 lg:p-24 pointer-events-none"
            >
              <img
                src={imageUrls[selectedImage]}
                alt={`Portfolio work ${selectedImage + 1}`}
                className="max-w-full max-h-full object-contain shadow-2xl"
              />
            </motion.div>

            {/* Contador - Embaixo */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-foreground/60 text-xs tracking-widest">
              {selectedImage + 1} — {imageUrls.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
