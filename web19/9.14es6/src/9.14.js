{
    let a = 111;
    let b = 222;
    let c = 333
    var str = "123564";
    for (var n = 0; n < 4; n++) {
        // console.log("n:"+n);
    }
    // console.log(n);
    /**
     * let const 变量或者常量, 是块级作用域的   
     * {}用来声明块级作用域
     */
    for (let i = 0; i < 4; i++) {
        // console.log(i);
    }
}
// console.log(i);         /**报错 */   
{
    /**
     * const 声明一个只读的变量(常量)
     *  特点: 
     * 1)只在声明的代码块有效
     * 2)在同一作用域不允许重复声明
     * 3)没有变量提升
     * 4)有暂时性死区
     */
    const a = 3;
    // console.log(a);
}
{
    /**七种数据类型
     * 1)基本数据类型
     * Number
     * String
     * Boolean
     * null
     * undefined
     * 2)引用数据类型
     * Object
     * 3)es6 新增的第七种数据类型
     * Symbol() 是函数 但不是对象 ,不能使用new 关键字   Symbol()是唯一的
     */
    let sy = Symbol("kk") === Symbol("kk")
    console.log(sy);
    let sa = Symbol.for("kk") === Symbol.for("kk")
    console.log(sa);
}

{/**立即调用函数 */
    (function () {
        console.log(1);
    })()
        + (function () {
            console.log(5);
        })()
}

{
    /**进制的写法和转换 */
    //八进制  0o 0O开头
    let a = 0o11;  //1*8^0+1*8^1   
    console.log(a);    //9
    a = 0O22;     //2*8^0+2*8^1
    console.log(a);    //18
    //二进制  0b  0B 开头
    a = 0b1111      //1*2^0+1*2^1+1*2^2+1*2^3  1 + 2 +4+8
    console.log(a);  //15
    a = 0B111111      //1*2^0+1*2^1+1*2^2+1*2^3+1*2^4+1*2^5  1 + 2 +4+8+16+32 15*4+3
    console.log(a);  //63
    //16进制
    a = 0x75       //5*16^0+7*16^1   5 + 112
    console.log(a); //117
    a = 0Xb75       //5*16^0+7*16^1+b*16^2   5 + 112 +
    console.log(a); //2933
}
{
    /**数字类型新增的几种方法 */
    //Number.idFinite()  判断折射数字是不是有限的值
    let a = Number.isFinite(Infinity)
    console.log(a);   //false 
    a = Number.isFinite(1)
    console.log(a);  // true 
    a = Number.isFinite(1 / 0)
    console.log(a);   //false  1/0-->无穷大
    a = Number.isFinite(1 / Infinity)
    console.log(a);   //true  1/Infinity-->0
    a = Number.isFinite(Infinity / Infinity)
    console.log(a);   //false  Infinity/Infinity-->NaN
    //Number.isInteger() 判断是不是一个整数
    a = Number.isInteger(2)
    console.log(a);   //true  
    a = Number.isInteger(2.2)
    console.log(a);   //false
    //Number.tofixed() 保留几位小数 会带有四舍五入
    a = 12.3551
    a = a.toFixed(3)
    console.log(a);   //12.35 
    //Math.trunc() 去除小数 返回整数
    a = Math.trunc(12.531)
    console.log(a);   //12
    //Math.sigh() 判断一个数是 正数 负数 或0 
    a = Math.sign(12.531)
    console.log(a);   //1  
    a = Math.sign(-12.531)
    console.log(a);   //-1  
    a = Math.sign(0)
    console.log(a);   //0  
    a = Math.sign(-0)
    console.log(a);   //-0  
    //Math.cbrt() 开一个数的立方根 
    a = Math.cbrt(27)
    console.log(a);     //3
    //Math.sqrt()开一个数的平方根
    a = Math.sqrt(9)
    console.log(a);     //3
    //Math.pow(x,y)返回x的y幂次方
    a = Math.pow(2,3)
    console.log(a);     //8
    a = Math.pow(5,2)
    console.log(a);     //25
    a = Math.pow(9,1/2)
    console.log(a);     //3
    a = Math.pow(8,1/3)
    console.log(a);     //2
}

{
    /**新增的字符串的方法 */
    let str = "125416";
    //遍历 for of 
    for(let i of str){
        console.log(i);
    }
    //includes(x,y) 检查是否包含指定的字符 
    //一个参数 从头开始寻找 看有没有指定的字符串  
    //两个参数 x:指定的字符串  y：开始寻找的下标(包括开始下标)
    let a = str.includes(6);
    console.log(a);  //true
    a = str.includes(3);
    console.log(a);  //false
    a = str.includes(2,2);
    console.log(a);  //false
    a = str.includes(2,1);
    console.log(a);  //false
    //startWith(x,p) 从p开始是否包含指定字符x
    a = str.startsWith(12);
    console.log(a);  //true
    a = str.startsWith(12,2);
    console.log(a);  //false
    //endsWith(x,p) 以p结尾是否包含指定字符x
    a = str.endsWith(16);
    console.log(a);  //true
    a = str.endsWith(12,3);
    console.log(a);  //false
    //repeat()  使字符串重复几次
    //padStart(length,"") 头部补全到字符串的长度为length
    a = str.padStart(10,"a");
    console.log(a);  //aaaa125416
    //padEnd(length,"") 尾部补全到字符串的长度为length
    a = str.padEnd(10,"a");
    console.log(a);  //125416aaaa
}