declare module 'react' {
  export * from '@types/react';
}

declare module '@types/react' {
  export interface ReactElement<P = any, T extends string | JSXElementConstructor<any> = string | JSXElementConstructor<any>> {
    type: T;
    props: P;
    key: Key | null;
  }
} 