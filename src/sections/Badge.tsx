const RotatingBadge = () => {
  const items = [
    "NEXTJS",
    "REACT",
    "TYPESCRIPT",
    "TAILWIND",
    "NESTJS",
    "FASTAPI",
    "GRAPHQL",
    "POSTGRESQL",
    "PRISMA",
    "DOCKER",
    "AWS",
  ]

  const content = items.join("     /     ")

  return (
    <div className="relative overflow-hidden bg-black border-y border-[var(--third)] py-6 sm:py-8">

      {/* fade kiri */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-black to-transparent z-10" />

      {/* fade kanan */}
      <div className="pointer-events-none absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-black to-transparent z-10" />

      {/* TRACK */}
      <div className="flex w-max animate-marquee  will-change-transform">
        
        {/* content 1 */}
        <span className="px-120 text-[var(--third)] tracking-[0.35em] text-base sm:text-lg whitespace-nowrap">
          {content}
        </span>

        {/* content 2 (duplicate) */}
        <span className="px-8 text-[var(--third)] tracking-[0.35em] text-base sm:text-lg whitespace-nowrap">
          {content}
        </span>

      </div>
    </div>
  )
}

export default RotatingBadge