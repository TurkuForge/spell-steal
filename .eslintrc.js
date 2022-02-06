module.exports = {
  env: {
    browser: true,
    es2021: true,
    "vue/setup-compiler-macros": true,
  },
  extends: [
    "standard",
    "plugin:@typescript-eslint/recommended",
    "plugin:vue/vue3-recommended",
    "prettier",
  ],
  parserOptions: {
    ecmaVersion: "latest",
    parser: "@typescript-eslint/parser",
    sourceType: "module",
  },
};
