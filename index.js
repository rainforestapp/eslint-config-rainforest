module.exports = {
  extends: [
    'airbnb',
    'plugin:flowtype/recommended',
    'plugin:prettier/recommended',
    'prettier/flowtype',
    'prettier/react'
  ],

  parser: 'babel-eslint',

  env: {
    browser: true,
    jest: true,
    jasmine: true,
    commonjs: true
  },

  rules: {
    'prettier/prettier': ['error', { singleQuote: true }],
    'flowtype/define-flow-type': 1,
    'flowtype/use-flow-type': 1,
    'valid-jsdoc': 2,
    'react/sort-comp': [
      1,
      {
        order: [
          'static-methods',
          'lifecycle',
          'props',
          'everything-else',
          'render'
        ]
      }
    ],

    'one-var': [
      2,
      {
        uninitialized: 'always'
      }
    ],

    'react/self-closing-comp': 0, // https://github.com/prettier/prettier/issues/4223#issuecomment-409728137
    'react/jsx-uses-react': 2,
    'react/jsx-uses-vars': 2,
    'react/no-multi-comp': 0,
    'react/prop-types': 0,
    'react/react-in-jsx-scope': 2,
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/destructuring-assignment': 0,
    'react/require-default-props': 0,
    'react/no-access-state-in-setstate': 1,
    'react/button-has-type': 1,
    // this triggers a lot because the props are used inside hocs
    'react/no-unused-prop-types': 1,
    'react/no-array-index-key': 1,
    // we still have usage of this inside hoc, which can't use callback refs (the recommended alternative)
    'react/no-find-dom-node': 1,

    'no-underscore-dangle': 0,
    'id-length': [2, { exceptions: ['_', '$'] }],
    'new-cap': [
      2,
      {
        capIsNewExceptions: [
          'Iterable',
          'Seq',
          'Collection',
          'Map',
          'OrderedMap',
          'List',
          'Stack',
          'Set',
          'OrderedSet',
          'Record',
          'Range',
          'Repeat'
        ]
      }
    ],
    'arrow-body-style': 0,
    'implicit-arrow-linebreak': 0,
    'no-useless-computed-key': 0,
    'quote-props': 0,
    'prefer-promise-rejecterrors': 0,
    'no-plusplus': [2, { allowForLoopAfterthoughts: true }],
    'prefer-destructuring': 1,
    // we're disabling the default no-duplicate-imports rule and enabling
    // the import plugin equivalent which differentiates between normal imports
    // and flow type imports
    // 'no-duplicate-imports': 0,
    'import/no-duplicates': 2,
    'import/prefer-default-export': 1,
    'import/first': 0,

    // We disable this rule because often we use HOCs to wrap our default exports
    'import/no-named-as-default': 0,

    // warn on all accessibility rules
    'jsx-a11y/accessible-emoji': 1,
    'jsx-a11y/alt-text': 1,
    'jsx-a11y/anchor-has-content': 1,
    'jsx-a11y/anchor-is-valid': 1,
    'jsx-a11y/aria-activedescendant-has-tabindex': 1,
    'jsx-a11y/aria-props': 1,
    'jsx-a11y/aria-proptypes': 1,
    'jsx-a11y/aria-role': 1,
    'jsx-a11y/aria-unsupported-elements': 1,
    'jsx-a11y/click-events-have-key-events': 1,
    'jsx-a11y/heading-has-content': 1,
    'jsx-a11y/html-has-lang': 1,
    'jsx-a11y/iframe-has-title': 1,
    'jsx-a11y/img-redundant-alt': 1,
    'jsx-a11y/interactive-supports-focus': [
      1,
      {
        tabbable: [
          'button',
          'checkbox',
          'link',
          'progressbar',
          'searchbox',
          'slider',
          'spinbutton',
          'switch',
          'textbox'
        ]
      }
    ],
    'jsx-a11y/label-has-for': 1,
    'jsx-a11y/label-has-associated-control': 1,
    'jsx-a11y/media-has-caption': 1,
    'jsx-a11y/mouse-events-have-key-events': 1,
    'jsx-a11y/no-access-key': 1,
    'jsx-a11y/no-autofocus': 1,
    'jsx-a11y/no-distracting-elements': 1,
    'jsx-a11y/no-interactive-element-to-noninteractive-role': 1,
    'jsx-a11y/no-noninteractive-element-interactions': [
      1,
      {
        body: ['onError', 'onLoad'],
        iframe: ['onError', 'onLoad'],
        img: ['onError', 'onLoad']
      }
    ],
    'jsx-a11y/no-noninteractive-element-to-interactive-role': 1,
    'jsx-a11y/no-noninteractive-tabindex': 1,
    'jsx-a11y/no-onchange': 1,
    'jsx-a11y/no-redundant-roles': 1,
    // We want to be able to attach event handlers to any elements
    'jsx-a11y/no-static-element-interactions': 1,
    'jsx-a11y/role-has-required-aria-props': 1,
    'jsx-a11y/role-supports-aria-props': 1,
    'jsx-a11y/scope': 1,
    'jsx-a11y/tabindex-no-positive': 1
  },
  plugins: ['flowtype', 'react', 'import', 'babel'],
  globals: {
    analytics: true
  },
  overrides: [
    {
      files: ['**/__tests__/*.js'],
      rules: { 'prefer-promise-reject-errors': 0 }
    }
  ]
};
