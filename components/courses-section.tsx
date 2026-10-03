'use client'
import Image from "next/image";
import { motion } from 'motion/react'
import Link from "next/link"
import {
  Activity,
  ArrowRight,
  Award,
  BarChart3,
  Clock,
  Cloud,
  CloudCog,
  Code2,
  Coffee,
  Container,
  HeartPulse,
  Layers,
  Network,
  Server,
  Sparkles,
  TestTubes,
  Users,
  Workflow,
  type LucideIcon,
} from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { courses } from '@/lib/site-data'

const iconMap: Record<string, LucideIcon> = {
  Workflow,
  Network,
  CloudCog,
  Code2,
  Container,
  Sparkles,
  Cloud,
  Server,
  Coffee,
  TestTubes,
  BarChart3,
  HeartPulse,
  Users,
  Activity,
}

export function CoursesSection() {
  return (
    <section
      id="courses"
      className="relative border-y border-white/5 bg-[linear-gradient(180deg,rgba(255,255,255,0.03),transparent_45%)] py-20 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-5">
        <SectionHeading
          eyebrow="Corporate Training Catalogue"
          title={
            <>
              Enterprise programmes built for{' '}
              <span className="text-gradient">real delivery teams</span>
            </>
          }
          description="Every programme is customisable — module depth, duration and project scenarios are aligned to your internal architecture and tooling."
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((course, i) => {

            return (
              <motion.article
                key={course.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55, delay: (i % 3) * 0.08 }}
                className="glass glass-hover group relative overflow-hidden rounded-3xl p-6"
              >
                <div className="pointer-events-none absolute -top-24 -right-16 size-48 rounded-full bg-primary/20 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

                <div className="relative flex items-start justify-between">
                 <div className="flex h-14 w-14 items-center justify-center">
  <Image
  src={course.logo}
  alt="Workato"
  width={56}
  height={56}
  className="object-contain"
/>
   
</div>
                  {course.tag && (
                    <span className="glass text-accent rounded-full px-3 py-1 text-[10px] font-semibold tracking-wider uppercase">
                      {course.tag}
                    </span>
                  )}
                </div>

                <h3 className="font-heading relative mt-5 text-lg font-bold">
                  {course.name}
                </h3>
                <p className="text-muted-foreground relative mt-2 text-sm leading-relaxed">
                  {course.blurb}
                </p>

                <dl className="text-muted-foreground relative mt-5 space-y-2 text-xs">
                  <div className="flex items-center gap-2">
                    <Clock className="text-accent size-3.5" />
                    <dt className="sr-only">Duration</dt>
                    <dd>{course.duration}</dd>
                  </div>
                  <div className="flex items-center gap-2">
                    <Layers className="text-accent size-3.5" />
                    <dt className="sr-only">Level</dt>
                    <dd>{course.level}</dd>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="text-accent size-3.5" />
                    <dt className="sr-only">Certification</dt>
                    <dd>{course.certification}</dd>
                  </div>
                </dl>

                <div className="border-border relative mt-5 flex items-center justify-between border-t pt-4">
                  <span className="glass rounded-full px-3 py-1 text-[10px] font-semibold tracking-wider uppercase">
                    Corporate Ready
                  </span>
             <Link
  href={`/courses/${course.name
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/\s+/g, "-")}`}
  className="text-accent inline-flex items-center gap-1.5 text-sm font-semibold"
>
  Learn more
  <ArrowRight className="size-4" />
</Link>
                </div>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
