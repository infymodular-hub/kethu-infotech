import { Globe, Mail, MessageCircle, Phone, Send, Zap } from 'lucide-react'
import { company, courses, navLinks } from '@/lib/site-data'

export function SiteFooter() {
  return (
    <footer className="relative border-t border-white/10 bg-[#03060d]">
      <div className="mx-auto max-w-7xl px-5 pt-16 pb-28">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="brand-gradient flex size-9 items-center justify-center rounded-xl">
                <Zap className="text-primary-foreground size-4.5" />
              </span>
              <span className="font-heading text-base font-extrabold tracking-tight">
                KETHU<span className="text-accent"> INFOTECH</span>
              </span>
            </div>
            <p className="text-muted-foreground mt-4 text-sm leading-relaxed">
              Enterprise corporate training partner for Workato, MuleSoft,
              Salesforce, DevOps, Python, AI and cloud technologies — delivered
              across India and the US.
            </p>
            <div className="mt-5 flex gap-2">
              <a
                href={company.whatsapp}
                aria-label="Chat on WhatsApp"
                className="glass glass-hover text-accent flex size-9 items-center justify-center rounded-xl"
              >
                <MessageCircle className="size-4" />
              </a>
              <a
                href={`mailto:${company.email}`}
                aria-label="Email us"
                className="glass glass-hover text-accent flex size-9 items-center justify-center rounded-xl"
              >
                <Mail className="size-4" />
              </a>
              <a
                href={company.website}
                aria-label="Visit our website"
                className="glass glass-hover text-accent flex size-9 items-center justify-center rounded-xl"
              >
                <Globe className="size-4" />
              </a>
            </div>
          </div>

          <nav aria-label="Quick links">
            <h3 className="font-heading text-sm font-bold">Quick Links</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-accent transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Courses">
            <h3 className="font-heading text-sm font-bold">Top Courses</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {courses.slice(0, 8).map((course) => (
                <li key={course.name}>
                  <a
                    href="#courses"
                    className="text-muted-foreground hover:text-accent transition-colors"
                  >
                    {course.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="font-heading text-sm font-bold">Newsletter</h3>
            <p className="text-muted-foreground mt-4 text-sm leading-relaxed">
              Monthly enterprise upskilling insights, curriculum updates and
              batch announcements.
            </p>
            <form className="mt-4 flex gap-2">
              <label htmlFor="newsletter" className="sr-only">
                Work email
              </label>
              <input
                id="newsletter"
                type="email"
                required
                placeholder="you@company.com"
                className="border-input h-11 w-full rounded-xl border bg-white/[0.04] px-3.5 text-sm outline-none placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
              />
              <button
                type="submit"
                aria-label="Subscribe to newsletter"
                className="brand-gradient text-primary-foreground flex size-11 shrink-0 items-center justify-center rounded-xl"
              >
                <Send className="size-4" />
              </button>
            </form>
            <ul className="text-muted-foreground mt-5 space-y-2 text-sm">
              <li>
                <a
                  href={company.phoneHref}
                  className="hover:text-accent inline-flex items-center gap-2 transition-colors"
                >
                  <Phone className="size-4" /> {company.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${company.email}`}
                  className="hover:text-accent inline-flex items-center gap-2 transition-colors"
                >
                  <Mail className="size-4" /> {company.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 h-px w-full brand-gradient opacity-40" />

        <div className="text-muted-foreground mt-6 flex flex-col gap-2 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {company.name}. All rights reserved.
          </p>
          <p>Corporate IT training · India · United States</p>
        </div>
      </div>
    </footer>
  )
}
