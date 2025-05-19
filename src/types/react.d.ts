
declare module 'react' {
  // Explicitly import and re-export React types
  export * from '@types/react';

  // Fix ReactPortal type by making 'children' optional
  export interface ReactPortal {
    key: React.Key | null;
    children?: React.ReactNode;
    type: any;
    props: any;
  }

  // Fix ReactElement type
  export interface ReactElement<P = any, T extends string | JSXElementConstructor<any> = string | JSXElementConstructor<any>> {
    type: T;
    props: P;
    key: React.Key | null;
  }

  // Ensure FunctionComponent has displayName
  export interface FunctionComponent<P = {}> {
    (props: P, context?: any): ReactElement<any, any> | null;
    displayName?: string;
  }
}

// Add react-router-dom types
declare module 'react-router-dom' {
  import * as React from 'react';
  
  export interface RouteProps {
    path?: string;
    element?: React.ReactNode;
    children?: React.ReactNode;
    index?: boolean;
  }
  
  export interface RoutesProps {
    children?: React.ReactNode;
    location?: any;
  }
  
  export const BrowserRouter: React.FC<{ children?: React.ReactNode }>;
  export const Routes: React.FC<RoutesProps>;
  export const Route: React.FC<RouteProps>;
  export const Link: React.FC<{ to: string; className?: string; children?: React.ReactNode; [key: string]: any }>;
  export function useLocation(): { pathname: string; search: string; hash: string; state: any };
  export function useNavigate(): (to: string, options?: { replace?: boolean; state?: any }) => void;
}
