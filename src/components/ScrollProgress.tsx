import { useRef } from "react"
import { gsap, useGSAP } from "@/lib/gsap"

// A 2px bar pinned to the top of the viewport whose width tracks how far
// down `document.body` the user has scrolled. Transform-only (`scaleX`),
// so it's compositor-driven and effectively free — no layout, no repaint.
// Rendered once in root.tsx, outside <Outlet/>, so it persists across
// client-side route changes instead of remounting.
const ScrollProgress = () => {
    const barRef = useRef<HTMLDivElement>(null)

    useGSAP(() => {
        const mm = gsap.matchMedia()

        mm.add("(prefers-reduced-motion: no-preference)", () => {
            // No explicit `scroller` — the default is the window/document,
            // which is correct now that html/body no longer force their own
            // scroll container (see the overflow-x fix in index.css).
            gsap.set(barRef.current, { scaleX: 0 })
            gsap.to(barRef.current, {
                scaleX: 1,
                ease: "none",
                scrollTrigger: {
                    start: "top top",
                    end: "max",
                    scrub: true,
                },
            })
        })

        return () => mm.revert()
    })

    return (
        <div
            aria-hidden="true"
            className="pointer-events-none fixed inset-x-0 top-0 z-[9998] h-[2px] origin-left bg-ink"
            ref={barRef}
        />
    )
}

export default ScrollProgress
