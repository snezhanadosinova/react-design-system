/// <reference types="node" />

import { writeFileSync } from "fs";

import { colors } from "../src/tokens/colors";
import { spacing } from "../src/tokens/spacing";
import { radius } from "../src/tokens/radius";
import { shadows } from "../src/tokens/shadows";
import { typography } from "../src/tokens/typography";

function kebabCase(str: string) {
  return str.replace(/[A-Z]/g, (m) => `-${m.toLowerCase()}`);
}

function objectToCssVars(
  obj: Record<string, any>,
  prefix: string,
  lines: string[] = []
) {
  for (const [key, value] of Object.entries(obj)) {
    if (typeof value === "object") {
      objectToCssVars(value, `${prefix}-${kebabCase(key)}`, lines);
    } else {
      lines.push(`  --${prefix}-${kebabCase(key)}: ${value};`);
    }
  }

  return lines;
}

const variables = [
  ...objectToCssVars(colors, "color"),
  ...objectToCssVars(spacing, "spacing"),
  ...objectToCssVars(radius, "radius"),
  ...objectToCssVars(shadows, "shadow"),
  ...objectToCssVars(typography, "font"),
];

const css = `:root {\n${variables.join("\n")}\n}\n`;

writeFileSync("src/styles/variables.css", css);

console.log("✓ variables.css generated");