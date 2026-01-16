'use client';

import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { Button } from '@/components/Button';
import { GridOutput } from '@/components/GridOutput';
import { HintPanel } from '@/components/HintPanel';
import { LessonContent } from '@/components/LessonContent';
import { ProgressSidebar } from '@/components/ProgressSidebar';
import { StyleEditor } from '@/components/StyleEditor';
import { useTutorial } from '@/contexts/TutorialContext';

export default function TutorialPage() {
  const params = useParams();
  const router = useRouter();
  const lessonId = params.lessonId as string;

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
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Handle URL params to set the lesson
  useEffect(() => {
    const lessonIndex = Number.parseInt(lessonId || '0', 10);
    if (!Number.isNaN(lessonIndex) && lessonIndex !== currentLessonIndex) {
      goToLesson(lessonIndex);
    }
  }, [lessonId, currentLessonIndex, goToLesson]);

  // Reset states when lesson changes
  // biome-ignore lint/correctness/useExhaustiveDependencies: intentional reset on lesson change
  useEffect(() => {
    setShowSuccess(false);
    setHasError(false);
  }, [currentLessonIndex]);

  if (!currentLesson) {
    return (
      <div className="p-10 text-center">
        <h1 className="text-2xl font-semibold mb-4">Lesson not found</h1>
        <Link href="/learn/0">
          <Button>Go to first lesson</Button>
        </Link>
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
      router.push('/complete');
    } else {
      goToNextLesson();
      router.push(`/learn/${currentLessonIndex + 1}`);
    }
  };

  const handlePrevious = () => {
    goToPreviousLesson();
    router.push(`/learn/${currentLessonIndex - 1}`);
  };

  // Determine what markup/styles to show
  const markup =
    currentLesson.type === 'learn' ? currentLesson.demonstration.markup : currentLesson.markup;
  const styles =
    currentLesson.type === 'learn' ? currentLesson.demonstration.styles : currentLesson.styles;
  const note = currentLesson.type === 'learn' ? currentLesson.demonstration.note : undefined;

  return (
    <div className="flex min-h-screen bg-gray-50">
      <ProgressSidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <main className="flex-1 flex flex-col overflow-hidden min-w-0">
        {/* Header */}
        <header className="bg-white border-b border-gray-100 px-4 md:px-8 py-4 md:py-5">
          <div className="flex items-center justify-between gap-4">
            {/* Left side: menu button + title */}
            <div className="flex items-center gap-3 min-w-0">
              <button
                type="button"
                onClick={() => setSidebarOpen(true)}
                className="lg:hidden p-2 -ml-2 text-gray-600 hover:text-gray-900"
                aria-label="Open menu"
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
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
              <div className="min-w-0">
                <h1 className="text-lg md:text-xl font-semibold text-gray-900 truncate">
                  {currentLesson.title}
                </h1>
                {sectionProgress && (
                  <span className="text-xs md:text-sm text-gray-500">
                    Lesson {sectionProgress.current} of {sectionProgress.total}
                  </span>
                )}
              </div>
            </div>

            {/* Right side: navigation */}
            <div className="flex gap-2 md:gap-4 items-center shrink-0">
              {hasError && (
                <span className="hidden md:inline text-[var(--color-error)] text-sm">
                  Not quite right!
                </span>
              )}

              {currentLessonIndex > 0 && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handlePrevious}
                  className="hidden sm:inline-flex"
                >
                  ← Previous
                </Button>
              )}

              <Button onClick={handleSubmit} size="sm" className="md:hidden">
                {currentLesson.type === 'learn' ? 'Next' : showSuccess ? 'Next' : 'Submit'}
              </Button>
              <Button onClick={handleSubmit} className="hidden md:inline-flex">
                {currentLesson.type === 'learn'
                  ? 'Continue →'
                  : showSuccess
                    ? 'Next Lesson →'
                    : 'Submit'}
              </Button>
            </div>
          </div>

          {/* Mobile error message */}
          {hasError && (
            <div className="md:hidden mt-2 text-[var(--color-error)] text-sm">
              That's not quite right. Try again!
            </div>
          )}
        </header>

        {/* Content - responsive layout */}
        <div className="flex-1 overflow-auto p-4 md:p-6 lg:p-8">
          {/* Desktop: 2-column grid */}
          <div className="hidden md:grid md:grid-cols-2 gap-6 h-full">
            <div className="overflow-auto">
              <LessonContent lesson={currentLesson} />
              {currentLesson.type === 'practice' && currentLesson.hints && (
                <HintPanel hints={currentLesson.hints} />
              )}
            </div>
            <div className="flex flex-col gap-6">
              <StyleEditor styles={styles} readOnly={currentLesson.type === 'learn'} />
              <GridOutput markup={markup} styles={styles} note={note} />
            </div>
          </div>

          {/* Mobile: stacked layout */}
          <div className="md:hidden flex flex-col gap-4">
            <LessonContent lesson={currentLesson} />
            <StyleEditor styles={styles} readOnly={currentLesson.type === 'learn'} />
            <GridOutput markup={markup} styles={styles} note={note} />
            {currentLesson.type === 'practice' && currentLesson.hints && (
              <HintPanel hints={currentLesson.hints} />
            )}
          </div>
        </div>

        {/* Mobile bottom navigation */}
        <div className="sm:hidden border-t border-gray-200 bg-white px-4 py-3 flex justify-between">
          {currentLessonIndex > 0 ? (
            <Button variant="ghost" size="sm" onClick={handlePrevious}>
              ← Prev
            </Button>
          ) : (
            <div />
          )}
          <span className="text-sm text-gray-500 self-center">
            {currentLessonIndex + 1} / {totalLessons}
          </span>
          <Button size="sm" onClick={handleSubmit}>
            {showSuccess ? 'Next →' : 'Submit'}
          </Button>
        </div>
      </main>

      {/* Success modal */}
      {showSuccess && currentLesson.type === 'practice' && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-[1000] backdrop-blur-sm p-4"
          role="dialog"
          aria-modal="true"
          onClick={handleNext}
          onKeyDown={(e) => e.key === 'Enter' && handleNext()}
        >
          <div
            className="bg-white rounded-2xl p-6 md:p-10 max-w-[480px] w-full text-center shadow-xl"
            role="document"
            onClick={(e) => e.stopPropagation()}
            onKeyDown={(e) => e.stopPropagation()}
          >
            <div className="text-4xl md:text-5xl mb-4 md:mb-5">🎉</div>
            <h2 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4 text-[var(--color-success)]">
              Great job!
            </h2>
            <div className="markdown-content mb-6 md:mb-8 text-left text-sm md:text-base">
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
