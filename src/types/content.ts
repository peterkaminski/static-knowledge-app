export interface KeyConcept {
  term: string;
  definition: string;
  relatedConcepts?: string[];
}

export interface ExplainFurther {
  eli5: string;
  intermediate: string;
  advanced: string;
}

export interface DigDeeper {
  title: string;
  content: string;
  sourceCitations: string[];
}

export interface QuizQuestion {
  id: string;
  question: string;
  type: "multiple_choice" | "true_false";
  options: string[];
  correctAnswer: number;
  explanation: string;
  sourceCitations: string[];
}

export interface Section {
  id: string;
  title: string;
  order: number;
  summary: string;
  keyConcepts: KeyConcept[];
  explainFurther: ExplainFurther;
  digDeeper: DigDeeper[];
  quiz: QuizQuestion[];
  connections: string[];
}

export interface GlossaryEntry {
  term: string;
  definition: string;
  firstSeenInSection: string;
  relatedTerms: string[];
}

export interface FaqEntry {
  question: string;
  answer: string;
  relatedSections: string[];
}

export interface SourceEntry {
  id: string;
  title: string;
  author: string;
  year: number;
  url?: string;
  description: string;
}

export interface Module {
  meta: {
    title: string;
    slug: string;
    description: string;
    audience: string[];
    author: string;
    license: string;
    version: string;
  };
  sections: Section[];
  glossary: GlossaryEntry[];
  faq: FaqEntry[];
  sources: SourceEntry[];
}
