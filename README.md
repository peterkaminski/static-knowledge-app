# Topic Deep-Dive: Understanding Social Justice

> **This is a demonstration app, not a reference work.** It exists to show patterns for building self-contained, content-rich learning applications with React. The social justice content included here was assembled by Claude Opus 4.6 (an AI language model) as sample material to populate the framework. **Do not treat it as a vetted or authoritative source on social justice.** The intended use is as a starting point you can adapt with content that you curate, review, and take responsibility for.
>
> This project is released under [CC0 1.0 Universal](LICENSE) — dedicated to the public domain. You are free to copy, modify, distribute, and use it for any purpose, commercial or otherwise, without permission or attribution. It is provided as-is, without warranty of any kind. The authors and contributors accept no liability for the accuracy of the content, the fitness of the software for any purpose, or any consequences of its use. See the [LICENSE](LICENSE) file for the full legal text.

---

A self-contained, interactive learning app built with React + Vite + Tailwind CSS. All content is pre-authored and ships with the app — no backend, no API keys, no inference costs. Clone it, run it, learn from it, rebuild it.

## What This Is

An interactive textbook-style web app that teaches a single topic in depth. This instance covers **social justice** across 7 sections:

1. What Is Social Justice? (philosophical foundations)
2. Historical Movements (abolition through Black Lives Matter)
3. Economic Justice (wealth gap, redlining, wages)
4. Criminal Justice Reform (mass incarceration, policing)
5. Environmental Justice (pollution, climate, Indigenous sovereignty)
6. Intersectionality (compound discrimination, disability justice)
7. Taking Action (from awareness to organizing)

Each section includes:
- Full-length readable content
- **4 depth levels** (Simple / Standard / Intermediate / Advanced)
- Key concepts with definitions
- "Dig Deeper" expandable panels with sourced deep-dives
- Quiz questions with explanations
- Cross-links to related sections

Plus: searchable glossary, FAQ, 14-source bibliography, and localStorage progress tracking.

## Quick Start

```bash
git clone <this-repo>
cd social-justice-deep-dive
npm install
npm run dev
```

Open http://localhost:5173 in your browser. That's it.

## Build for Production

```bash
npm run build
```

Output goes to `dist/`. It's a static site — serve it from anywhere.

## For Teachers and Professors

This project is designed to be forked and rebuilt by students. See [AUTHORING.md](AUTHORING.md) for how to create a new module with different content.

### Assignment ideas

**Content-focused (any course):**
- Fork this repo and build a module on a topic from your course
- Add quiz questions to an existing section with sourced explanations
- Review the sources and add two that are missing

**Engineering-focused (CS / web dev):**
- Add a new interactive component (timeline, comparison table, concept map)
- Implement dark mode with a persisted toggle
- Add search across all sections and glossary entries
- Write unit tests for the quiz scoring logic
- Add an "export to PDF" feature
- Optimize the bundle size

**Combined / capstone:**
- Build a complete module on a topic of your choice, present it to the class, then peer-review another student's module

### What you get as a teacher
- A GitHub repo you can fork for your class
- Working example students can study and run locally
- A clear schema so students know what "done" looks like
- Zero infrastructure to maintain — no API keys, no servers, no bills
- Students learn real tools: React, TypeScript, Git, Vite, Tailwind

## Deployment

This is a static site. Build it once, serve the `dist/` folder from anywhere.

### Cloudflare Pages

1. Push your repo to GitHub or GitLab
2. Go to [Cloudflare Pages](https://pages.cloudflare.com/) and create a new project
3. Connect your repository
4. Set the build settings:
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
   - **Node.js version:** 18 (or later)
5. Click **Save and Deploy**

Subsequent pushes to `main` will auto-deploy. Free tier is more than sufficient.

### Netlify

**Option A: Git-connected (auto-deploy on push)**

1. Push your repo to GitHub, GitLab, or Bitbucket
2. Go to [Netlify](https://app.netlify.com/) and click **Add new site > Import an existing project**
3. Connect your repository
4. Set the build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
5. Click **Deploy site**

**Option B: Manual deploy (no Git required)**

```bash
npm run build
npx netlify-cli deploy --prod --dir=dist
```

### Vercel

**Option A: Git-connected**

1. Push your repo to GitHub, GitLab, or Bitbucket
2. Go to [Vercel](https://vercel.com/) and click **Add New > Project**
3. Import your repository
4. Vercel auto-detects Vite — the defaults are correct:
   - **Build command:** `npm run build`
   - **Output directory:** `dist`
5. Click **Deploy**

**Option B: CLI deploy**

```bash
npm install -g vercel
vercel --prod
```

### GitHub Pages

1. Install the deploy plugin:
   ```bash
   npm install -D gh-pages
   ```
2. Add to `package.json` scripts:
   ```json
   "deploy": "npm run build && gh-pages -d dist"
   ```
3. Set the `base` in `vite.config.ts` to your repo name:
   ```ts
   export default defineConfig({
     base: '/your-repo-name/',
     plugins: [react(), tailwindcss()],
   })
   ```
4. Run:
   ```bash
   npm run deploy
   ```

### Anywhere else

```bash
npm run build
# Serve the dist/ folder with any static file server:
npx serve dist
# Or copy dist/ to any web server, S3 bucket, etc.
```

## Project Structure

```
src/
  content/
    social-justice.ts    # All module content — this is the "database"
  types/
    content.ts           # TypeScript types for the content schema
  components/
    SectionView.tsx      # Main reading view with depth switcher
    Quiz.tsx             # Interactive quiz engine
    GlossaryView.tsx     # Searchable glossary
    FaqView.tsx          # Expandable FAQ
    SourcesView.tsx      # Bibliography
    Sidebar.tsx          # Section navigation
    ProgressBar.tsx      # Reading/quiz progress
  hooks/
    useProgress.ts       # localStorage progress tracking
  App.tsx                # App shell and routing
  main.tsx               # Entry point
```

## Content Schema

All content lives in `src/content/social-justice.ts` and follows the types in `src/types/content.ts`. See [AUTHORING.md](AUTHORING.md) for the full schema documentation.

## Tech Stack

- **React 19** with TypeScript
- **Vite** for building and dev server
- **Tailwind CSS v4** with the typography plugin
- No router (single-page with state-based navigation)
- No backend, no database, no API calls
- Progress stored in `localStorage`

## License

This project is released under [CC0 1.0 Universal](LICENSE) — dedicated to the public domain. You can copy, modify, distribute, and use it for any purpose without asking permission.

The content within this module references copyrighted works (books, articles, reports) which are cited in the bibliography. The citations are fair use; the referenced works retain their original copyright.
