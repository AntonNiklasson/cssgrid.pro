import { createContext, type ReactNode, useCallback, useContext, useMemo, useState } from 'react';
import { allLessons, getSectionProgress, getTotalLessons } from '../data/tutorial';
import type { Lesson, SectionProgress, TutorialProgress } from '../types/tutorial';

interface TutorialContextValue {
  // Current state
  currentLessonIndex: number;
  currentLesson: Lesson | null;
  totalLessons: number;
  progress: TutorialProgress;
  sectionProgress: SectionProgress | null;

  // User inputs for practice lessons
  userInputs: Record<string, Record<string, string>>;

  // Navigation
  goToLesson: (index: number) => void;
  goToNextLesson: () => void;
  goToPreviousLesson: () => void;

  // Progress tracking
  markLessonComplete: (index: number) => void;
  isLessonComplete: (index: number) => boolean;

  // Input management
  setUserInput: (selector: string, property: string, value: string) => void;
  getUserInput: (selector: string, property: string) => string;
  clearInputs: () => void;

  // Validation
  validateCurrentLesson: () => boolean;
}

const TutorialContext = createContext<TutorialContextValue | null>(null);

export function TutorialProvider({ children }: { children: ReactNode }) {
  const [currentLessonIndex, setCurrentLessonIndex] = useState(0);
  const [completedLessons, setCompletedLessons] = useState<Set<number>>(new Set());
  const [userInputs, setUserInputs] = useState<Record<string, Record<string, string>>>({});

  const currentLesson = useMemo(() => allLessons[currentLessonIndex] || null, [currentLessonIndex]);

  const totalLessons = getTotalLessons();

  const sectionProgress = useMemo(
    () => getSectionProgress(currentLessonIndex),
    [currentLessonIndex]
  );

  const progress: TutorialProgress = useMemo(
    () => ({
      currentLessonIndex,
      completedLessons,
      userInputs,
    }),
    [currentLessonIndex, completedLessons, userInputs]
  );

  const goToLesson = useCallback(
    (index: number) => {
      if (index >= 0 && index < totalLessons) {
        setCurrentLessonIndex(index);
        setUserInputs({});
      }
    },
    [totalLessons]
  );

  const markLessonComplete = useCallback((index: number) => {
    setCompletedLessons((prev) => new Set([...prev, index]));
  }, []);

  const goToNextLesson = useCallback(() => {
    if (currentLessonIndex < totalLessons - 1) {
      markLessonComplete(currentLessonIndex);
      setCurrentLessonIndex((prev) => prev + 1);
      setUserInputs({});
    }
  }, [currentLessonIndex, totalLessons, markLessonComplete]);

  const goToPreviousLesson = useCallback(() => {
    if (currentLessonIndex > 0) {
      setCurrentLessonIndex((prev) => prev - 1);
      setUserInputs({});
    }
  }, [currentLessonIndex]);

  const isLessonComplete = useCallback(
    (index: number) => completedLessons.has(index),
    [completedLessons]
  );

  const setUserInput = useCallback((selector: string, property: string, value: string) => {
    setUserInputs((prev) => ({
      ...prev,
      [selector]: {
        ...prev[selector],
        [property]: value,
      },
    }));
  }, []);

  const getUserInput = useCallback(
    (selector: string, property: string) => {
      return userInputs[selector]?.[property] || '';
    },
    [userInputs]
  );

  const clearInputs = useCallback(() => {
    setUserInputs({});
  }, []);

  const validateCurrentLesson = useCallback(() => {
    if (!currentLesson || currentLesson.type !== 'practice') {
      return true;
    }

    const { styles } = currentLesson;

    for (const [selector, rule] of Object.entries(styles)) {
      for (const [property, config] of Object.entries(rule.properties)) {
        if (config.input) {
          const userValue = userInputs[selector]?.[property] || '';
          if (!config.input.regex.test(userValue)) {
            return false;
          }
        }
      }
    }

    return true;
  }, [currentLesson, userInputs]);

  const value: TutorialContextValue = {
    currentLessonIndex,
    currentLesson,
    totalLessons,
    progress,
    sectionProgress,
    userInputs,
    goToLesson,
    goToNextLesson,
    goToPreviousLesson,
    markLessonComplete,
    isLessonComplete,
    setUserInput,
    getUserInput,
    clearInputs,
    validateCurrentLesson,
  };

  return <TutorialContext.Provider value={value}>{children}</TutorialContext.Provider>;
}

export function useTutorial() {
  const context = useContext(TutorialContext);
  if (!context) {
    throw new Error('useTutorial must be used within a TutorialProvider');
  }
  return context;
}
