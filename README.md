# Module requirer
Load modules easily without error

## Install

Install with [npm](https://www.npmjs.com/):

```sh
$ npm install --save module-requirer
```
    
```js

const anyLength = require('module-requirer');

let express = moduleRequirer('express');
console.log( 'typeof express', typeof express ); // function

let noModule = moduleRequirer('noModule');
console.log( 'typeof noModule', noModule ); // false!

```

### Running tests
```sh
$ node test.js
```

### License

Released under the [MIT License](LICENSE).