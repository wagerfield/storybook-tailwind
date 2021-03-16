# Storybook + Tailwind 2 + PostCSS 8

Tailwind 2 uses PostCSS 8 by default.

Storybook uses PostCSS 7 by default.

In order to get Storybook to work with Tailwind you have 2 options:

1. Use Tailwind's `@tailwindcss/postcss7-compat` package following the [steps outlined here](https://tailwindcss.com/docs/installation#post-css-7-compatibility-build).
2. Use Storybook's `@storybook/addon-postcss` package following the [steps outlined here](https://storybook.js.org/addons/@storybook/addon-postcss).

This repo is a simple reproduction that demonstrates that option 2 does not work.

Running `yarn dev` will start Next.js in dev mode on `localhost:3000` that shows Tailwind 2 base styles and utility classes being applied to the `IndexPage` and `Button` component.

Running `yarn storybook` will start Storybook in dev mode on `localhost:6000` but throws the error:

```
EERROR in ./src/styles/index.css (./node_modules/css-loader/dist/cjs.js!./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js??ref--11-2!./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??ref--12-1!./node_modules/postcss-loader/src??ref--12-2!./src/styles/index.css)
Module build failed (from ./node_modules/@storybook/addon-postcss/node_modules/postcss-loader/dist/cjs.js):
SyntaxError

(1:1) /storybook-tailwind/src/styles/index.css Unknown word

> 1 | var api = require("!../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
    | ^
  2 |             var content = require("!!../../node_modules/css-loader/dist/cjs.js??ref--12-1!../../node_modules/postcss-loader/src/index.js??ref--12-2!./index.css");
  3 |

 @ ./src/styles/index.css 2:26-342 53:4-74:5 56:18-334
 @ ./.storybook/preview.js
 ```

The Storybook build logs shows that PostCSS 8 is being used:

```
info => Using PostCSS preset with postcss@8.2.8
```

...but there seems to be an issue with `postcss-loader` in this instance.
