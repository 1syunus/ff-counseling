import Nav from "@/components/Nav"
import Hero from "@/components/Hero"
import Marquee from "@/components/Marquee"
import Manifesto from "@/components/Manifesto"
import Services from "@/components/Services"
import AddOns from "@/components/Addons"
import About from "@/components/About"
import Testimonials from "@/components/Testimonials"
import CTA from "@/components/CTA"
import Footer from "@/components/Footer"
import RevealObserver from "@/components/RevealObserver"

export default function Home() {
  return (
    <main>
      <RevealObserver />
      <Nav />
      <Hero />
      <Marquee />
      <Manifesto />
      <Services />
      <AddOns />
      <About profileSrc="/images/sohaib.png" />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  )
}