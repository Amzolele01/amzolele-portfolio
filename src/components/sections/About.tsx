export default function About() {
  return (
    <section
      id="about"
      className="border-t border-border px-6 py-24 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          {/* Section heading */}
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
              04 / About
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
              Building,
              <br />
              <span className="text-muted">
                learning & exploring.
              </span>
            </h2>
          </div>

          {/* Content */}
          <div className="max-w-2xl">
            <p className="text-xl leading-8 tracking-tight sm:text-2xl">
              I build practical experience across 
              software, data, cybersecurity, and hardware, 
              with a background in Computer Science & Electronics.  
            </p>
            <br />

            <p>
              My background in Computer Science & Electronics has 
              given me experience across both software and hardware,
               while developing my interest in how systems work and how 
               different technologies connect.
            </p>

            <div className="mt-8 space-y-6 text-sm leading-7 text-muted sm:text-base">
              <p>
                I enjoy understanding how systems work from the
                ground up and then turning that knowledge into
                practical solutions. My projects range from
                software applications and database systems to
                networking and electronics.
              </p>

              <p>
                I am currently focused on developing stronger skills in
                databases and software development while expanding
                into cybersecurity and data engineering.
              </p>

              <p>
                I&apos;m continuously learning, building, experimenting,
                and looking for opportunities to apply technology
                to real-world problems.
              </p>
            </div>

            {/* Quick facts */}
            <div className="mt-12 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-3">
              <div className="bg-background p-5">
                <p className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                  Focus
                </p>
                <p className="mt-2 text-sm font-medium">
                  Software & Data
                </p>
              </div>

              <div className="bg-background p-5">
                <p className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                  Exploring
                </p>
                <p className="mt-2 text-sm font-medium">
                  Cybersecurity
                </p>
              </div>

              <div className="bg-background p-5">
                <p className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                  Foundation
                </p>
                <p className="mt-2 text-sm font-medium">
                  Electronics
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}