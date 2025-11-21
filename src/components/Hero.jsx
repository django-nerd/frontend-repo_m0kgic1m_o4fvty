import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden pt-24">
      {/* 3D Spline cover background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/D17NpA0ni2BTjUzp/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient veil to improve contrast; pointer-events-none so Spline stays interactive */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(2,6,23,0)_0%,rgba(2,6,23,0.4)_55%,rgba(2,6,23,0.85)_100%)]" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl py-24">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-slate-900/50 px-4 py-2 text-xs font-medium text-slate-200 backdrop-blur-md">
            <span className="h-2 w-2 rounded-full bg-gradient-to-r from-fuchsia-500 via-cyan-400 to-emerald-400 animate-pulse" />
            Computational Chemistry & AI-Driven Drug Design
          </span>
          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Accelerate discovery with quantum-accurate in silico pipelines
          </h1>
          <p className="mt-5 text-lg sm:text-xl text-slate-200/90 max-w-2xl">
            From hit identification to lead optimization, we combine physics-based modeling with machine learning to deliver faster, smarter therapeutic design.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#contact" className="inline-flex justify-center items-center rounded-full bg-gradient-to-r from-fuchsia-500 via-cyan-500 to-emerald-500 px-6 py-3 text-white font-medium shadow-lg shadow-cyan-500/20">
              Start a project
            </a>
            <a href="#capabilities" className="inline-flex justify-center items-center rounded-full bg-white/10 border border-white/10 px-6 py-3 text-white font-medium hover:bg-white/15">
              Explore capabilities
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
