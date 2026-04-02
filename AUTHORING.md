# Authoring Guide: How to Create a New Module

This guide walks you through creating a new topic module from scratch — either by writing content by hand or using AI to help generate it.

## Overview

A module is a self-contained set of content on one topic. All content lives in a single TypeScript file (e.g., `src/content/your-topic.ts`) that exports a `Module` object. The React app reads this object and renders it — no database, no API, no backend.

## Step 1: Choose Your Topic and Outline

Pick a topic with enough depth for 4-7 sections. Write a rough outline:

```
Topic: The History of Computing
1. Mechanical Computation (Babbage, Lovelace, punch cards)
2. The Electronic Era (ENIAC, Turing, vacuum tubes)
3. The Personal Computer Revolution (Wozniak, Gates, the garage)
4. The Internet Age (ARPANET, Berners-Lee, the browser wars)
5. Mobile and Cloud (smartphones, AWS, always-connected)
6. AI and What Comes Next (machine learning, LLMs, open questions)
```

## Step 2: Gather Sources

Find 10-30 reputable sources for your topic. These can be books, academic papers, reports, or well-sourced articles. Each source needs:
- A short ID (e.g., `turing-computable-numbers`)
- Title, author, year
- A one-sentence description

## Step 3: Create the Content File

Copy `src/content/social-justice.ts` as a template and replace the content. The structure is:

```typescript
import type { Module } from "../types/content";

const module: Module = {
  meta: {
    title: "Your Module Title",
    slug: "your-topic",
    description: "A one-paragraph description of what this module covers.",
    audience: ["high school", "undergrad", "general public"],
    author: "Your Name",
    license: "CC0 1.0",
    version: "1.0.0",
  },
  sections: [ /* ... */ ],
  glossary: [ /* ... */ ],
  faq: [ /* ... */ ],
  sources: [ /* ... */ ],
};

export default module;
```

## Content Schema Reference

### Section

Each section needs all of these fields:

```typescript
{
  id: "unique-slug",           // URL-safe, lowercase, hyphens
  title: "Section Title",
  order: 1,                    // Display order (1-indexed)
  summary: "...",              // The main content. Multiple paragraphs.
                               // Use **bold** and *italic* markers.

  keyConcepts: [               // 3-5 key concepts per section
    {
      term: "Concept Name",
      definition: "One-sentence definition.",
      relatedConcepts: ["Other Term", "Another Term"],
    },
  ],

  explainFurther: {
    eli5: "...",               // Explain like I'm five. ~1 paragraph.
    intermediate: "...",       // Assumes some familiarity. ~1 paragraph.
    advanced: "...",           // Graduate-level depth. ~1 paragraph.
  },

  digDeeper: [                 // 1-3 expandable deep-dive panels
    {
      title: "Panel Title",
      content: "...",          // Detailed exploration of a subtopic.
      sourceCitations: ["source-id"],
    },
  ],

  quiz: [                      // 2-4 quiz questions per section
    {
      id: "q1-1",             // Unique across the module
      question: "The question text?",
      type: "multiple_choice", // or "true_false"
      options: ["A", "B", "C", "D"],
      correctAnswer: 0,       // Zero-indexed
      explanation: "Why this is the correct answer.",
      sourceCitations: ["source-id"],
    },
  ],

  connections: ["other-section-id"],  // Links to related sections
}
```

### Glossary Entry

```typescript
{
  term: "Term",
  definition: "Clear, concise definition.",
  firstSeenInSection: "section-id",
  relatedTerms: ["Related Term"],
}
```

### FAQ Entry

```typescript
{
  question: "A question learners commonly ask?",
  answer: "A clear, substantive answer.",
  relatedSections: ["section-id"],
}
```

### Source Entry

```typescript
{
  id: "author-short-title",   // Used in sourceCitations arrays
  title: "Full Title of the Work",
  author: "Author Name",
  year: 2024,
  url: "https://...",         // Optional
  description: "One sentence describing the work and its relevance.",
}
```

## Step 4: Wire It Up

In `src/App.tsx`, change the import:

```typescript
// Before
import moduleData from "./content/social-justice";
// After
import moduleData from "./content/your-topic";
```

## Step 5: Validate and Preview

```bash
# Type-check (catches missing fields, wrong types)
npx tsc --noEmit

# Preview locally
npm run dev

# Build for production
npm run build
```

## Writing Tips

### Summaries (the main content)
- Write in clear, accessible prose
- Lead with the most important point
- Use **bold** for key terms on first appearance
- Break long sections into paragraphs with clear transitions
- Include specific examples, dates, and names — not just abstractions
- Every factual claim should be traceable to a source

### Multi-level explanations
- **Simple (ELI5):** Use everyday language and analogies. A middle schooler should understand it. One paragraph.
- **Intermediate:** Assumes the reader has finished the summary. Add nuance, caveats, and connections. One paragraph.
- **Advanced:** Assumes graduate-level familiarity. Name specific scholars, theories, and debates. Can be dense. One paragraph.

### Quiz questions
- Test understanding, not memorization
- Wrong answers should be plausible (not absurd)
- Explanations should teach — they're a learning opportunity, not just "the answer is B"
- Include source citations when the explanation references specific facts

### Dig Deeper panels
- Each one should cover a specific subtopic in more depth than the summary
- Good candidates: a case study, a historical example, a counterargument, a methodological detail
- 1-3 paragraphs each

## Using AI to Help Author Content

You can use any LLM (Claude, GPT, etc.) to draft content, then review and edit it. Here's a workflow:

1. Write your section outline and gather sources
2. Prompt the LLM with: the topic, the section title, your sources, and the schema format
3. Review the output for accuracy, tone, and completeness
4. Edit heavily — AI drafts are a starting point, not a finished product
5. Verify all factual claims against your sources
6. The AI authoring step is optional. You can write everything by hand.

The key principle: **the authoring pipeline is a convenience, not a dependency.** Someone with no API key can create a module by writing the TypeScript file directly.
