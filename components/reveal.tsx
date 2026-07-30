'use client'

import type { ReactNode } from 'react'
import { useReveal } from '@/hooks/use-reveal'
import { cn } from '@/lib/utils'

export function Reveal({
  children,
  className,
  delay = 0,
  as: Tag = 'div',
}: {
  children: ReactNode
  className?: string
  delay?: number
  as?: 'div' | 'section' | 'li' | 'span'
}) {
  const { ref, visible } = useReveal<HTMLElement>()

  return (
    // @ts-expect-error - dynamic tag with generic ref
    <Tag
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={cn('reveal', visible && 'is-visible', className)}
    >
      {children}
    </Tag>
  )
}
