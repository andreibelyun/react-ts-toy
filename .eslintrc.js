module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'airbnb'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint'],
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
  },
  globals: {
    React: true,
    __IS_DEV__: true,
  },
};
