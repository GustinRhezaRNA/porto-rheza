import { MotionConfig } from "framer-motion";
import { Links, Meta, Outlet, Scripts, ScrollRestoration } from "react-router";
import type { LinksFunction } from "react-router";
import "@fontsource-variable/inter/index.css";
import "./index.css";

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Gustin Rheza",
  jobTitle: "Software Engineer",
  url: "https://gustinrheza.com/",
  email: "mailto:rezarna4@gmail.com",
  nationality: "Indonesian",
  knowsAbout: [
    "Software Engineering",
    "Product Engineering",
    "React",
    "Next.js",
    "TypeScript",
    "NestJS",
    "FastAPI",
    "GraphQL",
    "PostgreSQL",
    "API Development",
    "Authentication",
    "Web Application Development",
  ],
  sameAs: [
    "https://github.com/GustinRhezaRNA",
    "https://www.linkedin.com/in/gustin-rheza",
    "https://www.instagram.com/rhezaazdy",
    "https://gitlab.com/rezarna4",
  ],
};

export const links: LinksFunction = () => [
  { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="author" content="Gustin Rheza" />
        <meta name="robots" content="index, follow" />
        <meta name="theme-color" content="#e7e6e1" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="Gustin Rheza | Software Engineer" />
        {/* `summary` (not summary_large_image): the site ships no OG image by
            default, and summary_large_image without one renders a broken card.
            Project pages that do have a screenshot override this to large. */}
        <meta name="twitter:card" content="summary" />
        <Meta />
        <Links />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function Root() {
  return (
    <MotionConfig reducedMotion="user">
      <Outlet />
    </MotionConfig>
  );
}
