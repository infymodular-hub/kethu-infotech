'use client'

import { motion } from 'motion/react'
import {
  Activity,
  Award,
  BadgeCheck,
  Briefcase,
  CalendarClock,
  CircleCheck,
  ClipboardList,
  FolderCode,
  LifeBuoy,
  MessagesSquare,
  MonitorSmartphone,
  Presentation,
  Settings2,
  type LucideIcon,
} from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { whyUs } from '@/lib/site-data'

const iconMap: Record<string, LucideIcon> = {
  BadgeCheck,
  FolderCode,
  Activity,
  Settings2,
  CalendarClock,
  MonitorSmartphone,
  Presentation,
  Award,
  MessagesSquare,
  Briefcase,
  ClipboardList,
  LifeBuoy,
}

export function WhyUsSection() {
  return (
    <section id="why-us" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5">
        <SectionHeading
          eyebrow="Why KETHU INFOTECH"
          title={
            <>
              A training partner your{' '}
              <span className="text-gradient">L&amp;D team can measure</span>
            </>
          }
          description="Twelve reasons enterprise teams renew with us year after year."
        />

        <div className="relative mt-14">
          <div className="absolute top-0 bottom-0 left-4 hidden w-px bg-gradient-to-b from-transparent via-white/15 to-transparent md:block" />

          <ul className="grid gap-4 md:grid-cols-2 md:gap-x-10 md:pl-14">
            {whyUs.map((item, i) => {
              const Icon = iconMap[item.icon] ?? CircleCheck
              return (
                <motion.li
                  key={item.title}
                  initial={{ opacity: 0, x: -24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.55, delay: (i % 2) * 0.08 }}
                  className="glass glass-hover relative flex gap-4 rounded-2xl p-5"
                >
                  <span className="bg-surface text-accent flex size-11 shrink-0 items-center justify-center rounded-xl">
                    <Icon className="size-5" />
                  </span>
                  <div>
                    <h3 className="font-heading text-base font-bold">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground mt-1 text-sm leading-relaxed">
                      {item.detail}
                    </p>
                  </div>
                </motion.li>
              )
            })}
          </ul>
        </div>
      </div>
    </section>
  )
}
