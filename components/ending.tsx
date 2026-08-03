'use client'

import { Reveal } from '@/components/reveal'
import { QRCodeComponent } from '@/components/qr-code'

export function Ending() {
  return (
    <section className="relative overflow-hidden px-6 py-28 text-center">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(circle at 50% 30%, color-mix(in oklch, var(--gold) 14%, transparent), transparent 60%)',
        }}
      />
      <div className="relative mx-auto max-w-2xl">
        <Reveal>
          <div className="mx-auto mb-10 flex items-center justify-center gap-4">
            <span className="gold-divider w-20" />
            <span className="font-serif text-2xl text-primary">✦</span>
            <span className="gold-divider w-20" />
          </div>
        </Reveal>

        <Reveal delay={100}>
          <p className="font-serif text-3xl font-light italic leading-snug text-foreground text-balance sm:text-5xl">
            Every ending is a new beginning.
          </p>
        </Reveal>

        <Reveal delay={260}>
          <p className="mt-16 text-xs uppercase tracking-[0.5em] text-muted-foreground">
            With Love
          </p>
          <p className="mt-4 font-serif text-3xl text-primary sm:text-4xl">
            Nguyễn Ngọc Minh Anh
          </p>
          <p className="mx-auto mt-8 max-w-xs text-xs font-light leading-relaxed tracking-wide text-muted-foreground/60 text-pretty">
            Thank you for being part of this special milestone.
          </p>
        </Reveal>

        <Reveal delay={400} className="mt-20">
          <div className="flex justify-center">
            <QRCodeComponent />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
