export default function Hero() {
  return (
    <section className="pt-28 pb-16 md:pt-36 md:pb-24 px-6 md:px-12">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-0 md:gap-8 items-center min-h-[600px]">
        {/* Left Image - Small Fashion */}
        <div className="self-end md:col-span-3 flex justify-start items-center md:items-start pt-12 md:pt-0">
          <div className="w-48 h-48 md:w-80 md:h-96 bg-muted overflow-hidden flex-shrink-0 border border-foreground/10">
            <img
              src="https://i.imgur.com/6TgcMQ7.png"
              alt="Side profile of model"
              className="w-full h-full object-cover"
            /> 
          </div>
        </div>

        {/* Center Content + Right Image - JUNTOS AGORA */}
        <div className="md:col-span-9 relative flex justify-end items-center md:items-start pt-12 md:pt-0">
          {/* TEXTO SOBREPOSTO */}
          <div className="absolute inset-0 flex items-center justify-start -translate-x-24 z-10 pointer-events-none">
            <h1 className="text-3xl md:text-6xl font-light tracking-wide">
              <span className="text-white">AL</span>
              <span className="text-foreground">ESSANDRA SANTOS</span>
            </h1>
          </div>

          {/* Right Image */}
          <div className="w-96 h-96 md:w-96 md:h-full bg-muted overflow-hidden flex-shrink-0 border border-foreground/10">
            <img
              src="https://i.imgur.com/tt7MaZh.png"
              alt="Imagem"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      <div className="mt-32 md:mt-40 flex flex-col items-center justify-center text-center">
        <p className="text-xs font-medium uppercase tracking-widest text-foreground mb-3">28 Projetos</p>
        <p className="text-xs uppercase tracking-widest text-muted-foreground mb-6">Descubra Mais</p>
        <svg className="w-4 h-4 text-foreground animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}