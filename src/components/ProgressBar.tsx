interface Props {
  sectionsRead: number;
  totalSections: number;
  quizScores: Record<string, { correct: number; total: number }>;
}

export function ProgressBar({ sectionsRead, totalSections, quizScores }: Props) {
  const pct = totalSections > 0 ? Math.round((sectionsRead / totalSections) * 100) : 0;
  const totalCorrect = Object.values(quizScores).reduce((a, s) => a + s.correct, 0);
  const totalQuestions = Object.values(quizScores).reduce((a, s) => a + s.total, 0);

  return (
    <div className="bg-white border border-slate-200 rounded-xl p-4 mb-6 shadow-sm">
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-medium text-slate-700">
          {sectionsRead} of {totalSections} sections read
        </span>
        {totalQuestions > 0 && (
          <span className="text-sm text-slate-500">
            Quizzes: {totalCorrect}/{totalQuestions} correct
          </span>
        )}
      </div>
      <div className="w-full bg-slate-100 rounded-full h-2.5">
        <div
          className="bg-indigo-600 h-2.5 rounded-full transition-all duration-500"
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}
