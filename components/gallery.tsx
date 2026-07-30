'use client'

import Image from 'next/image'
import { Reveal } from '@/components/reveal'

const IMAGES = [
  { src: '/images/gallery-1.png', alt: 'Walking across campus in graduation gown', ratio: 'aspect-[3/4]' },
  { src: '/images/gallery-2.png', alt: 'Holding a diploma with a sage ribbon', ratio: 'aspect-square' },
  { src: '/images/gallery-6.png', alt: 'Cherry blossom branches against warm sky', ratio: 'aspect-[4/5]' },
  { src: '/images/gallery-4.png', alt: 'Celebrating with graduation cap', ratio: 'aspect-square' },
  { src: '/images/gallery-3.png', alt: 'Graduation cap and blush flowers flat lay', ratio: 'aspect-[3/4]' },
  { src: '/images/gallery-5.png', alt: 'Saigon University building among sage trees', ratio: 'aspect-[4/5]' },
]

export function Gallery() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-20">
      <Reveal className="mb-12 text-center">
        <p className="mb-3 text-xs uppercase tracking-[0.5em] text-primary">
          Moments
        </p>
        <h3 className="font-serif text-4xl font-light text-foreground sm:text-5xl">
          A Little Gallery
        </h3>
      </Reveal>

      <div className="columns-2 gap-4 md:columns-3 [&>*]:mb-4">
        {IMAGES.map((img, i) => (
          <Reveal
            key={img.src}
            delay={(i % 3) * 100}
            className="break-inside-avoid"
          >
            <div className="group relative overflow-hidden rounded-2xl ring-1 ring-primary/15 shadow-[0_24px_50px_-35px_rgba(90,70,30,0.6)]">
              <div className={img.ratio}>
                <Image
                  src={img.src || '/placeholder.svg'}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
              </div>
              <div
                aria-hidden
                className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{
                  background:
                    'linear-gradient(to top, color-mix(in oklch, var(--gold) 45%, transparent), transparent 60%)',
                }}
              />
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
