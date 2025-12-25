import React, { createContext, useContext, ReactNode } from 'react';

export const colors = {
  primaryLight: '#FF82CD',
  primary: '#D43B97',
  primaryDark: '#942969',

  accentDark: '#005B78',
  accent: '#0CB3E8',
  accentLight: '#8AE3FF',

  grayDarkest: '#1A1A1A',
  grayDarker: '#333333',
  grayDark: '#4D4D4D',
  gray: '#808080',
  grayLight: '#B2B2B2',
  grayLighter: '#E5E5E5',
  grayLightest: '#FAFAFA',

  white: '#FFF',
  green: '#228B22',
  red: '#DC3545',
} as const;

export type ThemeColors = typeof colors;

interface Theme {
  colors: ThemeColors;
}

const theme: Theme = { colors };

const ThemeContext = createContext<Theme>(theme);

export function ThemeProvider({ children }: { children: ReactNode }) {
  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
