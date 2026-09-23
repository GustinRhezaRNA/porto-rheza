import { AnimatePresence, m } from "framer-motion"
import { useLayoutEffect, useRef, useState } from "react"
import { gsap } from "@/lib/gsap"
import {
    PRELOADER_ATTR,
    PRELOADER_CAP_MS,
    PRELOADER_EXIT_EVENT,
    PRELOADER_FLAG,
    PRELOADER_MIN_MS,
    PRELOADER_SESSION_KEY,
    isPreloaderPending,
} from "@/lib/preloader"

// Mounted in root.tsx, outside <Outlet/>, so it never remounts on a
// client-side route change — it can only ever activate once, on a real
// document load. Whether it activates at all was already decided before
// this component exists, by the blocking script in root.tsx's <head>; this
// component only reads that decision and animates it.
const Preloader = () => {
    const [active, setActive] = useState(false)
    const counterRef = useRef<HTMLSpanElement>(null)
    const barRef = useRef<HTMLDivElement>(null)

    // Runs once per full page load. The attribute was set (or not) by the
    // blocking script before hydration even started, so this is just
    // reading a decision that's already final — starting from `false` and
    // flipping here (rather than reading it during render) means the server
    // HTML and this component's first client render agree, so there is
    // nothing for React to hydration-mismatch on; the CSS curtain in
    // index.css covers the page for the one frame in between regardless.
    useLayoutEffect(() => {
        if (isPreloaderPending()) {
            // Re-assert the attribute: a failed hydration (React #418) makes
            // React re-render <html> from scratch and strip it, which would
            // drop the CSS curtain and hide the preloader entirely.
            document.documentElement.setAttribute(PRELOADER_ATTR, "1")
            // Deliberate, not an anti-pattern here: `active` starts `false` so
            // the server render and the client's FIRST (hydration) render
            // agree exactly, with nothing to mismatch on. This setState
            // intentionally triggers a second, client-only render right after
            // hydration finishes, to reveal state (a DOM attribute set by a
            // pre-hydration script) that genuinely can't be read during
            // render on the server.
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setActive(true)
        }
    }, [])

    useLayoutEffect(() => {
        if (!active || !counterRef.current || !barRef.current) return

        const counterEl = counterRef.current
        const barEl = barRef.current
        let settled = false

        // One value drives both the number and the bar, via onUpdate, so
        // they can never drift apart the way two independently-tweened
        // elements could.
        const progress = { value: 0 }
        const render = () => {
            counterEl.textContent = String(Math.round(progress.value))
            gsap.set(barEl, { scaleX: progress.value / 100 })
        }

        const finish = () => {
            if (settled) return
            settled = true
            gsap.killTweensOf(progress)
            gsap.to(progress, {
                value: 100,
                duration: 0.2,
                ease: "power1.out",
                onUpdate: render,
                onComplete: () => {
                    try {
                        sessionStorage.setItem(PRELOADER_SESSION_KEY, "1")
                    } catch {
                        // Private-browsing/locked-down contexts can throw here —
                        // worst case the visitor just sees this again next time.
                    }
                    document.documentElement.removeAttribute(PRELOADER_ATTR)
                    window[PRELOADER_FLAG] = false
                    // Tells anything waiting on it (the hero entrance timeline
                    // in Header.tsx) that it's safe to start now — right as
                    // this curtain begins clearing, not sometime earlier while
                    // still hidden underneath it.
                    window.dispatchEvent(new Event(PRELOADER_EXIT_EVENT))
                    setActive(false)
                },
            })
        }

        // The only real thing worth waiting on: has the (self-hosted) webfont
        // actually finished loading. `MIN` stops a warm cache from flashing
        // for 40ms; `CAP` stops a blocked font request from holding the page
        // hostage — either way this resolves, the count gets told to finish.
        const ready = Promise.race([
            Promise.all([
                document.fonts.ready,
                new Promise((resolve) => setTimeout(resolve, PRELOADER_MIN_MS)),
            ]),
            new Promise((resolve) => setTimeout(resolve, PRELOADER_CAP_MS)),
        ])

        // There's no real byte-level progress to report — fonts.ready is a
        // single resolve, not a stream — so this climbs on a curve instead of
        // jumping straight to 100. It never actually lies: it's always cut
        // short BY `ready` resolving, never left to run past it.
        gsap.to(progress, {
            value: 90,
            duration: PRELOADER_MIN_MS / 1000,
            ease: "power2.out",
            onUpdate: render,
            onComplete: () => {
                if (settled) return
                // Still waiting past MIN — keep creeping toward (not to) 98
                // so it reads as "still working" instead of stalling flat.
                gsap.to(progress, {
                    value: 98,
                    duration: (PRELOADER_CAP_MS - PRELOADER_MIN_MS) / 1000,
                    ease: "power1.out",
                    onUpdate: render,
                })
            },
        })

        ready.then(finish)

        return () => {
            settled = true
            gsap.killTweensOf(progress)
        }
    }, [active])

    return (
        <AnimatePresence>
            {active && (
                // No slide — the panel itself just fades. The star (below) is
                // the actual exit: it blooms outward and dissolves, so the
                // page reveals itself through/behind it rather than getting
                // shoved off-screen.
                <m.div
                    key="preloader"
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1, ease: "easeInOut", delay: 0.15 }}
                    aria-hidden="true"
                    role="presentation"
                    className="fixed inset-0 z-[10002] flex flex-col items-center justify-center gap-6 overflow-hidden bg-bg text-ink"
                >
                    {/* Same faint-giant-wordmark move as the hero's "ENGINEERING"
                        (src/sections/Header.tsx) — ties this screen to the site
                        it's about to reveal instead of reading as a generic,
                        bolted-on splash screen. */}
                    <m.p
                        aria-hidden="true"
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="pointer-events-none absolute inset-0 flex select-none items-center justify-center whitespace-nowrap text-[26vw] font-bold leading-none tracking-tighter text-[#d3d2cb] sm:text-[16rem]"
                    >
                        LOADING
                    </m.p>

                    <m.span
                        exit={{ scale: 14, opacity: 0 }}
                        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                        className="relative text-6xl leading-none sm:text-8xl"
                    >
                        ✦
                    </m.span>

                    <m.div
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="relative text-center"
                    >
                        <p className="display text-2xl sm:text-4xl">Gustin Rheza</p>
                        <p className="eyebrow mt-2 text-muted">Software Engineer</p>
                    </m.div>

                    <m.div
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="relative flex flex-col items-center gap-3"
                    >
                        <p className="display text-3xl tabular-nums sm:text-5xl">
                            <span ref={counterRef}>0</span>%
                        </p>
                        <div className="h-[2px] w-40 overflow-hidden bg-line sm:w-56">
                            <div ref={barRef} className="h-full w-full origin-left scale-x-0 bg-ink" />
                        </div>
                    </m.div>
                </m.div>
            )}
        </AnimatePresence>
    )
}

export default Preloader
