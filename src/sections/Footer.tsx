import { Link } from "react-router"
import { useRef } from "react"
import { gsap, SplitText, useGSAP } from "@/lib/gsap"

const socials = [
    { label: "GitHub", href: "https://github.com/GustinRhezaRNA" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/gustin-rheza" },
    { label: "Instagram", href: "https://www.instagram.com/rhezaazdy" },
    { label: "Email", href: "mailto:rezarna4@gmail.com" },
]

const Footer = () => {
    const headingRef = useRef<HTMLHeadingElement>(null)

    useGSAP(() => {
        const mm = gsap.matchMedia()

        mm.add("(prefers-reduced-motion: no-preference)", () => {
            // Same font.fonts.ready gate as the hero: splitting before the
            // webfont lands measures the fallback font's line breaks, so the
            // reveal masks end up the wrong height.
            let cancelled = false
            let split: SplitText | undefined
            let tween: gsap.core.Tween | undefined

            document.fonts.ready.then(() => {
                if (cancelled || !headingRef.current) return

                split = SplitText.create(headingRef.current, {
                    type: "lines",
                    mask: "lines",
                })

                tween = gsap.from(split.lines, {
                    yPercent: 110,
                    stagger: 0.12,
                    duration: 0.9,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: headingRef.current,
                        start: "top 85%",
                        once: true,
                    },
                })
            })

            return () => {
                cancelled = true
                tween?.kill()
                split?.revert()
            }
        })

        return () => mm.revert()
    })

    return (
        <footer id="contact" className="border-t border-line bg-card px-6 py-12 text-ink sm:px-12">

            {/* Top meta row */}
            <div className="flex flex-col items-center gap-3 border-b border-line pb-8 text-[0.7rem] uppercase tracking-[0.22em] text-muted sm:flex-row sm:justify-between">
                <span>Portfolio 2024–2026</span>
                <span className="font-semibold text-ink">Gustin Rheza ✦</span>
                <span>Available · Freelance Work</span>
            </div>

            {/* CTA */}
            <div className="flex flex-col items-center py-20 text-center sm:py-28">
                <h2 ref={headingRef} className="display text-4xl sm:text-6xl lg:text-7xl">
                    Interested In<br />Working Together?
                </h2>
                <p className="mt-10 eyebrow text-muted">Drop me an email</p>
                <a
                    href="mailto:rezarna4@gmail.com"
                    data-cursor="link"
                    className="mt-2 text-lg font-semibold underline decoration-ink/30 underline-offset-8 transition-colors hover:decoration-ink sm:text-2xl"
                >
                    rezarna4@gmail.com
                </a>
            </div>

            {/* Bottom row */}
            <div className="flex flex-col items-center gap-6 border-t border-line pt-8 text-[0.7rem] uppercase tracking-[0.22em] text-muted sm:flex-row sm:justify-between">
                <span>© {new Date().getFullYear()} — All rights reserved</span>

                <div className="flex flex-wrap justify-center gap-3">
                    {socials.map((social) => (
                        <a
                            key={social.label}
                            href={social.href}
                            aria-label={social.label}
                            target={social.href.startsWith("http") ? "_blank" : undefined}
                            rel={social.href.startsWith("http") ? "noreferrer" : undefined}
                            data-cursor="link"
                            className="rounded-full border border-line px-4 py-2 text-ink/70 transition-colors hover:bg-ink hover:text-bg"
                        >
                            {social.label}
                        </a>
                    ))}
                </div>

                <Link to="/#home" data-cursor="link" className="text-ink/70 transition-colors hover:text-ink">
                    Back to top ↑
                </Link>
            </div>
        </footer>
    )
}

export default Footer
