'use client'

import { MapPin, Play } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'
import { Reveal } from '@/components/reveal'
import { cn } from '@/lib/utils'

const MAP_QUERY = encodeURIComponent(
  'Đại học Sài Gòn, 273 An Dương Vương, Phường Chợ Quán, TP. Hồ Chí Minh',
)

export function Venue() {
  const [playing, setPlaying] = useState(false)

  return (
    <section className="mx-auto max-w-4xl px-6 py-20">
      <Reveal className="mb-10 text-center">
        <p className="mb-3 text-xs uppercase tracking-[0.5em] text-primary">
          Find Your Way
        </p>
        <h3 className="font-serif text-3xl font-light text-foreground sm:text-4xl">
          Hướng dẫn đến Hội trường A
        </h3>
      </Reveal>

      <Reveal delay={120}>
        <div className="glass overflow-hidden rounded-[2rem] p-3">
          <div className="relative aspect-video overflow-hidden rounded-[1.4rem]">
            <Image
              src="/images/venue.png"
              alt="Saigon University Hall A auditorium"
              fill
              className={cn(
                'object-cover transition-transform duration-700',
                playing ? 'scale-105' : 'scale-100',
              )}
            />
            <div
              aria-hidden
              className="absolute inset-0"
              style={{
                background:
                  'linear-gradient(to top, color-mix(in oklch, var(--foreground) 55%, transparent), transparent 55%)',
              }}
            />

            {!playing ? (
              <button
                type="button"
                onClick={() => setPlaying(true)}
                aria-label="Play campus guide video"
                className="absolute inset-0 flex flex-col items-center justify-center gap-4"
              >
                <span className="flex h-20 w-20 items-center justify-center rounded-full bg-warm-white/85 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.5)] backdrop-blur transition-transform duration-300 hover:scale-110">
                  <Play className="ml-1 h-8 w-8 text-primary" fill="currentColor" />
                </span>
                <span className="text-sm uppercase tracking-[0.35em] text-warm-white drop-shadow">
                  Play Campus Guide
                </span>
              </button>
            ) : (
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-foreground/70 text-center backdrop-blur-sm">
                <span className="animate-pulse text-sm uppercase tracking-[0.35em] text-warm-white">
                  Campus guide video coming soon
                </span>
                <button
                  type="button"
                  onClick={() => setPlaying(false)}
                  className="rounded-full border border-warm-white/50 px-5 py-2 text-xs uppercase tracking-[0.3em] text-warm-white transition-colors hover:bg-warm-white/10"
                >
                  Close
                </button>
              </div>
            )}

            <span className="absolute bottom-4 left-5 font-serif text-xl text-warm-white drop-shadow">
              Hall A · Saigon University
            </span>
          </div>
        </div>
      </Reveal>

      <Reveal delay={200} className="mt-8 flex justify-center">
        <a
          href={`https://www.google.com/maps/search/?api=1&query=${MAP_QUERY}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary px-8 py-3.5 text-sm uppercase tracking-[0.25em] text-primary-foreground shadow-[0_16px_36px_-20px_var(--primary)] transition-all duration-300 hover:scale-[1.03]"
        >
          <MapPin className="h-4 w-4" />
          Xem Google Maps
        </a>
      </Reveal>
    </section>
  )
}
