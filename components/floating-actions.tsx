'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { ArrowUp, MessageCircle, Phone } from 'lucide-react'
import { company } from '@/lib/site-data'

export function FloatingActions() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <div className="fixed right-4 bottom-4 z-40 flex flex-col items-end gap-3 sm:right-6 sm:bottom-6">
        <AnimatePresence>
          {visible && (
            <motion.button
              type="button"
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.7 }}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              aria-label="Back to top"
              className="glass glass-hover text-foreground flex size-11 items-center justify-center rounded-full"
            >
              <ArrowUp className="size-4" />
            </motion.button>
          )}
        </AnimatePresence>

        <a
          href={company.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with us on WhatsApp"
          className="glass glass-hover text-accent flex size-12 items-center justify-center rounded-full"
        >
          <MessageCircle className="size-5" />
        </a>

        <a
          href={company.phoneHref}
          className="brand-gradient text-primary-foreground group flex items-center gap-2 rounded-full px-5 py-3.5 text-sm font-semibold shadow-[0_18px_45px_-16px_rgba(0,212,255,0.85)] transition-transform duration-300 hover:scale-[1.04]"
        >
          <Phone className="size-4" />
          <span className="hidden sm:inline">Book Free Consultation</span>
          <span className="sm:hidden">Call Now</span>
        </a>
      </div>
    </>
  )
}
