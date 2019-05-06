const moduleRequirer = require('./');

let express = moduleRequirer('express');
let noModule = moduleRequirer('noModule');

console.log( 'typeof express', typeof express );
console.log( 'typeof noModule', noModule );