module.exports = {
  extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
  plugins: ["@stylistic"],
  rules: {
    "@stylistic/quotes": [2, "double", { avoidEscape: true }],
    "@typescript-eslint/no-unused-vars": "error",
  },
};
