# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

```bash
# Install dependencies (uses pnpm v10.8.0)
pnpm install

# Run development server (port 3001)
pnpm dev

# Build for production
pnpm build

# Generate static site
pnpm generate

# Preview production build
pnpm preview
```

## Project Architecture

This is a Nuxt 3 application that serves as a button style editor. The project uses:
- **Nuxt 3.17.4** with compatibility mode for Nuxt 4
- **Vue 3.5.14** for reactive UI
- **Tailwind CSS v4** via Vite plugin for styling
- **Dark mode** support with SSR-safe implementation

### Key Architectural Decisions

1. **Dark Mode Implementation**: 
   - Uses Tailwind's class-based dark mode (`darkMode: 'class'`)
   - SSR-safe with inline scripts in `app.vue` and `nuxt.config.ts` to prevent flashing
   - State managed via `useColorMode` composable with localStorage persistence

2. **Component Structure**:
   - `FormField.vue`: Reusable input component without labels (labels handled by parent)
   - `ThemeToggle.vue`: Theme switcher using lucide-vue icons
   - Components use Tailwind classes with dark: variants for theme support

3. **State Management**:
   - Uses Vue 3's Composition API with `ref` for local state
   - Custom composables in `app/composables/` for shared logic
   - `useState` for SSR-compatible state management

4. **Styling Approach**:
   - Tailwind CSS v4 with Vite integration
   - No CSS variables - all styling via Tailwind utility classes
   - Dark mode classes applied directly to elements

## Important Implementation Details

### SSR Considerations
- The `useColorMode` composable checks `import.meta.server` to provide default values during SSR
- Inline scripts execute before hydration to apply theme classes immediately
- Theme preference stored in localStorage and synced across tabs

### Button Customization Features
The main page (`app/pages/index.vue`) allows customization of:
- Text content
- Dimensions (width/height)
- Padding (individual control for all sides)
- Colors (text and background)
- Border radius
- Active scale (transform on click)
- Transition duration

## Development Notes

- The project uses `pnpm` as the package manager
- No test setup exists yet
- ESLint is configured via `@nuxt/eslint` module
- The development server runs on port 3001 (configured in package.json)
- Reka UI is available for headless UI components (currently used for Slider component)