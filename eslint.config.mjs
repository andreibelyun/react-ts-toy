import globals from "globals";
import js from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
  { languageOptions: { parserOptions: { ecmaFeatures: { jsx: true } } } },
  { languageOptions: { globals: globals.browser } },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReactConfig,
  {
    ignores: ["node_modules", "build"],
  },
  {
    rules: {
      "react/react-in-jsx-scope": 0,
      "@typescript-eslint/no-unused-vars": 0,
      "react/no-deprecated": 1,
    },
  },
];
