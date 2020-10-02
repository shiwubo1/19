"use strict";

{
    /*函数的扩展*/
    //设置默认参数
    var fn = function fn(x, y) {
        return x + y;
    };

    var fa = function fa(x) {
        var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

        return x + y;
    };

    //rest rest 是es6对函数提供的一个扩展,是一个数组对象
    var fb = function fb() {
        var str = 0;

        for (var _len = arguments.length, rest = Array(_len), _key = 0; _key < _len; _key++) {
            rest[_key] = arguments[_key];
        }

        for (var v in rest) {
            str += rest[v];
        }
        console.log(str);
    };

    //函数尾调用   能够提高性能, 使用递归的时候使用尾调用
    var fc = function fc(x) {
        return fa(x);
    };

    var a = fn(2, 3);
    console.log(a);

    a = fa(3);
    console.log(a);
    fb(1, 2, 3, 4);
    a = fc(5);
    console.log(a);
    /**以下三种情况不属于尾调用
     *运算 function fn(){return fa(2)+1} 
     *函数表达式 let fn = function(){return fa(2)}
     *无return function fn(){fa(2)}
     * /
    // /**箭头函数  匿名函数就是箭头函数  function(){}*/
    // a =function(a){console.log(1);}
    // //可以写成 
    // (a)=>{console.log(1);}
    // //如果函数只有一个参数,()可以省略
    // ()=>{ console.log(1);}
    // //
}