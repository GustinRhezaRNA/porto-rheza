import Navigation from "@/components/navbar"
import { ArrowRight } from "lucide-react"
import { Link } from "react-router"
import { useRef } from "react"
import { gsap, SplitText, useGSAP } from "@/lib/gsap"
import { useMagnetic } from "@/hooks/useMagnetic"
import { waitForPreloaderExit } from "@/lib/preloader"

// Not every stat is a count-up-able number ("E2E" isn't), so each entry
// carries either `value`+`suffix` (animated) or a plain `text` (just fades in
// with the rest of the row).
const stats = [
    { value: 1, suffix: "+", label: "Years of experience" },
    { value: 10, suffix: "+", label: "Projects shipped" },
    { text: "E2E", label: "Product engineering" },
] as const

const Header = () => {
    const sectionRef = useRef<HTMLElement>(null)
    const taglineRef = useRef<HTMLDivElement>(null)
    const wordmarkRef = useRef<HTMLParagraphElement>(null)
    const headingRef = useRef<HTMLHeadingElement>(null)
    const paragraphRef = useRef<HTMLParagraphElement>(null)
    const ctaRef = useRef<HTMLAnchorElement>(null)
    const statsRef = useRef<HTMLDivElement>(null)

    useMagnetic(ctaRef)

    useGSAP(() => {
        const mm = gsap.matchMedia()

        // Everything below is created only when the user hasn't asked the OS
        // to reduce motion — not just paused, never instantiated at all.
        mm.add("(prefers-reduced-motion: no-preference)", () => {
            // Wordmark parallax — pure scroll position, nothing to wait on.
            // `ENGINEERING` is absolutely positioned inside this `overflow-hidden`
            // header, so it can't cause horizontal page overflow.
            gsap.to(wordmarkRef.current, {
                yPercent: -20,
                xPercent: 5,
                ease: "none",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top top",
                    end: "bottom top",
                    scrub: 0.6,
                },
            })

            // Entrance timeline. Gated on document.fonts.ready (splitting the
            // heading before the webfont lands measures the fallback font's
            // line breaks, so the per-word reveal masks end up the wrong
            // height) AND on the preloader, if one is showing: without that
            // second gate this plays out and finishes while still hidden
            // underneath the opaque curtain, so by the time the curtain
            // clears there's nothing left to see it play. SplitText/timeline
            // are created asynchronously here, so gsap's automatic context
            // tracking can't clean them up — the `cancelled` flag + manual
            // kill()/revert() below does it instead.
            let cancelled = false
            let split: SplitText | undefined
            let tl: gsap.core.Timeline | undefined

            Promise.all([document.fonts.ready, waitForPreloaderExit()]).then(() => {
                if (cancelled || !headingRef.current) return

                split = SplitText.create(headingRef.current, {
                    type: "words,lines",
                    mask: "lines",
                    aria: "auto",
                })

                tl = gsap.timeline({ defaults: { ease: "power3.out" } })
                    .from(taglineRef.current, { yPercent: -100, duration: 0.6 })
                    .from(split.words, { yPercent: 110, stagger: 0.055, duration: 0.8 }, "-=0.3")
                    .from(paragraphRef.current, { opacity: 0, y: 20, duration: 0.6 }, "-=0.4")
                    .from(ctaRef.current, { opacity: 0, scale: 0.9, duration: 0.5 }, "-=0.3")
                    .from(
                        statsRef.current?.children ?? [],
                        { opacity: 0, y: 20, stagger: 0.08, duration: 0.5 },
                        "-=0.2"
                    )

                // Count-up runs alongside the stat row's fade-in ("<" = start
                // together with the previous tween), targeting only the
                // number span so the "+"/"E2E" text next to it doesn't tween.
                statsRef.current
                    ?.querySelectorAll<HTMLElement>("[data-count]")
                    .forEach((el) => {
                        tl?.fromTo(
                            el,
                            { innerText: 0 },
                            {
                                innerText: Number(el.dataset.count),
                                duration: 1,
                                ease: "power2.out",
                                snap: { innerText: 1 },
                            },
                            "<"
                        )
                    })
            })

            return () => {
                cancelled = true
                tl?.kill()
                split?.revert()
            }
        })

        return () => mm.revert()
    }, { scope: sectionRef })

    return (
        <header ref={sectionRef} id="home" className="relative min-h-screen overflow-hidden bg-bg text-ink">

            {/* Top tagline bar */}
            <div ref={taglineRef} className="flex items-center justify-between border-b border-line px-6 py-4 text-[0.7rem] uppercase tracking-[0.22em] text-muted sm:px-12">
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
                ref={wordmarkRef}
                aria-hidden="true"
                className="pointer-events-none absolute right-4 top-16 select-none text-[18vw] font-bold leading-none tracking-tighter text-[#d3d2cb] will-change-transform sm:right-12 sm:top-20 lg:text-[13rem]"
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
                            <h1 ref={headingRef} className="display relative z-10 max-w-[13ch] text-[clamp(2.5rem,8vw,7.5rem)]">
                                Build Products<br />
                                From Idea<br />
                                to Production
                            </h1>
                        </div>

                        <p ref={paragraphRef} className="mt-8 max-w-xl text-sm leading-relaxed text-ink/70 sm:text-base">
                            I'm Gustin Rheza, a software engineer focused on building
                            reliable, scalable, and thoughtful digital products. I work
                            across the stack from architecture and backend systems to
                            frontend experiences and deployment.
                        </p>

                        <Link
                            ref={ctaRef}
                            to="/#contact"
                            data-cursor="link"
                            className="mt-5 inline-flex items-center gap-3 rounded-full bg-ink px-5 py-3 text-sm font-medium text-bg transition-colors hover:bg-ink/80"
                        >
                            Let's Build Something
                            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-bg text-ink">
                                <ArrowRight className="h-3 w-3" />
                            </span>
                        </Link>
                    </div>
                </div>

                {/* Stats */}
                <div ref={statsRef} className="mt-16 flex flex-wrap gap-10 border-t border-line pt-8 sm:gap-20">
                    {stats.map((stat) => (
                        <div key={stat.label}>
                            <p className="text-3xl font-semibold tabular-nums sm:text-4xl">
                                {"text" in stat ? (
                                    stat.text
                                ) : (
                                    <>
                                        {/* Real value in the markup, not a placeholder "0": no-JS/
                                            crawler visitors and prefers-reduced-motion (which skips
                                            the tween below entirely) both need the correct number to
                                            just be there. `fromTo`'s `from: {innerText:0}` overwrites
                                            this the instant the animation actually starts. */}
                                        <span data-count={stat.value} className="inline-block min-w-[1ch]">
                                            {stat.value}
                                        </span>
                                        {stat.suffix}
                                    </>
                                )}
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
