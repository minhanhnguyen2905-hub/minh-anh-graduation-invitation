'use client'

import { createContext, useContext, useEffect, useRef, ReactNode } from 'react'

interface AudioContextType {
  bgMusicRef: React.RefObject<HTMLAudioElement>
  startBackgroundMusic: () => void
  stopBackgroundMusic: () => void
}

const AudioContext = createContext<AudioContextType | undefined>(undefined)

export function AudioProvider({ children }: { children: ReactNode }) {
  const bgMusicRef = useRef<HTMLAudioElement>(null)

  useEffect(() => {
    // Initialize audio - don't auto-play yet
    if (bgMusicRef.current) {
      bgMusicRef.current.volume = 0.4
      bgMusicRef.current.loop = true
      bgMusicRef.current.preload = 'auto'
    }

    // Cleanup function
    return () => {
      // Don't stop music on unmount - let it persist
    }
  }, [])

  const startBackgroundMusic = () => {
    if (bgMusicRef.current && bgMusicRef.current.paused) {
      bgMusicRef.current.currentTime = 0
      bgMusicRef.current.play().catch(() => {
        // Fail silently if audio fails to play
      })
    }
  }

  const stopBackgroundMusic = () => {
    if (bgMusicRef.current) {
      bgMusicRef.current.pause()
      bgMusicRef.current.currentTime = 0
    }
  }

  return (
    <AudioContext.Provider value={{ bgMusicRef, startBackgroundMusic, stopBackgroundMusic }}>
      {/* Global background music audio element */}
      <audio
        ref={bgMusicRef}
        aria-hidden="true"
        style={{ display: 'none' }}
      >
        <source src="/audio/piano-tot-nghiep.mp3" type="audio/mpeg" />
      </audio>
      {children}
    </AudioContext.Provider>
  )
}

export function useAudio() {
  const context = useContext(AudioContext)
  if (!context) {
    throw new Error('useAudio must be used within AudioProvider')
  }
  return context
}
