module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'prettier'],
  extends: ['airbnb-typescript', 'plugin:@typescript-eslint/recommended', 'prettier'],
  parserOptions: {
    ecmaVersion: 6,
    project: './tsconfig.json'
  },
  rules: {
    '@typescript-eslint/explicit-function-return-type': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/prefer-default-export': 'off',
    "import/no-unused-modules": [1, {
      "unusedExports": true,
      "missingExports": true,
      "ignoreExports": ["**/*.d.ts", "**/*.spec.ts", "**/*.spec.tsx", "**/*.mock.ts"]
    }],
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal', ['parent', 'sibling', 'index']],
        pathGroups: [
          {
            pattern: 'react',
            group: 'builtin',
            position: 'before'
          },
          {
            pattern: '[@]!(assets|components|context|graphql|hooks|screens|themes|utils)/**',
            group: 'external',
            position: 'after'
          },
          {
            pattern: '[@]+(assets|components|context|graphql|hooks|screens|themes|utils)/**',
            group: 'external',
            position: 'after'
          }
        ],
        alphabetize: {
          order: 'asc'
        },
        pathGroupsExcludedImportTypes: ['builtin'],
        'newlines-between': 'always'
      }
    ],
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/naming-convention': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/ban-types': 'off',
    '@typescript-eslint/prefer-as-const': 'off',
    '@typescript-eslint/no-unused-expressions': 'off',
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/return-await': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    'no-underscore-dangle': 'off',
    'arrow-body-style': 'off',
    'one-var': 'off',
    'no-restricted-syntax': 'off',
    'no-useless-escape': 'off',
    'no-param-reassign': 'off',
    'no-empty': 'off',
    'no-undef': 'off',
    'func-names': 'off',
    'prefer-arrow-callback': 'off',
    'no-return-assign': 'off',
    'no-plusplus': 'off',
    'no-useless-return': 'off',
    'object-shorthand': 'off',
    radix: 'off',
    'no-extra-boolean-cast': 'off',
    'prefer-destructuring': 'off',
    'import/no-cycle': 'warn',
    'no-empty-pattern': 'off',
    'prefer-rest-params': 'off',
    'no-nested-ternary': 'off',
    'no-case-declarations': 'off',
    'no-unneeded-ternary': 'off',
    'no-irregular-whitespace': 'off',
    'no-prototype-builtins': 'off',
    'default-case': 'off',
    'prefer-promise-reject-errors': 'off',
    'import/no-useless-path-segments': 'off',
    'import/no-cycle': 'off',
    'prefer-template': 'off',
    'no-console': 'off',
    'prefer-spread': 'off',
    'no-restricted-globals': 'off',
    'no-useless-concat': 'off',
    'array-callback-return': 'off',
    'consistent-return': 'off',
    'import/extensions': 'off',
    'no-async-promise-executor': 'off',
    'no-lone-blocks': 'off'
  }
};
