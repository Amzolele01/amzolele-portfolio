import type { Project } from "@/types/projects";

export const projects: Project[] = [
  {
    number: "01",
    title: "TrackMySkillz",
    slug: "trackmyskillz",
    category: "Web Application",
    description:
      "A platform for tracking skills and learning progress, built as a full-stack web application.",
    technologies: ["React", "Node.js", "PostgreSQL"],
    github: "#",
    liveDemo: "#",
    featured: true,
  },
  {
    number: "02",
    title: "Online Voting System",
    slug: "online-voting-system",
    category: "Database System",
    description:
      "A database-driven voting system designed to manage users, elections, candidates, and voting records.",
    technologies: ["JavaScript", "SQL", "Database Design"],
    github: "#",
    liveDemo: "#",
    featured: true,
  },
  {
    number: "03",
    title: "Network Topologies",
    slug: "network-topologies",
    category: "Networking",
    description:
      "A hybrid network implementation demonstrating multiple network topologies, VLAN segmentation, and network services.",
    technologies: ["Cisco", "IPv4", "IPv6", "VLAN"],
    github: "#",
    liveDemo: "#",
    featured: true,
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}