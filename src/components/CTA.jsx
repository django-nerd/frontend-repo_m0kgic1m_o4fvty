export default function CTA() {
  return (
    <section id="contact" className="relative py-20 bg-slate-950 border-t border-white/10">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_0%,rgba(34,211,238,0.15),transparent_40%),radial-gradient(circle_at_10%_100%,rgba(168,85,247,0.12),transparent_40%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          <div className="lg:col-span-2">
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Let’s design your next breakthrough</h2>
            <p className="mt-3 text-slate-300 max-w-2xl">Tell us about your target, constraints and timelines. We’ll propose a program plan and start a discovery sprint.</p>
          </div>
          <div className="flex lg:justify-end">
            <a href="mailto:hello@quantumchemdesign.com" className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-fuchsia-500 via-cyan-500 to-emerald-500 px-6 py-3 text-white font-medium shadow-lg shadow-cyan-500/20">
              Email us
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
