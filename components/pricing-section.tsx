'use client'

import { motion } from 'framer-motion'
import {
  Check,
  Star,
  GraduationCap,
  Building2,
} from 'lucide-react'

const plans = [
  {
    name: 'Basic',
    price: '₹14,999',
    subtitle: 'Perfect for Beginners',
    icon: GraduationCap,
    featured: false,
    button: 'Get Started',
    features: [
      'Recorded Sessions',
      'Lifetime Access',
      'Course Materials',
      'Assignments',
      'Community Support',
      'Certificate of Completion',
    ],
  },
  {
    name: 'Professional',
    price: '₹19,999',
    subtitle: 'Most Popular',
    icon: Star,
    featured: true,
    button: 'Enroll Now',
    features: [
      'Live Instructor Sessions',
      'Real-Time Projects',
      'Resume Building',
      'Interview Preparation',
      'Certification Guidance',
      'Placement Assistance',
      'Lifetime Updates',
      'Priority WhatsApp Support',
    ],
  },
    {
    name: 'Corporate',
    price: 'Custom',
    subtitle: 'For Teams & Enterprises',
    icon: Building2,
    featured: false,
    button: 'Contact Sales',
    features: [
      'Corporate Batch Training',
      'Onsite / Online Sessions',
      'Customized Curriculum',
      'Enterprise Use Cases',
      'Dedicated Trainer',
      'Flexible Schedule',
      'Training Certificate',
      'Post Training Support',
    ],
  },
]

export function PricingSection() {
  return (
    <section className="bg-slate-950 py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <span className="inline-flex rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm font-semibold text-cyan-400">
            Pricing Plans
          </span>

          <h2 className="mt-6 text-4xl font-bold text-white lg:text-5xl">
            Choose Your Learning Plan
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg text-slate-400">
            Flexible learning options designed for students,
            professionals, and enterprise teams.
          </p>

        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {plans.map((plan, index) => {
            const Icon = plan.icon

            return (              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                whileHover={{ y: -8 }}
                className={`relative rounded-3xl border p-8 transition-all duration-300 ${
                  plan.featured
                    ? 'border-cyan-400 bg-slate-900 shadow-[0_0_40px_rgba(34,211,238,0.18)]'
                    : 'border-slate-800 bg-slate-900 hover:border-cyan-500/40'
                }`}
              >
                {plan.featured && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-cyan-400 px-4 py-2 text-sm font-bold text-slate-950">
                    ⭐ Most Popular
                  </div>
                )}

                <div className="flex items-center gap-4">
                  <div
                    className={`rounded-2xl p-4 ${
                      plan.featured
                        ? 'bg-cyan-400 text-slate-950'
                        : 'bg-slate-800 text-cyan-400'
                    }`}
                  >
                    <Icon size={28} />
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-white">
                      {plan.name}
                    </h3>

                    <p className="text-slate-400">
                      {plan.subtitle}
                    </p>
                  </div>
                </div>

                <div className="mt-8">
                  <h2 className="text-5xl font-extrabold text-white">
                    {plan.price}
                  </h2>
                </div>

                <div className="mt-8 space-y-4">
                  {plan.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center gap-3"
                    >
                      <Check className="h-5 w-5 text-cyan-400" />

                      <span className="text-slate-300">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>                <button
                  className={`mt-10 w-full rounded-xl py-4 text-lg font-semibold transition-all duration-300 ${
                    plan.featured
                      ? 'bg-cyan-400 text-slate-950 hover:bg-cyan-300'
                      : 'border border-slate-700 bg-slate-800 text-white hover:border-cyan-400 hover:bg-slate-700'
                  }`}
                >
                  {plan.button}
                </button>
              </motion.div>
            )
          })}
        </div>

        <div className="mt-20 rounded-3xl border border-cyan-500/20 bg-gradient-to-r from-slate-900 to-slate-800 p-10 text-center">

          <h3 className="text-3xl font-bold text-white">
            Need a Customized Learning Plan?
          </h3>

          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-400">
            Whether you're an individual learner, a working professional,
            or an enterprise team, we'll help you choose the right
            Workato learning path.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">

            <button className="rounded-xl bg-cyan-400 px-8 py-4 text-lg font-semibold text-slate-950 transition hover:bg-cyan-300">
              📞 Book Free Demo
            </button>

            <button className="rounded-xl border border-slate-700 px-8 py-4 text-lg font-semibold text-white transition hover:border-cyan-400 hover:bg-slate-800">
              💬 Chat on WhatsApp
            </button>

          </div>

        </div>

      </div>
    </section>
  )
}