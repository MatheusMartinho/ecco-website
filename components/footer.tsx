export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="px-6 md:px-12 py-20">
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
            <p className="text-sm uppercase tracking-widest font-semibold">Email</p>
          </div>
          <div className="text-center">
            <p className="text-sm uppercase tracking-widest font-semibold">Insta</p>
          </div>
          <div className="text-right">
            <p className="text-sm uppercase tracking-widest font-semibold">Linkedin</p>
          </div>
        </div>

        {/* Made By Section */}
        <div className="text-center mb-20">
          <p className="text-sm uppercase tracking-widest font-semibold">Feito por</p>
        </div>

        {/* Large A.D Logo */}
        <div className="flex items-center justify-center gap-6 text-9xl font-bold tracking-tighter">
          <span>A</span>
          <span className="w-4 h-4 bg-primary-foreground rounded-full" />
          <span>S</span>
        </div>
      </div>
    </footer>
  )
}
