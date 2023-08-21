module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
  ],
  ignorePatterns: [
    '**/.chorus',
    '**/node_modules',
    '**/__generated__',
    '**/dist/**',
  ],
  overrides: [
    {
      extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
      ],
      files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx', '**/*.svelte'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaVersion: 'latest',
        extraFileExtensions: ['.svelte'],
        project: './tsconfig.json',
      },
      plugins: [
        '@typescript-eslint',
      ],
      rules: {
        '@typescript-eslint/indent': [
          'error',
          4,
          {
            ignoredNodes: [
              'TSTypeParameterInstantiation',
              'FunctionExpression > .params[decorators.length > 0]',
              'FunctionExpression > .params > :matches(Decorator, :not(:first-child))',
              'ClassBody.body > PropertyDefinition[decorators.length > 0] > .key',
            ],
          },
        ],
        '@typescript-eslint/member-delimiter-style': [
          'warn',
          {
            multiline: {
              delimiter: 'none',
            },
            singleline: {
              delimiter: 'comma',
              requireLast: false,
            },
          },
        ],
        // FIXME: Getting lots of false positives for no-unsafe rules.
        '@typescript-eslint/no-unsafe-argument': 'off',
        '@typescript-eslint/no-unsafe-assignment': 'off',
        '@typescript-eslint/no-unsafe-call': 'off',
        '@typescript-eslint/no-unsafe-member-access': 'off',
        '@typescript-eslint/no-unsafe-return': 'off',
        '@typescript-eslint/no-unused-vars': [
          'warn',
          {
            args: 'after-used',
            argsIgnorePattern: '^_',
            destructuredArrayIgnorePattern: '^_',
            ignoreRestSiblings: true,
            varsIgnorePattern: '^_',
          },
        ],
        '@typescript-eslint/object-curly-spacing': [
          'warn',
          'never',
        ],
        '@typescript-eslint/quotes': [
          'warn',
          'single',
          {
            allowTemplateLiterals: true,
            avoidEscape: true,
          },
        ],
        '@typescript-eslint/semi': [
          'warn',
          'never',
          {
            beforeStatementContinuationChars: 'always',
          },
        ],
        'object-curly-spacing': 'off',
        'quotes': 'off',
        'semi': 'off',
      },
    },
    {
      extends: [
        'plugin:svelte/recommended',
      ],
      files: ['**/*.svelte'],
      parser: 'svelte-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
      },
      rules: {
        'svelte/html-closing-bracket-spacing': 'warn',
        'svelte/html-quotes': [
          'warn',
          {
            prefer: 'single',
          },
        ],
        'svelte/html-self-closing': [
          'warn',
          'all',
        ],
        'svelte/indent': [
          'warn',
          {
            indent: 4,
          },
        ],
        'svelte/mustache-spacing': 'warn',
        'svelte/no-extra-reactive-curlies': 'warn',
        'svelte/no-spaces-around-equal-signs-in-attribute': 'warn',
        'svelte/prefer-class-directive': 'warn',
        'svelte/prefer-destructured-store-props': 'warn',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: 'module',
  },
  plugins: [
    'import',
  ],
  root: true,
  rules: {
    'arrow-parens': [
      'warn',
      'as-needed',
    ],
    'comma-dangle': ['warn', 'always-multiline'],
    'eqeqeq': ['error', 'smart'],
    'import/default': 'off',
    'import/export': 'warn',
    'import/no-named-as-default-member': 'off',
    'import/order': [
      'warn',
      {
        'alphabetize': {
          caseInsensitive: true,
          order: 'asc',
        },
        'groups': [
          'unknown',
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
        ],
        'newlines-between': 'always',
        'warnOnUnassignedImports': true,
      },
    ],
    'indent': [
      'error',
      2,
    ],
    'jsx-quotes': [
      'warn',
      'prefer-single',
    ],
    'no-inner-declarations': 'off',
    'no-multiple-empty-lines': [
      'warn',
      {
        max: 1,
        maxBOF: 0,
        maxEOF: 1,
      },
    ],
    'no-unused-vars': 'off',
    'object-curly-spacing': [
      'warn',
      'never',
    ],
    'quote-props': ['warn', 'consistent-as-needed'],
    'quotes': [
      'warn',
      'single',
      {
        allowTemplateLiterals: true,
        avoidEscape: true,
      },
    ],
    'semi': [
      'warn',
      'never',
      {
        beforeStatementContinuationChars: 'always',
      },
    ],
    'sort-imports': 'off',
    'sort-keys': 'off',
    'space-before-function-paren': [
      'warn',
      'always',
    ],
    'template-curly-spacing': ['warn', 'never'],
  },
  settings: {
    'import/cache': {
      lifetime: '∞',
    },
    'import/core-modules': [
      '$app',
      '$env',
      '$service-worker',
    ],
    'import/extensions': [
      '.js',
      '.ts',
      '.mjs',
      '.mts',
      '.cjs',
      '.cts',
      '.svelte',
    ],
    'import/internal-regex': `^($lib)\b`,
    'import/parsers': {
      '@babel/parser': ['.js', '.jsx', '.cjs', '.mjs'],
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      node: true,
      typescript: true,
    },
  },
}
