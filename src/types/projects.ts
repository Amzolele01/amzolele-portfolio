export type Project = {
  number: string;
  title: string;
  slug: string;
  description: string;
  category: string;
  technologies: string[];

  github?: string;
  liveDemo?: string;

  featured?: boolean;
};