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
        <div className="glass rounded-[2rem] p-6 sm:p-8">
          <div className="space-y-5 font-serif text-sm leading-7 text-muted-foreground">
            <div className="space-y-2">
              <p className="text-base font-semibold uppercase tracking-[0.18em] text-primary">
                Từ cổng số 4 Nguyễn Trãi
              </p>
              <p>
                Chạy thẳng vào bên trong trường, đến khu vực gần <span className="font-semibold text-foreground">khu E</span>
                sẽ có lối đi dẫn sang <span className="font-semibold text-foreground">khu A</span>.
                Đi tiếp theo lối này là sẽ đến <span className="font-semibold text-foreground">Hội trường A</span>.
              </p>
            </div>

            <div className="space-y-2 border-t border-primary/10 pt-4">
              <p className="text-base font-semibold uppercase tracking-[0.18em] text-primary">
                Từ cổng ADV
              </p>
              <p>
                Đi thẳng đến cuối đường sẽ thấy <span className="font-semibold text-foreground">khu A</span>.<br />
                <span className="font-semibold text-foreground">Hội trường A nằm bên tay trái</span>.
              </p>
            </div>
          </div>
        </div>
      </Reveal>
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
