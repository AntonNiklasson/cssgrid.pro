import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { useTutorial } from '../contexts/TutorialContext';
import { lessons } from '../data/tutorial';

interface ProgressSidebarProps {
  isOpen?: boolean;
  onClose?: () => void;
}

export function ProgressSidebar({ isOpen = true, onClose }: ProgressSidebarProps) {
  const { colors } = useTheme();
  const { currentLessonIndex, goToLesson, isLessonComplete } = useTutorial();

  const containerStyle: React.CSSProperties = {
    width: '260px',
    height: '100vh',
    backgroundColor: colors.grayDarkest,
    color: colors.white,
    padding: '24px 0',
    overflowY: 'auto',
    flexShrink: 0,
    display: isOpen ? 'block' : 'none',
  };

  const headerStyle: React.CSSProperties = {
    padding: '0 20px 24px',
    borderBottom: `1px solid ${colors.grayDark}`,
    marginBottom: '16px',
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

  const getLessonStyle = (isActive: boolean): React.CSSProperties => ({
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    padding: '12px 20px',
    cursor: 'pointer',
    backgroundColor: isActive ? colors.grayDarker : 'transparent',
    borderLeft: isActive ? `3px solid ${colors.primary}` : '3px solid transparent',
    transition: 'all 0.15s ease',
  });

  const getIndicatorStyle = (isComplete: boolean, isActive: boolean): React.CSSProperties => ({
    width: '24px',
    height: '24px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '12px',
    fontWeight: 600,
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
    lineHeight: 1.4,
  };

  return (
    <aside style={containerStyle}>
      <div style={headerStyle}>
        <div style={logoStyle}>CSSGrid.pro</div>
        <div style={subtitleStyle}>Interactive Tutorial</div>
      </div>

      {lessons.map((lesson, index) => {
        const isActive = index === currentLessonIndex;
        const isComplete = isLessonComplete(index);

        return (
          <div
            key={lesson.id}
            style={getLessonStyle(isActive)}
            onClick={() => goToLesson(index)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && goToLesson(index)}
          >
            <div style={getIndicatorStyle(isComplete, isActive)}>
              {isComplete ? '✓' : index + 1}
            </div>
            <span style={lessonTitleStyle}>{lesson.title}</span>
          </div>
        );
      })}
    </aside>
  );
}
