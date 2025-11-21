import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ScientificServices from './components/ScientificServices'
import SoftwareServices from './components/SoftwareServices'
import Process from './components/Process'
import ContactForm from './components/ContactForm'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />
      <main>
        <Hero />
        <ScientificServices />
        <SoftwareServices />
        <Process />
        <ContactForm />
        <footer className="py-10 text-center text-slate-400 border-t border-white/10 bg-slate-950/90">
          © {new Date().getFullYear()} Quantum Chem Design — Computational Drug Discovery & Software Engineering
        </footer>
      </main>
    </div>
  )
}

export default App
