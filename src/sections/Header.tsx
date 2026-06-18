import Navigation from "@/components/navbar"
import { ArrowRight } from "lucide-react"

const stats = [
    { value: "1+", label: "Years of experience" },
    { value: "10+", label: "Successful projects" },
    { value: "98%", label: "Satisfied clients" },
]

const Header = () => {
    return (
        <header id="home" className="relative min-h-screen overflow-hidden bg-bg text-ink">

            {/* Top tagline bar */}
            <div className="flex items-center justify-between border-b border-line px-6 py-4 text-[0.7rem] uppercase tracking-[0.22em] text-muted sm:px-12">
                <span className="font-semibold text-ink">
                    Gustin Rheza<span className="text-olive"> ✦</span>
                </span>
                <span className="hidden sm:block">Full-Stack Developer · Crafting modern web experiences</span>
                <span className="hidden text-ink sm:block">Available for work</span>
            </div>

            {/* Faint background wordmark */}
            <p className="pointer-events-none absolute right-4 top-16 select-none text-[18vw] font-bold leading-none tracking-tighter text-[#d3d2cb] sm:right-12 sm:top-20 lg:text-[13rem]">
                PORTOFOLIO
            </p>

            <div className="relative z-10 px-6 pb-16 pt-12 sm:px-12 sm:pt-16">
                <div className="grid grid-cols-1 gap-12 lg:grid-cols-[240px_1fr]">

                    {/* Left: vertical nav */}
                    <div className="order-2 lg:order-1">
                        <Navigation />
                    </div>

                    {/* Right: heading + portrait */}
                    <div className="relative order-1 lg:order-2">
                        <div className="relative lg:min-h-[26rem]">
                            <h1 className="display relative z-10 max-w-[14ch] text-[3.2rem] sm:text-[5rem] lg:text-[6.5rem] xl:text-[7.5rem]">
                                Creative Web<br />
                                That Brings Your<br />
                                Ideas to Life
                            </h1>

                            <div className="relative mt-8 aspect-[4/5] w-full overflow-hidden rounded-sm sm:w-3/4 lg:absolute lg:right-0 lg:top-0 lg:mt-0 lg:aspect-auto lg:h-full lg:w-[42%]">
                                <img
                                    src="/Profile.webp"
                                    alt="Gustin Rheza"
                                    className="h-full w-full object-cover grayscale"
                                    fetchPriority="high"
                                    decoding="async"
                                />
                            </div>
                        </div>

                        <p className="mt-8 max-w-md text-sm leading-relaxed text-ink/70 sm:text-base">
                            Hi, I'm Rheza — a full-stack developer building scalable, responsive web
                            applications. From frontend interfaces to backend integration, I deliver
                            functional solutions that elevate your product.
                        </p>

                        <a
                            href="#contact"
                            className="mt-5 inline-flex items-center gap-3 rounded-full bg-ink px-5 py-3 text-sm font-medium text-bg transition-colors hover:bg-olive"
                        >
                            Let's Discuss
                            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-bg text-ink">
                                <ArrowRight className="h-3 w-3" />
                            </span>
                        </a>
                    </div>
                </div>

                {/* Stats */}
                <div className="mt-16 flex flex-wrap gap-10 border-t border-line pt-8 sm:gap-20">
                    {stats.map((stat) => (
                        <div key={stat.label}>
                            <p className="text-3xl font-semibold sm:text-4xl">{stat.value}</p>
                            <p className="mt-1 text-xs uppercase tracking-[0.18em] text-muted">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </header>
    )
}

export default Header
