import { motion, useScroll, useTransform } from 'framer-motion'
import { Zap, Map, Car, Bot } from 'lucide-react'

function FeatureCard({ icon: Icon, title, description, delay=0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, delay }}
      className="group relative rounded-2xl bg-white/5 border border-white/10 overflow-hidden p-6 backdrop-blur-sm hover:border-fuchsia-400/30 hover:shadow-[0_0_30px_rgba(217,70,239,0.25)] transition"
    >
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-br from-fuchsia-600/10 via-transparent to-transparent" />
      <div className="relative">
        <div className="w-12 h-12 rounded-xl bg-fuchsia-500/20 text-fuchsia-300 flex items-center justify-center mb-4">
          <Icon className="w-6 h-6" />
        </div>
        <h3 className="text-white font-semibold text-lg mb-2">{title}</h3>
        <p className="text-white/70 text-sm leading-relaxed">{description}</p>
      </div>
    </motion.div>
  )
}

function ParallaxHeading() {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 600], [0, -60])
  const opacity = useTransform(scrollY, [0, 300], [1, 0.8])

  return (
    <motion.div style={{ y, opacity }} className="text-center mb-12">
      <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white">A next‑gen world</h2>
      <p className="mt-3 text-white/70 max-w-2xl mx-auto">From bustling neon districts to sun‑drenched beaches, every corner of Vice City feels dynamic and alive.</p>
    </motion.div>
  )
}

function FeatureGrid() {
  return (
    <section id="features" className="relative py-24 bg-gradient-to-b from-[#0a0214] via-[#0b0218] to-[#0a0214]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(217,70,239,0.08),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <ParallaxHeading />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <FeatureCard icon={Zap} title="Next‑gen physics" description="Ultra‑responsive driving, destruction, and crowd systems built for new hardware." />
          <FeatureCard icon={Map} title="Massive Vice City" description="A vast open world with evolving districts, events, and secrets to uncover." delay={0.08} />
          <FeatureCard icon={Car} title="Custom rides" description="Build the ultimate getaway vehicle with deep tuning and neon underglows." delay={0.16} />
          <FeatureCard icon={Bot} title="Smarter AI" description="Crew, cops, and rivals that adapt to your style for new challenges every session." delay={0.24} />
        </div>
      </div>
    </section>
  )
}

export default FeatureGrid
