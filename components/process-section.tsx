'use client'

import { motion } from 'motion/react'
import { SectionHeading } from '@/components/section-heading'
import { processSteps } from '@/lib/site-data'

export function ProcessSection() {
  return (
    <section
      id="process"
      className="relative border-y border-white/5 bg-[radial-gradient(ellipse_at_top,rgba(37,99,235,0.16),transparent_60%)] py-20 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-5">
        <SectionHeading
          eyebrow="Delivery Process"
          title={
            <>
              From requirement call to{' '}
              <span className="text-gradient">certified team</span>
            </>
          }
          description="A repeatable eight-stage delivery model with visibility at every checkpoint."
        />

        <div className="relative mt-16">
          <div className="absolute top-6 right-0 left-0 hidden h-px bg-gradient-to-r from-transparent via-white/15 to-transparent lg:block" />

          <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, i) => (
              <motion.li
                key={step.step}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: (i % 4) * 0.1 }}
                className="glass glass-hover relative rounded-2xl p-5 pt-8"
              >
                <span className="brand-gradient text-primary-foreground font-heading absolute -top-4 left-5 flex size-11 items-center justify-center rounded-xl text-sm font-extrabold shadow-[0_14px_35px_-14px_rgba(0,212,255,0.8)]">
                  {step.step}
                </span>
                <h3 className="font-heading mt-2 text-base font-bold">
                  {step.title}
                </h3>
                <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
                  {step.detail}
                </p>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
