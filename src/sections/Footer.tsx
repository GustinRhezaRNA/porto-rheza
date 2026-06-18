const socials = [
    { label: "GitHub", href: "https://github.com/GustinRhezaRNA" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/gustin-rheza" },
    { label: "Instagram", href: "https://www.instagram.com/rhezaazdy" },
    { label: "Email", href: "mailto:rezarna4@gmail.com" },
]

const Footer = () => {
    return (
        <footer id="contact" className="bg-olive px-6 py-12 text-bg sm:px-12">

            {/* Top meta row */}
            <div className="flex flex-col items-center gap-3 border-b border-bg/15 pb-8 text-[0.7rem] uppercase tracking-[0.22em] text-bg/60 sm:flex-row sm:justify-between">
                <span>Portfolio 2024–2026</span>
                <span className="font-semibold text-bg">Gustin Rheza ✦</span>
                <span>Available · Freelance Work</span>
            </div>

            {/* CTA */}
            <div className="flex flex-col items-center py-20 text-center sm:py-28">
                <h2 className="display text-4xl sm:text-6xl lg:text-7xl">
                    Interested In<br />Working Together?
                </h2>
                <p className="mt-10 eyebrow text-bg/60">Drop me an email</p>
                <a
                    href="mailto:rezarna4@gmail.com"
                    className="mt-2 text-lg font-semibold underline decoration-bg/40 underline-offset-8 transition-colors hover:decoration-bg sm:text-2xl"
                >
                    rezarna4@gmail.com
                </a>
            </div>

            {/* Bottom row */}
            <div className="flex flex-col items-center gap-6 border-t border-bg/15 pt-8 text-[0.7rem] uppercase tracking-[0.22em] text-bg/60 sm:flex-row sm:justify-between">
                <span>© {new Date().getFullYear()} — All rights reserved</span>

                <div className="flex flex-wrap justify-center gap-3">
                    {socials.map((social) => (
                        <a
                            key={social.label}
                            href={social.href}
                            aria-label={social.label}
                            target={social.href.startsWith("http") ? "_blank" : undefined}
                            rel={social.href.startsWith("http") ? "noreferrer" : undefined}
                            className="rounded-full border border-bg/25 px-4 py-2 text-bg/80 transition-colors hover:bg-bg hover:text-ink"
                        >
                            {social.label}
                        </a>
                    ))}
                </div>

                <a href="#home" className="text-bg/80 transition-colors hover:text-bg">
                    Back to top ↑
                </a>
            </div>
        </footer>
    )
}

export default Footer
