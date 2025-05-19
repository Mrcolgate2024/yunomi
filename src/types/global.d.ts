
/// <reference types="react" />
/// <reference types="react-dom" />

// Define additional global React interfaces
interface ReactElementType<P = any, T extends string | JSXElementConstructor<any> = string | JSXElementConstructor<any>> {
  type: T;
  props: P;
  key: React.Key | null;
}

// Ensure ReactNode includes proper ReactElement definitions
type ReactNode = 
  | ReactElement<any, string | JSXElementConstructor<any>>
  | ReactPortal
  | string
  | number
  | boolean
  | null
  | undefined
  | Iterable<ReactNode>;

// Make ReactPortal's children optional
interface ReactPortal {
  children?: ReactNode;
  key: React.Key | null;
  type: any;
  props: any;
}

// Add support for Radix UI component types
declare module '@radix-ui/react-tooltip' {
  export interface TooltipProviderProps {
    children?: React.ReactNode;
    [key: string]: any;
  }
  export const TooltipProvider: React.FC<TooltipProviderProps>;
}

declare module '@radix-ui/react-dialog' {
  export interface DialogPortalProps {
    children?: React.ReactNode;
    [key: string]: any;
  }
  export const Dialog: React.FC<{ children?: React.ReactNode }>;
  export const DialogPortal: React.FC<DialogPortalProps>;
  export const DialogOverlay: React.FC<{ className?: string; [key: string]: any }>;
  export const DialogContent: React.FC<{ className?: string; children?: React.ReactNode; [key: string]: any }>;
  export const DialogTrigger: React.FC<{ asChild?: boolean; children?: React.ReactNode; [key: string]: any }>;
  export const DialogClose: React.FC<{ asChild?: boolean; children?: React.ReactNode; [key: string]: any }>;
  export const DialogTitle: React.FC<{ className?: string; children?: React.ReactNode; [key: string]: any }>;
  export const DialogDescription: React.FC<{ className?: string; children?: React.ReactNode; [key: string]: any }>;
}
