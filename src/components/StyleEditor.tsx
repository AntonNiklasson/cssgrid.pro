'use client';

import { useCallback } from 'react';
import { useTutorial } from '../contexts/TutorialContext';
import type { CSSProperty, StyleTree } from '../types/tutorial';

interface StyleEditorProps {
  styles: StyleTree;
  readOnly?: boolean;
}

export function StyleEditor({ styles, readOnly = false }: StyleEditorProps) {
  const { setUserInput, getUserInput } = useTutorial();

  const handleInputChange = useCallback(
    (selector: string, property: string, value: string) => {
      setUserInput(selector, property, value);
    },
    [setUserInput]
  );

  const renderProperty = (selector: string, property: string, config: CSSProperty) => {
    const userValue = getUserInput(selector, property);
    const displayValue = config.input ? userValue : config.value;
    const isValid = config.input ? config.input.regex.test(userValue) : true;

    return (
      <div key={property} className="flex items-center pl-6 mb-1 flex-wrap">
        <span className="text-[var(--color-primary-light)]">{property}</span>
        <span className="text-gray-500 mx-1">:</span>
        {config.input && !readOnly ? (
          <>
            <input
              type="text"
              value={userValue}
              onChange={(e) => handleInputChange(selector, property, e.target.value)}
              placeholder={config.input.placeholder}
              className="bg-gray-700 border border-gray-600 rounded px-2 py-1 text-white font-mono text-sm min-w-[120px] outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary-dark)]"
            />
            <span className="ml-2 text-sm">{userValue && (isValid ? '✓' : '✗')}</span>
          </>
        ) : (
          <span className="text-gray-100">{displayValue || config.value}</span>
        )}
        <span className="text-gray-500 mx-1">;</span>
      </div>
    );
  };

  return (
    <div className="bg-gray-900 rounded-lg p-5 font-mono text-sm text-gray-100 overflow-auto">
      {Object.entries(styles).map(([selector, rule]) => (
        <div key={selector} className="mb-4">
          <div className="text-[var(--color-accent)] mb-1">
            {selector} <span className="text-gray-400 ml-1">{'{'}</span>
          </div>
          {Object.entries(rule.properties).map(([property, config]) =>
            renderProperty(selector, property, config)
          )}
          <div className="text-gray-400 mt-1">{'}'}</div>
        </div>
      ))}
    </div>
  );
}
