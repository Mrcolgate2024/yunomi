/// <reference types="react" />
/// <reference types="react-dom" />

declare namespace React {
  interface ReactElement<P = any, T extends string | JSXElementConstructor<any> = string | JSXElementConstructor<any>> {
    type: T;
    props: P;
    key: Key | null;
  }

  type ComponentType<P = {}> = ComponentClass<P> | FunctionComponent<P>;
  type ElementType<P = any> = {
    [K in keyof JSX.IntrinsicElements]: P extends JSX.IntrinsicElements[K] ? K : never
  }[keyof JSX.IntrinsicElements] | ComponentType<P>;
  type ComponentProps<T extends ElementType> = T extends ComponentClass<infer P>
    ? P
    : T extends FunctionComponent<infer P>
    ? P
    : T extends keyof JSX.IntrinsicElements
    ? JSX.IntrinsicElements[T]
    : never;

  interface FunctionComponent<P = {}> {
    (props: P, context?: any): ReactElement<any, any> | null;
    displayName?: string;
  }

  interface ComponentClass<P = {}, S = ComponentState> extends StaticLifecycle<P, S> {
    new(props: P, context?: any): Component<P, S>;
    displayName?: string;
  }
} 