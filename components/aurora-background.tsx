export function AuroraBackground() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* base wash */}
      <div className="absolute inset-0 bg-background" />

      {/* aurora blobs */}
      <div className="animate-drift absolute -top-40 -left-32 size-[46rem] rounded-full bg-primary/40 blur-[130px]" />
      <div
        className="animate-drift absolute top-1/3 -right-40 size-[40rem] rounded-full bg-accent/25 blur-[140px]"
        style={{ animationDelay: '-6s' }}
      />
      <div
        className="animate-drift absolute bottom-0 left-1/3 size-[38rem] rounded-full bg-primary/15 blur-[150px]"
        style={{ animationDelay: '-12s' }}
      />

      {/* grid */}
      <div className="grid-lines absolute inset-0 [mask-image:radial-gradient(ellipse_at_50%_0%,#000_10%,transparent_70%)]" />

      {/* vignette + noise */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_-10%,transparent_20%,var(--background)_75%)]" />
      <div className="noise absolute inset-0 opacity-[0.035] mix-blend-overlay" />
    </div>
  )
}
