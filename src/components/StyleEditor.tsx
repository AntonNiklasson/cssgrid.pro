import React, { useCallback } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { useTutorial } from '../contexts/TutorialContext';
import type { StyleTree, CSSProperty } from '../types/tutorial';

interface StyleEditorProps {
  styles: StyleTree;
  readOnly?: boolean;
}

export function StyleEditor({ styles, readOnly = false }: StyleEditorProps) {
  const { colors } = useTheme();
  const { setUserInput, getUserInput } = useTutorial();

  const containerStyle: React.CSSProperties = {
    backgroundColor: colors.grayDarkest,
    borderRadius: '8px',
    padding: '20px',
    fontFamily: 'var(--font-mono)',
    fontSize: '14px',
    color: colors.grayLightest,
    overflow: 'auto',
  };

  const selectorStyle: React.CSSProperties = {
    color: colors.accent,
    marginBottom: '4px',
  };

  const propertyStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: '24px',
    marginBottom: '4px',
    flexWrap: 'wrap',
  };

  const propertyNameStyle: React.CSSProperties = {
    color: colors.primaryLight,
  };

  const colonStyle: React.CSSProperties = {
    color: colors.gray,
    margin: '0 4px',
  };

  const staticValueStyle: React.CSSProperties = {
    color: colors.grayLightest,
  };

  const inputStyle: React.CSSProperties = {
    backgroundColor: colors.grayDarker,
    border: `1px solid ${colors.grayDark}`,
    borderRadius: '4px',
    color: colors.white,
    padding: '4px 8px',
    fontFamily: 'inherit',
    fontSize: 'inherit',
    minWidth: '120px',
    outline: 'none',
  };

  const inputFocusStyle: React.CSSProperties = {
    ...inputStyle,
    borderColor: colors.primary,
    boxShadow: `0 0 0 2px ${colors.primaryDark}`,
  };

  const bracketStyle: React.CSSProperties = {
    color: colors.grayLight,
    marginLeft: '4px',
  };

  const closeBracketStyle: React.CSSProperties = {
    color: colors.grayLight,
    marginTop: '4px',
  };

  const validIndicatorStyle: React.CSSProperties = {
    marginLeft: '8px',
    fontSize: '14px',
  };

  const handleInputChange = useCallback(
    (selector: string, property: string, value: string) => {
      setUserInput(selector, property, value);
    },
    [setUserInput]
  );

  const renderProperty = (
    selector: string,
    property: string,
    config: CSSProperty
  ) => {
    const userValue = getUserInput(selector, property);
    const displayValue = config.input ? userValue : config.value;
    const isValid = config.input ? config.input.regex.test(userValue) : true;

    return (
      <div key={property} style={propertyStyle}>
        <span style={propertyNameStyle}>{property}</span>
        <span style={colonStyle}>:</span>
        {config.input && !readOnly ? (
          <>
            <input
              type="text"
              value={userValue}
              onChange={(e) => handleInputChange(selector, property, e.target.value)}
              placeholder={config.input.placeholder}
              style={inputStyle}
              onFocus={(e) => Object.assign(e.target.style, inputFocusStyle)}
              onBlur={(e) => Object.assign(e.target.style, inputStyle)}
            />
            <span style={validIndicatorStyle}>
              {userValue && (isValid ? '✓' : '✗')}
            </span>
          </>
        ) : (
          <span style={staticValueStyle}>{displayValue || config.value}</span>
        )}
        <span style={colonStyle}>;</span>
      </div>
    );
  };

  return (
    <div style={containerStyle}>
      {Object.entries(styles).map(([selector, rule]) => (
        <div key={selector} style={{ marginBottom: '16px' }}>
          <div style={selectorStyle}>
            {selector} <span style={bracketStyle}>{'{'}</span>
          </div>
          {Object.entries(rule.properties).map(([property, config]) =>
            renderProperty(selector, property, config)
          )}
          <div style={closeBracketStyle}>{'}'}</div>
        </div>
      ))}
    </div>
  );
}
