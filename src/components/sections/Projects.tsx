import ProjectCard from "@/components/ui/ProjectCard";
import { projects } from "@/lib/projects";

export default function Projects() {
  return (
    <section
      id="projects"
      className="border-t border-border px-6 py-24 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
              02 / Selected Work
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
              Projects that
              <br />
              <span className="text-muted">
                demonstrate the work.
              </span>
            </h2>

            <p className="mt-6 text-base leading-7 text-muted sm:text-lg">
              A selection of software, database, and networking
              projects that represent what I build and the problems
              I enjoy solving.
            </p>
          </div>

          <a
            href="/projects"
            className="inline-flex items-center gap-2 text-sm font-medium hover:opacity-60"
          >
            View all projects
            <span>→</span>
          </a>
        </div>

        <div className="mt-16 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard
              key={project.slug}
              project={project}
            />
          ))}
        </div>
      </div>
    </section>
  );
}