import { ArrowUpRight, ArrowRight, Menu, X } from 'lucide-react'
import { Link } from 'react-router'
import { AnimatePresence, m } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { useMagnetic } from '@/hooks/useMagnetic'

const links = [
    { label: 'Home', href: '/#home' },
    { label: 'About', href: '/#about' },
    { label: 'Work', href: '/#work' },
    { label: 'Service', href: '/#service' },
    { label: 'Contact', href: '/#contact' },
]

// Modal-style enter/exit, not the scroll-triggered `staggerContainer` used
// elsewhere — this stagger is driven by the drawer's open/close state, so it
// needs `animate`/`exit`, not `whileInView`.
const drawerList = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.06, delayChildren: 0.12 } },
}
const drawerItem = {
    hidden: { x: 24, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] as const },
    },
}

const Navigation = () => {
    const [open, setOpen] = useState(false)
    const talkRef = useRef<HTMLAnchorElement>(null)

    useMagnetic(talkRef)

    // Lock background scroll while the drawer is open, and let Escape close
    // it — this is a full-screen modal, so it should behave like one.
    useEffect(() => {
        if (!open) return

        const previousOverflow = document.documentElement.style.overflowY
        document.documentElement.style.overflowY = 'hidden'

        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') setOpen(false)
        }
        window.addEventListener('keydown', onKeyDown)

        return () => {
            document.documentElement.style.overflowY = previousOverflow
            window.removeEventListener('keydown', onKeyDown)
        }
    }, [open])

    return (
        <>
            {/* Desktop: vertical nav, unchanged */}
            <nav className="hidden lg:flex flex-col w-full max-w-[240px]">
                <ul className="flex flex-col">
                    {links.map((link) => (
                        <li key={link.label}>
                            <Link
                                to={link.href}
                                data-cursor="link"
                                className="group flex items-center justify-between border-b border-line py-3 text-sm font-medium uppercase tracking-[0.18em] text-ink/80 transition-colors hover:text-ink"
                            >
                                {link.label}
                                <ArrowUpRight className="h-4 w-4 text-muted transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ink" />
                            </Link>
                        </li>
                    ))}
                </ul>

                <Link
                    ref={talkRef}
                    to="/#contact"
                    data-cursor="link"
                    className="mt-6 inline-flex items-center justify-center gap-3 rounded-full bg-ink px-6 py-3 text-sm font-medium uppercase tracking-[0.18em] text-bg transition-colors hover:bg-ink/80"
                >
                    Let's Talk
                    <ArrowRight className="h-4 w-4" />
                </Link>
            </nav>

            {/* Mobile/tablet: below lg there was no navigation at all — this
                is the fix, not a nice-to-have. */}
            <button
                type="button"
                onClick={() => setOpen(true)}
                aria-label="Open menu"
                aria-haspopup="dialog"
                aria-expanded={open}
                aria-controls="mobile-nav"
                data-cursor="link"
                className="fixed right-4 top-4 z-[9997] flex h-11 w-11 items-center justify-center rounded-full border border-line bg-bg text-ink shadow-sm lg:hidden"
            >
                <Menu className="h-5 w-5" />
            </button>

            <AnimatePresence>
                {open && (
                    <m.div
                        id="mobile-nav"
                        role="dialog"
                        aria-modal="true"
                        aria-label="Site navigation"
                        initial={{ clipPath: 'inset(0 0 100% 0)' }}
                        animate={{ clipPath: 'inset(0 0 0% 0)' }}
                        exit={{ clipPath: 'inset(0 0 100% 0)' }}
                        transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
                        className="fixed inset-0 z-[9999] flex flex-col bg-bg text-ink lg:hidden"
                    >
                        <div className="flex items-center justify-between border-b border-line px-6 py-4">
                            <span className="eyebrow text-muted">Menu</span>
                            <button
                                type="button"
                                onClick={() => setOpen(false)}
                                aria-label="Close menu"
                                data-cursor="link"
                                className="flex h-11 w-11 items-center justify-center rounded-full border border-line text-ink"
                            >
                                <X className="h-5 w-5" />
                            </button>
                        </div>

                        <m.ul
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                            variants={drawerList}
                            className="flex flex-1 flex-col justify-center px-6"
                        >
                            {links.map((link) => (
                                <m.li key={link.label} variants={drawerItem}>
                                    <Link
                                        to={link.href}
                                        onClick={() => setOpen(false)}
                                        data-cursor="link"
                                        className="group flex items-center justify-between border-b border-line py-4 text-2xl font-medium uppercase tracking-[0.08em]"
                                    >
                                        {link.label}
                                        <ArrowUpRight className="h-5 w-5 text-muted" />
                                    </Link>
                                </m.li>
                            ))}
                        </m.ul>

                        <div className="px-6 pb-10">
                            <Link
                                to="/#contact"
                                onClick={() => setOpen(false)}
                                data-cursor="link"
                                className="flex w-full items-center justify-center gap-3 rounded-full bg-ink px-6 py-4 text-sm font-medium uppercase tracking-[0.18em] text-bg"
                            >
                                Let's Talk
                                <ArrowRight className="h-4 w-4" />
                            </Link>
                        </div>
                    </m.div>
                )}
            </AnimatePresence>
        </>
    )
}

export default Navigation
