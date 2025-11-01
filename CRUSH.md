# CRUSH.md - Development Guidelines

## Commands
- `bun run dev` - Start development server with Turbo
- `bun run build` - Build production application
- `bun run lint` - Run ESLint
- `bun run lint:fix` - Fix ESLint issues automatically
- `bun run typecheck` - Run TypeScript type checking
- `bun run check` - Run both lint and typecheck
- `bun run format:check` - Check formatting with Prettier
- `bun run format:write` - Fix formatting with Prettier

## Code Style Guidelines

### Imports
- Use `@/*` path aliases for imports from `src/*`
- Prefer inline type imports: `import type { ComponentProps } from "react"`
- Use consistent type imports enforced by ESLint rule

### Formatting
- Use Prettier with Tailwind CSS plugin
- Sort Tailwind classes automatically
- No manual formatting required

### TypeScript
- Strict mode enabled with `noUncheckedIndexedAccess`
- Use `verbatimModuleSyntax`
- Unused variables with `_` prefix are allowed
- Type definitions in `src/types/` directory

### Component Patterns
- Use class-variance-authority (CVA) for component variants
- Follow existing UI component structure in `src/components/ui/`
- Use Radix UI primitives when appropriate

### Error Handling
- Use Zod for validation and type safety
- Handle API errors consistently
- Use proper TypeScript error types