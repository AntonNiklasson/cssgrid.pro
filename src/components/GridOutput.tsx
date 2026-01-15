import { useMemo } from 'react';
import { useTutorial } from '../contexts/TutorialContext';
import type { StyleTree } from '../types/tutorial';

interface GridOutputProps {
  markup: string;
  styles: StyleTree;
  showGridLines?: boolean;
  note?: string;
}

function stylesToCSS(
  styles: StyleTree,
  userInputs: Record<string, Record<string, string>>
): string {
  let css = '';

  for (const [selector, rule] of Object.entries(styles)) {
    css += `${selector} {\n`;
    for (const [property, config] of Object.entries(rule.properties)) {
      const value = config.input ? userInputs[selector]?.[property] || '' : config.value;
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

  const cssString = useMemo(() => stylesToCSS(styles, userInputs), [styles, userInputs]);

  // Base styles for grid items
  const baseGridStyles = `
    .grid {
      background: #f4f4f5;
      padding: 12px;
      min-height: 150px;
      border-radius: 8px;
    }
    .grid > div {
      background: var(--color-primary-light);
      border: 1px solid rgba(99, 102, 241, 0.2);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.125rem;
      font-weight: 500;
      color: var(--color-primary-dark);
      border-radius: 6px;
      min-height: 50px;
      padding: 10px;
    }
  `;

  return (
    <div className="bg-white rounded-xl overflow-hidden border border-gray-200 shadow-sm">
      <div className="bg-gray-50 px-5 py-3 text-xs font-semibold uppercase tracking-wide text-gray-500 border-b border-gray-100">
        Output
      </div>
      <div className="p-6 min-h-[200px] grid-output">
        <style>{baseGridStyles}</style>
        <style>{cssString}</style>
        <div dangerouslySetInnerHTML={{ __html: markup }} />
      </div>
      {note && (
        <div className="bg-[var(--color-accent-light)] text-[var(--color-accent-dark)] px-5 py-3 text-sm border-t border-[var(--color-accent)]/20">
          {note}
        </div>
      )}
    </div>
  );
}
