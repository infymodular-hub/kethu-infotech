'use client'

import { useEffect, useState } from 'react'
import { motion } from 'motion/react'
import { ArrowRight, Menu, X } from 'lucide-react'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import { company, navLinks } from '@/lib/site-data'
import Link from "next/link"

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-1"
    >
      <div
        className={cn(
          ' mx-auto flex h-20 max-w-7xl items-center justify-between rounded-2xl px-6 transition-all duration-500 sm:px-8',
          scrolled
           
  ? 'bg-[#111827]/90 backdrop-blur-xl border border-white/10 shadow-lg'
  : 'bg-transparent'
        )}
      >
        <a href="/" className="flex items-center min-w-[220px]">
  <Image
  src="/images/kethu-logo1.png"
  alt="KETHU INFOTECH"
  width={620}
  height={220}
  priority
  className="w-[280px] h-auto object-contain"
 />
</a>

        <nav aria-label="Main" className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
        <Link
  key={link.href}
  href={link.href}
  scroll={true}
  className="group text-muted-foreground hover:text-foreground relative rounded-lg px-3 py-2 text-sm font-medium transition-colors"
>
  {link.label}
  <span className="brand-gradient absolute inset-x-3 -bottom-0.5 h-px origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
</Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="/#contact"
            className="brand-gradient group text-primary-foreground hidden items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold shadow-[0_12px_35px_-12px_rgba(0,212,255,0.7)] transition-transform duration-300 hover:scale-[1.03] sm:inline-flex"
          >
            Get Corporate Proposal
            <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="glass text-foreground flex size-10 items-center justify-center rounded-xl lg:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass border-border bg-background/95 mx-auto mt-2 max-w-7xl overflow-hidden rounded-2xl p-3 shadow-[0_28px_70px_-24px_rgba(0,0,0,0.95)] backdrop-blur-2xl lg:hidden"
        >
          <nav aria-label="Mobile" className="flex flex-col">
            {navLinks.map((link) => (
             <Link
  key={link.href}
  href={link.href}
  onClick={() => setOpen(false)}
  className="text-muted-foreground hover:bg-surface hover:text-foreground rounded-xl px-3 py-3 text-sm font-medium transition-colors"
>
  {link.label}
</Link>
            ))}
            <a
              href={company.phoneHref}
              className="brand-gradient text-primary-foreground mt-2 rounded-xl px-3 py-3 text-center text-sm font-semibold"
            >
              Call {company.phone}
            </a>
          </nav>
        </motion.div>
      )}
    </motion.header>
  )
}
