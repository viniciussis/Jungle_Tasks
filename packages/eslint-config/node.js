import globals from 'globals';
import base from './base.js';

export default [
  ...base,
  {
    files: ['**/*.js'],
    languageOptions: {
      globals: {
        ...globals.node,
      },
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
    rules: {
      'no-process-exit': 'off',
    },
  },
];

/* const backup = {
  languageOptions: {
    parser: '@typescript-eslint/parser',
    parserOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
  },
  plugins: {
    '@typescript-eslint': tsPlugin,
    import: importPlugin,
    prettier: prettierPlugin,
  },
  rules: {
    'prettier/prettier': 'warn',
    'import/order': [
      'warn',
      {
        groups: [['builtin', 'external', 'internal']],
        'newlines-between': 'always',
      },
    ],
    '@typescript-eslint/no-var-requires': 'off',
  },
};
 */
