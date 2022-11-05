module.exports = {
  env: {
    browser: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended', // Make sure this is always the last element in the array.
  ],
  plugins: ['prettier'],
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts'],
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
        project: ['./tsconfig.json'],
      },
    },
  },
  rules: {
    // default
    eqeqeq: 'error',
    'no-console': 'warn',
    // prettier
    'prettier/prettier': ['error', {}, { usePrettierrc: true }],
    //typescript
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-namespace': ['error', { allowDeclarations: true }],
    '@typescript-eslint/no-unused-vars': [
      'warn',
      { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
    ],
  },
  ignorePatterns: ['**/*.js', '**/*.json', 'node_modules', 'dist'],
};
