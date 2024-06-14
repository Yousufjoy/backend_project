import globals from 'globals'
import pluginJs from '@eslint/js'
import tsPlugin from '@typescript-eslint/eslint-plugin'
import tsParser from '@typescript-eslint/parser'

export default [
  {
    files: ['src/**/*.ts', 'src/**/*.tsx', 'src/**/*.js'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: './tsconfig.json',
      },
      globals: globals.browser,
    },
    extends: [
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended',
      'prettier',
    ],
    ignores: ['node_modules', 'dist'],
    rules: {
      '@typescript-eslint/no-unused-vars': 'error',
      'no-unused-expression': 'error',
      'prefer-const': 'error',
      'no-console': 'warn',
    },
  },
  pluginJs.configs.recommended,
  tsPlugin.configs.recommended,
]
