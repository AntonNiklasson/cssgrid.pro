import React from 'react';
import { useTutorial } from '../contexts/TutorialContext';
import { lessons } from '../data/tutorial';

interface ProgressSidebarProps {
  isOpen?: boolean;
  onClose?: () => void;
}

export function ProgressSidebar({ isOpen = true }: ProgressSidebarProps) {
  const { currentLessonIndex, goToLesson, isLessonComplete } = useTutorial();

  return (
    <aside
      className={`w-[260px] h-screen bg-gray-900 text-white py-6 overflow-y-auto shrink-0 ${
        isOpen ? 'block' : 'hidden'
      }`}
    >
      <div className="px-5 pb-6 border-b border-gray-700 mb-4">
        <div className="text-xl font-bold text-[var(--color-primary)] mb-1">CSSGrid.pro</div>
        <div className="text-sm text-gray-400">Interactive Tutorial</div>
      </div>

      {lessons.map((lesson, index) => {
        const isActive = index === currentLessonIndex;
        const isComplete = isLessonComplete(index);

        return (
          <div
            key={lesson.id}
            className={`flex items-center gap-3 px-5 py-3 cursor-pointer transition-all duration-150 ${
              isActive ? 'bg-gray-800 border-l-[3px] border-l-[var(--color-primary)]' : 'border-l-[3px] border-l-transparent hover:bg-gray-800/50'
            }`}
            onClick={() => goToLesson(index)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && goToLesson(index)}
          >
            <div
              className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-semibold shrink-0 ${
                isComplete
                  ? 'bg-[var(--color-success)] text-white'
                  : isActive
                  ? 'bg-[var(--color-primary)] text-white'
                  : 'bg-gray-700 text-white'
              }`}
            >
              {isComplete ? '✓' : index + 1}
            </div>
            <span className="text-sm text-gray-100 leading-snug">{lesson.title}</span>
          </div>
        );
      })}
    </aside>
  );
}
