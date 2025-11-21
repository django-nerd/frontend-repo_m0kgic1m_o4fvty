import { motion } from 'framer-motion'
import { Atom, Beaker, FlaskConical, Microscope, Sigma, LineChart, Brain } from 'lucide-react'
import BackgroundFX from './BackgroundFX'

const items = [
  { icon: Beaker, title: 'Molecular Docking', desc: 'Physics-informed docking workflows with consensus scoring and pose refinement.' },
  { icon: Microscope, title: 'Molecular Dynamics', desc: 'Micro- to millisecond MD, enhanced sampling and stability analysis with RMSD/RMSF.' },
  { icon: Atom, title: 'QM/MM', desc: 'Hybrid quantum mechanics/molecular mechanics for active site accuracy and reactivity.' },
  { icon: Sigma, title: 'Binding Free Energy', desc: 'FEP/TI/PMF pipelines for ΔG estimates with error quantification and convergence diagnostics.' },
  { icon: LineChart, title: 'QSAR', desc: 'Classical and deep learning QSAR models with SHAP-based interpretability and AD.' },
  { icon: FlaskConical, title: 'ADMET', desc: 'In silico PK/PD, tox and developability profiling across multiple chemotypes.' },
  { icon: Brain, title: 'Scientific Consulting', desc: 'Target assessment, data strategy, and program design from hit ID to lead opt.' },
]

export default function ScientificServices() {
  return (
    <section id="services-sci" className="relative py-24 bg-slate-950 border-t border-white/10 overflow-hidden">
      <BackgroundFX variant="molecules" intensity={2} />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="max-w-3xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Computational Drug Discovery</h2>
          <p className="mt-3 text-slate-300">Rigorous, explainable modeling to guide synthesis and prioritization.</p>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map(({ icon: Icon, title, desc }, i) => (
            <motion.div key={title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05, duration: 0.5 }} className="group relative rounded-2xl border border-white/10 bg-slate-900/40 p-6 backdrop-blur-sm">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-cyan-500/0 via-fuchsia-500/0 to-emerald-500/0 opacity-0 group-hover:opacity-20 transition-opacity" />
              <div className="mb-4 inline-flex rounded-xl border border-white/10 bg-white/5 p-3">
                <Icon className="h-6 w-6 text-cyan-300" />
              </div>
              <h3 className="text-white font-semibold tracking-tight">{title}</h3>
              <p className="mt-2 text-sm text-slate-300/90">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
