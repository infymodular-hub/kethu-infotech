import { trustedCompanies } from '@/lib/site-data'

export function LogoMarquee() {
  const row = [...trustedCompanies, ...trustedCompanies]

  return (
    <section id="clients" className="relative py-12">
      <div className="mx-auto max-w-7xl px-5">
        <p className="text-muted-foreground text-center text-xs font-semibold tracking-[0.28em] uppercase">
          Our learners work at
        </p>

        <div className="marquee-mask group mt-8 overflow-hidden">
          <div className="animate-marquee flex w-max gap-4 group-hover:[animation-play-state:paused]">
            {row.map((name, i) => (
              <div
                key={`${name}-${i}`}
                className="glass flex h-16 w-44 shrink-0 items-center justify-center rounded-2xl transition-colors duration-300 hover:border-blue-400/50"
              >
                <span className="font-heading text-blue-400 text-sm font-extrabold tracking-tight">
                  {name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}