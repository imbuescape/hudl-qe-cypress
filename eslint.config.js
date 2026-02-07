import tsParser from "@typescript-eslint/parser";
import tsPlugin from "@typescript-eslint/eslint-plugin";
import cypressPlugin from "eslint-plugin-cypress";
import globals from "globals";

export default [
  {
    // 1. Tell ESLint which files to check
    files: ["**/*.ts", "**/*.js"],
    languageOptions: {
      parser: tsParser,
      globals: {
        ...globals.browser,
        ...globals.node,
        // Manually defining Cypress globals since the plugin 
        // environment export is currently broken in v9
        cy: "readonly",
        Cypress: "readonly",
        expect: "readonly",
        assert: "readonly",
        before: "readonly",
        after: "readonly",
        beforeEach: "readonly",
        afterEach: "readonly",
        it: "readonly",
        describe: "readonly",
        context: "readonly",
      },
    },
    plugins: {
      "@typescript-eslint": tsPlugin,
      "cypress": cypressPlugin,
    },
    ignores: [
    "**/vendor/*.js",
    "**/dist/*.js",
    "allure-results/**",
    "allure-report/**",
    "cypress/fixtures/**" ,
  ],
    rules: {
      ...tsPlugin.configs.recommended.rules,
      ...cypressPlugin.configs.recommended.rules,     
      "cypress/no-unnecessary-waiting": "warn",
      "cypress/assertion-before-screenshot": "error",
      "@typescript-eslint/no-explicit-any": "warn",
      "no-console": "off",
      "no-unused-expressions": "off",   
      "@typescript-eslint/no-unused-expressions": "off",
      "@typescript-eslint/no-this-alias": "off",
      "@typescript-eslint/no-unused-vars": ["error", { 
        "argsIgnorePattern": "^_",
        "varsIgnorePattern": "^[A-Z][A-Z0-9_]*$",
        "ignoreRestSiblings": true 
      }],
    },
  },
];
