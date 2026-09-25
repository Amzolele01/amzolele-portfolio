const contactLinks = [
  {
    label: "Email",
    value: "amzolele.jolingana@gmail.com",
    href: "mailto:amzolele.jolingana@gmail.com",
  },
  {
    label: "GitHub",
    value: "Amzolele Jolingana",
    href: "https://github.com/Amzolele01",
  },
  {
    label: "LinkedIn",
    value: "Amzolele Jolingana",
    href: "https://linkedin.com/in/amzolele-jolingana",
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="border-t border-border px-6 py-24 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-16 lg:grid-cols-[1fr_0.8fr] lg:gap-24">
          {/* Heading */}
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
              05 / Contact
            </p>

            <h2 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-7xl">
              Let&apos;s build
              <br />
              <span className="text-muted">something useful.</span>
            </h2>

            <p className="mt-8 max-w-xl text-base leading-7 text-muted sm:text-lg">
              I&apos;m open to opportunities, collaborations, and practical 
              technology projects where I can learn, contribute, and build useful solutions.
            </p>
          </div>

          {/* Contact details */}
          <div className="flex flex-col">
            <div className="border-t border-border">
              {contactLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    link.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="group flex items-center justify-between border-b border-border py-6"
                >
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                      {link.label}
                    </p>

                    <p className="mt-2 text-sm font-medium sm:text-base">
                      {link.value}
                    </p>
                  </div>

                  <span className="text-muted transition-transform duration-200 group-hover:translate-x-1">
                    ↗
                  </span>
                </a>
              ))}
            </div>

            <a
              href="mailto:amzolele.jolingana@gmail.com"
              className="mt-8 inline-flex h-12 items-center justify-center rounded-full bg-foreground px-6 text-sm font-medium !text-background hover:opacity-80"
            >
              Send me an email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}