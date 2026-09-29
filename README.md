# Amzolele — Software Developer & Technology Builder

> A personal technology portfolio showcasing software development, databases, data, cybersecurity, networking, and electronics projects.

---

## Overview

This repository contains the source code for my personal portfolio website.

The portfolio is designed to be more than a personal landing page. It serves as a central platform for presenting my technical background, projects, skills, certifications, areas of interest, and continued development as a technology builder.

My work sits across several areas of technology, particularly:

- Software Development
- Databases & SQL
- Data
- Cybersecurity
- Computer Networking
- Electronics & Embedded Systems

The portfolio is being developed as a real software project, with an emphasis on clean architecture, reusable components, responsive design, maintainability, accessibility, and continuous improvement.

---

## Objectives

The main objectives of this portfolio are to:

1. Present my technical background in a professional and accessible way.
2. Showcase practical projects rather than relying only on lists of skills.
3. Demonstrate my ability to design and build software systems.
4. Document the development process and lessons learned from projects.
5. Provide a central location for my GitHub repositories, live applications, and other professional work.
6. Highlight my experience across software, data, databases, cybersecurity, networking, and electronics.
7. Create a platform that can evolve as my skills and career develop.
8. Use the portfolio itself as evidence of my ability to work with modern web technologies.

---

# Portfolio Structure

The main homepage is organized into several sections.

Navbar
   │
   ▼
Hero
   │
   ▼
What I Do
   │
   ▼
Projects
   │
   ▼
Skills
   │
   ▼
About
   │
   ▼
Contact
   │
   ▼
Footer

Each section has a specific purpose rather than simply being included for visual decoration.


---

Main Page

Hero

The Hero section introduces the portfolio and establishes its overall technical direction.

Current positioning

> Software Developer & Technology Builder



The section communicates an interest in building practical technology solutions across software, data, cybersecurity, and hardware.

It also provides the primary navigation points for visitors:

View My Work

Contact Me


The Hero includes a subtle technical grid background to reinforce the engineering-oriented visual identity without relying on excessive visual effects.


---

What I Do

The What I Do section presents the main technical areas that currently define my work.

Software Development

Focus areas include:

React

Next.js

JavaScript

Java


The goal is to build practical applications and software systems that solve specific problems.

Database & Data

Focus areas include:

SQL

PostgreSQL

Database Design

Excel


This area focuses on relational databases, data organization, querying, and working with information in a structured way.

Cybersecurity

Focus areas include:

Computer Networking

Linux

Security

Cyber Forensics


This represents an ongoing area of development focused on understanding systems, networks, security principles, and defensive technologies.

Electronics & Embedded Systems

Focus areas include:

Electronics

Microcontrollers

Embedded Systems


This reflects the hardware side of my technical background and the relationship between software and physical systems.


---

Projects

Projects are one of the most important parts of the portfolio.

Instead of simply listing technologies, projects provide practical evidence of how those technologies are used.

The portfolio will eventually contain both featured projects and a larger collection of categorized work.

Featured Projects

Current project placeholders include:

TrackMySkillz

A full-stack web application focused on tracking skills and learning progress.

Technologies:

React

Node.js

PostgreSQL



---

Online Voting System

A database-driven voting system designed to manage users, elections, candidates, and voting records.

Technologies:

JavaScript

SQL

Database Design


A personal implementation of the system is being developed separately so that the project can be understood and presented as an individual engineering project.


---

Network Topologies

A networking project demonstrating practical network configuration and topology concepts.

Technologies:

Cisco Packet Tracer

IPv4

IPv6

VLANs



---

Project Pages

Projects will eventually have dedicated pages.

The planned structure is:

/projects
/projects/[slug]

Example:

/projects/trackmyskillz
/projects/online-voting-system

Individual project pages will provide substantially more information than the project cards on the homepage.

A project page may contain:

Project overview

Problem statement

Objectives

Requirements

Solution

Architecture

Technologies

Database design

