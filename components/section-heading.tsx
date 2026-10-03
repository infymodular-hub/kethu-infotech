import { Reveal } from '@/components/reveal'
import { cn } from '@/lib/utils'

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
}: {
  eyebrow: string
  title: React.ReactNode
  description?: string
  align?: 'center' | 'left'
}) {
  return (
    <div
      className={cn(
        'max-w-3xl',
        align === 'center' ? 'mx-auto text-center' : 'text-left',
      )}
    >
      <Reveal direction="fade">
        <span className="glass text-accent inline-flex rounded-full px-4 py-1.5 text-[11px] font-semibold tracking-[0.2em] uppercase">
          {eyebrow}
        </span>
      </Reveal>
      <Reveal delay={0.08}>
        <h2 className="mt-5 text-[clamp(1.75rem,4vw,3rem)] leading-[1.1] text-balance">
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={0.16}>
          <p className="text-muted-foreground mt-4 text-base leading-relaxed text-pretty">
            {description}
          </p>
        </Reveal>
      )}
    </div>
  )
}
