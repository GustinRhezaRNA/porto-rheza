import { ArrowUpRight } from "lucide-react";

type Project = {
  id: string;
  title: string;
  year: string;
  category: string;
  image: string;
  description: string;
  tags: string[];
  link?: string;
};

const projectData: Project[] = [
  {
    id: "001",
    title: "Sinartama E-RUPS",
    year: "2026",
    category: "Enterprise Web Application",
    image: "/sinartama.webp",
    description:
      "An enterprise e-RUPS platform that digitizes shareholder meetings — real-time voting, attendance, and secure document management at scale.",
    tags: ["REACTJS", "LARAVEL"],
  },
  {
    id: "002",
    title: "Bikinkonten.ai",
    year: "2025",
    category: "SaaS Website",
    image: "/bikinkonten.webp",
    description:
      "A full SaaS product for AI-assisted content creation, from authenticated dashboards to billing and generation workflows.",
    tags: ["NEXTJS", "NESTJS"],
  },
  {
    id: "003",
    title: "Landing Page Bikinkonten.ai",
    year: "2025",
    category: "Landing Page",
    image: "/lp-bikinkonten.webp",
    description:
      "A high-converting, animation-rich marketing landing page that communicates the product's value at a glance.",
    tags: ["NEXTJS", "TAILWIND", "FRAMER"],
  },
  {
    id: "004",
    title: "Chatter Group ChatApp",
    year: "2025",
    category: "Real-time Messaging Web App",
    image: "/chatter.webp",
    description:
      "A real-time group messaging application with live presence, channels, and persistent conversation history.",
    tags: ["REACT", "NESTJS", "WebSocket", "GRAPHQL", "MongoDB"],
  },
  {
    id: "005",
    title: "Cinebox Movie App",
    year: "2024",
    category: "Movie Discovery Web",
    image: "/cinebox.webp",
    description:
      "A movie discovery experience with search, rich detail pages, and curated browsing powered by a public film API.",
    tags: ["REACT", "TMDB API", "TAILWIND"],
  },
];

const Projects = () => {
  return (
    <section id="work" className="bg-bg px-6 py-24 text-ink sm:px-12">
      <div className="grid grid-cols-1 gap-8 border-t border-line pt-12 lg:grid-cols-2">
        <div>
          <p className="eyebrow flex items-center gap-2 text-muted">
            <span className="h-2 w-2 bg-ink" />
            My Work
          </p>
          <h2 className="display mt-6 text-4xl sm:text-6xl">
            Selected
            <br />
            Work
          </h2>
        </div>
        <p className="max-w-md self-end text-sm leading-relaxed text-ink/60">
          Here are some of the projects I've worked on, ranging from enterprise
          platforms to SaaS products and landing pages. Each one reflects my
          focus on functionality, performance, and user experience.
        </p>
      </div>

      <div className="mt-16 flex flex-col gap-16">
        {projectData.map((project, index) => (
          <article
            key={project.id}
            className="group grid grid-cols-1 items-stretch gap-6 lg:grid-cols-2"
          >
            {/* Info card */}
            <div
              className={`flex flex-col justify-between rounded-sm  p-8 text-ink sm:p-10 ${
                index % 2 === 1 ? "lg:order-2" : ""
              }`}
            >
              <div>
                <div className="flex items-center justify-between text-[0.7rem] uppercase tracking-[0.22em] text-muted">
                  <span>{project.id}</span>
                  <span>{project.year}</span>
                </div>
                <h3 className="display mt-6 text-3xl sm:text-4xl">
                  {project.title}
                </h3>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-line px-3 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.15em] text-ink/70"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="mt-6 max-w-sm text-sm leading-relaxed text-ink/60">
                  {project.description}
                </p>
              </div>

              <div className="mt-8 flex items-center justify-between">
                <span className="text-[0.7rem] uppercase tracking-[0.22em] text-muted">
                  {project.category}
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-ink/30 px-4 py-2 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-ink transition-colors group-hover:bg-ink group-hover:text-bg">
                  View
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </span>
              </div>
            </div>

            {/* Screenshot */}
            <div
              className={`relative overflow-hidden rounded-sm bg-card ${
                index % 2 === 1 ? "lg:order-1" : ""
              }`}
            >
              <img
                src={project.image}
                alt={project.title}
                loading="lazy"
                decoding="async"
                className="h-full min-h-[260px] w-full object-cover grayscale transition-all duration-700 ease-out group-hover:grayscale-0 group-hover:scale-[1.03]"
              />
            </div>
          </article>
        ))}
      </div>

      {/* Other projects */}
      <div className="mt-16 flex flex-col items-center gap-4 border-t border-line pt-12">
        <p className="eyebrow text-muted">More on</p>
        <div className="flex gap-5">
          <a
            href="https://github.com/GustinRhezaRNA"
            aria-label="GitHub Profile"
            className="text-ink/70 transition hover:text-ink"
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.744.083-.729.083-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.834 2.807 1.304 3.492.997.108-.776.418-1.305.762-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.468-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23a11.52 11.52 0 0 1 3-.405c1.02.005 2.045.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.435.375.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.694.825.576C20.565 21.795 24 17.295 24 12 24 5.37 18.63 0 12 0z" />
            </svg>
          </a>
          <a
            href="https://gitlab.com/rezarna4"
            aria-label="GitLab Profile"
            className="text-ink/70 transition hover:text-ink"
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
              <path d="M22.65 13.39l-2.16-6.64a.86.86 0 0 0-1.63 0l-1.46 4.5H6.6L5.14 6.75a.86.86 0 0 0-1.63 0L1.35 13.4a.86.86 0 0 0 .31.96l10 7.27a.86.86 0 0 0 1 0l10-7.27a.86.86 0 0 0 .3-.97z" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
