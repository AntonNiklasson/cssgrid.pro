import React, { useMemo } from 'react';
import { useTutorial } from '../contexts/TutorialContext';
import type { StyleTree } from '../types/tutorial';

interface GridOutputProps {
  markup: string;
  styles: StyleTree;
  showGridLines?: boolean;
  note?: string;
}

function stylesToCSS(styles: StyleTree, userInputs: Record<string, Record<string, string>>): string {
  let css = '';

  for (const [selector, rule] of Object.entries(styles)) {
    css += `${selector} {\n`;
    for (const [property, config] of Object.entries(rule.properties)) {
      const value = config.input
        ? userInputs[selector]?.[property] || ''
        : config.value;
      if (value) {
        css += `  ${property}: ${value};\n`;
      }
    }
    css += '}\n';
  }

  return css;
}

export function GridOutput({ markup, styles, note }: GridOutputProps) {
  const { userInputs } = useTutorial();

  const cssString = useMemo(
    () => stylesToCSS(styles, userInputs),
    [styles, userInputs]
  );

  // Base styles for grid items
  const baseGridStyles = `
    .grid {
      background: #e5e5e5;
      padding: 10px;
      min-height: 150px;
    }
    .grid > div {
      background: var(--color-primary-light);
      border: 2px solid var(--color-primary);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.5rem;
      border-radius: 4px;
      min-height: 50px;
      padding: 8px;
    }
  `;

  return (
    <div className="bg-gray-50 rounded-lg overflow-hidden">
      <div className="bg-gray-200 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-gray-600 border-b border-gray-300">
        Output
      </div>
      <div className="p-5 min-h-[200px] grid-output">
        <style>{baseGridStyles}</style>
        <style>{cssString}</style>
        <div dangerouslySetInnerHTML={{ __html: markup }} />
      </div>
      {note && (
        <div className="bg-[var(--color-accent-light)] text-[var(--color-accent-dark)] px-4 py-3 text-sm border-t border-[var(--color-accent)]">
          {note}
        </div>
      )}
    </div>
  );
}
