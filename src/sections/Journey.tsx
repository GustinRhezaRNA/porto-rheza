import { ArrowUpRight } from "lucide-react";

const journeyData = [
  {
    company: "Center for Environmental, Social, Governance Studies (CESGS)",
    role: "Fullstack Developer",
    period: "Jun 2026 – Now",
  },
  {
    company: "PT. DOT Indonesia",
    role: "Front End Developer Intern",
    period: "Nov 2025 – Feb 2026",
  },
  {
    company: "PT. Aira Teknologi Indonesia",
    role: "Front End Developer Intern",
    period: "Jul 2025 – Nov 2025",
  },
  {
    company: "BMKG — Meteorology, Climatology & Geophysics Agency",
    role: "Web Developer Intern",
    period: "Jul 2025 – Aug 2025",
  },
  {
    company: "PT. Ekata Technology Indonesia",
    role: "Front End Developer Intern",
    period: "Apr 2025 – Jul 2025",
  },
  {
    company: "Serena Hills Puncak Bogor",
    role: "Landing Page Builder",
    period: "Dec 2024 – Feb 2025",
  },
];

const Journey = () => {
  return (
    <section id="journey" className="bg-bg px-6 py-24 text-ink sm:px-12">
      <div className="grid grid-cols-1 gap-8 border-t border-line pt-12 lg:grid-cols-2">
        <div>
          <p className="eyebrow flex items-center gap-2 text-muted">
            <span className="h-2 w-2 bg-ink" />
            My Journey
          </p>
          <h2 className="display mt-6 text-4xl sm:text-6xl">
            Experience
            <br />& Roles
          </h2>
        </div>
        <p className="max-w-md self-end text-sm leading-relaxed text-ink/60">
          A track record of hands-on development roles across startups,
          technology companies, and government agencies — each one sharpening
          how I build for the web.
        </p>
      </div>

      <div className="mt-14 flex flex-col">
        {journeyData.map((item) => (
          <div
            key={item.company}
            className="group flex items-center justify-between gap-6 border-b border-line py-6 transition-colors hover:border-ink"
          >
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-8">
              <h3 className="text-xl font-semibold tracking-tight sm:text-2xl">
                {item.company}
              </h3>
              <span className="text-[0.7rem] uppercase tracking-[0.22em] text-muted">
                {item.role}
              </span>
            </div>
            <div className="flex items-center gap-4 sm:gap-8">
              <span className="hidden text-[0.7rem] uppercase tracking-[0.22em] text-ink/60 sm:block">
                {item.period}
              </span>
              <ArrowUpRight className="h-5 w-5 shrink-0 text-muted transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ink" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Journey;
