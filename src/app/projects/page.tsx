import Link from "next/link";
import ProjectCard from "@/components/ui/ProjectCard";
import { projects } from "@/lib/projects";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-background px-6 py-24 text-foreground lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <Link
            href="/"
            className="text-sm text-muted hover:opacity-60"
          >
            ← Back home
          </Link>

          <p className="mt-12 font-mono text-xs uppercase tracking-[0.2em] text-muted">
            Projects
          </p>

          <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
            Selected work
          </h1>

          <p className="mt-6 text-base leading-7 text-muted sm:text-lg">
            A collection of software, database, networking, and
            technology projects.
          </p>
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
    </main>
  );
}