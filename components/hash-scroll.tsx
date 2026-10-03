'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

export function HashScroll() {
  const pathname = usePathname()

  useEffect(() => {
    if (!window.location.hash) return

    const id = window.location.hash.substring(1)

    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }, 100)
  }, [pathname])

  return null
}