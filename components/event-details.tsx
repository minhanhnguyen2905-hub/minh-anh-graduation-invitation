'use client'

import { Calendar, Clock, MapPin, Phone } from 'lucide-react'
import type { ReactNode } from 'react'
import { Reveal } from '@/components/reveal'

const MAP_QUERY = encodeURIComponent(
  'Đại học Sài Gòn, 273 An Dương Vương, Phường Chợ Quán, TP. Hồ Chí Minh',
)

export function EventDetails() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-20">
      <Reveal className="mb-14 text-center">
        <p className="mb-3 text-xs uppercase tracking-[0.5em] text-primary">
          Celebrate With Me
        </p>
        <h3 className="font-serif text-4xl font-light text-foreground sm:text-5xl">
          Event Information
        </h3>
      </Reveal>

      <div className="grid gap-5 sm:grid-cols-2">
        <InfoCard icon={<Calendar className="h-5 w-5" />} label="Date" delay={0}>
          <p className="font-serif text-2xl text-foreground">06 August 2026</p>
          <p className="text-sm text-muted-foreground">Thursday</p>
        </InfoCard>

        <InfoCard icon={<Clock className="h-5 w-5" />} label="Time" delay={80}>
          <p className="font-serif text-2xl text-foreground">10:50 AM</p>
          <p className="text-sm text-muted-foreground">Please arrive early</p>
        </InfoCard>

        <InfoCard
          icon={<MapPin className="h-5 w-5" />}
          label="Location"
          delay={160}
        >
          <p className="font-serif text-2xl text-foreground">Đại học Sài Gòn</p>
          <p className="text-sm leading-relaxed text-muted-foreground">
            273 An Dương Vương,
            <br />
            Phường Chợ Quán, TP. Hồ Chí Minh
          </p>
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${MAP_QUERY}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary px-6 py-2.5 text-xs uppercase tracking-[0.25em] text-primary-foreground transition-all duration-300 hover:scale-[1.03]"
          >
            <MapPin className="h-3.5 w-3.5" />
            Open Google Map
          </a>
        </InfoCard>

        <InfoCard icon={<Phone className="h-5 w-5" />} label="Phone" delay={240}>
          <p className="font-serif text-2xl text-foreground">0898 436 708</p>
          <a
            href="tel:0898436708"
            className="text-sm text-primary underline-offset-4 hover:underline"
          >
            Tap to call
          </a>
        </InfoCard>
      </div>
    </section>
  )
}

function InfoCard({
  icon,
  label,
  children,
  delay,
}: {
  icon: ReactNode
  label: string
  children: ReactNode
  delay: number
}) {
  return (
    <Reveal
      delay={delay}
      className="glass flex flex-col gap-1.5 rounded-3xl p-8 transition-transform duration-500 hover:-translate-y-1"
    >
      <div className="mb-3 flex items-center gap-3">
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/12 text-primary">
          {icon}
        </span>
        <span className="text-xs uppercase tracking-[0.4em] text-muted-foreground">
          {label}
        </span>
      </div>
      {children}
    </Reveal>
  )
}
