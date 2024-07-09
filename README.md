# Nuxt config Postcss

[![npm version][npm-version-src]][npm-version-href]
[![License][license-src]][license-href]
[![Nuxt][nuxt-src]][nuxt-href]

An opinionated Postcss config for Nuxt

[✨ &nbsp;Release Notes](/CHANGELOG.md)

## Quick Setup

Install the module to your Nuxt application with one command:

```bash
npx nuxi module add @lttr/nuxt-config-postcss
```

### Configuration

Add a file to the configuration which contains global custom media query
definitions:

```ts
import { createResolver } from "@nuxt/kit"

const resolver = createResolver(import.meta.url)

export default defineNuxtConfig({
  modules: ["@lttr/nuxt-config-postcss"],
  lttrConfigPostcss: {
    filesWithGlobals: [resolver.resolve("./assets/css/media.css")],
  },
})
```

<!-- Badges -->

[npm-version-src]: https://img.shields.io/npm/v/@lttr/nuxt-config-postcss/latest.svg?style=flat&colorA=020420&colorB=00DC82
[npm-version-href]: https://npmjs.com/package/@lttr/nuxt-config-postcss
[npm-downloads-src]: https://img.shields.io/npm/dm/@lttr/nuxt-config-postcss.svg?style=flat&colorA=020420&colorB=00DC82
[npm-downloads-href]: https://npmjs.com/package/@lttr/nuxt-config-postcss
[license-src]: https://img.shields.io/npm/l/@lttr/nuxt-config-postcss.svg?style=flat&colorA=020420&colorB=00DC82
[license-href]: https://npmjs.com/package/@lttr/nuxt-config-postcss
[nuxt-src]: https://img.shields.io/badge/Nuxt-020420?logo=nuxt.js
[nuxt-href]: https://nuxt.com
