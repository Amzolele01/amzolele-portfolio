"use client";

import { useEffect, useState } from "react";

type Certification = {
  number: string;
  title: string;
  issuer: string;
  date: string;
  description: string;
  pdfUrl?: string;
};

const certifications: Certification[] = [
  {
    number: "01",
    title: "Excel 2016 Essential Training",
    issuer: "LinkedIn Learning",
    date: "Aug 2025",
    description:
      "Foundational and intermediate training in Microsoft Excel, covering formulas, functions, data analysis, pivot tables, charts, and spreadsheet management.",
    pdfUrl: "https://www.linkedin.com/in/amzolele-jolingana/overlay/Certifications/1984887030/treasury/?profileId=ACoAAD2VDckBDwA8NFmfi5fT_PcKsLooG23I7z0",
  },
  {
    number: "02",
    title: "Learning Data Analytics: 1 Foundations",
    issuer: "LinkedIn Learning",
    date: "Aug 2025",
    description:
      "Foundational training in data analytics, introducing core concepts and approaches used to work with and interpret data.",
    pdfUrl: "https://www.linkedin.com/in/amzolele-jolingana/overlay/Certifications/1837592117/treasury/?profileId=ACoAAD2VDckBDwA8NFmfi5fT_PcKsLooG23I7z0",
  },
  {
    number: "03",
    title: "Project Management Foundations",
    issuer: "LinkedIn Learning",
    date: "Sep 2025",
    description:
      "Foundational training in project planning, stakeholder management, and the core principles used to organize and manage projects.",
    pdfUrl: "https://www.linkedin.com/in/amzolele-jolingana/overlay/Certifications/946808622/treasury/?profileId=ACoAAD2VDckBDwA8NFmfi5fT_PcKsLooG23I7z0",
  },
  {
    number: "04",
    title: "Business Management & Organization",
    issuer: "LinkedIn Learning",
    date: "Sep 2025",
    description:
      "Training covering fundamental concepts in business management, organizational behavior, and effective workplace organization.",
    pdfUrl: "https://www.linkedin.com/in/amzolele-jolingana/overlay/Certifications/947524976/treasury/?profileId=ACoAAD2VDckBDwA8NFmfi5fT_PcKsLooG23I7z0",
  },
  {
    number: "05",
    title: "Freelancing Foundations",
    issuer: "LinkedIn Learning",
    date: "Aug 2025",
    description:
      "Training covering the fundamentals of freelancing, including professional services, client relationships, and sustainable freelance workflows.",
    pdfUrl: "https://www.linkedin.com/in/amzolele-jolingana/overlay/Certifications/2052476190/treasury/?profileId=ACoAAD2VDckBDwA8NFmfi5fT_PcKsLooG23I7z0",
  },
  {
    number: "06",
    title: "Writing Emails People Want to Read",
    issuer: "LinkedIn Learning",
    date: "Aug 2025",
    description:
      "Training focused on writing clear, professional, and effective emails for workplace and business communication.",
    pdfUrl: "https://www.linkedin.com/in/amzolele-jolingana/overlay/Certifications/1995391111/treasury/?profileId=ACoAAD2VDckBDwA8NFmfi5fT_PcKsLooG23I7z0",
  },
  {
    number: "07",
    title: "Note-Taking for Business Professionals",
    issuer: "LinkedIn Learning",
    date: "Sep 2025",
    description:
      "Training focused on structured note-taking techniques for capturing, organizing, and retaining important information in professional environments.",
    pdfUrl: "https://www.linkedin.com/in/amzolele-jolingana/overlay/Certifications/1056058590/treasury/?profileId=ACoAAD2VDckBDwA8NFmfi5fT_PcKsLooG23I7z0",
  },
  {
    number: "08",
    title: "Efficient Time Management",
    issuer: "LinkedIn Learning",
    date: "Aug 2025",
    description:
      "Training focused on prioritization, goal setting, organization, and productivity strategies for managing daily work and long-term objectives.",
    pdfUrl: "https://www.linkedin.com/in/amzolele-jolingana/overlay/Certifications/1985319674/treasury/?profileId=ACoAAD2VDckBDwA8NFmfi5fT_PcKsLooG23I7z0",
  },
  {
    number: "09",
    title: "Business Etiquette: Phone, Email, and Text",
    issuer: "LinkedIn Learning",
    date: "Sep 2025",
    description:
      "Training focused on professional communication across phone, email, and text, with emphasis on appropriate tone, clarity, and client interaction.",
    pdfUrl: "https://www.linkedin.com/in/amzolele-jolingana/overlay/Certifications/963417042/treasury/?profileId=ACoAAD2VDckBDwA8NFmfi5fT_PcKsLooG23I7z0",
  },
];

