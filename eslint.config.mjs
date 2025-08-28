// eslint.config.mjs

import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [{
  ignores: ["node_modules/**", ".next/**", "out/**", "build/**", "next-env.d.ts"]
}, ...compat.extends("next/core-web-vitals", "next/typescript"), ...compat.extends("plugin:import/recommended", "plugin:import/typescript"), {
  files: ["**/*.{ts,tsx,js,jsx}"],
  rules: {
    // Allman brace style:
    "brace-style": ["error", "allman", { allowSingleLine: true }],
    
    // Import ordering rules:
    "import/order": ["error", {
      "groups": [
        "builtin",
        "external", 
        "internal",
        "parent",
        "sibling",
        "index"
      ],
      "pathGroups": [
        {
          "pattern": "~/**",
          "group": "internal",
          "position": "before"
        }
      ],
      "pathGroupsExcludedImportTypes": ["builtin"],
      "newlines-between": "always",
      "alphabetize": {
        "order": "asc",
        "caseInsensitive": true
      }
    }],
    "import/newline-after-import": "error",
    "import/no-duplicates": "error"
  },
  settings: {
    "import/resolver": {
      "typescript": {
        "paths": {
          "~/*": ["./src/*"]
        }
      }
    }
  }
}];

export default eslintConfig;
