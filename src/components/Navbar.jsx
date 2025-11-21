import { useState } from 'react'
import { Menu, X, FlaskConical, Beaker, Atom, Mail } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'Capabilities', href: '#capabilities' },
    { label: 'Process', href: '#process' },
    { label: 'Case Studies', href: '#cases' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <header className="fixed top-0 inset-x-0 z-40 backdrop-blur-xl bg-slate-900/60 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-3 text-white">
            <div className="relative">
              <span className="absolute inset-0 blur-md bg-gradient-to-tr from-fuchsia-500 via-cyan-400 to-emerald-400 opacity-60" />
              <div className="relative z-10 p-2 rounded-lg bg-slate-800/60 border border-white/10">
                <Atom className="w-5 h-5 text-cyan-300" />
              </div>
            </div>
            <span className="font-semibold tracking-tight">Quantum Chem Design</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="text-slate-300 hover:text-white transition-colors text-sm">
                {item.label}
              </a>
            ))}
            <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-fuchsia-500 via-cyan-500 to-emerald-500 px-4 py-2 text-sm font-medium text-white shadow-lg shadow-cyan-500/20">
              <Mail className="w-4 h-4" />
              Get in touch
            </a>
          </nav>

          <button className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-slate-200 hover:bg-white/10" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-slate-900/90">
          <div className="px-4 py-4 space-y-2">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} onClick={() => setOpen(false)} className="block rounded-md px-3 py-2 text-slate-200 hover:bg-white/10">
                {item.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)} className="block rounded-md px-3 py-2 text-white bg-gradient-to-r from-fuchsia-500 via-cyan-500 to-emerald-500">
              Get in touch
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
