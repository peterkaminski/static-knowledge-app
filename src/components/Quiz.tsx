import { useState } from "react";
import type { QuizQuestion } from "../types/content";

interface Props {
  questions: QuizQuestion[];
  sectionId: string;
  onComplete: (sectionId: string, correct: number, total: number) => void;
}

export function Quiz({ questions, sectionId, onComplete }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);
  const [finished, setFinished] = useState(false);

  const question = questions[currentIndex];

  function handleSelect(optionIndex: number) {
    if (showExplanation) return;
    setSelectedAnswer(optionIndex);
  }

  function handleSubmit() {
    if (selectedAnswer === null) return;
    setShowExplanation(true);
    if (selectedAnswer === question.correctAnswer) {
      setCorrectCount((c) => c + 1);
    }
  }

  function handleNext() {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((i) => i + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    } else {
      setFinished(true);
      onComplete(sectionId, correctCount, questions.length);
    }
  }

  if (finished) {
    return (
      <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 text-center">
        <h3 className="text-xl font-semibold text-slate-800 mb-2">
          Quiz Complete!
        </h3>
        <p className="text-3xl font-bold text-indigo-600 mb-2">
          {correctCount} / {questions.length}
        </p>
        <p className="text-slate-500">
          {correctCount === questions.length
            ? "Perfect score!"
            : correctCount >= questions.length / 2
            ? "Good work! Review the sections you missed."
            : "Keep studying — you'll get there."}
        </p>
      </div>
    );
  }

  return (
    <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-slate-800">
          Quiz
        </h3>
        <span className="text-sm text-slate-400">
          Question {currentIndex + 1} of {questions.length}
        </span>
      </div>

      <p className="text-slate-800 mb-4 font-medium">{question.question}</p>

      <div className="space-y-2 mb-4">
        {question.options.map((option, i) => {
          let style =
            "border border-slate-200 bg-white text-slate-700 hover:border-indigo-300";
          if (showExplanation) {
            if (i === question.correctAnswer) {
              style = "border-2 border-green-500 bg-green-50 text-green-800";
            } else if (i === selectedAnswer) {
              style = "border-2 border-red-400 bg-red-50 text-red-800";
            } else {
              style = "border border-slate-200 bg-white text-slate-400";
            }
          } else if (i === selectedAnswer) {
            style = "border-2 border-indigo-500 bg-indigo-50 text-indigo-800";
          }

          return (
            <button
              key={i}
              onClick={() => handleSelect(i)}
              className={`w-full text-left px-4 py-3 rounded-lg transition-colors text-sm ${style}`}
            >
              {option}
            </button>
          );
        })}
      </div>

      {showExplanation && (
        <div className="bg-white border border-slate-200 rounded-lg p-4 mb-4">
          <p className="text-sm text-slate-700">{question.explanation}</p>
        </div>
      )}

      <div className="flex justify-end">
        {!showExplanation ? (
          <button
            onClick={handleSubmit}
            disabled={selectedAnswer === null}
            className="px-4 py-2 bg-indigo-600 text-white text-sm rounded-lg hover:bg-indigo-700 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
          >
            Check Answer
          </button>
        ) : (
          <button
            onClick={handleNext}
            className="px-4 py-2 bg-indigo-600 text-white text-sm rounded-lg hover:bg-indigo-700 transition-colors"
          >
            {currentIndex < questions.length - 1 ? "Next Question" : "Finish"}
          </button>
        )}
      </div>
    </div>
  );
}
