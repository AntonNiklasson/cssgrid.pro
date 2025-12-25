import React, { useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';

interface HintPanelProps {
  hints: string[];
}

export function HintPanel({ hints }: HintPanelProps) {
  const { colors } = useTheme();
  const [revealedCount, setRevealedCount] = useState(0);

  if (hints.length === 0) return null;

  const containerStyle: React.CSSProperties = {
    backgroundColor: colors.grayLightest,
    borderRadius: '8px',
    padding: '16px',
    marginTop: '16px',
  };

  const headerStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: revealedCount > 0 ? '12px' : 0,
  };

  const titleStyle: React.CSSProperties = {
    fontSize: '14px',
    fontWeight: 600,
    color: colors.grayDark,
  };

  const buttonStyle: React.CSSProperties = {
    backgroundColor: 'transparent',
    border: `1px solid ${colors.grayLight}`,
    borderRadius: '4px',
    padding: '6px 12px',
    fontSize: '13px',
    color: colors.grayDark,
    cursor: 'pointer',
  };

  const hintStyle: React.CSSProperties = {
    backgroundColor: colors.white,
    border: `1px solid ${colors.grayLighter}`,
    borderRadius: '6px',
    padding: '12px',
    marginBottom: '8px',
    fontSize: '14px',
    color: colors.grayDarker,
  };

  const hintNumberStyle: React.CSSProperties = {
    display: 'inline-block',
    width: '20px',
    height: '20px',
    borderRadius: '50%',
    backgroundColor: colors.accent,
    color: colors.white,
    fontSize: '12px',
    fontWeight: 600,
    textAlign: 'center',
    lineHeight: '20px',
    marginRight: '10px',
  };

  const revealNext = () => {
    if (revealedCount < hints.length) {
      setRevealedCount((prev) => prev + 1);
    }
  };

  return (
    <div style={containerStyle}>
      <div style={headerStyle}>
        <span style={titleStyle}>
          {revealedCount === 0 ? 'Need a hint?' : `Hints (${revealedCount}/${hints.length})`}
        </span>
        {revealedCount < hints.length && (
          <button style={buttonStyle} onClick={revealNext}>
            {revealedCount === 0 ? 'Show Hint' : 'Next Hint'}
          </button>
        )}
      </div>

      {hints.slice(0, revealedCount).map((hint, index) => (
        <div key={index} style={hintStyle} className="animate-slide-in">
          <span style={hintNumberStyle}>{index + 1}</span>
          {hint}
        </div>
      ))}
    </div>
  );
}
