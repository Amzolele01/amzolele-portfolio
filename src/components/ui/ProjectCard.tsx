import Link from "next/link";
import type { Project } from "@/types/project";

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group flex h-full flex-col border border-border bg-background p-6 transition-colors hover:bg-surface sm:p-8">
      <div className="flex items-center justify-between">
        <span className="font-mono text-xs text-muted-foreground">
          {project.number}
        </span>

        <span className="font-mono text-[10px] uppercase tracking-wider text-muted">
          {project.category}
        </span>
      </div>

      <div className="mt-10">
        <h3 className="text-2xl font-semibold tracking-tight">
          {project.title}
        </h3>

        <p className="mt-4 text-sm leading-6 text-muted sm:text-base">
          {project.description}
        </p>
      </div>

      <div className="mt-8 flex flex-wrap gap-2">
        {project.technologies.map((technology) => (
          <span
            key={technology}
            className="rounded-full border border-border px-3 py-1 font-mono text-[10px] uppercase tracking-wide text-muted"
          >
            {technology}
          </span>
        ))}
      </div>

      <div className="mt-auto pt-10">
        <Link
          href={`/projects/${project.slug}`}
          className="inline-flex items-center gap-2 text-sm font-medium hover:opacity-60"
        >
          View project
          <span className="transition-transform duration-200 group-hover:translate-x-1">
            →
          </span>
        </Link>
      </div>
    </article>
  );
}