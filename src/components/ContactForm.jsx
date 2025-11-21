import { useState } from 'react'

export default function ContactForm() {
  const [status, setStatus] = useState('idle')

  const onSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    const data = Object.fromEntries(new FormData(e.currentTarget))

    try {
      // This demo just simulates network latency.
      await new Promise((r) => setTimeout(r, 800))
      setStatus('success')
      e.currentTarget.reset()
    } catch (err) {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="relative py-24 bg-slate-950 border-t border-white/10">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_0%,rgba(34,211,238,0.12),transparent_40%),radial-gradient(circle_at_10%_100%,rgba(168,85,247,0.1),transparent_40%)]" />
      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Get in touch</h2>
          <p className="mt-3 text-slate-300">Tell us about your objectives, timeline and constraints. We’ll reply with a plan.</p>
        </div>

        <form onSubmit={onSubmit} className="mt-10 grid grid-cols-1 gap-6 rounded-2xl border border-white/10 bg-slate-900/40 p-6 backdrop-blur-sm">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm text-slate-300">Name</label>
              <input name="name" required className="mt-2 w-full rounded-lg bg-white/5 border border-white/10 px-4 py-2 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50" placeholder="Ada Lovelace" />
            </div>
            <div>
              <label className="block text-sm text-slate-300">Email</label>
              <input type="email" name="email" required className="mt-2 w-full rounded-lg bg-white/5 border border-white/10 px-4 py-2 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50" placeholder="you@company.com" />
            </div>
          </div>
          <div>
            <label className="block text-sm text-slate-300">Organization</label>
            <input name="org" className="mt-2 w-full rounded-lg bg-white/5 border border-white/10 px-4 py-2 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50" placeholder="Acme Therapeutics" />
          </div>
          <div>
            <label className="block text-sm text-slate-300">How can we help?</label>
            <textarea name="message" rows={5} required className="mt-2 w-full rounded-lg bg-white/5 border border-white/10 px-4 py-2 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50" placeholder="Docking, MD, FEP, QSAR, data platform..." />
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <button disabled={status==='loading'} className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-fuchsia-500 via-cyan-500 to-emerald-500 px-6 py-3 text-white font-medium shadow-lg shadow-cyan-500/20 disabled:opacity-60">
              {status==='loading' ? 'Sending…' : 'Send message'}
            </button>
            {status==='success' && <p className="text-emerald-300">Thanks! We’ll be in touch shortly.</p>}
            {status==='error' && <p className="text-rose-300">Something went wrong. Please try again.</p>}
          </div>
        </form>
      </div>
    </section>
  )
}
