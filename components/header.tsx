export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background">
      <div className="px-6 md:px-12 py-8 flex items-center justify-between border-b border-border">
        {/* Logo */}
        <div className="text-xs font-semibold tracking-wide text-foreground">A.S</div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-12">
          <a href="#" className="text-xs font-medium uppercase tracking-widest hover:text-muted-foreground transition">
            Work
          </a>
          <a href="#" className="text-xs font-medium uppercase tracking-widest hover:text-muted-foreground transition">
            About
          </a>
          <a href="#" className="text-xs font-medium uppercase tracking-widest hover:text-muted-foreground transition">
            Contact
          </a>
        </nav>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <button className="text-xs uppercase tracking-widest">Menu</button>
        </div>
      </div>
    </header>
  )
}
