declare module '*.mdx' {
  import type { ComponentType } from 'react';
  import type { StyleTree } from './types/tutorial';

  const MDXComponent: ComponentType;
  export default MDXComponent;

  export const frontmatter: {
    id: string;
    type: 'practice' | 'learn';
    title: string;
    hints?: string[];
    successMessage?: string;
  };

  export const markup: string;
  export const styles: StyleTree;
}