Implementation

Screenshots

Challenges

Solutions

Lessons learned

Future improvements

GitHub repository

Live demonstration


This allows the portfolio to demonstrate not only what was built, but also how and why it was built.


---

Project Categories

As the number of projects grows, projects will be organized into dedicated areas.

Planned categories include:

/portfolio/software
/portfolio/database
/portfolio/data

This allows visitors to explore work based on the technical area that interests them.

The category structure can expand later as additional projects are developed.


---

Skills

The Skills section organizes technologies into meaningful groups instead of using arbitrary percentage-based proficiency ratings.

Programming

Java

JavaScript

Python

SQL


Web Development

HTML

CSS

React

Next.js

Node.js


Data & Databases

SQL

PostgreSQL

Database Design

Data Analysis

Excel


Systems & Security

Computer Networks

Linux

Cybersecurity

Cyber Forensics


Electronics

Electronics

Microcontrollers

Embedded Systems


Development Tools

Git

GitHub

Visual Studio Code

Cisco Packet Tracer


The skills section will continue to evolve as new projects and experience provide stronger evidence of practical ability.


---

About

The About section provides context behind the technical work.

The portfolio represents someone developing across multiple areas of technology while building stronger practical experience through projects and continued learning.

The primary interests currently include:

Software development

Databases

Data

Cybersecurity

Networking

Electronics

Embedded systems


The long-term purpose of the portfolio is not simply to display a fixed set of skills, but to document continuous technical growth.


---

Contact

The Contact section provides a simple way for visitors to connect.

The final version will contain real professional contact information, including appropriate links to:

Email

GitHub

LinkedIn

Other relevant professional platforms


Additional contact methods may be introduced later where appropriate.


---

Design Philosophy

The portfolio follows a clean and restrained technical aesthetic.

Design principles

Minimal

Professional

Technical

Responsive

Accessible

Content-focused

Maintainable


The interface uses:

Strong typography

Generous whitespace

Subtle borders

Rounded components

Minimal shadows

Restrained animation

Consistent spacing

Light and dark themes


The goal is to make the technical work the focus rather than allowing the design to overpower the content.


---

Theme System

The portfolio supports three theme modes:

Light
Dark
System

The selected theme is persisted locally so that the visitor's preference is retained.

The System option follows the operating system's preferred color scheme.


---

Responsive Design

The portfolio is being designed to work across different screen sizes.

Target environments include:

Mobile phones

Tablets

Laptops

Desktop monitors

Large displays


Responsive behavior is considered throughout the application rather than being added only after the desktop version is complete.


---

Technology Stack

Frontend

Next.js

React

TypeScript

Tailwind CSS


Runtime / Server

Node.js

Next.js server capabilities


Development

Git

GitHub

Visual Studio Code


Potential Future Technologies

Depending on the requirements of future portfolio features, additional technologies may be introduced for:

Database functionality

APIs

Contact processing

Authentication

Analytics

Content management


Technologies will only be introduced when they provide a practical purpose.


---

Architecture

The application is being organized around reusable components.

Current structure:

src/
├── app/
│
├── components/
│   ├── sections/
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── WhatIDo.tsx
│   │   ├── Projects.tsx
│   │   ├── Skills.tsx
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   │
│   └── ui/
│       ├── ThemeToggle.tsx
│       └── ProjectCard.tsx
│
├── hooks/
├── lib/
└── types/

The architecture will evolve as functionality is added.

The goal is to keep components focused, reusable, and easy to maintain.


---

Development Roadmap

The portfolio is being developed in phases.

Phase 1 — Foundation & Homepage UI

Status: Completed

Completed:

Project foundation

Design system

Theme system

Navbar

Hero

What I Do

Projects

Skills

About

Contact

Footer

Reusable Project Card



---

Phase 2 — Homepage Polish & Responsive QA

Status: Next

Focus:

Mobile layout

Tablet layout

Desktop layout

Responsive spacing

