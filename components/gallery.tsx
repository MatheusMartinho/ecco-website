import Image from 'next/image'

export default function Gallery() {
  const images = [
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
    'https://i.imgur.com/UFd1aqT.png',
    // ... resto das imagens
  ]

  return (
    <section className="py-16 md:py-24 px-6 md:px-12 border-t border-b border-border">
      <div className="text-center mb-12 md:mb-16">
        <h2 className="text-xs uppercase tracking-widest text-muted-foreground mb-2">Editorial Works</h2>
      </div>

      <div className="grid grid-cols-3 md:grid-cols-7 gap-2 md:gap-3">
        {images.map((imageUrl, index) => (
          <div 
            key={index} 
            className="aspect-square bg-muted overflow-hidden hover:opacity-80 transition cursor-pointer relative"
          >
            <Image
              src={imageUrl}
              alt={`Projeto ${index + 1}`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 33vw, 14vw"
            />
          </div>
        ))}
      </div>
    </section>
  )
}