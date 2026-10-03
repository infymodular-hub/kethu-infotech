'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'motion/react'
import { Award, Building2, GraduationCap, TrendingUp, Users } from 'lucide-react'
import { stats } from '@/lib/site-data'

const icons = [GraduationCap, Building2, TrendingUp, Award, Users]

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.5 })
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!inView) return
    let frame = 0
    const total = 60
    const tick = () => {
      frame += 1
      const progress = 1 - Math.pow(1 - frame / total, 3)
      setDisplay(Math.round(value * progress))
      if (frame < total) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }, [inView, value])

  return (
    <span ref={ref} className="font-heading text-3xl font-extrabold sm:text-4xl">
      {display.toLocaleString('en-IN')}
      <span className="text-accent">{suffix}</span>
    </span>
  )
}

export function StatsSection() {
  return (
    <section className="relative py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-5">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {stats.map((stat, i) => {
            const Icon = icons[i]
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="glass glass-hover rounded-2xl p-5"
              >
                <span className="bg-surface text-accent mb-4 flex size-10 items-center justify-center rounded-xl">
                  <Icon className="size-5" />
                </span>
                <Counter value={stat.value} suffix={stat.suffix} />
                <p className="text-muted-foreground mt-1 text-sm">
                  {stat.label}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
