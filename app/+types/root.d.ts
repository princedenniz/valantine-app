export namespace Route {
  export type LinkDescriptor = {
    rel?: string;
    href: string;
    crossOrigin?: string;
    [key: string]: any;
  };

  export type LinksFunction = () => LinkDescriptor[];

  export interface ErrorBoundaryProps {
    error: unknown;
  }
}
