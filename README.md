# Portal Frontend

## How to Build

**Note: node_module cannot be a symlink !**

1. run `yarn install` to install NodeJS packages

## How to Upgrade package.json

**How to get a pip like tool for NPM ???**

* https://classic.yarnpkg.com/en/docs/dependency-versions
* [Blog: Update all the Node dependencies to their latest version](https://flaviocopes.com/update-npm-dependencies)
* [pip freeze like tricks](https://stackoverflow.com/questions/17576243/pip-freeze-for-node-and-npm)
* https://docs.npmjs.com/cli/v6/commands/npm-shrinkwrap

To **really** upgrade all semvers in *package.json* to the latest version run theses commands:

```
npm outdated

npm install -g npm-check-updates
npx ncu -u

npm update
npm install
```

Using Yarn (but don't — always — update semvers in package.json ...)

```
yarn check

yarn outdated

uarn upgrade PACKAGE@^
yarn upgrade-interactive --latest
yarn --dev upgrade-interactive --latest
```