export default function Certifications() {
  const [visibleCount, setVisibleCount] = useState(3);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const updateVisibleCount = () => {
      if (window.innerWidth < 640) {
        setVisibleCount(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCount(2);
      } else {
        setVisibleCount(3);
      }
    };

    updateVisibleCount();

    window.addEventListener("resize", updateVisibleCount);

    return () => {
      window.removeEventListener("resize", updateVisibleCount);
    };
  }, []);

  const displayedCertifications = expanded
    ? certifications
    : certifications.slice(0, visibleCount);

  const hasMore = certifications.length > visibleCount;

  return (
    <section
      id="certifications"
      className="border-t border-border px-6 py-24 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
            04 / Certifications
          </p>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
            Certifications &
            <br />
            <span className="text-muted">
              professional development.
            </span>
          </h2>

          <p className="mt-6 text-base leading-7 text-muted sm:text-lg">
            Professional certifications and structured learning that
            complement my technical skills and project experience.
          </p>
        </div>

        {/* Certification Cards */}
        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {displayedCertifications.map((certification) => (
            <article
              key={certification.number}
              role={certification.pdfUrl ? "link" : undefined}
              tabIndex={certification.pdfUrl ? 0 : undefined}
              onClick={() => {
                if (certification.pdfUrl) {
                  window.open(
                    certification.pdfUrl,
                    "_blank",
                    "noopener,noreferrer"
                  );
                }
              }}
              onKeyDown={(event) => {
                if (
                  certification.pdfUrl &&
                  (event.key === "Enter" || event.key === " ")
                ) {
                  event.preventDefault();

                  window.open(
                    certification.pdfUrl,
                    "_blank",
                    "noopener,noreferrer"
                  );
                }
              }}
              className={`group rounded-2xl border border-border bg-background p-8 transition-colors ${
                certification.pdfUrl
                  ? "cursor-pointer hover:bg-surface focus:outline-none focus:ring-2 focus:ring-border"
                  : ""
              }`}
            >
              {/* Number + Date */}
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-muted-foreground">
                  {certification.number}
                </span>

                <span className="font-mono text-[10px] uppercase tracking-wider text-muted">
                  {certification.date}
                </span>
              </div>

              {/* Title */}
              <h3 className="mt-10 text-xl font-semibold tracking-tight">
                {certification.title}
              </h3>

              {/* Issuer */}
              <p className="mt-2 text-sm text-muted">
                {certification.issuer}
              </p>

              {/* Description */}
              <p className="mt-6 text-sm leading-6 text-muted">
                {certification.description}
              </p>

              {/* PDF Link Indicator */}
              {certification.pdfUrl && (
                <div className="mt-8 inline-flex items-center gap-2 text-sm font-medium transition-opacity group-hover:opacity-60">
                  View certificate
                  <span>↗</span>
                </div>
              )}
            </article>
          ))}
        </div>

        {/* Show More / Show Less */}
        {hasMore && (
          <div className="mt-10 flex justify-center">
            <button
              type="button"
              onClick={() => setExpanded((current) => !current)}
              className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:bg-surface"
            >
              {expanded ? "Show Less" : "Show More"}
              <span>{expanded ? "↑" : "↓"}</span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}