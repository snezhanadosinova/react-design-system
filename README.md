# React Design System

A comprehensive React component library and design system starter built with modern development tools. This project provides a collection of reusable, themeable UI components built with Vite, TypeScript, and CSS Modules. It includes built-in support for light and dark themes, full type safety, and an interactive Storybook for component documentation and exploration.

## Features

- **Reusable Component Library**: Production-ready UI components (Button, Input, Card, Modal, and more) built with React
- **Theme Support**: Built-in light and dark theme modes with CSS variables for easy customization
- **TypeScript**: Full type safety across all components and utilities
- **CSS Modules**: Scoped styling to prevent conflicts and ensure maintainability
- **Vite**: Lightning-fast development server and build tooling
- **Storybook**: Interactive component documentation and exploration environment
- **ESLint**: Code quality and consistency checks
- **Vitest & Playwright**: Testing infrastructure for components and integration tests

## Getting started

### Option 1: Local Setup (npm)

1. Install dependencies
   ```bash
   npm install
   ```
2. Start the development server
   ```bash
   npm run dev
   ```
3. Start Storybook for interactive component exploration
   ```bash
   npm run storybook
   ```

### Option 2: Docker Setup

If you prefer using Docker, you can run the project in a containerized environment:

1. Build and start the containers
   ```bash
   docker-compose up --build
   ```
2. The development server will be available at `http://localhost:5173`

To stop the containers:

```bash
docker-compose down
```

## Common Commands

- Build the project for production
  ```bash
  npm run build
  ```
- Run linting
  ```bash
  npm run lint
  ```
- Start Storybook
  ```bash
  npm run storybook
  ```
- Build Storybook for static deployment
  ```bash
  npm run build-storybook
  ```
- Generate CSS variables from tokens
  ```bash
  npm run generate:tokens
  ```

## Components

The design system includes the following production-ready components:

- **Alert**: Notification/alert component for displaying messages
- **Avatar**: User avatar display component
- **Badge**: Small label or status indicator
- **Button**: Clickable button component with variant support
- **Card**: Container component for content grouping
- **Checkbox**: Checkbox input component with label support
- **Divider**: Horizontal divider/separator component
- **Drawer**: Side drawer/sidebar component
- **FormField**: Form field wrapper with label and validation support
- **Grid**: CSS Grid layout component
- **Input**: Text input field component
- **List**: List component for displaying items
- **Modal**: Modal dialog component for overlays
- **Radio**: Radio button component with RadioGroup
- **Select**: Dropdown select component
- **Spinner**: Loading spinner indicator
- **Stack**: Flexible layout component (horizontal/vertical stacking)
- **Switch**: Toggle switch component
- **Text**: Text typography component
- **Textarea**: Multi-line text input component

All components support light and dark themes and are fully typed with TypeScript.

## Project structure

```
src/
├── components/        # Reusable UI components (Alert, Avatar, Badge, Button, etc.)
├── providers/         # React context providers (Theme provider)
├── themes/            # Light and dark theme definitions with design tokens
├── tokens/            # Design system values (colors, spacing, typography, radius)
├── styles/            # Global styles and CSS reset
├── hooks/             # Custom React hooks
├── types/             # TypeScript type definitions
└── utils/             # Utility functions and helpers
```

## Environment Variables

No environment variables are required for local development.

## Troubleshooting

**Installation issues in WSL**: If you encounter installation issues due to Windows path bridging:

1. Run the install from the workspace root
2. Use the `--legacy-peer-deps` flag if needed
3. Ensure Node.js is available in your shell

**Docker permission issues**: If you encounter permission issues with Docker on WSL:

- Make sure Docker Desktop is installed and running
- Ensure your WSL user has proper permissions to access Docker
