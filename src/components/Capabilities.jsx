import { FlaskConical, Atom, Cpu, Microscope, LineChart, Database } from 'lucide-react'

const items = [
  {
    icon: Atom,
    title: 'Molecular Modeling',
    desc: 'High-fidelity QM/MM, docking, FEP and molecular dynamics for structure-based design.'
  },
  {
    icon: Cpu,
    title: 'AI/ML Screening',
    desc: 'Custom property prediction, de novo design and multi-objective optimization.'
  },
  {
    icon: Microscope,
    title: 'Assay-Guided Iteration',
    desc: 'Tight loop with your biology data to prioritize synthesis-ready candidates.'
  },
  {
    icon: FlaskConical,
    title: 'ADMET & Liabilities',
    desc: 'In silico PK/PD, toxicity risk and developability profiles across chemotypes.'
  },
  {
    icon: LineChart,
    title: 'Strategy & Roadmapping',
    desc: 'Program design from target assessment to IND, with transparent milestones.'
  },
  {
    icon: Database,
    title: 'Secure Data Room',
    desc: 'Encrypted knowledge base and reproducible pipelines for your project.'
  }
]

export default function Capabilities() {
  return (
    <section id="capabilities" className="relative py-24 bg-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(168,85,247,0.15),transparent_35%),radial-gradient(circle_at_80%_20%,rgba(34,211,238,0.15),transparent_35%),radial-gradient(circle_at_50%_80%,rgba(16,185,129,0.15),transparent_35%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Capabilities</h2>
          <p className="mt-3 text-slate-300">End-to-end services with scientific rigor and production-grade engineering.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-6 hover:border-cyan-400/40 transition-colors">
              <div className="mb-4 inline-flex rounded-xl border border-white/10 bg-white/5 p-3">
                <Icon className="h-6 w-6 text-cyan-300" />
              </div>
              <h3 className="text-white font-semibold tracking-tight">{title}</h3>
              <p className="mt-2 text-sm text-slate-300/90">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
