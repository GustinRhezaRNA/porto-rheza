import {
  Code2,
  Server,
  Database,
  ShieldCheck,
  Rocket,
  type LucideIcon,
} from "lucide-react";
import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/motion";

type Service = {
  icon: LucideIcon;
  title: string;
  description: string;
  tags: string[];
};

const services: Service[] = [
  {
    icon: Code2,
    title: "Frontend Engineering",
    description:
      "Building responsive, accessible, and maintainable interfaces with a focus on usability, performance, and clean architecture.",
    tags: ["REACT", "NEXTJS", "TAILWIND"],
  },
  {
    icon: Server,
    title: "Backend Engineering",
    description:
      "Designing APIs and application services with clear architecture, reliable business logic, and scalability in mind.",
    tags: ["NESTJS", "FASTAPI", "REST"],
  },
  {
    icon: Database,
    title: "Data & APIs",
    description:
      "Designing data models and API layers that keep applications consistent, efficient, and easy to evolve.",
    tags: ["GRAPHQL", "POSTGRESQL", "PRISMA"],
  },
  {
    icon: ShieldCheck,
    title: "Authentication & Security",
    description:
      "Implementing authentication, authorization, session management, and access control across applications.",
    tags: ["JWT", "OAUTH", "SESSIONS"],
  },
  {
    icon: Rocket,
    title: "Deployment & Infrastructure",
    description:
      "Taking applications from local development to production with containerization, automation, and reliable deployment workflows.",
    tags: ["DOCKER", "AWS", "CI/CD"],
  },
];

const Services = () => {
  return (
    <section id="service" className="bg-bg px-6 py-24 text-ink sm:px-12">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_1.6fr]">
        <div>
          {" "}
          <p className="eyebrow flex items-center gap-2 text-muted">
            {" "}
            <span className="h-2 w-2 bg-ink" /> Engineering Scope{" "}
          </p>{" "}
          <h2 className="display mt-6 text-4xl sm:text-6xl">
            {" "}
            How I<br />
            Build{" "}
          </h2>{" "}
          <p className="mt-6 max-w-xs text-sm leading-relaxed text-ink/60">
            {" "}
            From interfaces and APIs to databases and deployment, I work across
            the stack to turn ideas into reliable, production-ready
            products.{" "}
          </p>{" "}
        </div>

        <motion.div
          {...staggerContainer}
          className="grid grid-cols-1 gap-4 sm:grid-cols-2"
        >
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                variants={staggerItem.variants}
                className="group rounded-sm border border-line bg-card p-7 transition-colors hover:border-ink/40 hover:bg-card-hover"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-sm bg-ink text-bg">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 text-xl font-semibold tracking-tight">
                  {service.title}
                </h3>
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
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
