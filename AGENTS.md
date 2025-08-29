# Agent Guidelines for next-templ

## Commands

- **Dev**: `bun run dev` (Next.js with Turbopack) - Do not run unless explicitly instructed
- **Build**: `bun run build` (production build with Turbopack) - Do not run unless explicitly instructed
- **Check**: `bun run check` (TypeScript + ESLint) - Run after changes for type safety and code quality
- **Format**: `bun run format` (Prettier) - Run to format code before committing
- **Single test**: No test runner configured

## Code Style

- **TypeScript**: Strict mode enabled, target ES2017, moduleResolution bundler
- **Formatting**: Prettier (no semicolons, double quotes, 2-space tabs, 80 width, trailing comma none)
- **Imports**: Sorted with @trivago/prettier-plugin-sort-imports + prettier-plugin-tailwindcss
- **Path aliases**: `@/*` → `./src/*`, component aliases in components.json
- **Import order**: @core → third-party → @server → @ui → relative

## Conventions

- **Components**: PascalCase, use `React.ComponentProps` for prop types, RSC enabled
- **Functions**: camelCase, prefer arrow functions
- **Styling**: Tailwind CSS v4 with `cn()` utility, CSS variables, neutral base color
- **Variants**: Use `class-variance-authority` for component variants
- **Types**: Explicit `type` imports, prefer interfaces for component props

## Libraries

- **UI**: Radix UI components with shadcn/ui "new-york" style, Lucide icons
- **Styling**: Tailwind CSS v4 with PostCSS, tw-animate-css for animations
- **Fonts**: Next.js Google Fonts (Geist, Geist Mono)
- **Theme**: next-themes with system preference support

## Patterns

- **Error handling**: TypeScript strict mode + Next.js ESLint rules
- **Accessibility**: ARIA attributes and focus management
- **Performance**: Next.js optimizations, React 19 features, Turbopack
