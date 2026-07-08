import type { StorybookConfig } from "@storybook/react-vite";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const config: StorybookConfig = {
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },

  stories: [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(ts|tsx|js|jsx)",
  ],

  staticDirs: ["../public"],

  addons: [
    "@storybook/addon-docs",
    "@storybook/addon-a11y",
    "@storybook/addon-vitest",
    "@chromatic-com/storybook",
    "@storybook/addon-mcp",
  ],

  viteFinal(config) {
    config.resolve ??= {};
    config.resolve.alias = {
      ...(config.resolve.alias ?? {}),
      "@": path.resolve(__dirname, "../src"),
    };

    return config;
  },
};

export default config;