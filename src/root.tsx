import { LazyMotion, MotionConfig } from "framer-motion";
import { Links, Meta, Outlet, Scripts, ScrollRestoration } from "react-router";
import type { LinksFunction } from "react-router";
import Cursor from "@/components/Cursor";
import Preloader from "@/components/Preloader";
import ScrollProgress from "@/components/ScrollProgress";
import { PRELOADER_ATTR, PRELOADER_SESSION_KEY } from "@/lib/preloader";
import "@fontsource-variable/inter/index.css";
import "./index.css";

// Every `m.*` component in the app (there is no bare `motion.*` usage left —
// `LazyMotion` is `strict` below, which throws if there is) pulls its actual
// animation implementation from this chunk, fetched after first paint rather
// than bundled into the critical path. The static alternative
// (`import { domAnimation } from "framer-motion"`) works too, but ships that
// ~16KB gzipped with the initial JS instead of deferring it.
const loadDomAnimation = () => import("framer-motion").then((mod) => mod.domAnimation);

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

// Runs before first paint (it's a plain, render-blocking <script> in <head>,
// not React), and is the only thing that decides whether the preloader shows
// at all. Bails out — leaving the page to paint normally with no curtain —
// on a returning visit this session, under prefers-reduced-motion, or on any
// route other than "/". A static string, identical between the prerendered
// HTML and React's own render of this same tag, so it hydrates cleanly with
// no mismatch.
const preloaderBootScript = `(function(){try{
  if(sessionStorage.getItem(${JSON.stringify(PRELOADER_SESSION_KEY)})) return;
  if(matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  if(location.pathname !== '/') return;
  document.documentElement.setAttribute(${JSON.stringify(PRELOADER_ATTR)}, '1');
}catch(e){}})();`;

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
        <script dangerouslySetInnerHTML={{ __html: preloaderBootScript }} />
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
    <LazyMotion features={loadDomAnimation} strict>
      <MotionConfig reducedMotion="user">
        {/* Mounted here, not inside a page, so it survives client-side
            navigation between routes instead of remounting on every page —
            Preloader in particular must never remount on a route change, or
            it would replay on every internal link click. */}
        <Preloader />
        <ScrollProgress />
        <Cursor />
        <Outlet />
      </MotionConfig>
    </LazyMotion>
  );
}
