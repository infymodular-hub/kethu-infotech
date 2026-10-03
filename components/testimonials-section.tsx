'use client'

import { useCallback, useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react'
import { testimonials } from '@/lib/site-data'

export function TestimonialsSection() {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)

  const next = useCallback(() => {
    setIndex((prev) => (prev + 1) % testimonials.length)
  }, [])

  const previous = useCallback(() => {
    setIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    )
  }, [])

  useEffect(() => {
    if (paused) return

    const timer = setInterval(() => {
      next()
    }, 6000)

    return () => clearInterval(timer)
  }, [next, paused])

  const active = testimonials[index]

  return (
    <section
      className="relative overflow-hidden bg-slate-950 py-24"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">
          <span className="inline-flex rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm font-semibold text-cyan-400">
            Client Testimonials
          </span>

          <h2 className="mt-6 text-4xl font-bold text-white lg:text-5xl">
            What Enterprise Clients Say
          </h2>
                    <p className="mx-auto mt-5 max-w-3xl text-lg text-slate-400">
            Trusted by enterprise teams for real-world automation,
            integration, AI, and digital transformation initiatives.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-5xl">
          <div className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 shadow-2xl">

            <Quote className="absolute right-8 top-8 h-20 w-20 text-cyan-500/10" />

            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.45 }}
                className="p-10 lg:p-14"
              >
                <div className="mb-6 flex gap-1">
                  {Array.from({ length: active.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>

                <p className="text-xl leading-9 text-slate-200 lg:text-2xl">
                  "{active.quote}"
                </p>

                <div className="mt-10 flex items-center gap-5">                   <div className="flex h-16 w-16 items-center justify-center rounded-full bg-cyan-500 text-xl font-bold text-white">
                    {active.name
                      .split(' ')
                      .map((word) => word.charAt(0))
                      .join('')}
                  </div>

                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white">
                      {active.name}
                    </h3>

                    <p className="mt-1 text-slate-400">
                      {active.role}
                    </p>

                    <span className="mt-3 inline-flex rounded-full bg-cyan-500/10 px-3 py-1 text-sm font-medium text-cyan-300">
                      {active.company}
                    </span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="flex items-center justify-between border-t border-slate-800 px-8 py-6">
              <button
                onClick={previous}
                className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-700 bg-slate-800 transition-all duration-300 hover:border-cyan-500 hover:bg-cyan-500"
              >
                <ChevronLeft className="h-5 w-5 text-white" />
              </button>

              <div className="flex items-center gap-3">
                {testimonials.map((_, i) => (                  <button
                    key={i}
                    onClick={() => setIndex(i)}
                    className={`transition-all duration-300 ${
                      index === i
                        ? 'h-3 w-8 rounded-full bg-cyan-400'
                        : 'h-3 w-3 rounded-full bg-slate-600 hover:bg-slate-400'
                    }`}
                    aria-label={`Go to testimonial ${i + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={next}
                className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-700 bg-slate-800 transition-all duration-300 hover:border-cyan-500 hover:bg-cyan-500"
              >
                <ChevronRight className="h-5 w-5 text-white" />
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
