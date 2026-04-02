import { useState } from "react";
import type { FaqEntry } from "../types/content";

interface Props {
  entries: FaqEntry[];
  onNavigateToSection: (sectionId: string) => void;
}

export function FaqView({ entries, onNavigateToSection }: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div>
      <h1 className="text-3xl font-bold text-slate-900 mb-2">
        Common Questions
      </h1>
      <p className="text-slate-500 mb-6">
        Pre-authored answers to the questions learners ask most often.
      </p>
      <div className="space-y-3">
        {entries.map((entry, i) => (
          <div
            key={i}
            className="border border-slate-200 rounded-lg overflow-hidden"
          >
            <button
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="w-full text-left px-4 py-3 flex items-center justify-between bg-white hover:bg-slate-50 transition-colors"
            >
              <span className="font-medium text-slate-800 pr-4">
                {entry.question}
              </span>
              <span className="text-slate-400 text-lg shrink-0">
                {openIndex === i ? "\u2212" : "+"}
              </span>
            </button>
            {openIndex === i && (
              <div className="px-4 py-3 border-t border-slate-200 bg-slate-50">
                <p className="text-sm text-slate-700 leading-relaxed mb-3">
                  {entry.answer}
                </p>
                {entry.relatedSections.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs text-slate-400">
                      Related sections:
                    </span>
                    {entry.relatedSections.map((id) => (
                      <button
                        key={id}
                        onClick={() => onNavigateToSection(id)}
                        className="text-xs text-indigo-600 hover:text-indigo-800"
                      >
                        {id}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
