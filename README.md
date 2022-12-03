# ichion
 Cross-platform Node library for playing sound files using [Puppeteer](https://pptr.dev).

```js
const ichion = require('ichion')

// Play audio file
ichion.play('file.mp3')   // or
ichion.play('file.mp3').then(() => { ... })   // or
await ichion.play('file.mp3')
```
