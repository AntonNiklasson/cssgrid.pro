import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { useTutorial } from '../contexts/TutorialContext';
import { sections } from '../data/tutorial';

interface ProgressSidebarProps {
  isOpen?: boolean;
  onClose?: () => void;
}

export function ProgressSidebar({ isOpen = true, onClose }: ProgressSidebarProps) {
  const { colors } = useTheme();
  const { currentLessonIndex, goToLesson, isLessonComplete } = useTutorial();

  let globalIndex = 0;

  const containerStyle: React.CSSProperties = {
    width: '280px',
    height: '100vh',
    backgroundColor: colors.grayDarkest,
    color: colors.white,
    padding: '24px 0',
    overflowY: 'auto',
    flexShrink: 0,
    display: isOpen ? 'block' : 'none',
  };

  const headerStyle: React.CSSProperties = {
    padding: '0 20px 20px',
    borderBottom: `1px solid ${colors.grayDark}`,
  };

  const logoStyle: React.CSSProperties = {
    fontSize: '20px',
    fontWeight: 700,
    color: colors.primary,
    marginBottom: '4px',
  };

  const subtitleStyle: React.CSSProperties = {
    fontSize: '13px',
    color: colors.grayLight,
  };

  const sectionStyle: React.CSSProperties = {
    padding: '16px 0',
  };

  const sectionTitleStyle: React.CSSProperties = {
    fontSize: '11px',
    fontWeight: 600,
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
    color: colors.grayLight,
    padding: '0 20px 8px',
  };

  const getLessonStyle = (index: number, isActive: boolean): React.CSSProperties => ({
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    padding: '10px 20px',
    cursor: 'pointer',
    backgroundColor: isActive ? colors.grayDarker : 'transparent',
    borderLeft: isActive ? `3px solid ${colors.primary}` : '3px solid transparent',
    transition: 'all 0.15s ease',
  });

  const getIndicatorStyle = (isComplete: boolean, isActive: boolean): React.CSSProperties => ({
    width: '20px',
    height: '20px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '11px',
    fontWeight: 500,
    backgroundColor: isComplete
      ? colors.green
      : isActive
      ? colors.primary
      : colors.grayDark,
    color: colors.white,
    flexShrink: 0,
  });

  const lessonTitleStyle: React.CSSProperties = {
    fontSize: '14px',
    color: colors.grayLightest,
    lineHeight: 1.3,
  };

  return (
    <aside style={containerStyle}>
      <div style={headerStyle}>
        <div style={logoStyle}>CSSGrid.pro</div>
        <div style={subtitleStyle}>Interactive Tutorial</div>
      </div>

      {sections.map((section) => {
        const sectionLessons = section.lessons.map((lesson, i) => {
          const lessonGlobalIndex = globalIndex++;
          const isActive = lessonGlobalIndex === currentLessonIndex;
          const isComplete = isLessonComplete(lessonGlobalIndex);

          return (
            <div
              key={lesson.id}
              style={getLessonStyle(lessonGlobalIndex, isActive)}
              onClick={() => goToLesson(lessonGlobalIndex)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && goToLesson(lessonGlobalIndex)}
            >
              <div style={getIndicatorStyle(isComplete, isActive)}>
                {isComplete ? '✓' : i + 1}
              </div>
              <span style={lessonTitleStyle}>{lesson.title}</span>
            </div>
          );
        });

        return (
          <div key={section.id} style={sectionStyle}>
            <div style={sectionTitleStyle}>{section.title}</div>
            {sectionLessons}
          </div>
        );
      })}
    </aside>
  );
}
