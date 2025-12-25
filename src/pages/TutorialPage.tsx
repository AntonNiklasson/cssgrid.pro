import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';
import { useTutorial } from '../contexts/TutorialContext';
import { ProgressSidebar } from '../components/ProgressSidebar';
import { LessonContent } from '../components/LessonContent';
import { StyleEditor } from '../components/StyleEditor';
import { GridOutput } from '../components/GridOutput';
import { HintPanel } from '../components/HintPanel';
import { Button } from '../components/Button';
import ReactMarkdown from 'react-markdown';

export function TutorialPage() {
  const { lessonId, id } = useParams();
  const navigate = useNavigate();
  const { colors } = useTheme();
  const {
    currentLesson,
    currentLessonIndex,
    totalLessons,
    sectionProgress,
    goToLesson,
    goToNextLesson,
    goToPreviousLesson,
    validateCurrentLesson,
  } = useTutorial();

  const [showSuccess, setShowSuccess] = useState(false);
  const [hasError, setHasError] = useState(false);

  // Handle URL params to set the lesson
  useEffect(() => {
    const lessonIndex = parseInt(lessonId || id || '0', 10);
    if (!isNaN(lessonIndex) && lessonIndex !== currentLessonIndex) {
      goToLesson(lessonIndex);
    }
  }, [lessonId, id, currentLessonIndex, goToLesson]);

  // Reset states when lesson changes
  useEffect(() => {
    setShowSuccess(false);
    setHasError(false);
  }, [currentLessonIndex]);

  if (!currentLesson) {
    return (
      <div style={{ padding: '40px', textAlign: 'center' }}>
        <h1>Lesson not found</h1>
        <Button onClick={() => navigate('/learn/0')}>Go to first lesson</Button>
      </div>
    );
  }

  const handleSubmit = () => {
    if (currentLesson.type === 'learn') {
      handleNext();
      return;
    }

    const isValid = validateCurrentLesson();
    if (isValid) {
      setShowSuccess(true);
      setHasError(false);
    } else {
      setHasError(true);
    }
  };

  const handleNext = () => {
    if (currentLessonIndex === totalLessons - 1) {
      navigate('/complete');
    } else {
      goToNextLesson();
      navigate(`/learn/${currentLessonIndex + 1}`);
    }
  };

  const containerStyle: React.CSSProperties = {
    display: 'flex',
    minHeight: '100vh',
    backgroundColor: colors.grayLightest,
  };

  const mainStyle: React.CSSProperties = {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
  };

  const headerStyle: React.CSSProperties = {
    backgroundColor: colors.white,
    borderBottom: `1px solid ${colors.grayLighter}`,
    padding: '16px 24px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  };

  const progressTextStyle: React.CSSProperties = {
    fontSize: '14px',
    color: colors.grayDark,
  };

  const contentAreaStyle: React.CSSProperties = {
    flex: 1,
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gridTemplateRows: 'auto 1fr',
    gap: '20px',
    padding: '24px',
    overflow: 'auto',
  };

  const lessonPanelStyle: React.CSSProperties = {
    gridColumn: '1 / 2',
    gridRow: '1 / 3',
    overflow: 'auto',
  };

  const editorPanelStyle: React.CSSProperties = {
    gridColumn: '2 / 3',
    gridRow: '1 / 2',
  };

  const outputPanelStyle: React.CSSProperties = {
    gridColumn: '2 / 3',
    gridRow: '2 / 3',
  };

  const buttonGroupStyle: React.CSSProperties = {
    display: 'flex',
    gap: '12px',
    alignItems: 'center',
  };

  const errorStyle: React.CSSProperties = {
    color: colors.red,
    fontSize: '14px',
    marginRight: '16px',
  };

  const successOverlayStyle: React.CSSProperties = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1000,
  };

  const successModalStyle: React.CSSProperties = {
    backgroundColor: colors.white,
    borderRadius: '16px',
    padding: '40px',
    maxWidth: '500px',
    textAlign: 'center',
  };

  const successTitleStyle: React.CSSProperties = {
    fontSize: '1.5rem',
    fontWeight: 600,
    marginBottom: '16px',
    color: colors.green,
  };

  // Determine what markup/styles to show
  const markup =
    currentLesson.type === 'learn'
      ? currentLesson.demonstration.markup
      : currentLesson.markup;
  const styles =
    currentLesson.type === 'learn'
      ? currentLesson.demonstration.styles
      : currentLesson.styles;
  const note =
    currentLesson.type === 'learn' ? currentLesson.demonstration.note : undefined;

  return (
    <div style={containerStyle}>
      <ProgressSidebar />

      <main style={mainStyle}>
        <header style={headerStyle}>
          <div>
            <h1 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '4px' }}>
              {currentLesson.title}
            </h1>
            {sectionProgress && (
              <span style={progressTextStyle}>
                {sectionProgress.sectionTitle} • Lesson {sectionProgress.current} of{' '}
                {sectionProgress.total}
              </span>
            )}
          </div>

          <div style={buttonGroupStyle}>
            {hasError && <span style={errorStyle}>That's not quite right. Try again!</span>}

            {currentLessonIndex > 0 && (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => {
                  goToPreviousLesson();
                  navigate(`/learn/${currentLessonIndex - 1}`);
                }}
              >
                ← Previous
              </Button>
            )}

            <Button onClick={handleSubmit}>
              {currentLesson.type === 'learn'
                ? 'Continue →'
                : showSuccess
                ? 'Next Lesson →'
                : 'Submit'}
            </Button>
          </div>
        </header>

        <div style={contentAreaStyle}>
          <div style={lessonPanelStyle}>
            <LessonContent lesson={currentLesson} />
            {currentLesson.type === 'practice' && currentLesson.hints && (
              <HintPanel hints={currentLesson.hints} />
            )}
          </div>

          <div style={editorPanelStyle}>
            <StyleEditor styles={styles} readOnly={currentLesson.type === 'learn'} />
          </div>

          <div style={outputPanelStyle}>
            <GridOutput markup={markup} styles={styles} note={note} />
          </div>
        </div>
      </main>

      {showSuccess && currentLesson.type === 'practice' && (
        <div style={successOverlayStyle} onClick={handleNext}>
          <div style={successModalStyle} onClick={(e) => e.stopPropagation()}>
            <div style={{ fontSize: '3rem', marginBottom: '16px' }}>🎉</div>
            <h2 style={successTitleStyle}>Great job!</h2>
            <div className="markdown-content" style={{ marginBottom: '24px', textAlign: 'left' }}>
              <ReactMarkdown>{currentLesson.successMessage}</ReactMarkdown>
            </div>
            <Button onClick={handleNext}>
              {currentLessonIndex === totalLessons - 1 ? 'Complete Tutorial' : 'Next Lesson →'}
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
