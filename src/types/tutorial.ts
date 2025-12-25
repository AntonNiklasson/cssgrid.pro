export interface CSSProperty {
  value: string;
  input?: {
    placeholder?: string;
    regex: RegExp;
  };
}

export interface CSSRule {
  properties: Record<string, CSSProperty>;
}

export interface StyleTree {
  [selector: string]: CSSRule;
}

export interface BaseLesson {
  id: string;
  title: string;
  content: string;
  hints: string[];
  sectionId?: string;
  sectionTitle?: string;
  sectionIndex?: number;
  lessonIndex?: number;
}

export interface LearnLesson extends BaseLesson {
  type: 'learn';
  demonstration: {
    markup: string;
    styles: StyleTree;
    note?: string;
    showGridLines?: boolean;
  };
}

export interface PracticeLesson extends BaseLesson {
  type: 'practice';
  markup: string;
  styles: StyleTree;
  successMessage: string;
}

export type Lesson = LearnLesson | PracticeLesson;

export interface Section {
  id: string;
  title: string;
  description: string;
  lessons: Lesson[];
}

export interface TutorialProgress {
  currentLessonIndex: number;
  completedLessons: Set<number>;
  userInputs: Record<string, Record<string, string>>;
}

export interface SectionProgress {
  sectionId: string;
  sectionTitle: string;
  current: number;
  total: number;
}
