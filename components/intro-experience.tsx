'use client'

import { useState } from 'react'
import { cn } from '@/lib/utils'

type Stage = 'envelope' | 'opening' | 'message'

export function IntroExperience({ onFinish }: { onFinish: () => void }) {
  const [stage, setStage] = useState<Stage>('envelope')
  const [leaving, setLeaving] = useState(false)

  function openEnvelope() {
    setStage('opening')
    // Paper slides up, then the first message appears.
    window.setTimeout(() => setStage('message'), 1800)
    // Hold the message, then hand off to the invitation.
    window.setTimeout(() => setLeaving(true), 4600)
    window.setTimeout(() => onFinish(), 5400)
  }

  return (
    <div
      className={cn(
        'fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-ivory px-6 transition-opacity duration-700',
        leaving ? 'pointer-events-none opacity-0' : 'opacity-100',
      )}
    >
      {/* soft ambient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(circle at 50% 40%, color-mix(in oklch, var(--gold) 16%, transparent), transparent 60%)',
        }}
      />

      {/* -------- Envelope stages -------- */}
      {(stage === 'envelope' || stage === 'opening') && (
        <div className="animate-fade-in relative z-10 flex flex-col items-center">
          <Envelope opening={stage === 'opening'} onSealClick={openEnvelope} />
          <p
            className={cn(
              'mt-12 text-sm uppercase tracking-[0.35em] text-primary transition-opacity duration-500',
              stage === 'opening' ? 'opacity-0' : 'opacity-100',
            )}
          >
            Tap the seal to open
          </p>
        </div>
      )}

      {/* -------- First message -------- */}
      {stage === 'message' && (
        <div className="relative z-10 flex flex-col items-center text-center">
          <span
            className="animate-fade-in mb-8 text-xs uppercase tracking-[0.55em] text-primary"
            style={{ animationDelay: '0.2s' }}
          >
            Graduation
          </span>
          <h1
            className="animate-fade-up font-serif text-4xl font-light leading-tight text-foreground text-balance sm:text-6xl md:text-7xl"
            style={{ animationDelay: '0.4s' }}
          >
            A new chapter
            <br />
            begins here.
          </h1>
          <div
            className="animate-fade-in gold-divider mt-10 w-40"
            style={{ animationDelay: '1.2s' }}
          />
        </div>
      )}
    </div>
  )
}

function Envelope({
  opening,
  onSealClick,
}: {
  opening: boolean
  onSealClick: () => void
}) {
  return (
    <div className="relative [perspective:1600px]">
      <div
        className={cn(
          'relative h-56 w-80 transition-transform duration-700 ease-out sm:h-64 sm:w-[26rem]',
          opening ? '-translate-y-2' : 'animate-float-slow',
        )}
      >
        {/* Envelope body */}
        <div className="absolute inset-0 overflow-hidden rounded-2xl paper-texture shadow-[0_40px_80px_-40px_rgba(80,60,30,0.5)] ring-1 ring-primary/15">
          {/* bottom fold lines */}
          <div
            aria-hidden
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(135deg, transparent 49.6%, color-mix(in oklch, var(--gold) 20%, transparent) 49.8%, transparent 50%), linear-gradient(-135deg, transparent 49.6%, color-mix(in oklch, var(--gold) 20%, transparent) 49.8%, transparent 50%)',
            }}
          />
          {/* Addressed to the guest */}
          <div
            className={cn(
              'absolute inset-x-0 bottom-6 flex flex-col items-center gap-1 text-center transition-opacity duration-500',
              opening ? 'opacity-0' : 'opacity-100',
            )}
          >
            <span className="text-[0.65rem] uppercase tracking-[0.4em] text-muted-foreground">
              To
            </span>
            <span className="font-serif text-lg italic text-foreground">
              Our Special Guest
            </span>
          </div>
        </div>

        {/* The letter that slides up when opening */}
        <div
          className={cn(
            'absolute left-1/2 top-4 h-[88%] w-[86%] -translate-x-1/2 rounded-lg bg-warm-white shadow-md transition-all duration-[1100ms] ease-[cubic-bezier(0.22,1,0.36,1)]',
            opening ? '-translate-y-44 opacity-100' : 'translate-y-0 opacity-0',
          )}
        >
          <div className="flex h-full flex-col items-center justify-center gap-3 px-6 text-center">
            <span className="text-xs uppercase tracking-[0.4em] text-primary">
              You are invited
            </span>
            <span className="font-serif text-2xl text-foreground">Minh Anh</span>
            <div className="gold-divider w-20" />
          </div>
        </div>

        {/* Envelope flap (opens upward) */}
        <div
          className="absolute inset-x-0 top-0 origin-top transition-transform duration-700 ease-in-out [transform-style:preserve-3d]"
          style={{
            transform: opening ? 'rotateX(180deg)' : 'rotateX(0deg)',
            zIndex: opening ? 0 : 20,
          }}
        >
          <div
            className="h-28 w-full sm:h-32"
            style={{
              clipPath: 'polygon(0 0, 100% 0, 50% 100%)',
              background:
                'linear-gradient(160deg, color-mix(in oklch, var(--beige) 80%, white), color-mix(in oklch, var(--gold) 30%, var(--beige)))',
              boxShadow: 'inset 0 -6px 14px -8px rgba(80,60,30,0.4)',
            }}
          />
        </div>

        {/* Wax seal */}
        <button
          type="button"
          onClick={onSealClick}
          aria-label="Open the invitation"
          className={cn(
            'absolute left-1/2 top-[42%] z-30 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full transition-all duration-500 sm:h-20 sm:w-20',
            opening
              ? 'scale-0 opacity-0'
              : 'scale-100 opacity-100 hover:scale-110 active:scale-95 animate-float-slow',
          )}
          style={{
            background:
              'radial-gradient(circle at 35% 30%, color-mix(in oklch, var(--gold) 82%, white), var(--primary) 70%)',
            boxShadow:
              '0 10px 24px -8px rgba(120,90,30,0.6), inset 0 2px 6px rgba(255,255,255,0.4)',
          }}
        >
          <span className="font-serif text-2xl italic text-primary-foreground">
            MA
          </span>
        </button>
      </div>
    </div>
  )
}
