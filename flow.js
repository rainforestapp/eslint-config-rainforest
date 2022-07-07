module.exports = {
  plugins: ['flowtype'],
  rules: {
    // https://github.com/gajus/eslint-plugin-flowtype
    'flowtype/define-flow-type': 'warn',
    'flowtype/use-flow-type': 'warn',
    'flowtype/require-valid-file-annotation': 'error',
    'flowtype/no-types-missing-file-annotation': 'error',
  },
};
