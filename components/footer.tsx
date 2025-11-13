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