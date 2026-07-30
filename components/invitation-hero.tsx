'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { Reveal } from '@/components/reveal'

const MESSAGE = `Sau bốn năm học tập tại Đại học Sài Gòn,
mình rất trân trọng kính mời bạn đến tham dự
Lễ Tốt Nghiệp của mình.

Sự hiện diện của bạn sẽ là món quà ý nghĩa nhất.`

function useTypewriter(text: string, speed = 32) {
  const [output, setOutput] = useState('')
  const [started, setStarted] = useState(false)
  const ref = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setStarted(true)
          obs.disconnect()
        }
      },
      { threshold: 0.3 },
    )
    obs.observe(node)
    return () => obs.disconnect()
  }, [])

  useEffect(() => {
    if (!started) return
    let i = 0
    const id = window.setInterval(() => {
      i += 1
      setOutput(text.slice(0, i))
      if (i >= text.length) window.clearInterval(id)
    }, speed)
    return () => window.clearInterval(id)
  }, [started, text, speed])

  return { ref, output, done: output.length >= text.length }
}

export function InvitationHero() {
  const { ref, output, done } = useTypewriter(MESSAGE)

  return (
    <section className="relative mx-auto max-w-3xl px-6 pt-24 pb-16 text-center sm:pt-32">
      <Reveal>
        <p className="mb-6 text-xs uppercase tracking-[0.5em] text-primary">
          The Graduation of
        </p>
      </Reveal>

      {/* Portrait — elegant oval with gold frame */}
      <Reveal delay={120}>
        <div className="relative mx-auto mb-12 w-60 sm:w-72">
          <div
            aria-hidden
            className="absolute -inset-6 rounded-[50%] opacity-70"
            style={{
              background:
                'radial-gradient(circle, color-mix(in oklch, var(--gold) 24%, transparent), transparent 70%)',
            }}
          />
          {/* outer gold ring */}
          <div
            className="relative rounded-[50%] p-[6px] shadow-[0_45px_90px_-45px_rgba(90,70,30,0.75)]"
            style={{
              background:
                'linear-gradient(150deg, color-mix(in oklch, var(--gold) 85%, white), var(--primary), color-mix(in oklch, var(--gold) 70%, white))',
            }}
          >
            <div className="rounded-[50%] p-[3px] bg-warm-white">
              <div className="relative aspect-[3/4] overflow-hidden rounded-[50%] ring-1 ring-primary/20">
                <Image
                  src="/images/portrait.png"
                  alt="Graduation portrait of Nguyễn Ngọc Minh Anh"
                  fill
                  priority
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </Reveal>

      <Reveal delay={200}>
        <h2 className="font-serif text-4xl font-light uppercase tracking-[0.12em] text-foreground text-balance sm:text-5xl">
          Nguyễn Ngọc Minh Anh
        </h2>
        <div className="mx-auto my-6 flex items-center justify-center gap-4">
          <span className="gold-divider w-16" />
          <GraduationMark />
          <span className="gold-divider w-16" />
        </div>
        <p className="font-serif text-2xl italic text-primary">
          Bachelor of Psychology
        </p>
        <p className="mt-1 text-sm uppercase tracking-[0.35em] text-muted-foreground">
          Saigon University
        </p>
      </Reveal>

      {/* Typed message */}
      <div ref={ref} className="mx-auto mt-16 max-w-xl">
        <p className="min-h-[13rem] whitespace-pre-line font-serif text-xl leading-loose tracking-wide text-foreground/90 text-pretty sm:min-h-[12rem] sm:text-2xl">
          {output}
          <span
            className={`ml-0.5 inline-block h-6 w-px translate-y-1 bg-primary align-middle ${
              done ? 'opacity-0' : 'animate-pulse opacity-100'
            }`}
          />
        </p>
      </div>
    </section>
  )
}

function GraduationMark() {
  return (
    <svg
      width="26"
      height="26"
      viewBox="0 0 24 24"
      fill="none"
      className="text-primary"
      aria-hidden
    >
      <path
        d="M12 3 1 8l11 5 9-4.09V15"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5 11v4c0 1.5 3.1 3 7 3s7-1.5 7-3v-4"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
