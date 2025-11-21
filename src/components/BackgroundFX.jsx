import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

/**
 * BackgroundFX
 * - variant: 'molecules' | 'code'
 * - intensity: number (1-3)
 * Creates a layered, interactive background with subtle parallax.
 */
export default function BackgroundFX({ variant = 'molecules', intensity = 2 }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y1 = useTransform(scrollYProgress, [0, 1], [0, (-10 * intensity)])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, (12 * intensity)])

  return (
    <div ref={ref} className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Gradient wash */}
      <motion.div style={{ y: y1 }} className="absolute inset-0 opacity-70 mix-blend-screen bg-[radial-gradient(circle_at_20%_10%,rgba(59,130,246,0.08),transparent_35%),radial-gradient(circle_at_80%_20%,rgba(168,85,247,0.08),transparent_35%),radial-gradient(circle_at_50%_80%,rgba(34,211,238,0.08),transparent_35%)]" />

      {variant === 'molecules' ? (
        <MoleculeLayer y={y2} />
      ) : (
        <CodeLayer y={y2} />
      )}

      {/* Soft vignette for contrast */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(2,6,23,0.35)_65%,rgba(2,6,23,0.85)_100%)]" />
    </div>
  )
}

function MoleculeLayer({ y }) {
  // Simple floating network of nodes/edges using SVG
  return (
    <motion.svg style={{ y }} className="absolute -top-10 -left-10 w-[140%] h-[140%]" viewBox="0 0 1000 1000" fill="none">
      <defs>
        <linearGradient id="g1" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.9" />
          <stop offset="50%" stopColor="#a78bfa" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#34d399" stopOpacity="0.8" />
        </linearGradient>
      </defs>
      {Array.from({ length: 40 }).map((_, i) => {
        const cx = (i * 173) % 1000
        const cy = (i * 281) % 1000
        const r = (i % 3) + 2
        return (
          <circle key={`c-${i}`} cx={cx} cy={cy} r={r} stroke="url(#g1)" strokeOpacity="0.6" fill="rgba(255,255,255,0.02)" />
        )
      })}
      {Array.from({ length: 30 }).map((_, i) => {
        const x1 = (i * 97) % 1000
        const y1 = (i * 167) % 1000
        const x2 = (x1 + 220) % 1000
        const y2 = (y1 + 140) % 1000
        return (
          <line key={`l-${i}`} x1={x1} y1={y1} x2={x2} y2={y2} stroke="url(#g1)" strokeOpacity="0.25" strokeWidth="1" />
        )
      })}
    </motion.svg>
  )
}

function CodeLayer({ y }) {
  const code = `#include <vector>\n#include <cmath>\n// MD step\nfor (int i = 0; i < N; ++i) {\n  v[i] += 0.5 * dt * a[i];\n  x[i] += dt * v[i];\n}\n// LJ potential\ndouble lj(double r){\n  double sr6 = pow(sigma/r, 6);\n  return 4*epsilon*(sr6*sr6 - sr6);\n}\n# QSAR\ny = X @ w + b\n# QM/MM energy\nE_total = E_qm + E_mm + E_coupling`;

  return (
    <motion.div style={{ y }} className="absolute inset-0 opacity-70">
      <div className="absolute -left-10 top-0 w-[140%] h-full [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)]">
        {Array.from({ length: 8 }).map((_, row) => (
          <div key={row} className="absolute inset-x-0" style={{ top: `${row * 12}%` }}>
            <Ticker text={code} speed={30 + row * 5} />
          </div>
        ))}
      </div>
    </motion.div>
  )
}

function Ticker({ text, speed = 30 }) {
  return (
    <div className="relative w-full overflow-hidden">
      <div className="animate-[scrollLeft_var(--speed)_linear_infinite] whitespace-pre text-xs sm:text-sm font-mono text-cyan-300/60" style={{ ['--speed']: `${speed}s` }}>
        {text + '    ' + text}
      </div>
      <style>{`
        @keyframes scrollLeft { from { transform: translateX(0); } to { transform: translateX(-50%); } }
      `}</style>
    </div>
  )
}
