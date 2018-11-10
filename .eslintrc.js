/** @format */

module.exports = {
  env: {
    node: true,
    browser: true
  },
  globals: {
    module: true,
    Promise: true
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 8,
    sourceType: 'module',
    ecmaFeatures: {
      classes: true,
      experimentalObjectRestSpread: true,
      jsx: true
    }
  },
  rules: {
    'no-restricted-globals': 'warn',
    'no-unused-vars': 'error',
    'no-floating-decimal': 'error',
    'no-constant-condition': 'error',
    'no-trailing-spaces': 'error',
    'no-throw-literal': 0,
    'no-duplicate-imports': [
      'error',
      {
        includeExports: true
      }
    ],
    'no-debugger': 'warn',
    'no-console': 'warn',
    'no-alert': 'warn',
    'no-undef': 'error',
    'no-cond-assign': ['error', 'always'],
    'no-extra-boolean-cast': 'error',
    'no-inner-declarations': 'error',
    'no-lone-blocks': 'error',
    'no-mixed-spaces-and-tabs': 'error',
    'no-return-assign': 'error',
    'no-self-assign': 'error',
    'no-self-compare': 'error',
    'no-unneeded-ternary': 'error',
    'no-unmodified-loop-condition': 'error',
    'no-unreachable': 'error',
    'no-unsafe-negation': 'error',
    'no-useless-call': 'error',
    'no-useless-computed-key': 'error',
    'no-useless-rename': 'error',
    'no-whitespace-before-property': 'error',
    'padded-blocks': ['error', 'never'],
    'default-case': 0,
    'jsx-a11y/anchor-is-valid': false,
    'valid-typeof': 'error',
    'rest-spread-spacing': ['error', 'never'],
    'wrap-iife': ['error', 'inside'],
    semi: ['error', 'always'],
    quotes: ['error', 'single'],
    'jsx-quotes': ['error', 'prefer-double'],
    'prefer-spread': ['error'],
    'use-isnan': 'error',
    'template-curly-spacing': ['error', 'never'],
    'spaced-comment': ['error', 'always'],
    'space-before-blocks': ['error', 'always'],
    'space-in-parens': ['error', 'never'],
    'space-unary-ops': [
      'error',
      {
        words: true,
        nonwords: false
      }
    ],
    'space-before-function-paren': [
      'error',
      {
        anonymous: 'always',
        named: 'always',
        asyncArrow: 'always'
      }
    ],
    'new-cap': 'error',
    'new-parens': 'error',
    camelcase: 'error',
    'eol-last': ['error', 'always'],
    'func-call-spacing': ['error', 'never'],
    'dot-location': ['error', 'property'],
    'comma-dangle': ['error', 'never'],
    'comma-style': ['error', 'last'],
    'comma-spacing': [
      'error',
      {
        before: false,
        after: true
      }
    ],
    'block-spacing': ['error', 'always'],
    'brace-style': ['error', '1tbs'],
    curly: 'error',
    'handle-callback-err': 'error',
    'array-bracket-spacing': ['error', 'never'],
    'object-curly-spacing': ['error', 'always'],
    'switch-colon-spacing': [
      'error',
      {
        after: true,
        before: false
      }
    ],
    'keyword-spacing': [
      'error',
      {
        before: true,
        after: true
      }
    ],
    'key-spacing': [
      'error',
      {
        singleLine: {
          beforeColon: false,
          afterColon: true,
          mode: 'strict'
        },
        multiLine: {
          beforeColon: false,
          afterColon: true,
          mode: 'strict'
        }
      }
    ],
    'generator-star-spacing': [
      'error',
      {
        before: false,
        after: true
      }
    ]
  }
};
