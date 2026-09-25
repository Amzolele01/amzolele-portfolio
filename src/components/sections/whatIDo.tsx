const capabilities = [
  {
    number: "01",
    title: "Software Development",
    description:
      "Building practical web applications and software solutions with modern development tools.",
    technologies: ["React", "Next.js", "JavaScript", "Java"],
  },
  {
    number: "02",
    title: "Database & Data",
    description:
      "Designing relational databases, working with SQL, and turning data into useful information.",
    technologies: ["SQL", "PostgreSQL", "Database Design", "Excel"],
  },
  {
    number: "03",
    title: "Cybersecurity",
    description:
      "Exploring security, networking, and defensive techniques for understanding and protecting systems.",
    technologies: ["Networking", "Linux", "Security", "Cyber Forensics"],
  },
  {
    number: "04",
    title: "Electronics & Embedded",
    description:
      "Working with electronics, microcontrollers, and technology at the intersection of hardware and software.",
    technologies: ["Microcontrollers", "Embedded Systems", "Electronics"],
  },
];

export default function WhatIDo() {
  return (
    <section
      id="what-i-do"
      className="border-t border-border px-6 py-24 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
            01 / What I Do
          </p>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
            Building across software,
            <br />
            <span className="text-muted">data & technology.</span>
          </h2>

          <p className="mt-6 text-base leading-7 text-muted sm:text-lg">
            My work sits across several areas of technology, with
            a focus on building useful systems and understanding
            how they work.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-2">
          {capabilities.map((capability) => (
            <article
              key={capability.number}
              className="group bg-background p-8 transition-colors hover:bg-surface sm:p-10"
            >
              {/* Number */}
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-muted-foreground">
                  {capability.number}
                </span>

                <span className="text-muted-foreground transition-transform duration-200 group-hover:translate-x-1">
                  →
                </span>
              </div>

              {/* Content */}
              <div className="mt-12">
                <h3 className="text-xl font-semibold tracking-tight sm:text-2xl">
                  {capability.title}
                </h3>

                <p className="mt-4 max-w-md text-sm leading-6 text-muted sm:text-base">
                  {capability.description}
                </p>
              </div>

              {/* Technologies */}
              <div className="mt-8 flex flex-wrap gap-2">
                {capability.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full border border-border px-3 py-1 font-mono text-[10px] uppercase tracking-wide text-muted"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}