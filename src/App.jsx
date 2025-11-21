import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Capabilities from './components/Capabilities'
import Process from './components/Process'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />
      <main>
        <Hero />
        <Capabilities />
        <Process />
        <CTA />
        <footer className="py-10 text-center text-slate-400 border-t border-white/10 bg-slate-950/90">
          © {new Date().getFullYear()} Quantum Chem Design — Computational Chemistry & Drug Design Services
        </footer>
      </main>
    </div>
  )
}

export default App
