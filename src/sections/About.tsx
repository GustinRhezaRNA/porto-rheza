const specialties = [
  "Frontend Engineering: building responsive, accessible, and maintainable interfaces with React & Next.js",
  "Backend Engineering: designing APIs, integrating databases, and building reliable application services",
  "Product Engineering: turning ideas and requirements into practical, scalable digital products",
  "Authentication & Security: implementing secure authentication, authorization",
  "Performance & Reliabilit: optimizing applications for speed, scalability, and a smooth user experience",
  "End-to-End Delivery: taking features from development to deployment and production"
];

const About = () => {
  return (
    <section id="about" className="bg-bg px-6 py-24 text-ink sm:px-12">
      <p className="eyebrow flex items-center gap-2 text-muted">
        <span className="h-2 w-2 bg-ink" />
        About Me
      </p>

      <div className="mt-6 grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.4fr]">
        <h2 className="display text-4xl sm:text-6xl">
          Who
          <br />
          Am I
        </h2>

        {/* Bio card */}
        <div className="rounded-sm p-8 text-ink sm:p-12">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
            <p className="text-lg leading-relaxed text-ink/90 sm:text-xl">
              I’m a Software Engineer with 1+ years of experience building and
              shipping web applications from idea to production, based in
              Indonesia. I work across the stack, designing frontend
              experiences, building backend systems, integrating APIs and
              databases, and making sure everything works reliably in
              production.
            </p>

            <div>
              <p className="eyebrow text-muted">I specialize in:</p>
              <ul className="mt-4 space-y-4">
                {specialties.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 text-sm leading-relaxed text-ink/75"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-ink/50" />
                    <div>
                      <span className="font-bold">{item.split(":", 2)[0]}</span>
                      <span className="flex-1">{":" + item.split(":", 2)[1]}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
