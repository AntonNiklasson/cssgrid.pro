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
      <div key={property} className="flex items-center pl-6 mb-1.5 flex-wrap">
        <span className="text-indigo-300">{property}</span>
        <span className="text-gray-500 mx-1.5">:</span>
        {config.input && !readOnly ? (
          <>
            <input
              type="text"
              value={userValue}
              onChange={(e) => handleInputChange(selector, property, e.target.value)}
              placeholder={config.input.placeholder}
              className="bg-gray-800 border border-gray-600 rounded-md px-3 py-1.5 text-white font-mono text-sm min-w-[140px] outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/30 transition-all"
            />
            <span className={`ml-2 text-sm ${isValid ? 'text-emerald-400' : 'text-red-400'}`}>
              {userValue && (isValid ? '✓' : '✗')}
            </span>
          </>
        ) : (
          <span className="text-gray-200">{displayValue || config.value}</span>
        )}
        <span className="text-gray-500 ml-0.5">;</span>
      </div>
    );
  };

  return (
    <div className="bg-gray-900 rounded-xl p-6 font-mono text-sm text-gray-100 overflow-auto shadow-sm">
      {Object.entries(styles).map(([selector, rule]) => (
        <div key={selector} className="mb-5">
          <div className="text-teal-400 mb-2">
            {selector} <span className="text-gray-500 ml-1">{'{'}</span>
          </div>
          {Object.entries(rule.properties).map(([property, config]) =>
            renderProperty(selector, property, config)
          )}
          <div className="text-gray-500 mt-2">{'}'}</div>
        </div>
      ))}
    </div>
  );
}
