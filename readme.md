# Eslint Config at Rainforest

To install the eslint plugin simply execute in your terminal:

`yarn add -D eslint-config-rainforest eslint babel-eslint eslint-config-prettier eslint-plugin-babel eslint-plugin-flowtype eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-prettier eslint-plugin-react prettier`

# Editor configuration

## VSCode
Install the [eslint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) extension
add these to your settings file:
```
{
  "javascript.validate.enable": false, // turn off vscode's built in linter because it doesn't follow our eslint config
  "eslint.autoFixOnSave": true, // unless you want to manually fix the lint errors
  "editor.tabSize": 2, // will conflict with prettier otherwise
  "editor.wordWrapColumn": 120,
  "css.validate": false, // not working for css modules currently
}
```

Also in projects that use flow, it's useful to install [flow for vscode](https://github.com/flowtype/flow-for-vscode) and turn off the built in typescript support because it will be confusing as it will show the inferred typescript types alongside flow on hover, follow the gif below:
![](https://raw.githubusercontent.com/flowtype/flow-for-vscode/1ae5552d149bb41c8173dee552a2975b336e7beb/readme/flow-disable-tsc.gif)
