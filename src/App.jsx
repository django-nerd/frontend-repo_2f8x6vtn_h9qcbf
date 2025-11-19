import Navbar from './components/Navbar'
import Hero from './components/Hero'
import FeatureGrid from './components/FeatureGrid'
import WorldShowcase from './components/WorldShowcase'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-[#070112]">
      <Navbar />
      <Hero />
      <FeatureGrid />
      <WorldShowcase />
      <CTA />
      <footer className="py-10 text-center text-white/50 text-sm bg-[#070112] border-t border-white/5">
        <p>Fan‑made concept for GTA VI. Not affiliated with Rockstar Games.</p>
      </footer>
    </div>
  )
}

export default App
