import type { Section } from "../types/content";

interface Props {
  sections: Section[];
  currentSection: string;
  sectionsRead: string[];
  onSelect: (id: string) => void;
  onShowGlossary: () => void;
  onShowFaq: () => void;
  onShowSources: () => void;
}

export function Sidebar({
  sections,
  currentSection,
  sectionsRead,
  onSelect,
  onShowGlossary,
  onShowFaq,
  onShowSources,
}: Props) {
  return (
    <nav className="w-full lg:w-64 shrink-0">
      <div className="lg:sticky lg:top-6">
        <h2 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3 px-3">
          Sections
        </h2>
        <ul className="space-y-1">
          {sections.map((s) => {
            const isActive = s.id === currentSection;
            const isRead = sectionsRead.includes(s.id);
            return (
              <li key={s.id}>
                <button
                  onClick={() => onSelect(s.id)}
                  className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                    isActive
                      ? "bg-indigo-50 text-indigo-700 font-medium"
                      : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                  }`}
                >
                  <span className="flex items-center gap-2">
                    {isRead ? (
                      <span className="text-green-500 text-xs">&#10003;</span>
                    ) : (
                      <span className="text-slate-300 text-xs">&#9675;</span>
                    )}
                    {s.title}
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
        <hr className="my-4 border-slate-200" />
        <ul className="space-y-1">
          <li>
            <button
              onClick={onShowGlossary}
              className="w-full text-left px-3 py-2 rounded-lg text-sm text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors"
            >
              Glossary
            </button>
          </li>
          <li>
            <button
              onClick={onShowFaq}
              className="w-full text-left px-3 py-2 rounded-lg text-sm text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors"
            >
              Common Questions
            </button>
          </li>
          <li>
            <button
              onClick={onShowSources}
              className="w-full text-left px-3 py-2 rounded-lg text-sm text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors"
            >
              Sources &amp; Bibliography
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
