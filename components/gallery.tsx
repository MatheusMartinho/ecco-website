'use client'

import { useState, useEffect } from 'react'

export default function Gallery() {
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
    <section className="py-16 md:py-24 px-6 md:px-12 border-t border-b border-border">
      {/* Section Header */}
      <div className="text-center mb-12 md:mb-16">
        <h2 className="text-xs uppercase tracking-widest text-muted-foreground mb-2">Editorial Works</h2>
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-3 md:grid-cols-7 gap-2 md:gap-3">
        {imageUrls.map((url, index) => (
          <div key={index} className="aspect-square bg-muted overflow-hidden hover:opacity-80 transition cursor-pointer" onClick={() => openImage(index)}>
            <img
              src={url}
              alt={`Portfolio work ${index + 1}`}
              className="w-full h-full object-cover"
            /> 
          </div>
        ))}
      </div>

      {/* Image Modal */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95"
          onClick={handleOutsideClick}
        >
          {/* Botão Fechar - Topo Direito */}
          <button
            onClick={closeImage}
            className="absolute top-6 right-6 bg-white/10 hover:bg-white/20 rounded-full p-3 text-white transition z-50"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>

          {/* Seta Esquerda */}
          {selectedImage > 0 && (
            <button
              onClick={prevImage}
              className="fixed left-6 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 rounded-full p-4 text-white transition z-50 backdrop-blur-sm"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7"/>
              </svg>
            </button>
          )}

          {/* Seta Direita */}
          {selectedImage < imageUrls.length - 1 && (
            <button
              onClick={nextImage}
              className="fixed right-6 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 rounded-full p-4 text-white transition z-50 backdrop-blur-sm"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7"/>
              </svg>
            </button>
          )}

          {/* Imagem Centralizada */}
          <div className="w-full h-full flex items-center justify-center p-8 md:p-12 lg:p-16">
            <img
              src={imageUrls[selectedImage]}
              alt={`Portfolio work ${selectedImage + 1}`}
              className="max-w-full max-h-full object-contain"
            /> 
          </div>

          {/* Contador - Embaixo */}
          <div className="fixed bottom-8 left-1/2 -translate-x-1/2 bg-white/10 px-6 py-2 rounded-full z-50">
            <p className="text-white text-sm tracking-wider">
              {selectedImage + 1} / {imageUrls.length}
            </p>
          </div>
        </div>
      )}
    </section>
  )
}