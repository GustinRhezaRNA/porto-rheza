import { Code2, Server, Database, ShieldCheck, Rocket, type LucideIcon } from "lucide-react"

type Service = {
    icon: LucideIcon
    title: string
    description: string
    tags: string[]
}

const services: Service[] = [
    {
        icon: Code2,
        title: "Frontend Development",
        description:
            "Building responsive, accessible, and pixel-accurate interfaces with modern component-driven architecture.",
        tags: ["REACT", "NEXTJS", "TAILWIND"],
    },
    {
        icon: Server,
        title: "Backend Development",
        description:
            "Designing scalable server-side logic and services that stay reliable as traffic and features grow.",
        tags: ["NESTJS", "FASTAPI", "REST"],
    },
    {
        icon: Database,
        title: "API & Database",
        description:
            "Modelling data and exposing clean APIs — from schema design to query optimization.",
        tags: ["GRAPHQL", "POSTGRESQL", "PRISMA"],
    },
    {
        icon: ShieldCheck,
        title: "Auth & Security",
        description:
            "Implementing robust authentication, session handling, and access control you can trust.",
        tags: ["JWT", "OAUTH", "SESSIONS"],
    },
    {
        icon: Rocket,
        title: "Deployment & DevOps",
        description:
            "Shipping to production with containerized, automated, and observable deployment pipelines.",
        tags: ["DOCKER", "AWS", "CI/CD"],
    },
]

const Services = () => {
    return (
        <section id="service" className="bg-bg px-6 py-24 text-ink sm:px-12">

            <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_1.6fr]">
                <div>
                    <p className="eyebrow flex items-center gap-2 text-muted">
                        <span className="h-2 w-2 bg-ink" />
                        What I Do
                    </p>
                    <h2 className="display mt-6 text-4xl sm:text-6xl">
                        What<br />I Do
                    </h2>
                    <p className="mt-6 max-w-xs text-sm leading-relaxed text-ink/60">
                        A full-stack skill set covering everything from the interface to the
                        infrastructure — so your product ships complete.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    {services.map((service) => {
                        const Icon = service.icon
                        return (
                            <div
                                key={service.title}
                                className="group rounded-sm border border-line bg-card p-7 transition-colors hover:border-ink/40 hover:bg-card-hover"
                            >
                                <span className="flex h-11 w-11 items-center justify-center rounded-sm bg-ink text-bg">
                                    <Icon className="h-5 w-5" />
                                </span>
                                <h3 className="mt-5 text-xl font-semibold tracking-tight">{service.title}</h3>
                                <p className="mt-3 text-sm leading-relaxed text-ink/60">
                                    {service.description}
                                </p>
                                <div className="mt-5 flex flex-wrap gap-2">
                                    {service.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="rounded-full border border-line px-3 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.15em] text-ink/70"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default Services
