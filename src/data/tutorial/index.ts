import type { Lesson, Section, SectionProgress } from '../../types/tutorial';

import whatIsGrid from './lessons/01-what-is-grid';
import displayGrid from './lessons/02-display-grid';
import firstGrid from './lessons/03-first-grid';
import columnsIntro from './lessons/04-columns-intro';
import columnsPractice from './lessons/05-columns-practice';
import rowsIntro from './lessons/06-rows-intro';
import rowsPractice from './lessons/07-rows-practice';
import gridStructure from './lessons/08-grid-structure';
import frUnitsIntro from './lessons/09-fr-units-intro';
import frUnitsPractice from './lessons/10-fr-units-practice';
import mixingUnits from './lessons/11-mixing-units';
import gapIntro from './lessons/12-gap-intro';
import gapPractice from './lessons/13-gap-practice';
import gridLinesIntro from './lessons/14-grid-lines-intro';
import gridColumn from './lessons/15-grid-column';
import gridRow from './lessons/16-grid-row';
import spanningCells from './lessons/17-spanning-cells';
import areasIntro from './lessons/18-areas-intro';
import areasPractice from './lessons/19-areas-practice';
import layoutChallenge from './lessons/20-layout-challenge';

const sections: Section[] = [
  {
    id: 'basics',
    title: 'Grid Basics',
    description: 'Understanding the fundamentals of CSS Grid',
    lessons: [whatIsGrid, displayGrid, firstGrid],
  },
  {
    id: 'columns-rows',
    title: 'Columns & Rows',
    description: 'Defining the structure of your grid',
    lessons: [columnsIntro, columnsPractice, rowsIntro, rowsPractice, gridStructure],
  },
  {
    id: 'sizing',
    title: 'Flexible Sizing',
    description: 'Using fr units and flexible track sizes',
    lessons: [frUnitsIntro, frUnitsPractice, mixingUnits],
  },
  {
    id: 'gaps',
    title: 'Grid Gaps',
    description: 'Adding spacing between grid items',
    lessons: [gapIntro, gapPractice],
  },
  {
    id: 'placement',
    title: 'Item Placement',
    description: 'Positioning items within the grid',
    lessons: [gridLinesIntro, gridColumn, gridRow, spanningCells],
  },
  {
    id: 'areas',
    title: 'Grid Areas',
    description: 'Creating named template areas',
    lessons: [areasIntro, areasPractice, layoutChallenge],
  },
];

// Flatten lessons with section context for easy navigation
export const allLessons: Lesson[] = sections.flatMap((section, sectionIndex) =>
  section.lessons.map((lesson, lessonIndex) => ({
    ...lesson,
    sectionId: section.id,
    sectionTitle: section.title,
    sectionIndex,
    lessonIndex,
  }))
);

export const getTotalLessons = (): number => allLessons.length;

export const getLesson = (index: number): Lesson | null => allLessons[index] || null;

export const getSectionProgress = (currentLessonIndex: number): SectionProgress | null => {
  const lesson = allLessons[currentLessonIndex];
  if (!lesson) return null;

  const sectionLessons = allLessons.filter((l) => l.sectionId === lesson.sectionId);
  const positionInSection = sectionLessons.findIndex((l) => l === lesson) + 1;

  return {
    sectionId: lesson.sectionId!,
    sectionTitle: lesson.sectionTitle!,
    current: positionInSection,
    total: sectionLessons.length,
  };
};

export { sections };
export default sections;
