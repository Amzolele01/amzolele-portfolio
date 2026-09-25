const skillGroups = [
  {
    number: "01",
    title: "Software Development",
    skills: [
      "Java",
      "Python",
      "JavaScript",
      "TypeScript",
      "HTML/CSS",
      "React",
      "Next.js",
      "Node.js",
    ],
  },
  {
    number: "02",
    title: "Data, Spreadsheets & Databases",
    skills: [
      "Microsoft Excel",
      "SQL",
      "PostgreSQL",
      "Database Design",
      "Data Cleaning",
      "Data Analysis",
    ],
  },
  {
    number: "03",
    title: "Systems & Networking",
    skills: [
      "Computer Networking",
      "Cisco Packet Tracer",
      "Linux",
    ],
  },
  {
    number: "04",
    title: "Cybersecurity",
    skills: [
      "Cybersecurity Fundamentals",
    ],
  },
  {
    number: "05",
    title: "Hardware & Electronics",
    skills: [
      "Electronics",
      "Digital Electronics",
      "Microcontrollers",
      "Embedded Systems",
    ],
  },
  {
    number: "06",
    title: "Tools & Workflow",
    skills: [
      "Git",
      "GitHub",
      "Visual Studio Code",
      "Microsoft Office",
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="border-t border-border px-6 py-24 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
            03 / Skills
          </p>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
            Tools, technologies,
            <br />
            <span className="text-muted">
              and technical foundations.
            </span>
          </h2>

          <p className="mt-6 text-base leading-7 text-muted sm:text-lg">
            A growing set of technical skills built through 
            university projects, personal projects, 
            experimentation, and practical problem solving.  
          </p>
        </div>

        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <article
              key={group.number}
              className="bg-background p-8 transition-colors hover:bg-surface"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-muted-foreground">
                  {group.number}
                </span>

                <span className="font-mono text-[10px] uppercase tracking-wider text-muted">
                  {group.skills.length} skills
                </span>
              </div>

              <h3 className="mt-10 text-xl font-semibold tracking-tight">
                {group.title}
              </h3>

              <div className="mt-6 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-border px-3 py-1.5 text-xs text-muted"
                  >
                    {skill}
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