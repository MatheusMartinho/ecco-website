export default function Footer() {
  return (
    <footer className="pt-16 pb-0 bg-primary text-primary-foreground">
      <div className="px-6 md:px-12 pt-20 pb-0">
        {/* Top Section: 3 Columns */}
        <div className="grid grid-cols-3 gap-8 mb-20">
          <div>
            <p className="text-sm uppercase tracking-widest font-semibold">Alessandra M Santos</p>
          </div>
          <div className="text-center">
            <p className="text-sm uppercase tracking-widest font-semibold">Couture Production</p>
          </div>
          <div className="text-right">
            <p className="text-sm uppercase tracking-widest font-semibold">São Paulo, Brasil</p>
          </div>
        </div>

{/* Social Links Section */}
<div className="grid grid-cols-3 gap-8 mb-32">
  <div>
    <a 
      href="mailto:alessandra@exemplo.com" 
      className="text-sm uppercase tracking-widest font-semibold hover:text-primary-foreground/80 transition"
    >
      Email
    </a>
  </div>
  <div className="text-center">
    <a 
      href="https://www.instagram.com/ecco_arte_que_ressoa/?next=%2F" 
      target="_blank" 
      rel="noopener noreferrer"
      className="text-sm uppercase tracking-widest font-semibold hover:text-primary-foreground/80 transition"
    >
      Insta
    </a>
  </div>
  <div className="text-right">
    <a 
      href="https://br.linkedin.com/in/alessandra-santos-b6866022" 
      target="_blank" 
      rel="noopener noreferrer"
      className="text-sm uppercase tracking-widest font-semibold hover:text-primary-foreground/80 transition"
    >
      Linkedin
    </a>
  </div>
</div>

        {/* Made By Section */}
        <div className="text-center mb-8">
          <p className="text-sm uppercase tracking-widest font-semibold">Made by</p>
        </div>

        {/* Large A.S Logo */}
        <div className="flex items-center justify-between text-[25rem] font-bold tracking-tighter leading-none px-12 pb-2">
          <span>A</span>
          <span className="w-4 h-4 bg-primary-foreground rounded-full" />
          <span>S</span>
        </div>
      </div>
    </footer>
  )
}