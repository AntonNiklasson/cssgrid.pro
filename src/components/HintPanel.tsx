'use client';

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
    <div className="bg-gray-50 rounded-lg p-4 mt-4">
      <div className={`flex items-center justify-between ${revealedCount > 0 ? 'mb-3' : ''}`}>
        <span className="text-sm font-semibold text-gray-600">
          {revealedCount === 0 ? 'Need a hint?' : `Hints (${revealedCount}/${hints.length})`}
        </span>
        {revealedCount < hints.length && (
          <button
            type="button"
            className="bg-transparent border border-gray-400 rounded px-3 py-1.5 text-sm text-gray-600 cursor-pointer hover:bg-gray-100 transition-colors"
            onClick={revealNext}
          >
            {revealedCount === 0 ? 'Show Hint' : 'Next Hint'}
          </button>
        )}
      </div>

      {hints.slice(0, revealedCount).map((hint, index) => (
        <div
          key={index}
          className="bg-white border border-gray-200 rounded-md p-3 mb-2 text-sm text-gray-700 animate-slide-in"
        >
          <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-[var(--color-accent)] text-white text-xs font-semibold mr-2.5">
            {index + 1}
          </span>
          {hint}
        </div>
      ))}
    </div>
  );
}
