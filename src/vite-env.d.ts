/// <reference types="vite/client" />

declare module '*.md' {
  const content: string;
  export default content;
}

declare module '*.mdx' {
  import type { ComponentType } from 'react';
  import type { StyleTree } from './types/tutorial';

  export const frontmatter: {
    id: string;
    type: 'learn' | 'practice';
    title: string;
    hints?: string[];
    successMessage?: string;
  };

  export const markup: string;
  export const styles: StyleTree;

  const Component: ComponentType;
  export default Component;
}