Typography

Theme testing

Component consistency

Accessibility

Navigation testing

Hover states

Focus states

Visual refinement


The objective is to make the homepage feel like one complete product rather than a collection of individual sections.


---

Phase 3 — Project Architecture

Focus:

Project data model

Reusable project data

Project metadata

Slugs

Featured projects

Project categories

GitHub links

Live demo links

Project images


The objective is to separate project content from presentation.


---

Phase 4 — Project Pages

Focus:

/projects
/projects/[slug]

Each project will receive a detailed case-study-style page.


---

Phase 5 — Real Project Content

Temporary project information will be replaced with:

Real descriptions

Real repositories

Real screenshots

Real technologies

Real architecture

Real project objectives

Real implementation details

Real lessons learned



---

Phase 6 — Additional Portfolio Features

Potential features include:

Services

Certifications

More project categories

Project filtering

Search

Contact functionality

Dynamic data


Features will be added according to actual requirements rather than simply increasing complexity.


---

Phase 7 — SEO & Accessibility

Focus:

Metadata

Open Graph information

Sitemap

Robots configuration

Semantic HTML

Keyboard navigation

Accessible labels

Color contrast

Page structure



---

Phase 8 — Performance

Focus:

Image optimization

Font optimization

Client/server component boundaries

JavaScript optimization

Loading performance

Unnecessary dependency removal



---

Phase 9 — Final UI & Content Polish

Focus:

Typography

Copywriting

Spacing

Animation

Micro-interactions

Consistency

Project presentation



---

Phase 10 — Deployment

The final portfolio will be prepared for production deployment.

Planned workflow:

Local Development
       ↓
Git
       ↓
GitHub
       ↓
Production Build
       ↓
Deployment
       ↓
Custom Domain
       ↓
Live Portfolio


---

Development Philosophy

This portfolio is being developed incrementally.

The approach is:

Build
  ↓
Test
  ↓
Review
  ↓
Refine
  ↓
Document
  ↓
Continue

Temporary content is intentionally being used during the early development stages.

This allows the application architecture and user interface to be completed before spending significant time polishing individual projects.

Once the main structure is stable, temporary content and links will be replaced with verified project information.


---

Goals

The finished portfolio should demonstrate more than familiarity with web development.

It should demonstrate the ability to:

Design a software interface

Structure a web application

Build reusable React components

Work with TypeScript

Build responsive interfaces

Work with databases

Document technical projects

Use Git and GitHub

Understand software architecture

Present technical work professionally

Continuously improve an existing system


Most importantly, the portfolio itself is intended to be a demonstration of the development process.


---

Future Improvements

Possible future improvements include:

More advanced project filtering

Interactive technical demonstrations

Blog or technical writing section

Dynamic project management

Analytics

More advanced animations

Additional data visualizations

API integrations

Expanded cybersecurity projects

Expanded database and data engineering projects

Additional electronics and embedded projects


These improvements will be considered as the portfolio and technical experience develop.


---

Project Status

Current stage: Phase 1 — Foundation & Homepage UI

The core homepage structure has been implemented.

The next development stage is:

> Phase 2 — Homepage Polish & Responsive QA



The portfolio will continue to evolve alongside the projects and technical experience it represents.


---

Author

Lee

Software Developer & Technology Builder

Areas of interest:

Software Development · Databases · Data · Cybersecurity · Networking · Electronics


---

License

This repository contains a personal portfolio and associated project work.

Unless otherwise stated, the source code and original content are not intended for redistribution or commercial reuse.

### One thing I'd change later

I would **not treat this README as final documentation yet**. The structure above is our current project specification, but once the portfolio is actually finished, we'll do a final README pass and update:

- the actual architecture
- final technologies
- real project list
- screenshots
- deployment URL
- GitHub links
- completed features
- challenges and solutions
- final roadmap/status

That way the GitHub README becomes a **record of the finished engineering project**, rather than a document that becomes outdated while we're still building.