module.exports = {
  'parser': 'babel-eslint',
  'extends': 'airbnb',
  'env': {
    'browser': true,
    'jest': true,
    'jasmine': true,
    'commonjs': true
  },
  'rules': {
    'flow-vars/define-flow-type': 1,
    'flow-vars/use-flow-type': 1,
    'valid-jsdoc': 2,
    'react/sort-comp': [1, {
      order: [
        'static-methods',
        'lifecycle',
        'props',
        'everything-else',
        'render'
      ]
    }],

    'one-var-declaration-per-line': [2, 'initializations'],

    'one-var': [2, {
      'uninitialized': 'always',
    }],

    'react/jsx-uses-react': 2,
    'react/jsx-uses-vars': 2,
    'react/no-multi-comp': 0,
    'react/prop-types': 0,
    'react/react-in-jsx-scope': 2,
    'react/jsx-wrap-multilines': 2,

    'no-underscore-dangle': 0,
    'comma-dangle': [2, 'always-multiline'],
    'id-length': [2, {'exceptions': ['_', '$']}],
    'new-cap': [2, {'capIsNewExceptions': ['Iterable', 'Seq', 'Collection', 'Map', 'OrderedMap', 'List', 'Stack', 'Set', 'OrderedSet', 'Record', 'Range', 'Repeat']}],

    // we're disabling the default no-duplicate-imports rule and enabling
    // the import plugin equivalent which differentiates between normal imports
    // and flow type imports
    'no-duplicate-imports': 0,
    'import/no-duplicates': 1,
    'import/first': 0,

    // We want to be able to attach event handlers to any elements
    'jsx-a11y/no-static-element-interactions': 0,
  },
  plugins: [
    'flow-vars',
    'react',
    'babel',
    'import',
  ],
  globals: {
    analytics: true,
  },
};
