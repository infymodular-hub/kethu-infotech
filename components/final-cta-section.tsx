'use client'

import { motion } from 'framer-motion'

import {
  ArrowRight,
  Calendar,
  Phone,
  CheckCircle2,
} from 'lucide-react'

const highlights = [
  'Real-Time Projects',
  'Industry Expert Trainer',
  'Certification Guidance',
  'Placement Assistance',
]
export function FinalCTASection() {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-24">

      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-blue-600/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="rounded-[36px] border border-cyan-500/20 bg-gradient-to-br from-slate-900 to-slate-800 p-10 lg:p-16"
        >

          <div className="mx-auto max-w-4xl text-center">

            <span className="inline-flex rounded-full border border-cyan-500/30 bg-cyan-500/10 px-5 py-2 text-sm font-semibold text-cyan-400">
              🚀 Enroll Today
            </span>

            <h2 className="mt-8 text-4xl font-extrabold leading-tight text-white md:text-6xl">
              Ready to Become a
              <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Certified Workato Expert?
              </span>
            </h2>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-400">
              Master Workato with live instructor-led sessions, real-world
              projects, certification guidance, interview preparation, and
              dedicated placement assistance to accelerate your career.
            </p>

            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

              {highlights.map((item) => (
                <div
                  key={item}
                  className="flex items-center justify-center gap-2 rounded-xl border border-slate-700 bg-slate-900/80 px-5 py-4"
                >
                  <CheckCircle2 className="h-5 w-5 text-cyan-400" />
                  <span className="font-medium text-white">
                    {item}
                  </span>
                </div>
              ))}

            </div>            <div className="mt-14 flex flex-col items-center justify-center gap-5 sm:flex-row">

   <button
  onClick={() =>
    document
      .getElementById("contact")
      ?.scrollIntoView({ behavior: "smooth" })
  }
  className="inline-flex items-center justify-center rounded-xl bg-cyan-400 px-8 py-4 text-lg font-semibold text-slate-950 transition-all duration-300 hover:scale-105 hover:bg-cyan-300"
>
  Enroll Now
  <ArrowRight className="ml-2 h-5 w-5" />
</button>

              <button
  onClick={() =>
    document
      .getElementById("contact")
      ?.scrollIntoView({ behavior: "smooth" })
  }
  className="inline-flex items-center justify-center rounded-xl border border-cyan-500/30 bg-slate-900 px-8 py-4 text-lg font-semibold text-white transition-all duration-300 hover:border-cyan-400 hover:bg-slate-800"
>
  <Calendar className="mr-2 h-5 w-5" />
  Book Free Demo
</button>

             <button
  onClick={() =>
    window.open(
      "https://wa.me/918660212995?text=Hi%20KETHU%20INFOTECH,%20I%20am%20interested%20in%20the%20Workato%20Training.",
      "_blank"
    )
  }
  className="inline-flex items-center justify-center rounded-xl border border-green-500/30 bg-green-500/10 px-8 py-4 text-lg font-semibold text-green-400 transition-all duration-300 hover:border-green-400 hover:bg-green-500/20"
>
  <Phone className="mr-2 h-5 w-5" />
  WhatsApp Us
</button>

            </div>

            <p className="mt-8 text-center text-sm text-slate-500">
              Limited seats available for the next batch • Live Online Training •
              Flexible Timings • Lifetime Learning Support
            </p>

          </div>

        </motion.div>

      </div>

    </section>
  )
}