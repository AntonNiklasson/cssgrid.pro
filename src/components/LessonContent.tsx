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
    <div className="p-10 bg-white rounded-2xl shadow-sm border border-gray-100 max-w-[700px] mx-auto animate-fade-in">
      <div
        className={`inline-block px-3 py-1.5 rounded-md text-xs font-semibold uppercase tracking-wider mb-5 ${typeClasses}`}
      >
        {lesson.type === 'learn' ? 'Learn' : 'Practice'}
      </div>
      <div className="markdown-content">
        {Content ? <Content /> : <ReactMarkdown>{lesson.content}</ReactMarkdown>}
      </div>
    </div>
  );
}
