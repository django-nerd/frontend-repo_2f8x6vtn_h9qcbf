import { motion } from 'framer-motion'

function CTA() {
  return (
    <section id="cta" className="relative py-24 bg-gradient-to-b from-[#090114] to-[#070112]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(168,85,247,0.12),transparent_60%)]" />
      <div className="relative mx-auto max-w-3xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm p-8 text-center shadow-[0_0_40px_rgba(217,70,239,0.2)]"
        >
          <h3 className="text-3xl sm:text-4xl font-black text-white tracking-tight">Be first to play</h3>
          <p className="mt-3 text-white/70">Join the early access list and get launch updates, exclusive looks, and pre‑order news.</p>
          <form onSubmit={(e) => e.preventDefault()} className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
            <input type="email" required placeholder="Enter your email" className="w-full sm:w-96 rounded-full bg-black/40 border border-white/15 px-5 py-3 text-white placeholder-white/40 outline-none focus:border-fuchsia-400/60" />
            <button className="rounded-full bg-fuchsia-600 hover:bg-fuchsia-500 text-white px-6 py-3 font-semibold">Notify me</button>
          </form>
          <p className="mt-3 text-xs text-white/50">By signing up you agree to receive emails about Grand Theft Auto VI.</p>
        </motion.div>
      </div>
    </section>
  )
}

export default CTA
