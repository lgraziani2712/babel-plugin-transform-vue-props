# babel-plugin-transform-vue-props

Transform the `props` object to an array of strings or the minimal object with default props. Removes useless code and `vue-types` as a dependency.

This plugin is oriented to production builds only.

## Motivation

Even though `vue-types` provides a minimal version for production, it still means KB for nothing. Also, one component can have three or more props, and one proyect can have hundreds and hundreds of components, which means _a lot_ of KB for nothing.

This plugin tries to reduce to the minimal possible structure:

- If every prop has no default value, it transforms the object into an array of strings.
- If at least one prop has a default value, it transform each prop into:
  - `null` if the prop has no default value.
  - An object with just one prop: the `default` prop and its value.

## Caveats

As for `v1.0.0` it transforms any `props` attribute of any object. This means it affect everything, not only vue components' props. This is because I don't know a way to determine if the file is related to vue or not. E.g. a vue mixin has a `.js` file extension and can have props.

## Installation

```bash
npm install --save-dev babel-plugin-transform-vue-props
```

```bash
yarn add --dev babel-plugin-transform-vue-props
```

## Use

```json
{
  "plugins": ["transform-vue-props"]
}
```
