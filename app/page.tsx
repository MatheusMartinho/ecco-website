import Header from "@/components/header"
import Hero from "@/components/hero"
import Gallery from "@/components/gallery"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Gallery />
      <Footer />
    </main>
  )
}
