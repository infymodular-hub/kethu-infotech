'use client'

import { useState } from 'react'
import emailjs from "@emailjs/browser"
import { motion } from 'motion/react'
import {
  ArrowRight,
  CheckCircle2,
  Clock,
  Globe,
  Mail,
  Phone,
  Send,
} from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { SectionHeading } from '@/components/section-heading'
import { company, teamSizes, technologies } from '@/lib/site-data'

const fieldClass = 'h-11 rounded-xl bg-white/[0.04] px-3.5 text-sm'
const labelClass = 'text-xs font-semibold tracking-wide text-muted-foreground'

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [intent, setIntent] = useState('Request Proposal')

  return (
    <section
      id="contact"
      className="relative border-t border-white/5 bg-[radial-gradient(ellipse_at_bottom,rgba(0,212,255,0.14),transparent_60%)] py-20 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-5">
        <SectionHeading
          eyebrow="Talk To Us"
          title={
            <>
              Build your training plan with{' '}
              <span className="text-gradient">our enterprise team</span>
            </>
          }
          description="Share your requirement and receive a costed proposal with curriculum, trainer profiles and delivery timeline."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <motion.aside
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="glass flex flex-col justify-between gap-8 rounded-3xl p-7"
          >
            <div>
              <h3 className="font-heading text-xl font-bold">
                Contact KETHU INFOTECH
              </h3>
              <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
                Our corporate desk responds within one business day with a
                tailored programme outline.
              </p>

              <ul className="mt-7 space-y-4 text-sm">
                <li>
                  <a
                    href={company.phoneHref}
                    className="hover:text-accent flex items-center gap-3 transition-colors"
                  >
                    <span className="bg-surface text-accent flex size-10 items-center justify-center rounded-xl">
                      <Phone className="size-4.5" />
                    </span>
                    {company.phone}
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${company.email}`}
                    className="hover:text-accent flex items-center gap-3 transition-colors"
                  >
                    <span className="bg-surface text-accent flex size-10 items-center justify-center rounded-xl">
                      <Mail className="size-4.5" />
                    </span>
                    {company.email}
                  </a>
                </li>
                <li>
                  <a
                    href={company.website}
                    className="hover:text-accent flex items-center gap-3 transition-colors"
                  >
                    <span className="bg-surface text-accent flex size-10 items-center justify-center rounded-xl">
                      <Globe className="size-4.5" />
                    </span>
                    www.kethuinfotech.in
                  </a>
                </li>
                <li className="text-muted-foreground flex items-center gap-3">
                  <span className="bg-surface text-accent flex size-10 items-center justify-center rounded-xl">
                    <Clock className="size-4.5" />
                  </span>
                  Mon – Sat · 9:00 AM to 8:00 PM IST
                </li>
              </ul>
            </div>

            <div className="glass rounded-2xl p-4">
              <p className="font-heading text-sm font-bold">
                Need a fast turnaround?
              </p>
              <p className="text-muted-foreground mt-1 text-xs leading-relaxed">
                Emergency upskilling batches can start within 72 hours for
                Workato, MuleSoft and DevOps.
              </p>
            </div>
          </motion.aside>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="glass glow-ring rounded-3xl p-7"
          >
            {submitted ? (
              <div className="flex min-h-80 flex-col items-center justify-center text-center">
                <span className="brand-gradient flex size-14 items-center justify-center rounded-2xl">
                  <CheckCircle2 className="text-primary-foreground size-7" />
                </span>
                <h3 className="font-heading mt-5 text-xl font-bold">
                  ✅ Enquiry Submitted Successfully
                </h3>
                <p className="text-muted-foreground mt-2 max-w-sm text-sm leading-relaxed">
                   Thank you for contacting <strong>KETHU INFOTECH</strong>.<br /><br />
  We have received your corporate training enquiry. Our team will review your
  requirements and contact you within <strong>one business day</strong> with a
  customized training proposal.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="text-accent mt-6 text-sm font-semibold"
                >
                  Submit another enquiry
                </button>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
  e.preventDefault()
  const form = e.currentTarget
  setLoading(true)

  emailjs
    .sendForm(
      "service_f0ww3zg",
      "template_svi53mj",
      form,
      "HNY8N0OJEmrr4ZOR6"
    )
   .then(() => {
  emailjs.sendForm(
    "service_f0ww3zg",
    "template_1xn24yu",
    form,
    "HNY8N0OJEmrr4ZOR6"
  )

  form.reset()
  setLoading(false)
  setSubmitted(true)
})
   .catch((error) => {
  setLoading(false)
  console.error("EmailJS Error:", error)
  alert(error.text || error.message || "Failed to send enquiry.")

    })
}}
                className="grid gap-4 sm:grid-cols-2"
              >
                <div className="grid gap-2">
                  <Label htmlFor="name" className={labelClass}>
                    Full name
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    required
                    autoComplete="name"
                    placeholder="Priya Nair"
                    className={fieldClass}
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="companyName" className={labelClass}>
                    Company
                  </Label>
                  <Input
                    id="companyName"
                    name="company"
                    required
                    autoComplete="organization"
                    placeholder="Acme Technologies"
                    className={fieldClass}
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="email" className={labelClass}>
                    Work email
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    placeholder="priya@acme.com"
                    className={fieldClass}
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="phone" className={labelClass}>
                    Phone
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    autoComplete="tel"
                    placeholder="+91 98765 43210"
                    className={fieldClass}
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="technology" className={labelClass}>
                    Technology
                  </Label>
                  <select
                    id="technology"
                    name="technology"
                    required
                    defaultValue=""
                    className="border-input h-11 w-full rounded-xl border bg-white/[0.04] px-3 text-sm outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
                  >
                    <option value="" disabled>
                      Select a technology
                    </option>
                    {technologies.map((tech) => (
                      <option key={tech} value={tech} className="bg-card">
                        {tech}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="employees" className={labelClass}>
                    Number of employees
                  </Label>
                  <select
                    id="employees"
                    name="employees"
                    required
                    defaultValue=""
                    className="border-input h-11 w-full rounded-xl border bg-white/[0.04] px-3 text-sm outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
                  >
                    <option value="" disabled>
                      Select team size
                    </option>
                    {teamSizes.map((size) => (
                      <option key={size} value={size} className="bg-card">
                        {size}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="grid gap-2 sm:col-span-2">
                  <Label htmlFor="requirement" className={labelClass}>
                    Training requirement
                  </Label>
                  <Input
                    id="requirement"
                    name="requirement"
                    placeholder="e.g. Workato Automation Pro I for 25 integration engineers"
                    className={fieldClass}
                  />
                </div>
                <div className="grid gap-2 sm:col-span-2">
                  <Label htmlFor="message" className={labelClass}>
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Preferred timelines, delivery mode, existing skill levels…"
                    className="rounded-xl bg-white/[0.04] p-3.5 text-sm"
                  />
                </div>

                <div className="mt-2 flex flex-col gap-3 sm:col-span-2 sm:flex-row">
                  <button
  type="submit"
  onClick={() => setIntent('Request Proposal')}
  disabled={loading}
  className="brand-gradient group text-primary-foreground inline-flex flex-1 items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold shadow-[0_18px_45px_-16px_rgba(0,212,255,0.75)] transition-transform duration-300 hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-70"
>
  {loading ? "Sending Proposal..." : "Request Proposal"}

  {!loading && (
    <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1.5" />
  )}
</button>
                  <button
  type="button"
  onClick={() => {
    window.open(
      "https://wa.me/918660212995?text=Hi%20KETHU%20INFOTECH,%20I%20would%20like%20to%20book%20a%20corporate%20training%20demo.",
      "_blank"
    )
  }}
  className="glass glass-hover text-foreground inline-flex flex-1 items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold"
>
  <Send className="size-4" />

  Book Demo
</button>
                </div>

                <p className="text-muted-foreground sm:col-span-2 text-xs">
                  By submitting, you agree to be contacted about corporate
                  training programmes. We never share your details.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
