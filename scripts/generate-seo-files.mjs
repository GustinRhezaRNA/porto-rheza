// Generates robots.txt + sitemap.xml into build/client after the build.
// Routes are derived from projects.ts (the same source react-router.config.ts
// uses for prerendering), so adding a project can never silently leave it out
// of the sitemap.
import { writeFileSync, readFileSync } from "node:fs";
import { join } from "node:path";

const SITE = "https://gustinrheza.com";
const OUT = "build/client";

// projects.ts is TypeScript; rather than adding a transpile step just for this,
// pull the slugs out with a regex. Kept deliberately strict so a malformed
// match fails loudly instead of producing a silently short sitemap.
const source = readFileSync("src/data/projects.ts", "utf8");
const slugs = [...source.matchAll(/^\s{4}slug:\s*"([^"]+)"/gm)].map((m) => m[1]);

if (slugs.length === 0) {
  throw new Error("generate-seo-files: no project slugs found in src/data/projects.ts");
}

const today = new Date().toISOString().split("T")[0];

const urls = [
  { loc: `${SITE}/`, priority: "1.0", changefreq: "monthly" },
  ...slugs.map((slug) => ({
    loc: `${SITE}/projects/${slug}`,
    priority: "0.8",
    changefreq: "yearly",
  })),
];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    ({ loc, priority, changefreq }) =>
      `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>${changefreq}</changefreq>\n    <priority>${priority}</priority>\n  </url>`,
  )
  .join("\n")}
</urlset>
`;

const robots = `User-agent: *
Allow: /

Sitemap: ${SITE}/sitemap.xml
`;

writeFileSync(join(OUT, "sitemap.xml"), sitemap);
writeFileSync(join(OUT, "robots.txt"), robots);

console.log(`SEO files written: sitemap.xml (${urls.length} URLs), robots.txt`);
