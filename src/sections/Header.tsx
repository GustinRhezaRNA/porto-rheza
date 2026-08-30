import Navigation from "@/components/navbar"
import { ArrowRight } from "lucide-react"

const stats = [
    { value: "1+", label: "Years of experience" },
    { value: "10+", label: "Projects shipped" },
    { value: "E2E", label: "Product engineering" },
]

const Header = () => {
    return (
        <header id="home" className="relative min-h-screen overflow-hidden bg-bg text-ink">

            {/* Top tagline bar */}
            <div className="flex items-center justify-between border-b border-line px-6 py-4 text-[0.7rem] uppercase tracking-[0.22em] text-muted sm:px-12">
                <span className="font-semibold text-ink">
                    Gustin Rheza<span className="text-ink"> ✦</span>
                </span>

                <span className="hidden sm:block">
                    Software Engineer · End-to-End Product Engineering
                </span>

                <span className="hidden text-ink sm:block">
                    Available for work
                </span>
            </div>

            {/* Faint background wordmark */}
            <p
                aria-hidden="true"
                className="pointer-events-none absolute right-4 top-16 select-none text-[18vw] font-bold leading-none tracking-tighter text-[#d3d2cb] sm:right-12 sm:top-20 lg:text-[13rem]"
            >
                ENGINEERING
            </p>

            <div className="relative z-10 px-6 pb-16 pt-12 sm:px-12 sm:pt-16">
                <div className="grid grid-cols-1 gap-12 lg:grid-cols-[240px_1fr]">

                    {/* Left: vertical nav */}
                    <div className="order-2 lg:order-1">
                        <Navigation />
                    </div>

                    {/* Right: heading + introduction */}
                    <div className="relative order-1 lg:order-2">

                        <div className="relative lg:min-h-[26rem]">
                            <h1 className="display relative z-10 max-w-[13ch] text-[clamp(2.5rem,8vw,7.5rem)]">
                                Build Products<br />
                                From Idea<br />
                                to Production
                            </h1>
                        </div>

                        <p className="mt-8 max-w-xl text-sm leading-relaxed text-ink/70 sm:text-base">
                            I'm Gustin Rheza, a software engineer focused on building
                            reliable, scalable, and thoughtful digital products. I work
                            across the stack from architecture and backend systems to
                            frontend experiences and deployment.
                        </p>

                        <a
                            href="/#contact"
                            className="mt-5 inline-flex items-center gap-3 rounded-full bg-ink px-5 py-3 text-sm font-medium text-bg transition-colors hover:bg-ink/80"
                        >
                            Let's Build Something
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
                            <p className="text-3xl font-semibold sm:text-4xl">
                                {stat.value}
                            </p>

                            <p className="mt-1 text-xs uppercase tracking-[0.18em] text-muted">
                                {stat.label}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </header>
    )
}

export default Header
