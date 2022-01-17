# Eslint Config at Rainforest

To install the eslint plugin simply execute in your terminal:

`yarn add -DE @rainforestqa/eslint-config eslint @babel/eslint-parser eslint-plugin-babel eslint-plugin-flowtype eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react prettier`

Import the prettier config (`prettier.config.js`) as outlined in [sharing configurations](https://prettier.io/docs/en/configuration.html#sharing-configurations)

# Editor configuration

## VSCode

Install the [eslint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) and [prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) extensions
add these to your settings file:

```
{
  "javascript.validate.enable": false, // turn off vscode's built in linter because it doesn't follow our eslint config
  "editor.codeActionsOnSave": {
    "source.fixAll": true // unless you want to manually fix the lint errors
  },
  "editor.tabSize": 2, // will conflict with prettier otherwise
  "editor.wordWrapColumn": 120,
  "css.validate": false, // not working for css modules currently
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true
}
```

Also in projects that use flow, it's useful to install [flow for vscode](https://github.com/flowtype/flow-for-vscode)

## Webstorm

The setup should be picked up automatically from the repository's `.eslint.rc.*` and `package.json`. Here is where to look in case something doesn't work as expected:
**Eslint** - Choose `Webstorm / Preferences` from the main menu and type `eslint` into the seach bar, this will show up all related config sections:

1. `Languages & Frameworks / JavaScript / Code Quality Tools / ESLint` is the main lint config section. Make sure the `Enable` checkbox on top is checked, the Node interpreter is set to the Project node version, and the ESLint package is from the local `node_modules` folder. The `Automatic search` option from the `Configuration file` section is working fine for most scenarios.
2. `Keymap` allows you to setup key shortcuts for fixing lint problems.

**Prettier** - An official Prettier plugin is available starting from version 2018.1. Again go to Preferences but write `prettier` this time. The configuration is under `Languages & Frameworks / JavaScript / Prettier` and the only thing you can do is to point the IDE to the related package folder.

# Versioning Policy

- **Patch** release (x.y.z -> x.y.z+1): bugfixes and tooling updates mean that code that previously passed linting **should** continue to pass after the update.

- **Minor** release (x.y.z -> x.y+1.0): a change to an existing rule means that code that previously failed linting **may** now pass, or a new configuration means that code that previously passed linting **should** continue to pass.

- **Major** release (x.y.z -> x+1.0.0): a new rule, or a change to an existing rule, means that code that previously passed linting **will not** pass any more.
