import { motion } from 'framer-motion'
import { Database, Server, MonitorCog, Code2, BarChart3 } from 'lucide-react'
import BackgroundFX from './BackgroundFX'

const items = [
  { icon: BarChart3, title: 'Data Visualization', desc: 'Interactive dashboards for SAR, trajectories and ensemble statistics.' },
  { icon: Database, title: 'Database Back-Ends', desc: 'Schema design and APIs for chemical data, provenance and audit trails.' },
  { icon: Server, title: 'Front-End + Back-End', desc: 'Full-stack web apps for data rooms, review portals and project tracking.' },
  { icon: Code2, title: 'Python & C++', desc: 'Scientific libraries, bindings, pipeline tooling and HPC integration.' },
  { icon: MonitorCog, title: 'Tooling & DevOps', desc: 'CI/CD, containers and reproducible environments for research velocity.' },
]

export default function SoftwareServices() {
  return (
    <section id="services-sw" className="relative py-24 bg-slate-950 border-t border-white/10 overflow-hidden">
      <BackgroundFX variant="code" intensity={2} />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="max-w-3xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Software & Platforms</h2>
          <p className="mt-3 text-slate-300">Engineering to scale insights and collaboration across teams.</p>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map(({ icon: Icon, title, desc }, i) => (
            <motion.div key={title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05, duration: 0.5 }} className="group relative rounded-2xl border border-white/10 bg-slate-900/40 p-6 backdrop-blur-sm">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-cyan-500/0 via-fuchsia-500/0 to-emerald-500/0 opacity-0 group-hover:opacity-20 transition-opacity" />
              <div className="mb-4 inline-flex rounded-xl border border-white/10 bg-white/5 p-3">
                <Icon className="h-6 w-6 text-fuchsia-300" />
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
