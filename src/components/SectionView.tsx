import { useState, useEffect } from "react";
import type { Section } from "../types/content";
import { Quiz } from "./Quiz";

interface Props {
  section: Section;
  onMarkRead: (id: string) => void;
  onQuizComplete: (sectionId: string, correct: number, total: number) => void;
  onNavigate: (sectionId: string) => void;
  sectionTitles: Record<string, string>;
}

type DepthLevel = "summary" | "eli5" | "intermediate" | "advanced";

const depthLabels: Record<DepthLevel, string> = {
  summary: "Standard",
  eli5: "Simple",
  intermediate: "Intermediate",
  advanced: "Advanced",
};

export function SectionView({
  section,
  onMarkRead,
  onQuizComplete,
  onNavigate,
  sectionTitles,
}: Props) {
  const [depth, setDepth] = useState<DepthLevel>("summary");
  const [showDigDeeper, setShowDigDeeper] = useState<string | null>(null);
  const [showQuiz, setShowQuiz] = useState(false);

  useEffect(() => {
    onMarkRead(section.id);
  }, [section.id, onMarkRead]);

  useEffect(() => {
    setDepth("summary");
    setShowDigDeeper(null);
    setShowQuiz(false);
  }, [section.id]);

  const content =
    depth === "summary"
      ? section.summary
      : section.explainFurther[depth as keyof typeof section.explainFurther];

  return (
    <article className="max-w-none">
      {/* Header */}
      <h1 className="text-3xl font-bold text-slate-900 mb-2">
        {section.title}
      </h1>
      <p className="text-sm text-slate-400 mb-6">
        Section {section.order} of 7
      </p>

      {/* Depth Switcher */}
      <div className="flex flex-wrap gap-2 mb-8">
        {(Object.keys(depthLabels) as DepthLevel[]).map((level) => (
          <button
            key={level}
            onClick={() => setDepth(level)}
            className={`px-3 py-1.5 text-sm rounded-full transition-colors ${
              depth === level
                ? "bg-indigo-600 text-white"
                : "bg-slate-100 text-slate-600 hover:bg-slate-200"
            }`}
          >
            {depthLabels[level]}
          </button>
        ))}
      </div>

      {/* Main Content */}
      <div className="prose prose-slate prose-lg max-w-none mb-10">
        {content.split("\n\n").map((para, i) => {
          // Handle bold markers
          const parts = para.split(/(\*\*[^*]+\*\*)/g);
          return (
            <p key={i}>
              {parts.map((part, j) => {
                if (part.startsWith("**") && part.endsWith("**")) {
                  return <strong key={j}>{part.slice(2, -2)}</strong>;
                }
                // Handle italic markers
                const italicParts = part.split(/(\*[^*]+\*)/g);
                return italicParts.map((ip, k) => {
                  if (ip.startsWith("*") && ip.endsWith("*")) {
                    return <em key={`${j}-${k}`}>{ip.slice(1, -1)}</em>;
                  }
                  return <span key={`${j}-${k}`}>{ip}</span>;
                });
              })}
            </p>
          );
        })}
      </div>

      {/* Key Concepts */}
      <div className="mb-10">
        <h2 className="text-xl font-semibold text-slate-800 mb-4">
          Key Concepts
        </h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {section.keyConcepts.map((concept) => (
            <div
              key={concept.term}
              className="bg-indigo-50 border border-indigo-100 rounded-lg p-4"
            >
              <h3 className="font-semibold text-indigo-900 mb-1">
                {concept.term}
              </h3>
              <p className="text-sm text-indigo-800">{concept.definition}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Dig Deeper */}
      {section.digDeeper.length > 0 && (
        <div className="mb-10">
          <h2 className="text-xl font-semibold text-slate-800 mb-4">
            Dig Deeper
          </h2>
          <div className="space-y-3">
            {section.digDeeper.map((dd) => (
              <div
                key={dd.title}
                className="border border-slate-200 rounded-lg overflow-hidden"
              >
                <button
                  onClick={() =>
                    setShowDigDeeper(
                      showDigDeeper === dd.title ? null : dd.title
                    )
                  }
                  className="w-full text-left px-4 py-3 flex items-center justify-between bg-slate-50 hover:bg-slate-100 transition-colors"
                >
                  <span className="font-medium text-slate-800">
                    {dd.title}
                  </span>
                  <span className="text-slate-400 text-lg">
                    {showDigDeeper === dd.title ? "\u2212" : "+"}
                  </span>
                </button>
                {showDigDeeper === dd.title && (
                  <div className="px-4 py-3 border-t border-slate-200">
                    <div className="prose prose-slate prose-sm max-w-none">
                      {dd.content.split("\n\n").map((para, i) => {
                        const parts = para.split(/(\*[^*]+\*)/g);
                        return (
                          <p key={i}>
                            {parts.map((part, j) => {
                              if (part.startsWith("*") && part.endsWith("*")) {
                                return (
                                  <em key={j}>{part.slice(1, -1)}</em>
                                );
                              }
                              return <span key={j}>{part}</span>;
                            })}
                          </p>
                        );
                      })}
                    </div>
                    {dd.sourceCitations.length > 0 && (
                      <p className="text-xs text-slate-400 mt-3">
                        Sources: {dd.sourceCitations.join(", ")}
                      </p>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Connected Sections */}
      {section.connections.length > 0 && (
        <div className="mb-10">
          <h2 className="text-xl font-semibold text-slate-800 mb-4">
            Related Sections
          </h2>
          <div className="flex flex-wrap gap-2">
            {section.connections.map((id) => (
              <button
                key={id}
                onClick={() => onNavigate(id)}
                className="px-3 py-1.5 text-sm bg-slate-100 text-slate-700 rounded-full hover:bg-slate-200 transition-colors"
              >
                {sectionTitles[id] || id}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Quiz Toggle */}
      {section.quiz.length > 0 && (
        <div className="mb-10">
          {!showQuiz ? (
            <button
              onClick={() => setShowQuiz(true)}
              className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors font-medium"
            >
              Take the Quiz ({section.quiz.length} questions)
            </button>
          ) : (
            <Quiz
              questions={section.quiz}
              sectionId={section.id}
              onComplete={onQuizComplete}
            />
          )}
        </div>
      )}
    </article>
  );
}
