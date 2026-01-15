import { useState } from 'react';

interface HintPanelProps {
  hints: string[];
}

export function HintPanel({ hints }: HintPanelProps) {
  const [revealedCount, setRevealedCount] = useState(0);

  if (hints.length === 0) return null;

  const revealNext = () => {
    if (revealedCount < hints.length) {
      setRevealedCount((prev) => prev + 1);
    }
  };

  return (
    <div className="bg-white rounded-xl p-5 mt-6 border border-gray-200 shadow-sm">
      <div className={`flex items-center justify-between ${revealedCount > 0 ? 'mb-4' : ''}`}>
        <span className="text-sm font-medium text-gray-600">
          {revealedCount === 0 ? 'Need a hint?' : `Hints (${revealedCount}/${hints.length})`}
        </span>
        {revealedCount < hints.length && (
          <button
            type="button"
            className="bg-gray-50 border border-gray-200 rounded-lg px-4 py-2 text-sm text-gray-600 cursor-pointer hover:bg-gray-100 hover:border-gray-300 transition-all"
            onClick={revealNext}
          >
            {revealedCount === 0 ? 'Show Hint' : 'Next Hint'}
          </button>
        )}
      </div>

      {hints.slice(0, revealedCount).map((hint, index) => (
        <div
          key={index}
          className="bg-gray-50 border border-gray-100 rounded-lg p-4 mb-3 text-sm text-gray-700 animate-slide-in last:mb-0"
        >
          <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[var(--color-accent)] text-white text-xs font-semibold mr-3">
            {index + 1}
          </span>
          {hint}
        </div>
      ))}
    </div>
  );
}
