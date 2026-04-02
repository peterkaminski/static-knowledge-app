import { useState } from "react";
import type { GlossaryEntry } from "../types/content";

interface Props {
  entries: GlossaryEntry[];
  onNavigateToSection: (sectionId: string) => void;
}

export function GlossaryView({ entries, onNavigateToSection }: Props) {
  const [search, setSearch] = useState("");

  const filtered = entries.filter(
    (e) =>
      e.term.toLowerCase().includes(search.toLowerCase()) ||
      e.definition.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h1 className="text-3xl font-bold text-slate-900 mb-6">Glossary</h1>
      <input
        type="text"
        placeholder="Search terms..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full px-4 py-2 mb-6 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
      />
      <div className="space-y-4">
        {filtered.map((entry) => (
          <div
            key={entry.term}
            className="border border-slate-200 rounded-lg p-4"
          >
            <h3 className="font-semibold text-slate-900 mb-1">{entry.term}</h3>
            <p className="text-sm text-slate-600 mb-2">{entry.definition}</p>
            <div className="flex flex-wrap items-center gap-2">
              <button
                onClick={() => onNavigateToSection(entry.firstSeenInSection)}
                className="text-xs text-indigo-600 hover:text-indigo-800"
              >
                First appears in: {entry.firstSeenInSection}
              </button>
              {entry.relatedTerms.length > 0 && (
                <span className="text-xs text-slate-400">
                  Related: {entry.relatedTerms.join(", ")}
                </span>
              )}
            </div>
          </div>
        ))}
        {filtered.length === 0 && (
          <p className="text-slate-400 text-sm">
            No matching terms found.
          </p>
        )}
      </div>
    </div>
  );
}
