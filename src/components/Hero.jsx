import Spline from '@splinetool/react-spline'

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0a0214]">
      {/* Neon gradient backdrop */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(168,85,247,0.15),transparent_40%),radial-gradient(circle_at_80%_30%,rgba(236,72,153,0.1),transparent_40%),radial-gradient(circle_at_50%_80%,rgba(59,130,246,0.12),transparent_40%)] pointer-events-none" />

      {/* 3D Spline scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/Y7DK6OtMHusdC345/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Content overlay */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-24 pb-16 md:pt-32 lg:pt-40">
        <div className="max-w-3xl">
          <p className="uppercase tracking-[0.35em] text-fuchsia-300/80 text-xs mb-4">Rockstar presents</p>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-white drop-shadow-[0_0_30px_rgba(217,70,239,0.35)]">
            Grand Theft Auto VI
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-white/80 max-w-2xl">
            Step into the neon-soaked streets of Vice City. Bigger, bolder, and more alive than ever. Gear up for a new era of heists, chaos, and untold stories.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#cta" className="rounded-full bg-fuchsia-600 hover:bg-fuchsia-500 text-white px-6 py-3 font-semibold shadow-[0_0_20px_rgba(217,70,239,0.35)] transition-colors">Get launch alerts</a>
            <a href="#trailer" className="rounded-full border border-white/20 text-white/90 hover:text-white hover:border-white/40 px-6 py-3 font-semibold">Watch trailer</a>
          </div>
        </div>
      </div>

      {/* subtle bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#0a0214] to-transparent pointer-events-none" />
    </section>
  )
}

export default Hero
