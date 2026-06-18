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
    <div className="relative overflow-hidden border-y border-line bg-olive py-5 sm:py-6">
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-olive to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-olive to-transparent" />

      <div className="flex w-max animate-marquee will-change-transform">
        <span className="px-8 whitespace-nowrap text-sm tracking-[0.35em] text-bg/85 sm:text-base">
          {content}
        </span>
        <span className="px-8 whitespace-nowrap text-sm tracking-[0.35em] text-bg/85 sm:text-base">
          {content}
        </span>
      </div>
    </div>
  )
}

export default RotatingBadge
