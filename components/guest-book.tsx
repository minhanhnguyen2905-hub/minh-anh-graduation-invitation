'use client'

import { Send } from 'lucide-react'
import { useState } from 'react'
import { Reveal } from '@/components/reveal'

type Entry = { id: number; name: string; message: string }

const SEED: Entry[] = [
  {
    id: 1,
    name: 'Lan',
    message: 'Chúc mừng cậu nhé! Bao nhiêu cố gắng cũng đã được đền đáp. Tự hào về cậu.',
  },
  {
    id: 2,
    name: 'Minh',
    message: 'So proud of you. Wishing you every happiness on this new chapter!',
  },
]

export function GuestBook() {
  const [entries, setEntries] = useState<Entry[]>(SEED)
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!name.trim() || !message.trim()) return
    setEntries((prev) => [
      { id: Date.now(), name: name.trim(), message: message.trim() },
      ...prev,
    ])
    setName('')
    setMessage('')
  }

  return (
    <section className="mx-auto max-w-3xl px-6 py-20">
      <Reveal className="mb-10 text-center">
        <p className="mb-3 text-xs uppercase tracking-[0.5em] text-primary">
          Guest Book
        </p>
        <h3 className="font-serif text-3xl font-light text-foreground sm:text-4xl">
          Leave a little note
        </h3>
      </Reveal>

      <Reveal delay={100}>
        <form
          onSubmit={handleSubmit}
          className="glass space-y-4 rounded-[2rem] p-8 sm:p-10"
        >
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
            className="w-full rounded-xl border border-primary/20 bg-warm-white/70 px-4 py-3 font-sans text-foreground placeholder:text-muted-foreground/60 focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/20"
          />
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Write your message..."
            rows={3}
            className="w-full resize-none rounded-xl border border-primary/20 bg-warm-white/70 px-4 py-3 font-sans text-foreground placeholder:text-muted-foreground/60 focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/20"
          />
          <button
            type="submit"
            className="flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-4 text-sm uppercase tracking-[0.25em] text-primary-foreground shadow-[0_16px_36px_-20px_var(--primary)] transition-all duration-300 hover:scale-[1.01]"
          >
            <Send className="h-4 w-4" />
            Send
          </button>
        </form>
      </Reveal>

      <ul className="mt-8 space-y-4">
        {entries.map((entry, i) => (
          <Reveal as="li" key={entry.id} delay={i < 3 ? i * 80 : 0}>
            <div className="glass rounded-2xl px-6 py-5">
              <p className="font-serif text-lg leading-relaxed text-foreground/90 text-pretty">
                &ldquo;{entry.message}&rdquo;
              </p>
              <p className="mt-3 text-xs uppercase tracking-[0.3em] text-primary">
                — {entry.name}
              </p>
            </div>
          </Reveal>
        ))}
      </ul>
    </section>
  )
}
