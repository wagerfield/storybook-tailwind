# Storybook + Tailwind 2 + PostCSS 8

Tailwind 2 uses PostCSS 8 by default.

Storybook uses PostCSS 7 by default.

In order to get Storybook to work with Tailwind you have 2 options:

1. Use Tailwind's `@tailwindcss/postcss7-compat` package following the [steps outlined here](https://tailwindcss.com/docs/installation#post-css-7-compatibility-build).
2. Use Storybook's `@storybook/addon-postcss` package following the [steps outlined here](https://storybook.js.org/addons/@storybook/addon-postcss).

This repo demonstrates option 2 while also using the new [Tailwind JIT Compiler](https://blog.tailwindcss.com/just-in-time-the-next-generation-of-tailwind-css) that got released on Monday 15th March.

If you want to use the standard compiler, simply replace "@tailwindcss/jit" in `postcss.config.js` with "tailwindcss".
