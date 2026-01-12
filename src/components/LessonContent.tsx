import ReactMarkdown from 'react-markdown';
import type { Lesson } from '../types/tutorial';

interface LessonContentProps {
  lesson: Lesson;
}

export function LessonContent({ lesson }: LessonContentProps) {
  const { Content } = lesson;

  const typeClasses =
    lesson.type === 'learn'
      ? 'bg-[var(--color-accent-light)] text-[var(--color-accent-dark)]'
      : 'bg-[var(--color-primary-light)] text-[var(--color-primary-dark)]';

  return (
    <div className="p-8 bg-white rounded-xl shadow-sm max-w-[700px] mx-auto animate-fade-in">
      <div
        className={`inline-block px-2.5 py-1 rounded text-xs font-semibold uppercase tracking-wide mb-4 ${typeClasses}`}
      >
        {lesson.type === 'learn' ? 'Learn' : 'Practice'}
      </div>
      <div className="markdown-content">
        {Content ? <Content /> : <ReactMarkdown>{lesson.content}</ReactMarkdown>}
      </div>
    </div>
  );
}
