import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import UseCases from './components/UseCases'
import SocialProof from './components/SocialProof'
import ExperienceSelector from './components/ExperienceSelector'
import Ecosystem from './components/Ecosystem'
import FutureProducts from './components/FutureProducts'
import Security from './components/Security'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'

export default function App() {
  return (
    <div className="min-h-screen bg-white text-dark antialiased">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <UseCases />
        <SocialProof />
        <ExperienceSelector />
        <Ecosystem />
        <FutureProducts />
        <Security />
        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
