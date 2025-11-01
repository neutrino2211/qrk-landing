import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    h1: ({ children }) => (
      <h1 className="py-4 text-3xl leading-tight font-light md:text-5xl">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="py-4 text-2xl font-light md:text-5xl">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="py-4 text-xl font-light md:text-4xl">{children}</h3>
    ),
    h4: ({ children }) => (
      <h4 className="py-4 text-lg font-light md:text-3xl">{children}</h4>
    ),
    h5: ({ children }) => (
      <h5 className="py-4 text-base font-light md:text-2xl">{children}</h5>
    ),
    h6: ({ children }) => (
      <h6 className="py-4 text-sm font-light md:text-xl">{children}</h6>
    ),
    p: ({ children }) => <p className="text-lg">{children}</p>,
  };
}
