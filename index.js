const prettierConfig = require('./prettier.config');

module.exports = {
  parser: 'babel-eslint',
  extends: ['eslint:recommended', 'plugin:react/recommended', 'prettier'],
  plugins: ['prettier'],
  parserOptions: {
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  env: {
    es6: true,
    node: true,
    browser: true,
    jest: true
  },
  rules: {
    'prettier/prettier': ['warn', prettierConfig],
    'react/prop-types': ['warn', {skipUndeclared: true}],
    'react/jsx-no-target-blank': 'warn',
    'react/no-unescaped-entities': false,
    'react/display-name': false,
    'react/no-unused-prop-types': 'warn'
  },
  globals: {
    shallow: false,
    render: false,
    mount: false
  }
};
