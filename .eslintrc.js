module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  plugins: [],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:vue/vue3-recommended",
    "prettier",
  ],
  env: {
    browser: true,
    es2022: true,
    jest: true,
  },
};
