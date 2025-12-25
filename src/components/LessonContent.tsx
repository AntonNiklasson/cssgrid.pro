import React from 'react';
import ReactMarkdown from 'react-markdown';
import { useTheme } from '../contexts/ThemeContext';
import type { Lesson } from '../types/tutorial';

interface LessonContentProps {
  lesson: Lesson;
}

export function LessonContent({ lesson }: LessonContentProps) {
  const { colors } = useTheme();
  const { Content } = lesson;

  const containerStyle: React.CSSProperties = {
    padding: '32px',
    backgroundColor: colors.white,
    borderRadius: '12px',
    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
    maxWidth: '700px',
    margin: '0 auto',
  };

  const typeTagStyle: React.CSSProperties = {
    display: 'inline-block',
    padding: '4px 10px',
    borderRadius: '4px',
    fontSize: '12px',
    fontWeight: 600,
    textTransform: 'uppercase',
    letterSpacing: '0.03em',
    marginBottom: '16px',
    backgroundColor: lesson.type === 'learn' ? colors.accentLight : colors.primaryLight,
    color: lesson.type === 'learn' ? colors.accentDark : colors.primaryDark,
  };

  return (
    <div style={containerStyle} className="animate-fade-in">
      <div style={typeTagStyle}>
        {lesson.type === 'learn' ? 'Learn' : 'Practice'}
      </div>
      <div className="markdown-content">
        {Content ? (
          <Content />
        ) : (
          <ReactMarkdown>{lesson.content}</ReactMarkdown>
        )}
      </div>
    </div>
  );
}
