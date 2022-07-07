module.exports = {
  plugins: ['react', 'react-hooks'],
  rules: {
    // https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules
    'react/forbid-foreign-prop-types': ['error', { allowInPropTypes: true }],
    'react/jsx-no-comment-textnodes': 'error',
    'react/jsx-no-duplicate-props': ['error', { ignoreCase: true }],
    'react/jsx-no-target-blank': 'error',
    'react/jsx-no-undef': 'error',
    'react/jsx-pascal-case': [
      'error',
      {
        allowAllCaps: true,
        ignore: [],
      },
    ],
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    'react/no-danger-with-children': 'error',
    'react/no-unused-state': 'error',
    // Disabled because of undesirable warnings
    // See https://github.com/facebook/create-react-app/issues/5204 for
    // blockers until its re-enabled
    // 'react/no-deprecated': 'error',
    'react/no-direct-mutation-state': 'error',
    'react/no-is-mounted': 'error',
    'react/react-in-jsx-scope': 'error',
    'react/require-render-return': 'error',
    'react/style-prop-object': 'error',
    'react/sort-comp': [
      1,
      {
        order: [
          'static-methods',
          'lifecycle',
          'props',
          'everything-else',
          'render',
        ],
      },
    ],
    // 'react/self-closing-comp': 0, // https://github.com/prettier/prettier/issues/4223#issuecomment-409728137
    'react/no-access-state-in-setstate': 'error',
    // this triggers a lot because the props are used inside hocs
    'react/no-unused-prop-types': 'warn',
    // we still have usage of this inside hoc, which can't use callback refs (the recommended alternative)
    'react/no-find-dom-node': 'warn',

    // https://reactjs.org/docs/hooks-rules.html#eslint-plugin
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',
  },
};
