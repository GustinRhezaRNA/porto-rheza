import { ArrowLeft, ArrowRight, ArrowUpRight, Lock } from "lucide-react";
import { Link, Navigate, useParams } from "react-router";
import type { MetaFunction } from "react-router";
import { motion } from "framer-motion";
import { getProjectBySlug, projects } from "@/data/projects";
import { reveal, staggerContainer, staggerItem } from "@/lib/motion";
import Footer from "@/sections/Footer";
import ConfidentialPlaceholder from "@/components/ConfidentialPlaceholder";

const SITE = "https://gustinrheza.com";

// Runs at build time for each prerendered slug, so every project page ships
// its own title/description/og tags in static HTML — this is what makes
// per-project link previews work in WhatsApp/LinkedIn/Slack/X.
export const meta: MetaFunction = ({ params }) => {
  const project = getProjectBySlug(params.slug);
  if (!project) return [{ title: "Project Not Found | Gustin Rheza" }];

  const url = `${SITE}/projects/${project.slug}`;
  // Confidential projects deliberately expose no screenshot.
  const image =
    !project.confidential && project.image ? `${SITE}${project.image}` : undefined;

  return [
    { title: `${project.title} | Gustin Rheza` },
    { name: "description", content: project.description },
    { name: "keywords", content: project.tags.join(", ") },
    { property: "og:type", content: "article" },
    { property: "og:url", content: url },
    { property: "og:title", content: `${project.title} | Gustin Rheza` },
    { property: "og:description", content: project.description },
    { name: "twitter:title", content: `${project.title} | Gustin Rheza` },
    { name: "twitter:description", content: project.description },
    ...(image
      ? [
          { property: "og:image", content: image },
          { property: "og:image:alt", content: project.title },
          { name: "twitter:image", content: image },
          { name: "twitter:card", content: "summary_large_image" },
        ]
      : []),
    { tagName: "link", rel: "canonical", href: url },
    {
      "script:ld+json": {
        "@context": "https://schema.org",
        "@type": "CreativeWork",
        name: project.title,
        description: project.description,
        url,
        dateCreated: project.year,
        genre: project.category,
        keywords: project.tags.join(", "),
        ...(image ? { image } : {}),
        author: {
          "@type": "Person",
          name: "Gustin Rheza",
          url: `${SITE}/`,
        },
      },
    },
  ];
};

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = getProjectBySlug(slug);

  if (!project) {
    return <Navigate to="/" replace />;
  }

  const { detail } = project;
  const index = projects.findIndex((p) => p.slug === project.slug);
  const next = projects[(index + 1) % projects.length];

  return (
    <>
      <div className="bg-bg px-6 pb-24 pt-12 text-ink sm:px-12">
        {/* Back link */}
        <Link
          to="/"
          className="eyebrow inline-flex items-center gap-2 text-muted transition-colors hover:text-ink"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          Back to Work
        </Link>

        {/* Hero */}
        <motion.div {...reveal} className="mt-10 border-t border-line pt-12">
          <div className="flex items-center justify-between text-[0.7rem] uppercase tracking-[0.22em] text-muted">
            <span>{project.id}</span>
            <span>{project.year}</span>
          </div>

          <h1 className="display mt-6 max-w-3xl text-4xl sm:text-6xl">
            {project.title}
          </h1>

          <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2 text-[0.7rem] uppercase tracking-[0.22em] text-muted">
            <span>{project.category}</span>
            {detail.role && (
              <span className="inline-flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-muted" />
                Role : <span className="text-ink/80">{detail.role}</span>
              </span>
            )}
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-line px-3 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.15em] text-ink/70"
              >
                {tag}
              </span>
            ))}
            {project.confidential && (
              <span className="inline-flex items-center gap-1.5 rounded-full border border-line px-3 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.15em] text-muted">
                <Lock className="h-3 w-3" />
                Confidential
              </span>
            )}
          </div>

          <p className="mt-6 max-w-xl text-sm leading-relaxed text-ink/60 sm:text-base">
            {project.description}
          </p>

          {project.confidential ? (
            <p className="mt-6 max-w-xl text-xs leading-relaxed text-muted">
              This project involves confidential client work, so no live link
              or source is shared here, the sections below cover the
              engineering approach instead.
            </p>
          ) : (
            (detail.liveUrl ||
              detail.repoUrls?.repo ||
              detail.repoUrls?.frontend ||
              detail.repoUrls?.backend) && (
              <div className="mt-6 flex flex-wrap gap-3">
                {detail.liveUrl && (
                  <a
                    href={detail.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-medium text-bg transition-colors hover:bg-ink/80"
                  >
                    View Live
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                )}
                {detail.repoUrls?.repo && (
                  <a
                    href={detail.repoUrls.repo}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-ink/30 px-5 py-3 text-sm font-medium text-ink transition-colors hover:bg-ink hover:text-bg"
                  >
                    View Repo
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                )}
                {detail.repoUrls?.frontend && (
                  <a
                    href={detail.repoUrls.frontend}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-ink/30 px-5 py-3 text-sm font-medium text-ink transition-colors hover:bg-ink hover:text-bg"
                  >
                    Frontend Repo
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                )}
                {detail.repoUrls?.backend && (
                  <a
                    href={detail.repoUrls.backend}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-ink/30 px-5 py-3 text-sm font-medium text-ink transition-colors hover:bg-ink hover:text-bg"
                  >
                    Backend Repo
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                )}
              </div>
            )
          )}

          <div className="mt-10 overflow-hidden rounded-sm bg-card">
            {project.confidential || !project.image ? (
              <ConfidentialPlaceholder className="min-h-[360px] sm:min-h-[480px]" />
            ) : (
              <img
                src={project.image}
                alt={project.title}
                className="h-full max-h-[560px] w-full object-cover"
              />
            )}
          </div>
        </motion.div>

        {/* Problem */}
        {detail.problem && (
          <motion.div {...reveal} className="mt-16 border-t border-line pt-12">
            <p className="eyebrow text-muted">Problem</p>
            <h2 className="display mt-4 max-w-2xl text-2xl sm:text-3xl">
              What needed solving
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-ink/60 sm:text-base">
              {detail.problem}
            </p>
          </motion.div>
        )}

        {/* Solution */}
        {detail.solution && (
          <motion.div {...reveal} className="mt-16 border-t border-line pt-12">
            <p className="eyebrow text-muted">Solution</p>
            <h2 className="display mt-4 max-w-2xl text-2xl sm:text-3xl">
              How it was approached
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-ink/60 sm:text-base">
              {detail.solution}
            </p>
          </motion.div>
        )}

        {/* Architecture */}
        {(detail.architecture || (detail.architectureSteps?.length ?? 0) > 0) && (
          <motion.div {...reveal} className="mt-16 border-t border-line pt-12">
            <p className="eyebrow text-muted">Architecture</p>
            <h2 className="display mt-4 max-w-2xl text-2xl sm:text-3xl">
              How it's built
            </h2>
            {detail.architecture && (
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-ink/60 sm:text-base">
                {detail.architecture}
              </p>
            )}
            {detail.architectureSteps && detail.architectureSteps.length > 0 && (
              <motion.ol
                {...staggerContainer}
                className="mt-6 max-w-2xl space-y-3"
              >
                {detail.architectureSteps.map((step, i) => (
                  <motion.li
                    key={i}
                    variants={staggerItem.variants}
                    className="flex gap-4 text-sm leading-relaxed text-ink/60 sm:text-base"
                  >
                    <span className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-muted">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span>{step}</span>
                  </motion.li>
                ))}
              </motion.ol>
            )}
          </motion.div>
        )}

        {/* Tech Stack */}
        {detail.techStack.length > 0 && (
          <motion.div {...reveal} className="mt-16 border-t border-line pt-12">
            <p className="eyebrow text-muted">Tech Stack</p>
            <h2 className="display mt-4 max-w-2xl text-2xl sm:text-3xl">
              What it's built with
            </h2>
            <motion.div
              {...staggerContainer}
              className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
            >
              {detail.techStack.map((group) => (
                <motion.div key={group.group} variants={staggerItem.variants}>
                  <p className="text-[0.7rem] uppercase tracking-[0.22em] text-muted">
                    {group.group}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-line px-3 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.15em] text-ink/70"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        )}

        {/* Impact */}
        {detail.impact.length > 0 && (
          <motion.div {...reveal} className="mt-16 border-t border-line pt-12">
            <p className="eyebrow text-muted">Impact</p>
            <h2 className="display mt-4 max-w-2xl text-2xl sm:text-3xl">
              What it achieved
            </h2>
            <motion.ul {...staggerContainer} className="mt-6 max-w-2xl space-y-3">
              {detail.impact.map((point, i) => (
                <motion.li
                  key={i}
                  variants={staggerItem.variants}
                  className="flex gap-3 text-sm leading-relaxed text-ink/60 sm:text-base"
                >
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-ink" />
                  <span>{point}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        )}

        {/* Gallery */}
        {detail.gallery && detail.gallery.length > 0 && (
          <motion.div {...reveal} className="mt-16 border-t border-line pt-12">
            <p className="eyebrow text-muted">Gallery</p>
            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {detail.gallery.map((src) => (
                <div key={src} className="overflow-hidden rounded-sm bg-card">
                  <img src={src} alt={project.title} className="h-full w-full object-cover" />
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Next project */}
        <div className="mt-16 flex flex-col items-center gap-4 border-t border-line pt-12">
          <p className="eyebrow text-muted">Next Project</p>
          <Link
            to={`/projects/${next.slug}`}
            className="group inline-flex items-center gap-3 text-2xl font-semibold sm:text-4xl"
          >
            <span className="display">{next.title}</span>
            <ArrowRight className="h-6 w-6 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ProjectDetail;
