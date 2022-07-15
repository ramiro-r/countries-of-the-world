# React/Next Boilerplate

# What this boilerplate includes:

## Packages and dependencies configuration:

- React/Next
- Typescript
- Prettier
- ESLint
- Jest, react-testing-library, ts-jest
- Istanbul coverage

## Version Configurations:

- nvmrc, npmrc, yarnrc files to configure node and package manager versions

## Git hooks using Husky:

- Pre-commit hooks:
  - run linter task
- Pre-push hooks:
  - test success

## VS Code settings

- code styling
- debug tasks. cross-env dep included

## Storybook

## Project folder structure

```bash
- components
- hooks
- utils
- pages
- styles
- public
```

## BaseComponent template

Includes the component structure, style, story and mock data files to copy from to create other components

## Available commands

```bash
yarn dev // starts the dev server
yarn build // production build
yarn start // builds production and starts locally
yarn test // runs the unit test suite
yarn storybook // runs storybook
yarn lint
yarn prettier
```

After yarn dev open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

# What this boilerplate Doesn NOT include:

Global State management: Each project will set up the desired state management library depending on the need if necessary. Some examples of libraries to consider:

- Redux (with Redux-saga or Redux-thunk)
- Zustand
- Jotai
- mobx

## Useful links

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/)

## Next steps

- Create ui component library with accessibility in place for basic elements: Modal, TabPanel, Accordions
- Change hooks to use only updated files
