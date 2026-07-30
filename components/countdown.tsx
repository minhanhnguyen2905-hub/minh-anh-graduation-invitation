'use client'

import { useEffect, useState } from 'react'
import { Reveal } from '@/components/reveal'

const TARGET = new Date('2026-08-06T10:50:00+07:00').getTime()

type TimeLeft = { days: number; hours: number; minutes: number; seconds: number }

function getTimeLeft(): TimeLeft {
  const diff = Math.max(0, TARGET - Date.now())
  return {
    days: Math.floor(diff / 86_400_000),
    hours: Math.floor((diff / 3_600_000) % 24),
    minutes: Math.floor((diff / 60_000) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  }
}

export function Countdown() {
  const [time, setTime] = useState<TimeLeft | null>(null)

  useEffect(() => {
    setTime(getTimeLeft())
    const id = window.setInterval(() => setTime(getTimeLeft()), 1000)
    return () => window.clearInterval(id)
  }, [])

  const units: { label: string; value: number }[] = [
    { label: 'Days', value: time?.days ?? 0 },
    { label: 'Hours', value: time?.hours ?? 0 },
    { label: 'Minutes', value: time?.minutes ?? 0 },
    { label: 'Seconds', value: time?.seconds ?? 0 },
  ]

  return (
    <section className="relative mx-auto max-w-4xl px-6 py-16">
      <Reveal className="mb-10 text-center">
        <p className="mb-3 text-xs uppercase tracking-[0.5em] text-primary">
          Counting Down
        </p>
        <h3 className="font-serif text-3xl font-light text-foreground sm:text-4xl">
          Until we celebrate together
        </h3>
      </Reveal>

      <Reveal delay={120}>
        <div className="glass mx-auto grid max-w-2xl grid-cols-2 gap-4 rounded-3xl p-8 sm:grid-cols-4 sm:gap-2 sm:p-10">
          {units.map((u, i) => (
            <div
              key={u.label}
              className="flex flex-col items-center gap-2 border-primary/15 sm:[&:not(:last-child)]:border-r"
            >
              <span
                className="font-serif text-5xl font-light tabular-nums text-foreground sm:text-6xl"
                aria-hidden={time === null}
              >
                {String(u.value).padStart(2, '0')}
              </span>
              <span className="text-[0.65rem] uppercase tracking-[0.35em] text-muted-foreground">
                {u.label}
              </span>
              {i < units.length - 1 && (
                <span className="pointer-events-none sr-only">and</span>
              )}
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  )
}
