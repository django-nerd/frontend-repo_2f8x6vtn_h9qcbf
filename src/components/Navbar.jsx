import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all ${scrolled ? 'backdrop-blur-md bg-black/40 border-b border-white/10' : 'bg-transparent'}`}>
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="text-white font-black tracking-tight text-xl">
          GTA<span className="text-fuchsia-400">VI</span>
        </a>

        <div className="hidden md:flex items-center gap-8 text-sm">
          <a href="#features" className="text-white/80 hover:text-white">Features</a>
          <a href="#world" className="text-white/80 hover:text-white">World</a>
          <a href="#release" className="text-white/80 hover:text-white">Release</a>
          <a href="#cta" className="rounded-full bg-fuchsia-600/90 hover:bg-fuchsia-500 text-white px-4 py-2 transition-colors">Notify me</a>
        </div>

        <button className="md:hidden text-white" onClick={() => setOpen(v => !v)} aria-label="Toggle menu">
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-black/80 backdrop-blur-lg border-t border-white/10">
          <div className="px-4 py-4 space-y-3">
            <a onClick={() => setOpen(false)} href="#features" className="block text-white/90">Features</a>
            <a onClick={() => setOpen(false)} href="#world" className="block text-white/90">World</a>
            <a onClick={() => setOpen(false)} href="#release" className="block text-white/90">Release</a>
            <a onClick={() => setOpen(false)} href="#cta" className="block rounded-full bg-fuchsia-600/90 hover:bg-fuchsia-500 text-white px-4 py-2 text-center">Notify me</a>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
