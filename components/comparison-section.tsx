'use client'

import { motion } from 'motion/react'
import { Check, X } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { comparison } from '@/lib/site-data'

export function ComparisonSection() {
  return (
    <section className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5">
        <SectionHeading
          eyebrow="The Difference"
          title={
            <>
              Why companies choose us over{' '}
              <span className="text-gradient">generic providers</span>
            </>
          }
        />

        <div className="glass mx-auto mt-14 max-w-4xl overflow-hidden rounded-3xl">
          <div className="grid grid-cols-[1.6fr_0.7fr_1fr] items-center gap-2 border-b border-white/10 px-5 py-4 text-xs font-semibold tracking-wider uppercase sm:px-7">
            <span className="text-muted-foreground">Capability</span>
            <span className="text-muted-foreground text-center">Others</span>
            <span className="text-accent text-center">KETHU INFOTECH</span>
          </div>

          {comparison.map((row, i) => (
            <motion.div
              key={row}
              initial={{ opacity: 0, x: -18 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              className="grid grid-cols-[1.6fr_0.7fr_1fr] items-center gap-2 border-b border-white/5 px-5 py-4 text-sm last:border-b-0 hover:bg-white/[0.03] sm:px-7"
            >
              <span className="font-medium text-pretty">{row}</span>
              <span className="flex justify-center">
                <span className="bg-destructive/10 text-destructive flex size-7 items-center justify-center rounded-full">
                  <X className="size-4" />
                  <span className="sr-only">Not offered by others</span>
                </span>
              </span>
              <span className="flex justify-center">
                <span className="brand-gradient text-primary-foreground flex size-7 items-center justify-center rounded-full">
                  <Check className="size-4" />
                  <span className="sr-only">
                    Included with KETHU INFOTECH
                  </span>
                </span>
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
