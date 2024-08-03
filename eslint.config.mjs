import { FlatCompat } from "@eslint/eslintrc";
import globals from "globals";
import { dirname } from "node:path";
import js from "@eslint/js";
import ts from "typescript-eslint";
import pluginVue from "eslint-plugin-vue";

const compat = new FlatCompat();

export default ts.config(
  js.configs.recommended,
  ...ts.configs.recommended,
  ...pluginVue.configs["flat/recommended"],
  ...compat.extends("@vue/eslint-config-prettier/skip-formatting"),
  {
    files: ["**/*.{js,mjs,cjs,jsx,vue,ts,tsx,mts,cts}"], // append `ts,mts,cts,tsx` for TypeScript project
    languageOptions: {
      parserOptions: {
        parser: "@typescript-eslint/parser",
      },
      globals: {
        ...globals.node,
        ...globals.browser,
        ...globals.es2024,
      },
    },
  },
);
