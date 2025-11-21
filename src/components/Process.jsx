export default function Process() {
  const steps = [
    { k: '01', t: 'Discovery Sprint', d: 'Clarify target biology, data assets and decision criteria. Define success metrics.' },
    { k: '02', t: 'Model Build', d: 'Curate datasets, build physics and ML models, set up reproducible pipelines.' },
    { k: '03', t: 'Design Loop', d: 'Generate, screen and prioritize candidates with multi-parameter optimization.' },
    { k: '04', t: 'Validation', d: 'Guide synthesis and assays; integrate readouts to refine models and selection.' },
  ]

  return (
    <section id="process" className="relative py-24 bg-slate-950/90 border-t border-white/10">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(2,6,23,0)_0%,rgba(2,6,23,0.6)_60%,rgba(2,6,23,1)_100%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Process</h2>
          <p className="mt-3 text-slate-300">Transparent, milestone-driven collaboration from day one.</p>
        </div>

        <ol className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {steps.map(s => (
            <li key={s.k} className="relative rounded-2xl border border-white/10 bg-white/5 p-6">
              <span className="absolute -top-3 -left-3 inline-flex items-center justify-center h-10 w-10 rounded-xl bg-gradient-to-tr from-fuchsia-500 via-cyan-400 to-emerald-400 text-white text-sm font-semibold shadow-lg">{s.k}</span>
              <h3 className="text-white font-semibold tracking-tight">{s.t}</h3>
              <p className="mt-2 text-slate-300/90 text-sm">{s.d}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
