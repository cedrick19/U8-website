export default {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'subject-case': [2, 'never', ['upper-case']],

    'subject-empty': [0],

    'type-enum': [
      2,
      'always',
      ['feature', 'fix', 'adjust', 'style', 'refactor', 'wip', 'test', 'add', 'remove'],
    ],

    'header-max-length': [2, 'always', 72],

    'type-case': [0],
    'scope-enum': [0],
  },
};
