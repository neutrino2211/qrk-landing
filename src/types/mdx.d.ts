declare module '*.mdx' {
    import type { BlogMetadata } from './blog';
    
    const content: React.ComponentType;
    export const metadata: BlogMetadata;
    export default content;
} 