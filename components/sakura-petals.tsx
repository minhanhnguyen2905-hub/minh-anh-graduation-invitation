'use client'

import { useMemo } from 'react'

type Petal = {
  left: number
  size: number
  duration: number
  delay: number
  drift: number
  hue: 'blush' | 'gold' | 'ivory'
  rounded: boolean
}

const HUES: Record<Petal['hue'], string> = {
  blush: 'var(--blush)',
  gold: 'color-mix(in oklch, var(--gold) 55%, white)',
  ivory: 'var(--warm-white)',
}

export function SakuraPetals({ count = 22 }: { count?: number }) {
  const petals = useMemo<Petal[]>(() => {
    const hues: Petal['hue'][] = ['blush', 'gold', 'ivory']
    return Array.from({ length: count }, (_, i) => ({
      left: Math.random() * 100,
      size: 8 + Math.random() * 12,
      duration: 12 + Math.random() * 12,
      delay: -Math.random() * 20,
      drift: (Math.random() - 0.5) * 220,
      hue: hues[i % hues.length],
      rounded: Math.random() > 0.5,
    }))
  }, [count])

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-30 overflow-hidden"
    >
      {petals.map((p, i) => (
        <span
          key={i}
          className="absolute top-0 block"
          style={{
            left: `${p.left}%`,
            width: p.size,
            height: p.size * 0.85,
            background: HUES[p.hue],
            borderRadius: p.rounded
              ? '100% 0 100% 0'
              : '0 100% 0 100%',
            opacity: 0.75,
            filter: 'blur(0.3px)',
            boxShadow: '0 1px 4px rgba(0,0,0,0.04)',
            // custom prop consumed by the sakura-fall keyframes
            ['--drift' as string]: `${p.drift}px`,
            animation: `sakura-fall ${p.duration}s linear ${p.delay}s infinite`,
          }}
        />
      ))}
    </div>
  )
}
