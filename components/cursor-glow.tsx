'use client'

import { useEffect, useRef } from 'react'

export function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!window.matchMedia('(pointer: fine)').matches) return

    let raf = 0
    let x = window.innerWidth / 2
    let y = window.innerHeight / 2

    const onMove = (e: PointerEvent) => {
      x = e.clientX
      y = e.clientY
      if (raf) return
      raf = requestAnimationFrame(() => {
        raf = 0
        if (ref.current) {
          ref.current.style.transform = `translate3d(${x - 220}px, ${y - 220}px, 0)`
        }
      })
    }

    window.addEventListener('pointermove', onMove)
    return () => {
      window.removeEventListener('pointermove', onMove)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed top-0 left-0 -z-10 hidden size-[440px] rounded-full bg-[radial-gradient(circle,rgba(0,212,255,0.10),transparent_65%)] blur-2xl md:block"
    />
  )
}
