
// This file is needed to make TypeScript happy with our JSX usage
import * as React from 'react';

declare module 'react' {
  export = React;
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'elevenlabs-convai': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        'agent-id'?: string;
      };
    }
  }
}
