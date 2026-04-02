# Contributing

Thanks for your interest in contributing! This project is CC0 (public domain) — your contributions will be too.

## Ways to Contribute

### Add or improve content
- Fix factual errors or add missing nuance to existing sections
- Add quiz questions with sourced explanations
- Expand the glossary or FAQ
- Add new sources to the bibliography
- Improve the "Dig Deeper" panels with more detail

### Improve the app
- Fix bugs
- Improve accessibility (keyboard nav, screen reader support, contrast)
- Improve mobile responsiveness
- Add new interactive features (concept map, timeline, search, dark mode)
- Improve performance

### Create a new module
- Fork the repo and build a module on a different topic
- Follow the content schema in [AUTHORING.md](AUTHORING.md)
- Open a PR to add it to a shared collection (if one exists), or maintain it independently

## Development Setup

```bash
git clone <this-repo>
cd social-justice-deep-dive
npm install
npm run dev
```

## Making Changes

1. Fork the repo and create a branch from `main`
2. Make your changes
3. Run `npm run build` to verify everything compiles
4. Open a pull request with a clear description of what you changed and why

## Content Guidelines

- All factual claims should be sourced. Add entries to the `sources` array and reference them in `sourceCitations`
- Write for clarity. Jargon is fine when defined; unexplained jargon is not
- The "Simple" explanation level should be understandable by a middle schooler
- The "Advanced" level can assume graduate-level familiarity with the field
- Quiz questions should test understanding, not memorization
- Quiz explanations should teach, not just confirm the correct answer

## Code Guidelines

- TypeScript throughout — no `any` types
- Components should be simple and focused
- All content comes from `src/content/` — components should not contain hardcoded text
- Run `npx tsc --noEmit` before committing to catch type errors

## Reporting Issues

Open an issue on GitHub. For content corrections, please include a source.
