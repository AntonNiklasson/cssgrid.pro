import React, { useMemo } from 'react';
import { useTheme } from '../contexts/ThemeContext';
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

export function GridOutput({ markup, styles, showGridLines, note }: GridOutputProps) {
  const { colors } = useTheme();
  const { userInputs } = useTutorial();

  const cssString = useMemo(
    () => stylesToCSS(styles, userInputs),
    [styles, userInputs]
  );

  const containerStyle: React.CSSProperties = {
    backgroundColor: colors.grayLightest,
    borderRadius: '8px',
    overflow: 'hidden',
  };

  const headerStyle: React.CSSProperties = {
    backgroundColor: colors.grayLighter,
    padding: '8px 16px',
    fontSize: '12px',
    fontWeight: 600,
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
    color: colors.grayDark,
    borderBottom: `1px solid ${colors.grayLight}`,
  };

  const outputStyle: React.CSSProperties = {
    padding: '20px',
    minHeight: '200px',
  };

  const noteStyle: React.CSSProperties = {
    backgroundColor: colors.accentLight,
    color: colors.accentDark,
    padding: '12px 16px',
    fontSize: '14px',
    borderTop: `1px solid ${colors.accent}`,
  };

  // Base styles for grid items
  const baseGridStyles = `
    .grid {
      background: #f0f0f0;
      padding: 10px;
      min-height: 150px;
    }
    .grid > div {
      background: ${colors.primaryLight};
      border: 2px solid ${colors.primary};
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
    <div style={containerStyle}>
      <div style={headerStyle}>Output</div>
      <div style={outputStyle} className="grid-output">
        <style>{baseGridStyles}</style>
        <style>{cssString}</style>
        <div dangerouslySetInnerHTML={{ __html: markup }} />
      </div>
      {note && <div style={noteStyle}>{note}</div>}
    </div>
  );
}
