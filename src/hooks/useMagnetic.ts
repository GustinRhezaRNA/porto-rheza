import { useEffect } from "react"
import type { RefObject } from "react"
import { gsap } from "@/lib/gsap"

// Makes the element behind `ref` lean up to `strength` px toward the pointer
// while the pointer is within its bounds, snapping back on leave. Takes an
// existing ref rather than creating its own, so a caller that already has a
// ref for something else (e.g. a GSAP entrance timeline target) can reuse it
// instead of juggling two refs on one DOM node.
//
// Desktop-only and motion-safe by construction: it no-ops entirely — no
// listeners attached — under a coarse pointer or prefers-reduced-motion,
// matching how the custom cursor decides whether to render at all.
export function useMagnetic<T extends HTMLElement>(ref: RefObject<T | null>, strength = 12) {
    useEffect(() => {
        const el = ref.current
        if (!el) return
        if (!window.matchMedia("(pointer: fine)").matches) return
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return

        const onMove = (e: PointerEvent) => {
            const rect = el.getBoundingClientRect()
            const relX = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2)
            const relY = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2)
            gsap.to(el, {
                x: relX * strength,
                y: relY * strength,
                duration: 0.4,
                ease: "power3.out",
            })
        }

        const onLeave = () => {
            gsap.to(el, { x: 0, y: 0, duration: 0.5, ease: "elastic.out(1, 0.4)" })
        }

        el.addEventListener("pointermove", onMove)
        el.addEventListener("pointerleave", onLeave)
        return () => {
            el.removeEventListener("pointermove", onMove)
            el.removeEventListener("pointerleave", onLeave)
            gsap.set(el, { x: 0, y: 0 })
        }
    }, [ref, strength])
}
