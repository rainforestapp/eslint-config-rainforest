module.exports = {
  "parser": "babel-eslint",
  "extends": "airbnb",
  "env": {
    "browser": true,
    "jest": true,
    "jasmine": true,
    "commonjs": true
  },
  "rules": {
    "flow-vars/define-flow-type": 1,
    "flow-vars/use-flow-type": 1,
    "valid-jsdoc": 2,
    "react/sort-comp": [1, {
      order: [
        'static-methods',
        'lifecycle',
        'props',
        'everything-else',
        'render'
      ]
    }]


    "one-var": [2, {
      "uninitialized": "always",
    }],

    "react/jsx-uses-react": 2,
    "react/jsx-uses-vars": 2,
    "react/no-multi-comp": 0,
    "react/react-in-jsx-scope": 2,
    "react/wrap-multilines": 2,

    "comma-dangle": [2, "always-multiline"],
    "id-length": [2, {"exceptions": ["_", "$"]}],
    "new-cap": [2, {"capIsNewExceptions": ["Iterable", "Seq", "Collection", "Map", "OrderedMap", "List", "Stack", "Set", "OrderedSet", "Record", "Range", "Repeat"]}]
  },
  "plugins": [
    "flow-vars",
    "react",
    "babel"
  ],
  "globals": {
    "analytics": true
  }
}
