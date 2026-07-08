# React Design System

A small React design system starter built with Vite, TypeScript, and CSS modules. The project focuses on reusable UI primitives such as buttons, inputs, cards, modals, and theme support.

## Features

- Reusable component library with CSS Modules
- Theme provider with light and dark modes
- TypeScript support and Vite-friendly module resolution
- ESLint configuration for React and Vite
- Storybook setup for component documentation and exploration

## Getting started

1. Install dependencies
   ```bash
   npm install
   ```
2. Start the development server
   ```bash
   npm run dev
   ```
3. Build the project for production
   ```bash
   npm run build
   ```
4. Run linting
   ```bash
   npm run lint
   ```
5. Start Storybook
   ```bash
   npm run storybook
   ```

## Project structure

- src/components: reusable UI components
- src/providers: theme context and provider helpers
- src/themes: light and dark design tokens
- src/tokens: spacing, colors, typography, and radius values

## Notes

The project now includes a Storybook configuration and a sample Button story. If you hit installation issues in WSL because of Windows path bridging, rerun the install from the workspace root with the legacy-peer-deps flag and ensure Node is available in your shell.
