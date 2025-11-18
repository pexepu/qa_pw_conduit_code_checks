import globals from 'globals';
import pluginJs from '@eslint/js';
import playwright from 'eslint-plugin-playwright';
import eslintConfigPrettier from 'eslint-config-prettier';

/** @type {import('eslint').Linter.Config[]} */
export default [
  // 1. Ігнори (дуже важливо!)
  {
    ignores: [
      '**/node_modules/**',
      '**/playwright-report/**',
      '**/test-results/**',
      '**/.cache/**',
      'playwright.config.js',
    ],
  },

  // 2. Глобали
  {
    languageOptions: {
      globals: globals.node,
    },
  },

  // 3. Базові правила JavaScript
  pluginJs.configs.recommended,

  // 4. Playwright rules
  playwright.configs['flat/recommended'],

  // 5. Твої кастомні правила
  {
    rules: {
      'no-unused-vars': 'error',
      'playwright/expect-expect': 'off',
    },
  },

  // 6. Prettier — останнім!
  eslintConfigPrettier,
];
