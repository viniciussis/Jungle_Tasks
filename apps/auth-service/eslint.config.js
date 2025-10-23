import nodeConfig from '@jungle-tasks/eslint-config/node';

export default [
  {
    ignores: ['dist', 'node_modules'],
  },
  {
    files: ['src/**/*.{ts,tsx}'],
    ...nodeConfig,
  },
];
