/// <reference types="vite/client" />

declare module '*.md' {
  const content: string;
  export default content;
}

declare module '*.mdx' {
  import type { ComponentType } from 'react';
  const Component: ComponentType;
  export default Component;
}
