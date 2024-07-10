module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: ['plugin:react/recommended', 'airbnb', 'plugin:i18next/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'i18next'],
  rules: {
    'import/no-unresolved': 0,
    'import/extensions': 0,
    'import/prefer-default-export': 0,
    'no-unused-vars': 0,
    '@typescript-eslint/no-unused-vars': 1,
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': 2,
    'import/no-extraneous-dependencies': [2, { devDependencies: true }],
    'no-underscore-dangle': [
      2,
      {
        allow: ['__IS_DEV__'],
      },
    ],
    'react/function-component-definition': 0,
    'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', 'tsx'] }],
    'i18next/no-literal-string': [1, { markupOnly: true }],
    'max-len': [2, { ignoreComments: true }],
    'arrow-body-style': 0,
    'react/jsx-props-no-spreading': 0,
    'react/require-default-props': 0,
  },
  globals: {
    React: true,
    __IS_DEV__: true,
  },
};
