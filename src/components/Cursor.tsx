import { AnimatePresence, m, useMotionValue, useSpring } from "framer-motion"
import { useEffect, useRef, useState } from "react"

type Variant = "default" | "link" | "view" | "hover" | "text"

// width / height / corner-radius per variant. "text" collapses the ring into
// a thin vertical caret instead of a circle. "hover" is the lighter-weight
// cue for cards that react to the pointer but aren't themselves a link —
// smaller than "link" and keeps the dot, so it reads as "notice me" rather
// than "click me".
const RING_STYLE: Record<Variant, { width: number; height: number; radius: number }> = {
    default: { width: 32, height: 32, radius: 999 },
    hover: { width: 48, height: 48, radius: 999 },
    link: { width: 64, height: 64, radius: 999 },
    view: { width: 96, height: 96, radius: 999 },
    text: { width: 3, height: 28, radius: 2 },
}

const DOT_HIDDEN: Variant[] = ["link", "view", "text"]

// Rendered once in root.tsx, outside <Outlet/>, so it survives client-side
// route changes. Renders nothing on touch/coarse-pointer devices and under
// prefers-reduced-motion — not just hidden via CSS, never mounted.
const Cursor = () => {
    const [fine, setFine] = useState(false)
    const [variant, setVariant] = useState<Variant>("default")
    const [label, setLabel] = useState<string | null>(null)

    // Dot: raw pointer position, no spring — always sits exactly under the
    // real pointer. Ring: sprung, trails the dot, and is the thing that
    // resizes/relocates for magnetic targets.
    const x = useMotionValue(-100)
    const y = useMotionValue(-100)
    const ringX = useSpring(x, { stiffness: 350, damping: 30, mass: 0.6 })
    const ringY = useSpring(y, { stiffness: 350, damping: 30, mass: 0.6 })

    const activeElRef = useRef<Element | null>(null)
    const activeRectRef = useRef<DOMRect | null>(null)

    useEffect(() => {
        const pointerMq = window.matchMedia("(pointer: fine)")
        const reduceMq = window.matchMedia("(prefers-reduced-motion: reduce)")
        const update = () => setFine(pointerMq.matches && !reduceMq.matches)
        update()
        pointerMq.addEventListener("change", update)
        reduceMq.addEventListener("change", update)
        return () => {
            pointerMq.removeEventListener("change", update)
            reduceMq.removeEventListener("change", update)
        }
    }, [])

    useEffect(() => {
        if (!fine) return

        const onMove = (e: PointerEvent) => {
            const target = e.target as Element | null
            const matched = target?.closest<HTMLElement>("[data-cursor]") ?? null

            // Only touch state (and re-render) when the matched element
            // actually changes — not on every pixel of pointer movement.
            if (matched !== activeElRef.current) {
                activeElRef.current = matched
                if (matched) {
                    // Cache the rect on enter rather than reading it every
                    // move: getBoundingClientRect() at pointer frequency is
                    // a forced synchronous layout.
                    activeRectRef.current = matched.getBoundingClientRect()
                    const v = matched.dataset.cursor as Variant
                    setVariant(v in RING_STYLE ? v : "default")
                    setLabel(matched.dataset.cursorLabel ?? null)
                } else {
                    activeRectRef.current = null
                    setVariant("default")
                    setLabel(null)
                }
            }

            const rect = activeRectRef.current
            if (rect && activeElRef.current) {
                // Snap toward the target's center instead of the raw pointer.
                x.set(rect.left + rect.width / 2)
                y.set(rect.top + rect.height / 2)
            } else {
                x.set(e.clientX)
                y.set(e.clientY)
            }
        }

        const onLeaveWindow = () => {
            activeElRef.current = null
            activeRectRef.current = null
            setVariant("default")
            setLabel(null)
        }

        window.addEventListener("pointermove", onMove, { passive: true })
        window.addEventListener("pointerleave", onLeaveWindow)
        return () => {
            window.removeEventListener("pointermove", onMove)
            window.removeEventListener("pointerleave", onLeaveWindow)
        }
    }, [fine, x, y])

    if (!fine) return null

    const ring = RING_STYLE[variant]

    return (
        <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-[10001]">
            <m.div
                style={{ x, y }}
                animate={{ opacity: DOT_HIDDEN.includes(variant) ? 0 : 1 }}
                transition={{ duration: 0.15 }}
                className="absolute left-0 top-0 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white mix-blend-difference"
            />
            <m.div
                style={{ x: ringX, y: ringY }}
                animate={{ width: ring.width, height: ring.height, borderRadius: ring.radius }}
                transition={{ type: "spring", stiffness: 300, damping: 26 }}
                className="absolute left-0 top-0 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center bg-white mix-blend-difference"
            >
                <AnimatePresence>
                    {label && (
                        <m.span
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="text-[0.6rem] font-semibold uppercase tracking-[0.1em] text-ink"
                        >
                            {label}
                        </m.span>
                    )}
                </AnimatePresence>
            </m.div>
        </div>
    )
}

export default Cursor
