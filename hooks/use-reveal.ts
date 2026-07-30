'use client'

import { useEffect, useRef, useState } from 'react'

/**
 * Reveals an element with a smooth transition when it scrolls into view.
 * Attach the returned ref to any element that has the `reveal` class.
 */
export function useReveal<T extends HTMLElement = HTMLDivElement>(options?: {
  threshold?: number
  once?: boolean
}) {
  const { threshold = 0.18, once = true } = options ?? {}
  const ref = useRef<T | null>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true)
            if (once) observer.unobserve(entry.target)
          } else if (!once) {
            setVisible(false)
          }
        })
      },
      { threshold },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [threshold, once])

  return { ref, visible }
}
