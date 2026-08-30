import { ArrowUpRight, ArrowRight } from 'lucide-react'

const links = [
    { label: 'Home', href: '/#home' },
    { label: 'About', href: '/#about' },
    { label: 'Work', href: '/#work' },
    { label: 'Service', href: '/#service' },
    { label: 'Contact', href: '/#contact' },
]

const Navigation = () => {
    return (
        <nav className="hidden lg:flex flex-col w-full max-w-[240px]">
            <ul className="flex flex-col">
                {links.map((link) => (
                    <li key={link.label}>
                        <a
                            href={link.href}
                            className="group flex items-center justify-between border-b border-line py-3 text-sm font-medium uppercase tracking-[0.18em] text-ink/80 transition-colors hover:text-ink"
                        >
                            {link.label}
                            <ArrowUpRight className="h-4 w-4 text-muted transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ink" />
                        </a>
                    </li>
                ))}
            </ul>

            <a
                href="/#contact"
                className="mt-6 inline-flex items-center justify-center gap-3 rounded-full bg-ink px-6 py-3 text-sm font-medium uppercase tracking-[0.18em] text-bg transition-colors hover:bg-ink/80"
            >
                Let's Talk
                <ArrowRight className="h-4 w-4" />
            </a>
        </nav>
    )
}

export default Navigation
