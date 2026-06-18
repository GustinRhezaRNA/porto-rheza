const specialties = [
    "Frontend Development — building responsive, accessible interfaces with React & Next.js",
    "Backend Integration — connecting APIs, databases, and services into reliable systems",
    "Authentication & Security — implementing robust auth and session handling",
    "Performance Optimization — fast, scalable, production-ready web apps",
]

const About = () => {
    return (
        <section id="about" className="bg-bg px-6 py-24 text-ink sm:px-12">

            <p className="eyebrow flex items-center gap-2 text-muted">
                <span className="h-2 w-2 bg-olive" />
                About Me
            </p>

            <div className="mt-6 grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.4fr]">
                <h2 className="display text-4xl sm:text-6xl">
                    Who<br />Am I
                </h2>

                {/* Olive card */}
                <div className="rounded-sm bg-olive p-8 text-bg sm:p-12">
                    <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
                        <p className="text-lg leading-relaxed text-bg/90 sm:text-xl">
                            I am a Web Developer with 1+ years of experience in frontend development
                            and backend integration, based in Indonesia. I build scalable, responsive
                            web applications — integrating APIs, implementing authentication systems,
                            and optimizing performance for seamless user experiences.
                        </p>

                        <div>
                            <p className="eyebrow text-bg/60">I specialize in:</p>
                            <ul className="mt-4 space-y-4">
                                {specialties.map((item) => (
                                    <li key={item} className="flex gap-3 text-sm leading-relaxed text-bg/85">
                                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-bg/70" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
