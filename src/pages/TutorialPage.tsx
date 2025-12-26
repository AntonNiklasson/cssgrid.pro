import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { useNavigate, useParams } from 'react-router-dom';
import { Button } from '../components/Button';
import { GridOutput } from '../components/GridOutput';
import { HintPanel } from '../components/HintPanel';
import { LessonContent } from '../components/LessonContent';
import { ProgressSidebar } from '../components/ProgressSidebar';
import { StyleEditor } from '../components/StyleEditor';
import { useTutorial } from '../contexts/TutorialContext';

export function TutorialPage() {
  const { lessonId, id } = useParams();
  const navigate = useNavigate();
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
      <div className="p-10 text-center">
        <h1 className="text-2xl font-semibold mb-4">Lesson not found</h1>
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

  // Determine what markup/styles to show
  const markup =
    currentLesson.type === 'learn' ? currentLesson.demonstration.markup : currentLesson.markup;
  const styles =
    currentLesson.type === 'learn' ? currentLesson.demonstration.styles : currentLesson.styles;
  const note = currentLesson.type === 'learn' ? currentLesson.demonstration.note : undefined;

  return (
    <div className="flex min-h-screen bg-gray-50">
      <ProgressSidebar />

      <main className="flex-1 flex flex-col overflow-hidden">
        <header className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-lg font-semibold mb-1">{currentLesson.title}</h1>
            {sectionProgress && (
              <span className="text-sm text-gray-600">
                {sectionProgress.sectionTitle} • Lesson {sectionProgress.current} of{' '}
                {sectionProgress.total}
              </span>
            )}
          </div>

          <div className="flex gap-3 items-center">
            {hasError && (
              <span className="text-[var(--color-error)] text-sm mr-4">
                That's not quite right. Try again!
              </span>
            )}

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

        <div className="flex-1 grid grid-cols-2 grid-rows-[auto_1fr] gap-5 p-6 overflow-auto">
          <div className="col-span-1 row-span-2 overflow-auto">
            <LessonContent lesson={currentLesson} />
            {currentLesson.type === 'practice' && currentLesson.hints && (
              <HintPanel hints={currentLesson.hints} />
            )}
          </div>

          <div className="col-span-1 row-span-1">
            <StyleEditor styles={styles} readOnly={currentLesson.type === 'learn'} />
          </div>

          <div className="col-span-1 row-span-1">
            <GridOutput markup={markup} styles={styles} note={note} />
          </div>
        </div>
      </main>

      {showSuccess && currentLesson.type === 'practice' && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-[1000]"
          onClick={handleNext}
        >
          <div
            className="bg-white rounded-2xl p-10 max-w-[500px] text-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="text-5xl mb-4">🎉</div>
            <h2 className="text-2xl font-semibold mb-4 text-[var(--color-success)]">Great job!</h2>
            <div className="markdown-content mb-6 text-left">
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
