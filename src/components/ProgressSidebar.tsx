'use client';

import { useTutorial } from '../contexts/TutorialContext';
import { lessons } from '../data/tutorial';

interface ProgressSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ProgressSidebar({ isOpen, onClose }: ProgressSidebarProps) {
  const { currentLessonIndex, goToLesson, isLessonComplete } = useTutorial();

  const handleLessonClick = (index: number) => {
    goToLesson(index);
    onClose();
  };

  return (
    <>
      {/* Overlay for mobile */}
      {isOpen && (
        <button
          type="button"
          className="fixed inset-0 bg-black/50 z-40 lg:hidden cursor-default"
          onClick={onClose}
          onKeyDown={(e) => e.key === 'Escape' && onClose()}
          aria-label="Close sidebar"
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed lg:static inset-y-0 left-0 z-50
          w-[280px] h-screen bg-gray-900 text-white py-6 overflow-y-auto
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
          lg:shrink-0
        `}
      >
        <div className="px-5 pb-6 border-b border-gray-700 mb-4 flex items-center justify-between">
          <div>
            <div className="text-xl font-bold text-[var(--color-primary)] mb-1">CSSGrid.pro</div>
            <div className="text-sm text-gray-400">Interactive Tutorial</div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="lg:hidden p-2 text-gray-400 hover:text-white"
            aria-label="Close sidebar"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {lessons.map((lesson, index) => {
          const isActive = index === currentLessonIndex;
          const isComplete = isLessonComplete(index);

          return (
            <button
              type="button"
              key={lesson.id}
              className={`flex items-center gap-3 px-5 py-3 cursor-pointer transition-all duration-150 w-full text-left ${
                isActive
                  ? 'bg-gray-800 border-l-[3px] border-l-[var(--color-primary)]'
                  : 'border-l-[3px] border-l-transparent hover:bg-gray-800/50'
              }`}
              onClick={() => handleLessonClick(index)}
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
            </button>
          );
        })}
      </aside>
    </>
  );
}
