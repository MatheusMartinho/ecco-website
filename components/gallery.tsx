export default function Gallery() {
  const images = Array.from({ length: 21 }, (_, i) => i + 1)

  return (
    <section className="py-16 md:py-24 px-6 md:px-12 border-t border-b border-border">
      {/* Section Header */}
      <div className="text-center mb-12 md:mb-16">
        <h2 className="text-xs uppercase tracking-widest text-muted-foreground mb-2">Editorial Works</h2>
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-3 md:grid-cols-7 gap-2 md:gap-3">
        {images.map((num) => (
          <div key={num} className="aspect-square bg-muted overflow-hidden hover:opacity-80 transition cursor-pointer">
            {/* Imagem removida - substitua pela sua própria galeria de imagens */}
          </div>
        ))}
      </div>
    </section>
  )
}