import Link from "next/link";
import { notFound } from "next/navigation";
import { getProjectBySlug } from "@/lib/projects";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ProjectPage({
  params,
}: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-background px-6 py-24 text-foreground lg:px-8">
      <div className="mx-auto max-w-4xl">
        <Link
          href="/projects"
          className="text-sm text-muted hover:opacity-60"
        >
          ← Back to projects
        </Link>

        <div className="mt-12">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
            {project.number} / {project.category}
          </p>

          <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
            {project.title}
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-7 text-muted sm:text-lg">
            {project.description}
          </p>

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

          <div className="mt-12 border-t border-border pt-8">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
              Project details
            </p>

            <p className="mt-4 text-sm leading-6 text-muted">
              Detailed project documentation will be added during
              the project case-study phase.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}