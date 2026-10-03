'use client'

import { motion } from 'framer-motion'
import {
  Award,
  Briefcase,
  FileText,
  Users,
  LinkIcon,
  BadgeCheck,
} from "lucide-react";

const benefits = [
  {
    icon: Award,
    title: 'Course Completion Certificate',
    description:
      'Receive an industry-recognized certificate after successfully completing the Workato Master Program.',
  },
  {
    icon: Briefcase,
    title: 'Placement Assistance',
    description:
      'Get complete placement support including interview referrals and career guidance.',
  },
  {
    icon: FileText,
    title: 'Resume Building',
    description:
      'Build a professional ATS-friendly resume designed specifically for enterprise automation roles.',
  },
  {
    icon: LinkIcon,
    title: 'LinkedIn Profile Optimization',
    description:
      'Optimize your LinkedIn profile to attract recruiters and hiring managers.',
  },
  {
    icon: Users,
    title: 'Mock Interviews',
    description:
      'Practice with real interview questions and receive personalized feedback.',
  },
  {
    icon: BadgeCheck,
    title: 'Lifetime Community Access',
    description:
      'Join our exclusive alumni community for networking, job updates, and continued learning.',
  },
]
export function CertificationPlacementSection() {
  return (
    <section className="bg-slate-950 py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <span className="inline-flex rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm font-semibold text-cyan-400">
            Certification & Career Support
          </span>

          <h2 className="mt-6 text-4xl font-bold text-white lg:text-5xl">
            Get Certified. Get Hired.
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg text-slate-400">
            We don't just teach Workato. We help you become
            interview-ready, certification-ready, and job-ready with
            complete career guidance.
          </p>

        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {benefits.map((item, index) => {
            const Icon = item.icon

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="rounded-3xl border border-slate-800 bg-slate-900 p-8 transition-all duration-300 hover:border-cyan-500/40 hover:shadow-[0_0_30px_rgba(34,211,238,0.15)]"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-500/10">
                  <Icon className="h-8 w-8 text-cyan-400" />
                </div>

                <h3 className="mt-6 text-2xl font-bold text-white">
                  {item.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-400">
                  {item.description}
                </p>
                                <div className="mt-8 flex items-center text-cyan-400 font-semibold">
                  
                </div>

              </motion.div>
            )
          })}

        </div>

        <div className="mt-20 rounded-3xl border border-cyan-500/20 bg-gradient-to-r from-slate-900 to-slate-800 p-10 lg:p-14">

          <div className="grid items-center gap-10 lg:grid-cols-2">

            <div>

              <span className="inline-flex rounded-full bg-cyan-500/10 px-4 py-2 text-sm font-semibold text-cyan-400">
                Career Success Program
              </span>

              <h3 className="mt-6 text-4xl font-bold text-white">
                Your Career Doesn't End After Training.
              </h3>

              <p className="mt-6 text-lg leading-8 text-slate-400">
                From your first class to your first job offer, KETHU INFOTECH
                supports you with career mentoring, interview preparation,
                certification guidance, resume optimization, and placement
                assistance to help you confidently start your Workato career.
              </p>

            </div>

            <div className="space-y-5">

              {[
                '✔ Resume Review & ATS Optimization',
                '✔ LinkedIn Profile Enhancement',
                '✔ Mock Technical Interviews',
                '✔ HR Interview Preparation',
                '✔ Workato Certification Guidance',
                '✔ Placement & Referral Assistance',
              ].map((point) => (
                <div
                  key={point}
                  className="rounded-2xl border border-slate-800 bg-slate-900 px-6 py-5 text-lg text-slate-200"
                >
                  {point}
                </div>
              ))}

            </div>
                        <div className="mt-10 flex flex-col gap-4 sm:flex-row">

              <button className="rounded-xl bg-cyan-400 px-8 py-4 text-lg font-semibold text-slate-950 transition-all duration-300 hover:bg-cyan-300">
                🚀 Enroll Now
              </button>

              <button className="rounded-xl border border-slate-700 px-8 py-4 text-lg font-semibold text-white transition-all duration-300 hover:border-cyan-400 hover:bg-slate-800">
                📅 Schedule Free Demo
              </button>

            </div>

          </div>

        </div>

      </div>
    </section>
  )
}