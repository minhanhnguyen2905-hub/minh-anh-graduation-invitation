'use client'

import { Heart } from 'lucide-react'
import { useState } from 'react'
import { Reveal } from '@/components/reveal'
import { cn } from '@/lib/utils'

type Choice = 'attend' | 'decline' | null

const CELEBRATION = [
  { tx: '-70px', ty: '-60px', delay: 0, color: 'var(--primary)' },
  { tx: '70px', ty: '-55px', delay: 0.05, color: 'var(--gold)' },
  { tx: '-90px', ty: '10px', delay: 0.1, color: 'var(--gold)' },
  { tx: '90px', ty: '20px', delay: 0.08, color: 'var(--primary)' },
  { tx: '-40px', ty: '-80px', delay: 0.12, color: 'var(--gold)' },
  { tx: '45px', ty: '-78px', delay: 0.16, color: 'var(--primary)' },
  { tx: '0px', ty: '-95px', delay: 0.2, color: 'var(--gold)' },
  { tx: '-110px', ty: '-20px', delay: 0.14, color: 'var(--primary)' },
]

export function Rsvp() {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [choice, setChoice] = useState<Choice>(null)
  const [submitted, setSubmitted] = useState<'attend' | 'decline' | null>(null)

  function submit(pick: 'attend' | 'decline') {
    if (!name.trim()) {
      setChoice(pick)
      return
    }
    setSubmitted(pick)
  }

  return (
    <section id="rsvp" className="mx-auto max-w-2xl px-6 py-20">
      <Reveal className="mb-10 text-center">
        <p className="mb-3 text-xs uppercase tracking-[0.5em] text-primary">
          R.S.V.P
        </p>
        <h3 className="font-serif text-3xl font-light leading-snug text-foreground text-balance sm:text-4xl">
          Bạn sẽ cùng mình lưu giữ khoảnh khắc đặc biệt này chứ?
        </h3>
      </Reveal>

      <Reveal delay={120}>
        <div className="glass relative overflow-hidden rounded-[2rem] p-8 sm:p-10">
          {/* Success overlay */}
          <div
            className={cn(
              'absolute inset-0 z-10 flex flex-col items-center justify-center gap-4 bg-warm-white/95 px-6 text-center transition-all duration-700',
              submitted
                ? 'pointer-events-auto opacity-100'
                : 'pointer-events-none opacity-0',
            )}
          >
            <div className="relative flex items-center justify-center">
              {/* celebration sparkles */}
              {submitted === 'attend' &&
                CELEBRATION.map((c, i) => (
                  <span
                    key={i}
                    aria-hidden
                    className="animate-celebrate absolute h-2 w-2 rounded-full bg-primary"
                    style={{
                      // @ts-expect-error custom props for keyframes
                      '--tx': c.tx,
                      '--ty': c.ty,
                      animationDelay: `${c.delay}s`,
                      background: c.color,
                    }}
                  />
                ))}
              <span
                className={cn(
                  'flex h-16 w-16 items-center justify-center rounded-full transition-transform duration-700',
                  submitted ? 'scale-100' : 'scale-0',
                )}
                style={{
                  background:
                    'radial-gradient(circle at 35% 30%, color-mix(in oklch, var(--gold) 80%, white), var(--primary))',
                }}
              >
                <Heart
                  className="h-7 w-7 text-primary-foreground"
                  fill="currentColor"
                />
              </span>
            </div>
            <p className="font-serif text-3xl italic text-foreground">
              Cảm ơn bạn!
            </p>
           <p className="max-w-md font-serif text-sm leading-7 text-muted-foreground text-center whitespace-pre-line px-2">
  {submitted === 'attend' ? (
    <>
      <span className="font-medium text-foreground">
        Thank you for being part of my special day 🤍
      </span>

      <br />
      <br />

      Sự hiện diện của bạn là món quà rất ý nghĩa đối với Minh Anh trong ngày đặc biệt này.

      <br />
      <br />

      📍 Nếu bạn di chuyển bằng xe máy, vui lòng gửi xe tại cổng phụ 04 Nguyễn Trãi, Phường Chợ Quán, TP. Hồ Chí Minh.

      <br />
      <br />

       Để thoải mái hơn trong suốt buổi lễ, bạn nhớ mang theo quạt cầm tay nhé.

      <br />
      <br />

       Hẹn gặp bạn vào 10:50 • 06.08.2026 tại Hội trường A – Đại học Sài Gòn.
    </>
  ) : (
    'Sự vắng mặt của bạn sẽ được nhớ đến rất nhiều. 🤍'
  )}
</p>
            <button
              type="button"
              onClick={() => setSubmitted(null)}
              className="mt-2 text-xs uppercase tracking-[0.3em] text-primary underline-offset-4 hover:underline"
            >
              Chỉnh sửa phản hồi
            </button>
          </div>

          {/* Form */}
          <div className="space-y-5">
            <Field label="Họ và tên" required>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Tên của bạn"
                className="w-full rounded-xl border border-primary/20 bg-warm-white/70 px-4 py-3 font-sans text-foreground placeholder:text-muted-foreground/60 focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
              {choice && !name.trim() && (
                <span className="mt-1 block text-xs text-destructive">
                  Vui lòng cho mình biết tên của bạn.
                </span>
              )}
            </Field>

            <Field label="Số điện thoại" optional>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Không bắt buộc"
                className="w-full rounded-xl border border-primary/20 bg-warm-white/70 px-4 py-3 font-sans text-foreground placeholder:text-muted-foreground/60 focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
            </Field>

            <div className="grid gap-3 pt-2 sm:grid-cols-2">
              <button
                type="button"
                onClick={() => submit('attend')}
                className="flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-4 text-sm uppercase tracking-[0.15em] text-primary-foreground shadow-[0_16px_36px_-20px_var(--primary)] transition-all duration-300 hover:scale-[1.02]"
              >
                <span aria-hidden className="text-base">💛</span>
                I will attend
              </button>
              <button
                type="button"
                onClick={() => submit('decline')}
                className="flex items-center justify-center gap-2 rounded-full border border-primary/30 bg-transparent px-6 py-4 text-sm uppercase tracking-[0.15em] text-foreground/80 transition-all duration-300 hover:scale-[1.02] hover:bg-secondary"
              >
                <span aria-hidden className="text-base">🤍</span>
                Sorry. I can't attend
              </button>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  )
}

function Field({
  label,
  children,
  required,
  optional,
}: {
  label: string
  children: React.ReactNode
  required?: boolean
  optional?: boolean
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-xs uppercase tracking-[0.3em] text-muted-foreground">
        {label}
        {optional && <span className="ml-1 lowercase tracking-normal">(optional)</span>}
        {required && <span className="ml-1 text-primary">*</span>}
      </span>
      {children}
    </label>
  )
}
