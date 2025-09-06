#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const vm = require('vm');

// Read the TypeScript config file
const configPath = path.join(__dirname, '..', 'src', 'themes', 'config.ts');
const configContent = fs.readFileSync(configPath, 'utf-8');

// Create a simple sandbox to evaluate the themes array
const sandbox = {
  themes: null,
  exports: {}
};

// Extract just the themes array definition and evaluate it
const themesCode = configContent
  .replace(/export\s+interface\s+\w+[^}]*}/gs, '') // Remove interface definitions
  .replace(/export\s+const\s+themes:\s*\w+\[\]\s*=/, 'themes =') // Simplify themes declaration
  .replace(/export\s+const\s+\w+\s*=.*$/gm, '') // Remove other exports
  .replace(/export\s+const\s+\w+\s*=.*?;/gs, '') // Remove inline exports
  .replace(/\/\/.*$/gm, '') // Remove comments
  .trim();

// Only get the themes array part
const themesMatch = themesCode.match(/themes\s*=\s*(\[[^]*?\n\]);/);
if (!themesMatch) {
  console.error('Could not find themes array in config.ts');
  process.exit(1);
}

// Evaluate the themes array
try {
  vm.createContext(sandbox);
  vm.runInContext(themesMatch[0], sandbox);
} catch (e) {
  console.error('Failed to evaluate themes:', e);
  process.exit(1);
}

const themes = sandbox.themes;

if (!themes || !Array.isArray(themes)) {
  console.error('Failed to extract themes array');
  process.exit(1);
}

// Generate CSS
let css = `/* Theme System - CSS Variables for Multiple Themes */
/* This file is auto-generated from src/themes/config.ts */
/* DO NOT EDIT DIRECTLY - Edit config.ts instead */

`;

// Generate :root with Ocean theme as default
const oceanTheme = themes.find(t => t.id === 'ocean');
if (oceanTheme) {
  css += `:root {
  /* Default Ocean theme - current site colors */
`;
  
  // Add standard variables
  if (oceanTheme.colors.bg) css += `  --bg: ${oceanTheme.colors.bg};\n`;
  if (oceanTheme.colors.fg) css += `  --fg: ${oceanTheme.colors.fg};\n`;
  if (oceanTheme.colors.muted) css += `  --muted: ${oceanTheme.colors.muted};\n`;
  if (oceanTheme.colors.border) css += `  --border: ${oceanTheme.colors.border};\n`;
  if (oceanTheme.colors.card) css += `  --card: ${oceanTheme.colors.card};\n`;
  if (oceanTheme.colors.card2) css += `  --card-2: ${oceanTheme.colors.card2};\n`;
  if (oceanTheme.colors.accent) css += `  --accent: ${oceanTheme.colors.accent};\n`;
  if (oceanTheme.colors.accentContrast) css += `  --accent-contrast: ${oceanTheme.colors.accentContrast};\n`;
  if (oceanTheme.colors.secondary) css += `  --secondary: ${oceanTheme.colors.secondary};\n`;
  if (oceanTheme.colors.secondaryContrast) css += `  --secondary-contrast: ${oceanTheme.colors.secondaryContrast};\n`;
  if (oceanTheme.colors.ring) css += `  --ring: ${oceanTheme.colors.ring};\n`;
  if (oceanTheme.colors.link) css += `  --link: ${oceanTheme.colors.link};\n`;
  if (oceanTheme.colors.linkHover) css += `  --link-hover: ${oceanTheme.colors.linkHover};\n`;
  if (oceanTheme.colors.selection) css += `  --selection: ${oceanTheme.colors.selection};\n`;
  if (oceanTheme.colors.badgeBg) css += `  --badge-bg: ${oceanTheme.colors.badgeBg};\n`;
  if (oceanTheme.colors.codeBg) css += `  --code-bg: ${oceanTheme.colors.codeBg};\n`;
  if (oceanTheme.colors.shadow) css += `  --shadow: ${oceanTheme.colors.shadow};\n`;
  if (oceanTheme.colors.scrollbarThumbColor) css += `  --scrollbar-thumb-color: ${oceanTheme.colors.scrollbarThumbColor};\n`;
  if (oceanTheme.colors.scrollbarThumbHover) css += `  --scrollbar-thumb-hover: ${oceanTheme.colors.scrollbarThumbHover};\n`;
  css += `  color-scheme: ${oceanTheme.colorScheme || 'dark'};\n`;
  css += `}\n\n`;
}

// Generate theme-specific CSS
themes.forEach(theme => {
  const comment = theme.description ? ` - ${theme.description}` : '';
  css += `/* ${theme.name || theme.id} theme${comment} */\n`;
  css += `html[data-theme="${theme.id}"] {\n`;
  
  // Add all color variables
  if (theme.colors.bg) css += `  --bg: ${theme.colors.bg};\n`;
  if (theme.colors.fg) css += `  --fg: ${theme.colors.fg};\n`;
  if (theme.colors.muted) css += `  --muted: ${theme.colors.muted};\n`;
  if (theme.colors.border) css += `  --border: ${theme.colors.border};\n`;
  if (theme.colors.card) css += `  --card: ${theme.colors.card};\n`;
  if (theme.colors.card2) css += `  --card-2: ${theme.colors.card2};\n`;
  if (theme.colors.accent) css += `  --accent: ${theme.colors.accent};\n`;
  if (theme.colors.accentContrast) css += `  --accent-contrast: ${theme.colors.accentContrast};\n`;
  if (theme.colors.secondary) css += `  --secondary: ${theme.colors.secondary};\n`;
  if (theme.colors.secondaryContrast) css += `  --secondary-contrast: ${theme.colors.secondaryContrast};\n`;
  if (theme.colors.ring) css += `  --ring: ${theme.colors.ring};\n`;
  if (theme.colors.link) css += `  --link: ${theme.colors.link};\n`;
  if (theme.colors.linkHover) css += `  --link-hover: ${theme.colors.linkHover};\n`;
  if (theme.colors.selection) css += `  --selection: ${theme.colors.selection};\n`;
  if (theme.colors.badgeBg) css += `  --badge-bg: ${theme.colors.badgeBg};\n`;
  if (theme.colors.codeBg) css += `  --code-bg: ${theme.colors.codeBg};\n`;
  if (theme.colors.shadow) css += `  --shadow: ${theme.colors.shadow};\n`;
  if (theme.colors.scrollbarThumbColor) css += `  --scrollbar-thumb-color: ${theme.colors.scrollbarThumbColor};\n`;
  if (theme.colors.scrollbarThumbHover) css += `  --scrollbar-thumb-hover: ${theme.colors.scrollbarThumbHover};\n`;
  css += `  color-scheme: ${theme.colorScheme || 'dark'};\n`;
  css += `}\n\n`;
});

// Write the CSS file
const outputPath = path.join(__dirname, '..', 'src', 'styles', 'themes.css');
fs.writeFileSync(outputPath, css.trimEnd() + '\n');

console.log(`✓ Generated themes.css with ${themes.length} themes`);