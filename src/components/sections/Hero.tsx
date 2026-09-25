export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[calc(100vh-4rem)] items-center overflow-hidden"
    >
      {/* Background grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(to right, var(--border) 1px, transparent 1px), linear-gradient(to bottom, var(--border) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
          maskImage:
            "linear-gradient(to bottom, black, transparent 75%)",
        }}
      />

      <div className="mx-auto w-full max-w-7xl px-6 py-24 lg:px-8">
        <div className="max-w-4xl">
          {/* Technical label */}
          <div className="mb-6 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-muted">
            <span className="h-px w-8 bg-border-strong" />
            <p>Portfolio / {new Date().getFullYear()}</p>
          </div>

          {/* Main heading */}
          <h1 className="text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-8xl">
            Software Developer
            <br />
            <span className="text-muted">
              &amp; Technology Builder.
            </span>
          </h1>

          {/* Description */}
          <p className="mt-8 max-w-2xl text-base leading-7 text-muted sm:text-lg">
            I build practical software, data systems, 
            and technology-driven solutions, exploring 
            the intersection of software, data, cybersecurity, 
            and electronics to solve real-world problems.
          </p>

          {/* Actions */}
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              href="#projects"
              className="inline-flex h-12 items-center justify-center rounded-full bg-foreground px-6 text-sm font-medium !text-background hover:opacity-80"
            >
              View My Work
            </a>

            <a
              href="#contact"
              className="inline-flex h-12 items-center justify-center rounded-full border border-border px-6 text-sm font-medium hover:bg-surface"
            >
              Contact Me
            </a>
          </div>

          {/* Technology areas */}
          <div className="mt-16 flex flex-wrap gap-x-8 gap-y-3 font-mono text-xs text-muted-foreground">
            <span>SOFTWARE</span>
            <span>DATABASES</span>
            <span>CYBERSECURITY</span>
            <span>ELECTRONICS</span>
          </div>
        </div>
      </div>
    </section>
  );
}