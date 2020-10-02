"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// export let a = 123
// export function fn(){
//     console.log(12);
// }
// export class B{
//     say(){
//         console.log("hello");
//     }
// }
//如果到处模块较多 ,上面的方法比较笨
var a = 123;
function b() {
    console.log(123);
};

var C = function () {
    function C() {
        _classCallCheck(this, C);
    }

    _createClass(C, [{
        key: "say",
        value: function say() {
            console.log("hello");
        }
    }]);

    return C;
}();
//使用default 


exports.default = {
    a: a,
    b: b,
    C: C
};