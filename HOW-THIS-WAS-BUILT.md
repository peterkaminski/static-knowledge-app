# How This Project Was Built

This project was built in a single session using [Claude Code](https://claude.com/product/claude-code) with Claude Opus 4.6. The app itself — content, components, types, and styling — was generated in one shot. The iteration that followed was entirely about packaging for open-source release: adding the license, writing documentation, cleaning up inconsistencies, and removing unnecessary files.

No code was written by hand. No files were manually edited. Every change was made through conversational prompts in Claude Code.

## Background

The session began with an existing project plan for a different version of this concept — an inference-powered app where Claude would answer questions in real time from a curated source corpus, backed by a vector database and API. That plan required API keys, a backend, and per-query costs.

The human asked for a parallel version that required no inference at all: an app where all knowledge is baked in at build time and ships as a static bundle. The motivating use case was open source for education — a teacher could hand the repo to students, who could study the content, then fork it and rebuild it with different content or different features.

## The Prompts

The project was built through a short sequence of conversational prompts. Here they are, cleaned up:

### 1. Create the project plan

> Read the existing project plan. Create a parallel project plan that doesn't rely on inference — it has all the knowledge it needs built into it, and gets shipped that way. I'm thinking this would be a good thing to open source. One use case: a high school teacher or college professor could download a cluster of these mini React apps and give the repo to their students, who could then rebuild it with different content or different features.

This produced `Project Plan - Static Topic Deep-Dive (No Inference).md`, which laid out the architecture, content schema, phases, and the classroom use case.

### 2. Build the app

> Come up with 15 pages of sample content on social justice and then build the application in a folder in this directory.

This single prompt produced the entire working application:
- React + Vite + Tailwind CSS project scaffolding
- TypeScript type definitions for the content schema
- ~1,200 lines of social justice content across 7 sections, each with multi-level explanations, key concepts, dig-deeper panels, quiz questions, glossary entries, FAQ, and a 14-source bibliography
- 8 React components (section reader, quiz engine, glossary, FAQ, sources, sidebar, progress bar, app shell)
- A localStorage-based progress tracking hook
- Responsive layout with mobile navigation

The app compiled and ran on the first attempt (after fixing one unused variable caught by TypeScript's strict mode).

### 3. Package for open-source release

> Initialize this as a git repo, then do an initial commit. Then add any files that would make this a good open source CC0 seed, including deployment instructions for Cloudflare, Netlify, Vercel.

This produced:
- Git repository with initial commit
- `LICENSE` (CC0 1.0 Universal, full text)
- `README.md` (project overview, quick start, teacher/student guide, deployment instructions for Cloudflare Pages, Netlify, Vercel, and GitHub Pages)
- `CONTRIBUTING.md` (later removed — unnecessary for CC0)
- `AUTHORING.md` (step-by-step guide to creating a new topic module)

### 4. Refinements

The remaining prompts were about polish and consistency:
- Add a disclaimer to the README clarifying this is a demo with AI-generated content
- Push to GitHub as a public repo
- Add a source code link and public domain notice to the app footer
- Fix a license inconsistency (one file said CC BY-SA 4.0, everything else said CC0)
- Remove the redundant CONTRIBUTING.md
- Remove a duplicate license mention from the footer

## What was one-shot vs. iterated

**One-shot (no revisions needed):**
- The entire React application — all components, types, hooks, and styling
- All 7 sections of content (~15 pages)
- The content schema design
- The quiz engine
- The progress tracking system
- The glossary, FAQ, and bibliography

**Iterated during release packaging:**
- License consistency (CC BY-SA 4.0 vs. CC0 — the content file was generated before the CC0 decision was made)
- Whether CONTRIBUTING.md makes sense for a CC0 project (it doesn't — removed)
- Duplicate license display in the footer
- README disclaimer wording

## Tools and stack

- **Claude Code** (CLI) with **Claude Opus 4.6** — all code generation and file manipulation
- **React 19** with TypeScript
- **Vite** for build tooling and dev server
- **Tailwind CSS v4** with the typography plugin
- **GitHub CLI** (`gh`) for repo creation and pushing

## Time

The entire session — from reading the original project plan to pushing the final commit — took place in a single sitting. The app was functional within the first few minutes; the rest was documentation and release polish.

## Reproducing this

You could reproduce a similar app on a different topic by giving Claude Code (or any capable LLM) a prompt along these lines:

> Build a self-contained React + Vite + Tailwind learning app on [your topic]. Include 5-7 sections with full explanatory text, multi-level explanations (simple through advanced), key concepts, quiz questions with explanations, a glossary, FAQ, and bibliography. All content should be baked into the app as static data — no backend, no API calls at runtime. Use TypeScript. Track reading progress in localStorage.

The content quality will depend on the model's knowledge of the topic. For any topic where accuracy matters, treat AI-generated content as a first draft that requires expert review — not as a finished product.
