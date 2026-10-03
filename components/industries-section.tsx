'use client'

import { motion } from 'motion/react'
import {
  Building2,
  Cpu,
  Factory,
  GraduationCap,
  Landmark,
  Layers,
  RadioTower,
  ShieldCheck,
  ShoppingBag,
  Stethoscope,
  Truck,
  type LucideIcon,
} from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { industries } from '@/lib/site-data'

const iconMap: Record<string, LucideIcon> = {
  Landmark,
  Stethoscope,
  ShoppingBag,
  ShieldCheck,
  Factory,
  RadioTower,
  Cpu,
  Truck,
  GraduationCap,
  Building2,
}

export function IndustriesSection() {
  return (
    <section id="industries" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5">
        <SectionHeading
          eyebrow="Industries Served"
          title={
            <>
              Domain context that makes training{' '}
              <span className="text-gradient">stick</span>
            </>
          }
          description="Case studies, data models and compliance nuances tailored to your sector."
        />

        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {industries.map((industry, i) => {
            const Icon = iconMap[industry.name] ?? iconMap[industry.icon] ?? Layers
            return (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, scale: 0.94 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.45, delay: (i % 5) * 0.07 }}
                className="glass glass-hover flex flex-col items-center gap-3 rounded-2xl px-4 py-6 text-center"
              >
                <span className="bg-surface text-accent flex size-11 items-center justify-center rounded-xl">
                  <Icon className="size-5" />
                </span>
                <p className="text-sm font-semibold text-pretty">
                  {industry.name}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
