import nodeConfig from './node.js';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';

export default {
  ...nodeConfig,
  plugins: {
    ...nodeConfig.plugins,
    react: reactPlugin,
    'react-hooks': reactHooksPlugin,
  },
  rules: {
    ...nodeConfig.rules,
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
  },
  settings: {
    react: { version: 'detect' },
  },
};
