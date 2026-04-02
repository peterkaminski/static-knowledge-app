import { useState, useCallback, useMemo } from "react";
import moduleData from "./content/social-justice";
import { useProgress } from "./hooks/useProgress";
import { ProgressBar } from "./components/ProgressBar";
import { Sidebar } from "./components/Sidebar";
import { SectionView } from "./components/SectionView";
import { GlossaryView } from "./components/GlossaryView";
import { FaqView } from "./components/FaqView";
import { SourcesView } from "./components/SourcesView";

type View =
  | { kind: "section"; sectionId: string }
  | { kind: "glossary" }
  | { kind: "faq" }
  | { kind: "sources" };

export default function App() {
  const [view, setView] = useState<View>({
    kind: "section",
    sectionId: moduleData.sections[0].id,
  });
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const { progress, markSectionRead, saveQuizScore, resetProgress } =
    useProgress();

  const sectionTitles = useMemo(() => {
    const map: Record<string, string> = {};
    moduleData.sections.forEach((s) => {
      map[s.id] = s.title;
    });
    return map;
  }, []);

  const navigateToSection = useCallback((sectionId: string) => {
    setView({ kind: "section", sectionId });
    setMobileNavOpen(false);
    window.scrollTo(0, 0);
  }, []);

  const currentSection =
    view.kind === "section"
      ? moduleData.sections.find((s) => s.id === view.sectionId)
      : null;

  const currentIndex = currentSection
    ? moduleData.sections.indexOf(currentSection)
    : -1;
  const prevSection =
    currentIndex > 0 ? moduleData.sections[currentIndex - 1] : null;
  const nextSection =
    currentIndex < moduleData.sections.length - 1
      ? moduleData.sections[currentIndex + 1]
      : null;

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Top Bar */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-30">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div>
            <h1 className="text-lg font-bold text-slate-900">
              {moduleData.meta.title}
            </h1>
            <p className="text-xs text-slate-400 hidden sm:block">
              {moduleData.meta.description.slice(0, 80)}...
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={resetProgress}
              className="text-xs text-slate-400 hover:text-slate-600"
              title="Reset progress"
            >
              Reset
            </button>
            <button
              onClick={() => setMobileNavOpen(!mobileNavOpen)}
              className="lg:hidden p-2 text-slate-600 hover:text-slate-900"
              aria-label="Toggle navigation"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 py-6 flex flex-col lg:flex-row gap-8">
        {/* Sidebar */}
        <div className={`${mobileNavOpen ? "block" : "hidden"} lg:block`}>
          <Sidebar
            sections={moduleData.sections}
            currentSection={view.kind === "section" ? view.sectionId : ""}
            sectionsRead={progress.sectionsRead}
            onSelect={navigateToSection}
            onShowGlossary={() => {
              setView({ kind: "glossary" });
              setMobileNavOpen(false);
              window.scrollTo(0, 0);
            }}
            onShowFaq={() => {
              setView({ kind: "faq" });
              setMobileNavOpen(false);
              window.scrollTo(0, 0);
            }}
            onShowSources={() => {
              setView({ kind: "sources" });
              setMobileNavOpen(false);
              window.scrollTo(0, 0);
            }}
          />
        </div>

        {/* Main Content */}
        <main className="flex-1 min-w-0">
          <ProgressBar
            sectionsRead={progress.sectionsRead.length}
            totalSections={moduleData.sections.length}
            quizScores={progress.quizScores}
          />

          {view.kind === "section" && currentSection && (
            <>
              <SectionView
                section={currentSection}
                onMarkRead={markSectionRead}
                onQuizComplete={saveQuizScore}
                onNavigate={navigateToSection}
                sectionTitles={sectionTitles}
              />
              <div className="flex justify-between mt-10 pt-6 border-t border-slate-200">
                {prevSection ? (
                  <button
                    onClick={() => navigateToSection(prevSection.id)}
                    className="text-sm text-slate-500 hover:text-indigo-600 transition-colors"
                  >
                    &larr; {prevSection.title}
                  </button>
                ) : (
                  <span />
                )}
                {nextSection ? (
                  <button
                    onClick={() => navigateToSection(nextSection.id)}
                    className="text-sm text-indigo-600 hover:text-indigo-800 font-medium transition-colors"
                  >
                    {nextSection.title} &rarr;
                  </button>
                ) : (
                  <span />
                )}
              </div>
            </>
          )}

          {view.kind === "glossary" && (
            <GlossaryView
              entries={moduleData.glossary}
              onNavigateToSection={navigateToSection}
            />
          )}

          {view.kind === "faq" && (
            <FaqView
              entries={moduleData.faq}
              onNavigateToSection={navigateToSection}
            />
          )}

          {view.kind === "sources" && (
            <SourcesView sources={moduleData.sources} />
          )}
        </main>
      </div>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white mt-12">
        <div className="max-w-6xl mx-auto px-4 py-6 text-center text-xs text-slate-400">
          <p>
            {moduleData.meta.title} &middot; {moduleData.meta.license} &middot;
            Version {moduleData.meta.version}
          </p>
          <p className="mt-1">
            Built with React + Vite + Tailwind CSS. No backend. No API keys. All
            content is pre-authored and ships with the app.
          </p>
          <p className="mt-1">

              Public domain (CC0) &middot;{" "}
            <a
              href="https://github.com/peterkaminski/static-knowledge-app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-500 hover:text-indigo-700 transition-colors"
            >
              Source code on GitHub
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
