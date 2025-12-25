import type { Lesson, PracticeLesson, SectionProgress } from '../../types/tutorial';
import { ComponentType } from 'react';

// Import MDX lessons
import IntroContent, {
  frontmatter as introMeta,
  markup as introMarkup,
  styles as introStyles,
} from './lessons/01-intro.mdx';

import ColumnsRowsContent, {
  frontmatter as columnsRowsMeta,
  markup as columnsRowsMarkup,
  styles as columnsRowsStyles,
} from './lessons/02-columns-and-rows.mdx';

import FlexibleSizingContent, {
  frontmatter as flexibleSizingMeta,
  markup as flexibleSizingMarkup,
  styles as flexibleSizingStyles,
} from './lessons/03-flexible-sizing.mdx';

import GapsContent, {
  frontmatter as gapsMeta,
  markup as gapsMarkup,
  styles as gapsStyles,
} from './lessons/04-gaps.mdx';

import PlacingItemsContent, {
  frontmatter as placingItemsMeta,
  markup as placingItemsMarkup,
  styles as placingItemsStyles,
} from './lessons/05-placing-items.mdx';

import SpanningContent, {
  frontmatter as spanningMeta,
  markup as spanningMarkup,
  styles as spanningStyles,
} from './lessons/06-spanning.mdx';

import GridAreasContent, {
  frontmatter as gridAreasMeta,
  markup as gridAreasMarkup,
  styles as gridAreasStyles,
} from './lessons/07-grid-areas.mdx';

import FinalLayoutContent, {
  frontmatter as finalLayoutMeta,
  markup as finalLayoutMarkup,
  styles as finalLayoutStyles,
} from './lessons/08-final-layout.mdx';

// Helper to create lesson from MDX exports
function createLesson(
  meta: typeof introMeta,
  Content: ComponentType,
  markup: string,
  styles: typeof introStyles
): PracticeLesson {
  return {
    id: meta.id,
    type: 'practice',
    title: meta.title,
    content: '', // Content rendered via MDX component
    Content,
    markup,
    styles,
    hints: meta.hints || [],
    successMessage: meta.successMessage || '',
  };
}

export const lessons: Lesson[] = [
  createLesson(introMeta, IntroContent, introMarkup, introStyles),
  createLesson(columnsRowsMeta, ColumnsRowsContent, columnsRowsMarkup, columnsRowsStyles),
  createLesson(flexibleSizingMeta, FlexibleSizingContent, flexibleSizingMarkup, flexibleSizingStyles),
  createLesson(gapsMeta, GapsContent, gapsMarkup, gapsStyles),
  createLesson(placingItemsMeta, PlacingItemsContent, placingItemsMarkup, placingItemsStyles),
  createLesson(spanningMeta, SpanningContent, spanningMarkup, spanningStyles),
  createLesson(gridAreasMeta, GridAreasContent, gridAreasMarkup, gridAreasStyles),
  createLesson(finalLayoutMeta, FinalLayoutContent, finalLayoutMarkup, finalLayoutStyles),
];

export const allLessons = lessons;

export const getTotalLessons = (): number => lessons.length;

export const getLesson = (index: number): Lesson | null => lessons[index] || null;

export const getSectionProgress = (currentLessonIndex: number): SectionProgress | null => {
  if (currentLessonIndex < 0 || currentLessonIndex >= lessons.length) return null;

  return {
    sectionId: 'tutorial',
    sectionTitle: 'CSS Grid Tutorial',
    current: currentLessonIndex + 1,
    total: lessons.length,
  };
};

export default lessons;
