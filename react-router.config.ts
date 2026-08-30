import type { Config } from "@react-router/dev/config";
import { projects } from "./src/data/projects";

export default {
  appDirectory: "src",

  // No runtime server — this deploys as static files to Vercel.
  ssr: false,

  // Every route is emitted as real HTML at build time. This is what makes the
  // site crawlable: without it each URL served an empty <div id="root">, so
  // non-JS crawlers (WhatsApp, LinkedIn, Slack, X, AI crawlers) saw nothing
  // and every project link previewed as the generic homepage.
  //
  // Slugs are read from projects.ts rather than hardcoded, so adding a project
  // automatically gets it prerendered and into the sitemap.
  prerender: ["/", ...projects.map((p) => `/projects/${p.slug}`)],
} satisfies Config;
