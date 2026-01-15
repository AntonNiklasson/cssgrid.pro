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
      className={`w-[280px] h-screen bg-white border-r border-gray-200 py-8 overflow-y-auto shrink-0 ${
        isOpen ? 'block' : 'hidden'
      }`}
    >
      <div className="px-6 pb-6 mb-6">
        <div className="text-xl font-bold text-gray-900 mb-1">CSSGrid.pro</div>
        <div className="text-sm text-gray-500">Interactive Tutorial</div>
      </div>

      <nav className="px-3">
        {lessons.map((lesson, index) => {
          const isActive = index === currentLessonIndex;
          const isComplete = isLessonComplete(index);

          return (
            <button
              type="button"
              key={lesson.id}
              className={`flex items-center gap-3 px-4 py-3 cursor-pointer transition-all duration-150 w-full text-left rounded-lg mb-1 ${
                isActive
                  ? 'bg-[var(--color-primary-light)] text-[var(--color-primary-dark)]'
                  : 'hover:bg-gray-50 text-gray-600'
              }`}
              onClick={() => goToLesson(index)}
            >
              <div
                className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-semibold shrink-0 transition-colors ${
                  isComplete
                    ? 'bg-[var(--color-success)] text-white'
                    : isActive
                      ? 'bg-[var(--color-primary)] text-white'
                      : 'bg-gray-100 text-gray-500 border border-gray-200'
                }`}
              >
                {isComplete ? '✓' : index + 1}
              </div>
              <span className={`text-sm leading-snug ${isActive ? 'font-medium' : ''}`}>
                {lesson.title}
              </span>
            </button>
          );
        })}
      </nav>
    </aside>
  );
}
