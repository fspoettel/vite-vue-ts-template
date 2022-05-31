# vite-vue-ts-template

> extended version of [vite](https://vitejs.dev/)'s official `vue-ts` template.

additional features:

- [eslint](https://eslint.org/) for linting.
- [vitest](https://vitest.dev) + [testing-library](https://testing-library.com/) for testing.
- [prettier](https://prettier.io/) + (optional) [pre-commit](https://pre-commit.com/) hook for code formatting.
- [github actions](https://github.com/features/actions) for continuous integration.
- [browserslist](https://github.com/browserslist/browserslist) + [autoprefixer](https://github.com/postcss/autoprefixer).

## Install

```sh
# install dependencies.
npm i
```

## Develop

```sh
npm run dev
```

## Build

```sh
npm run build
```

## Test

```sh
npm test

# run jest in watch mode.
npm run test:watch

# collect coverage.
npm run test:coverage
```

## Lint

```sh
npm run lint
```

## Format

```sh
npm run fmt
```

There is an optional [pre-commit](https://pre-commit.com/) hook to format code on commit. You need to install and activate it in order to use it.

```sh
# (macos) install via brew.
brew install pre-commit
# (any system) install via python's pip.
pip3 install pre-commit

# activate the hook.
pre-commit install

# when updating prettier, update the hook.
pre-commit autoupdate
```

This template uses [pre-commit](https://pre-commit.com/) over [lint-staged](https://github.com/okonet/lint-staged) due to the author's familiarity with it and its great support for other programming languages.

## Preview

Serves the content of `./dist` over a local http server.

```sh
npm run preview
```

---

## Type Support For `.vue` Imports in TS

Since TypeScript cannot handle type information for `.vue` imports, they are shimmed to be a generic Vue component type by default. In most cases this is fine if you don't really care about component prop types outside of templates. However, if you wish to get actual prop types in `.vue` imports (for example to get props validation when using manual `h(...)` calls), you can enable Volar's Take Over mode by following these steps:

1. Run `Extensions: Show Built-in Extensions` from VS Code's command palette, look for `TypeScript and JavaScript Language Features`, then right click and select `Disable (Workspace)`. By default, Take Over mode will enable itself if the default TypeScript extension is disabled.
2. Reload the VS Code window by running `Developer: Reload Window` from the command palette.

You can learn more about Take Over mode [here](https://github.com/johnsoncodehk/volar/discussions/471).
