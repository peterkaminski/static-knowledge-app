import { useState, useEffect, useCallback } from "react";

interface Progress {
  sectionsRead: string[];
  quizScores: Record<string, { correct: number; total: number }>;
}

const STORAGE_KEY = "social-justice-progress";

function loadProgress(): Progress {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) return JSON.parse(stored);
  } catch {
    // ignore
  }
  return { sectionsRead: [], quizScores: {} };
}

export function useProgress() {
  const [progress, setProgress] = useState<Progress>(loadProgress);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  }, [progress]);

  const markSectionRead = useCallback((sectionId: string) => {
    setProgress((prev) => {
      if (prev.sectionsRead.includes(sectionId)) return prev;
      return { ...prev, sectionsRead: [...prev.sectionsRead, sectionId] };
    });
  }, []);

  const saveQuizScore = useCallback(
    (sectionId: string, correct: number, total: number) => {
      setProgress((prev) => ({
        ...prev,
        quizScores: { ...prev.quizScores, [sectionId]: { correct, total } },
      }));
    },
    []
  );

  const resetProgress = useCallback(() => {
    setProgress({ sectionsRead: [], quizScores: {} });
  }, []);

  return { progress, markSectionRead, saveQuizScore, resetProgress };
}
