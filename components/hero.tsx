'use client'

import { motion } from 'motion/react'
import {
  Activity,
  ArrowRight,
  BadgeCheck,
  CloudCog,
  Network,
  Play,
  Sparkles,
  TrendingUp,
  Workflow,
} from 'lucide-react'
import { company } from '@/lib/site-data'

const skills = [
  'Workato',
  'MuleSoft',
  'Salesforce',
  'DevOps',
  'Python',
  'AI Automation',
  'Cloud',
  'US Healthcare',
  'US Recruitment',
]

const panels = [
  {
    icon: Sparkles,
    label: 'Active Corporate Batches',
    value: '24',
    accent: true,
  },
  {
    icon: Network,
    label: 'Technologies',
    value: '8',
  },
  {
    icon: Workflow,
    label: 'Certified Trainers',
    value: '15+',
  },
  {
    icon: CloudCog,
    label: 'Corporate Clients',
    value: '150+',
  },
  {
    icon: Activity,
    label: 'Professionals Trained',
    value: '4,000+',
  },
]

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-32 pb-20 sm:pt-36"
    >
      <div className="mx-auto grid w-full max-w-7xl items-center gap-14 px-5 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="glass text-muted-foreground inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium"
          >
            <span className="bg-accent size-1.5 animate-pulse rounded-full" />
            Trusted by 150+ enterprises · 12+ years
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="mt-3 text-[clamp(2rem,5vw,4rem)] leading-[1.04] text-balance"
          >
          <>
  Future-Ready{" "}
  <span className="text-gradient">Enterprise</span>{" "}
  Technology Training
</>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.18 }}
            className="text-muted-foreground mt-4 max-w-xl text-base leading-relaxed sm:text-lg"
          >
            Empower your workforce with enterprise-grade training in Workato, MuleSoft, Salesforce, DevOps, Python, AI, Cloud, and Automation technologies. Delivered by certified experts through live projects, customized learning paths, and measurable business outcomes.
          </motion.p>

          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.28 }}
            className="mt-6 flex flex-wrap gap-2"
          >
            {skills.map((skill) => (
              <li
                key={skill}
                className="glass text-muted-foreground rounded-full px-3 py-1.5 text-xs font-medium"
              >
                {skill}
              </li>
            ))}
          </motion.ul>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.36 }}
            className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <a
              href="#contact"
              className="brand-gradient group text-primary-foreground inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold shadow-[0_18px_45px_-16px_rgba(0,212,255,0.75)] transition-transform duration-300 hover:scale-[1.03]"
            >
              Get Corporate Proposal
              <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1.5" />
            </a>
            <a
              href={company.phoneHref}
              className="glass glass-hover text-foreground inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold"
            >
              Book Free Consultation
            </a>
            <a
              href="#courses"
              className="text-muted-foreground hover:text-foreground inline-flex items-center justify-center gap-2 rounded-full px-4 py-3.5 text-sm font-semibold transition-colors"
            >
              <Play className="size-4" />
              Watch Demo
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.46 }}
            className="text-muted-foreground mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs"
          >
            <span className="inline-flex items-center gap-1.5">
              <BadgeCheck className="text-accent size-4" /> Certified trainers
            </span>
            <span className="inline-flex items-center gap-1.5">
              <TrendingUp className="text-accent size-4" /> 98% placement
              success
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Activity className="text-accent size-4" /> Online, onsite &
              blended
            </span>
          </motion.div>
        </div>

        {/* Enterprise dashboard mock */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="glass glow-ring relative rounded-3xl p-5 sm:p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-heading text-sm font-bold">
                  Corporate Training Dashboard
                </p>
                <p className="text-muted-foreground text-xs">
                  Real-Time Training Analytics
                </p>
              </div>
              <span className="glass text-accent rounded-full px-3 py-1 text-[10px] font-semibold tracking-wider uppercase">
                Live
              </span>
            </div>

            <div className="mt-5 grid gap-3">
              {panels.map((panel, i) => (
                <motion.div
                  key={panel.label}
                  animate={{ y: [0, -7, 0] }}
                  transition={{
                    duration: 5 + i * 0.6,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: 'easeInOut',
                    delay: i * 0.25,
                  }}
                  className="glass flex items-center gap-3 rounded-2xl px-4 py-3"
                >
                  <span
                    className={
                      panel.accent
                        ? 'brand-gradient flex size-9 items-center justify-center rounded-xl'
                        : 'bg-surface flex size-9 items-center justify-center rounded-xl'
                    }
                  >
                    <panel.icon
                      className={
                        panel.accent
                          ? 'text-primary-foreground size-4.5'
                          : 'text-accent size-4.5'
                      }
                    />
                  </span>
                  <span className="flex-1 text-sm font-medium">
                    {panel.label}
                  </span>
                  <span className="text-muted-foreground text-xs font-semibold">
                    {panel.value}
                  </span>
                </motion.div>
              ))}
            </div>

            <div className="mt-6 space-y-4 border-t border-white/10 pt-5">

  <div>
    <div className="mb-1 flex justify-between text-sm font-medium">
      <span>Workato</span>
      <span>100%</span>
    </div>
    <div className="h-2 rounded-full bg-gray-700">
      <div className="h-2 w-full rounded-full brand-gradient"></div>
    </div>
  </div>

  <div>
    <div className="mb-1 flex justify-between text-sm font-medium">
      <span>MuleSoft</span>
      <span>95%</span>
    </div>
    <div className="h-2 rounded-full bg-gray-700">
      <div className="h-2 w-[95%] rounded-full brand-gradient"></div>
    </div>
  </div>

  <div>
    <div className="mb-1 flex justify-between text-sm font-medium">
      <span>Salesforce</span>
      <span>92%</span>
    </div>
    <div className="h-2 rounded-full bg-gray-700">
      <div className="h-2 w-[92%] rounded-full brand-gradient"></div>
    </div>
  </div>

   <div>
    <div className="mb-1 flex justify-between text-sm font-medium">
      <span>DevOps</span>
      <span>90%</span>
    </div>
    <div className="h-2 rounded-full bg-gray-700">
      <div className="h-2 w-[90%] rounded-full brand-gradient"></div>
    </div>
  </div>

</div>

          </div>

          <motion.div
            animate={{ y: [0, -14, 0] }}
            transition={{
              duration: 6,
              repeat: Number.POSITIVE_INFINITY,
              ease: 'easeInOut',
            }}
            className="glass absolute top-full left-0 mt-4 hidden rounded-2xl px-4 py-3 lg:block"
          >
            <p className="text-accent font-heading text-xl font-extrabold">
              +64%
            </p>
            <p className="text-muted-foreground text-[11px]">
              Automation velocity
            </p>
          </motion.div>

          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{
              duration: 7,
              repeat: Number.POSITIVE_INFINITY,
              ease: 'easeInOut',
              delay: 0.5,
            }}
            className="glass absolute right-0 bottom-full mb-4 hidden rounded-2xl px-4 py-3 lg:block"
          >
            <p className="font-heading text-xl font-extrabold">
              4,000+
            </p>
            <p className="text-muted-foreground text-[11px]">
              Professionals trained
            </p>
          </motion.div>

        </motion.div>
      </div>
    </section>
  )
}