'use client'

import { useEffect, useState } from 'react'
import { Countdown } from '@/components/countdown'
import { Ending } from '@/components/ending'
import { EventDetails } from '@/components/event-details'
import { Gallery } from '@/components/gallery'
import { GuestBook } from '@/components/guest-book'
import { IntroExperience } from '@/components/intro-experience'
import { InvitationHero } from '@/components/invitation-hero'
import { Rsvp } from '@/components/rsvp'
import { SakuraPetals } from '@/components/sakura-petals'
import { Venue } from '@/components/venue'

export default function Page() {
  const [opened, setOpened] = useState(false)

  // Lock scrolling until the letter has been opened.
  useEffect(() => {
    document.body.style.overflow = opened ? '' : 'hidden'
    return () => {
      document.body.style.overflow = ''
    }
  }, [opened])

  return (
    <main className="relative min-h-screen bg-background">
      {opened && <SakuraPetals />}

      {!opened && <IntroExperience onFinish={() => setOpened(true)} />}

      <div
        className={`transition-opacity duration-1000 ${
          opened ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {opened && (
          <>
            <InvitationHero />
            <div className="gold-divider mx-auto w-2/3 max-w-xs" />
            <EventDetails />
            <Countdown />
            <Rsvp />
            <Venue />
            <Gallery />
            <GuestBook />
            <Ending />
            <footer className="pb-10 text-center">
              <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground">
                06 · 08 · 2026
              </p>
            </footer>
          </>
        )}
      </div>
    </main>
  )
}
