import { motion } from 'framer-motion'

function Screenshot({ src, caption, i }) {
  return (
    <motion.figure
      initial={{ opacity: 0, y: 40, rotate: i % 2 === 0 ? -2 : 2 }}
      whileInView={{ opacity: 1, y: 0, rotate: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.7, delay: 0.05 * i }}
      className="relative rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm"
    >
      <div className="aspect-[16/9] bg-gradient-to-br from-fuchsia-500/10 to-blue-500/10" />
      <figcaption className="p-4 text-white/70 text-sm">{caption}</figcaption>
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-white/5 to-transparent" />
    </motion.figure>
  )
}

function WorldShowcase() {
  const shots = [
    { caption: 'Neon downtown at midnight' },
    { caption: 'Beachfront sunrise chases' },
    { caption: 'Rain‑slick side streets' },
  ]

  return (
    <section id="world" className="relative py-24 bg-[#090114]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_10%,rgba(59,130,246,0.12),transparent_30%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white">Welcome to Vice City</h2>
          <p className="mt-3 text-white/70 max-w-2xl mx-auto">A vibrant, reactive sandbox designed for blockbuster moments and intimate stories alike.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {shots.map((s, i) => (
            <Screenshot key={i} i={i} caption={s.caption} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default WorldShowcase
