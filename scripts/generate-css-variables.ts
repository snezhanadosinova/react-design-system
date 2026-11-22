import { writeFileSync } from "node:fs";
import { colors } from "../src/tokens/colors.ts";
import { spacing } from "../src/tokens/spacing.ts";
import { radius } from "../src/tokens/radius.ts";
import { shadows } from "../src/tokens/shadows.ts";
import { typography } from "../src/tokens/typography.ts";

function kebabCase(value: string): string {
  return value
    .replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`)
    .replace(/([a-z])([0-9])/g, "$1-$2");
}

type ColorTheme = {
  [Key in keyof typeof colors.light]: (typeof colors.light)[Key] extends object
    ? Record<string, string>
    : string;
};

function themeVariables(theme: ColorTheme): string[] {
  const lines: string[] = [];
  for (const [key, value] of Object.entries(theme) as Array<[string, string | Record<string, string>]>) {
    if (typeof value === "object") {
      for (const [textKey, textValue] of Object.entries(value)) {
        lines.push(`  --color-text-${kebabCase(textKey)}: ${textValue};`);
      }
    } else {
      lines.push(`  --color-${kebabCase(key)}: ${value};`);
    }
  }
  lines.push("  --gradient-primary: linear-gradient(135deg, #1e3a8a 0%, #4c1d95 50%, #312e81 100%);");
  return lines;
}

function flatVariables(prefix: string, values: Record<string, string | number>): string[] {
  return Object.entries(values).map(([key, value]) => `  --${prefix}-${kebabCase(key)}: ${value};`);
}

const typographyVariables = [
  `  --font-family: ${typography.fontFamily};`,
  ...flatVariables("font-size", typography.fontSize),
  ...flatVariables("font-weight", typography.fontWeight),
  ...flatVariables("line-height", typography.lineHeight),
];

const sharedVariables = [
  ...flatVariables("space", spacing),
  ...flatVariables("radius", radius),
  ...flatVariables("shadow", shadows),
  ...typographyVariables,
  "  --gradient-bg: linear-gradient(135deg, #f5f7fa 0%, #ffffff 100%);",
];

const css = [
  ":root {",
  ...themeVariables(colors.light),
  ...sharedVariables,
  "}",
  "",
  '[data-theme="dark"] {',
  ...themeVariables(colors.dark),
  "  --gradient-bg: linear-gradient(135deg, #1f2937 0%, #111827 100%);",
  "}",
  "",
].join("\n");

writeFileSync("src/styles/variables.css", css);
console.log("variables.css generated");
