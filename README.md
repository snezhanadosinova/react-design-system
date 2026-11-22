# React Design System

A React component library and example site built with React, TypeScript, Vite, CSS Modules, and Storybook. It includes reusable interface components, design tokens, light and dark themes, and interactive component stories.

## Contents

- [Requirements](#requirements)
- [Run with Node.js and npm](#run-with-nodejs-and-npm)
- [Run with Docker](#run-with-docker)
- [Project commands](#project-commands)
- [Use the library in another React app](#use-the-library-in-another-react-app)
- [Themes and design tokens](#themes-and-design-tokens)
- [Components](#components)
- [Project structure](#project-structure)
- [Troubleshooting](#troubleshooting)

## Requirements

Choose either a local Node.js installation or Docker. You do not need WSL to use Docker.

- **Node.js option:** Node.js `22.12` or newer and npm.
- **Docker option:** Docker Desktop (Windows or macOS) or Docker Engine with the Compose plugin (Linux).

## Run with Node.js and npm

Run these commands from a terminal opened at the repository root (the directory containing `package.json`).

Install the locked dependencies:

```bash
npm ci
```

Start the example site:

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173). Keep the terminal running while you use the site.

To explore components and their states in Storybook, open a second terminal at the repository root and run:

```bash
npm run storybook
```

Open [http://localhost:6006](http://localhost:6006). Stop either development server with `Ctrl+C`.

## Run with Docker

This option works with Docker Desktop on Windows and macOS, and Docker Engine with Compose on Linux. WSL is optional. Run the commands from a terminal opened at the repository root.

Build the image and start the app in the background:

```bash
docker compose up --build -d
```

The Compose service is named `app`. The example site is available at [http://localhost:5173](http://localhost:5173). The repository is mounted into the container, so source changes are available to the dev server.

Start Storybook in the container:

```bash
docker compose exec app npm run storybook -- --host 0.0.0.0
```

Open [http://localhost:6006](http://localhost:6006). Keep this command running while using Storybook. The Compose configuration publishes both ports `5173` and `6006`.

Run project commands inside the container by prefixing them with `docker compose exec app`, for example:

```bash
docker compose exec app npm run lint
docker compose exec app npm run build
docker compose exec app npm run build-storybook
```

To open a shell inside the container instead:

```bash
docker compose exec app sh
```

The project directory is `/app` inside the container. Type `exit` to leave the shell. Stop the Docker services from the host terminal with:

```bash
docker compose down
```

## Project commands

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the Vite example site on port `5173`. |
| `npm run storybook` | Start interactive Storybook on port `6006`. |
| `npm run lint` | Run ESLint on the source and project configuration. |
| `npm run build` | Type-check and build the component library and example site. |
| `npm run build-storybook` | Build a static Storybook site in `storybook-static/`. |
| `npm run generate:tokens` | Generate `src/styles/variables.css` from the TypeScript design tokens. |
| `npm run preview` | Serve the most recent Vite production build locally. |

Run token generation after editing files in `src/tokens/`. Commit the generated `src/styles/variables.css` along with the token changes.

## Use the library in another React app

The package declares React and React DOM as peer dependencies, so the consuming application must provide them. The package metadata is currently version `0.0.0`; use the local package until a version is published to a registry.

### Build and install a local package

From this repository, build the library and create an npm tarball:

```bash
npm ci
npm run build
npm pack
```

This creates `react-design-system-0.0.0.tgz` in the repository root. In the consuming React application's directory, install it using the path to that tarball:

```bash
npm install /path/to/react-design-system/react-design-system-0.0.0.tgz
```

Replace `/path/to/...` with the actual path on your machine. After the package is published, consumers can instead install the published version with `npm install react-design-system`.

Import the package stylesheet once in the consuming app's entry point and wrap the app in `ThemeProvider`:

```tsx
import { Button, ThemeProvider } from "react-design-system";
import "react-design-system/style.css";

export function App() {
  return (
    <ThemeProvider>
      <Button>Continue</Button>
    </ThemeProvider>
  );
}
```

`ThemeProvider` supports `defaultTheme="light"` or `defaultTheme="dark"`. The selected mode is applied to the document and persisted in browser storage. Use the `useTheme()` hook inside the provider to read or change the active theme.

### Use a form component

`FormField` provides an accessible label and optional helper or error text. Place a form control inside it:

```tsx
import { FormField, Input } from "react-design-system";

<FormField label="Email address" helperText="Use your work email.">
  <Input type="email" name="email" autoComplete="email" />
</FormField>
```

All components are exported from the package root. TypeScript declarations are included in the package build.

## Themes and design tokens

The library ships with light and dark theme variables. Its theme values are defined in `src/tokens/`; the generated CSS variables live in `src/styles/variables.css`.

To change the library's built-in values:

1. Edit the relevant token source, such as `src/tokens/colors.ts`, `spacing.ts`, `radius.ts`, `shadows.ts`, or `typography.ts`.
2. Regenerate the CSS variables with `npm run generate:tokens`.
3. Run `npm run build` and review both themes.

An application can override CSS variables after importing the library stylesheet. For example:

```css
:root {
  --color-primary: #365b4b;
  --color-primary-hover: #294638;
}

[data-theme="dark"] {
  --color-primary: #a9c6b4;
  --color-primary-hover: #c0d6c8;
}
```

The example site also has its own scoped palette in `src/layout/SiteLayout.module.css`; those page-specific values override the library tokens inside the site layout.

## Components

The package currently exports:

- **Actions and feedback:** `Button`, `Link`, `Badge`, `Alert`, `Spinner`
- **Form controls:** `FormField`, `Input`, `Textarea`, `Select`, `Checkbox`, `Switch`, `Radio`, `RadioGroup`
- **Layout and content:** `Card`, `Grid`, `Stack`, `Text`, `List`, `Divider`, `Avatar`
- **Overlays:** `Modal`, `Drawer`
- **Theme API:** `ThemeProvider`, `useTheme`

Component stories are under `src/components/`. Open Storybook to inspect their examples and states. The a11y addon provides automated checks in Storybook; it complements, but does not replace, manual keyboard and assistive-technology checks.

## Project structure

```text
src/
  components/   Reusable React components and their Storybook stories
  hooks/        Public hooks such as useTheme
  layout/       Shared site layout and navigation
  pages/        Example, getting-started, and documentation pages
  providers/    Theme context and provider
  styles/       Global styles, reset, and generated CSS variables
  themes/       Light and dark theme objects
  tokens/       Source design tokens
  utils/        Shared accessibility helpers
.storybook/     Storybook configuration
.docker/        Docker image definition
scripts/        Token generation script
```

## Troubleshooting

### Port 5173 or 6006 is already in use

Stop the process using the port, or change the host-side port mapping in `docker-compose.yml`. The port on the left is the host port; the port on the right is the container port.

### Storybook opens inside Docker but not in the browser

Check that Compose publishes `6006:6006`, then recreate the service with `docker compose up -d --force-recreate app`. Start Storybook with `docker compose exec app npm run storybook -- --host 0.0.0.0` and open `http://localhost:6006` on the host.

### Docker dependency changes are not available

Rebuild the service image after changing package metadata or dependencies:

```bash
docker compose up --build -d
```

### Lint or build fails

Run the failing command from the repository root (or prefix it with `docker compose exec app` when using Docker) and inspect the first reported source error. Generated output directories such as `dist/` and `storybook-static/` are build artifacts and are excluded from linting.
