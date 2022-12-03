# ichion
[![npm](https://img.shields.io/npm/v/ichion)](https://www.npmjs.com/package/ichion)
[![ESLint](https://github.com/Dylankjy/ichion/actions/workflows/eslint.yml/badge.svg)](https://github.com/Dylankjy/ichion/actions/workflows/eslint.yml)

 Cross-platform Node library for playing sound files using [Puppeteer](https://pptr.dev).

## Install
```sh
npm i ichion
```

## Usage
```js
const ichion = require('ichion')

// Play audio file
ichion.play('file.mp3')   // or
ichion.play('file.mp3').then(() => { ... })   // or
await ichion.play('file.mp3')
```
