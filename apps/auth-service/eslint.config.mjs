import nodeConfig from '@jungle-tasks/eslint-config/node.js';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default [
  {
    ignores: ['dist', 'node_modules'],
  },
  {
    files: ['src/**/*.{ts,tsx}'],
    ...nodeConfig,
    languageOptions: {
      ...nodeConfig.languageOptions,
      parserOptions: {
        ...nodeConfig.languageOptions.parserOptions,
        project: path.resolve(__dirname, './tsconfig.json'),
      },
    },
  },
];
