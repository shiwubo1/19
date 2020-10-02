"use strict";

var _a = require("./02a.js");

var _a2 = _interopRequireDefault(_a);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log(_a2.default); // import { a,fn,B } from "./02a.js"
// console.log(a);
// fn();
// let b =new B()
// b.say()
// import * as text from "./02a.js";
// console.log(text.a);
// text.fn();
// let b = new text.B;
// b.say()

console.log(_a2.default.a);
_a2.default.b();
new _a2.default.C().say();