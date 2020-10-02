// {
//     /*函数的扩展*/
//     //设置默认参数
//     function fn(x, y) {
//         return x + y
//     }
//     let a = fn(2, 3);
//     console.log(a);
//     function fa(x, y = 1) {
//         return x + y
//     }
//     a = fa(3);
//     console.log(a);
//     //rest rest 是es6对函数提供的一个扩展,是一个数组对象
//     function fb (...rest){
//         let str = 0
//         for(let v in rest){
//             str +=rest[v]
//         }
//         console.log(str);
//     }
//     fb(1,2,3,4)
//     //函数尾调用   能够提高性能, 使用递归的时候使用尾调用
//     function fc(x){
//         return fa(x)
//     }
//     a = fc(5)
//     console.log(a);
//     /**以下三种情况不属于尾调用
//      *运算 function fn(){return fa(2)+1} 
//      *函数表达式 let fn = function(){return fa(2)}
//      *无return function fn(){fa(2)}
//      * /
// }

// {

//     /**箭头函数  匿名函数就是箭头函数  function(){}*/
//     let a = function (a) { console.log(1); }
//     a(1);
//     //可以写成 
//     a = (a) => { console.log(1); }
//     a(1);
//     //如果函数只有一个参数,()可以省略
//     a = x => { console.log(x); }
//     a(2);
//     //如果没有参数 参数位置要用()表示
//     a = () => { console.log(1); }
//     a()
//     //如果函数执行的东西只有一条内容,且是return后面的 可以吧把return和大括号省略
//     a = () => 2
//     console.log(a());
//     //箭头函数不会绑定this  this指向的是上一级的作用域
//     //箭头函数没有agruments
// }

// {
//     /**类 class */
//     class Person{
//         //类里面用constructor来接受参数
//         constructor(name,age=20){
//             this.name = name,
//             this.age = age
//         }
//         //可以直接设置一个方法
//         say(){
//             console.log("hello");
//         }
//         get full(){
//             return "zhang"+this.name
//         }
//         set full(value){
//             this.name = value
//         }
//         //私有属性,不会被继承 用static
//         static sayHello(obj){
//             console.log(obj.name);
//         }
    
//     }
//     let person = new Person("zs")
//     // console.log(person);
//     // person.say()
//     //类里面可用extends来实现子继承父
//     class Per1 extends Person{
//         constructor(name,age,sex){
//             super(name,age)
//             this.sex =sex
//         }

//     }
//     console.log(new Per1("li",20,"nan"));
//     console.log(person.full);
//     person.full="zzz";
//     console.log(person.full);
//     console.log(Per1.full);
//     Person.sayHello(new Person("xiao"))
// }



/** Promise*/

// {
//     console.log(1);
//     setTimeout(()=>{
//         console.log(2);
//     })
//     console.log(3);
// }
/**回调函数 */
// {
//     function ajax(cb) {
//         setTimeout(() => {
//             cb && cb()
//             //判断有没有cb实参,并且调用它
//             // console.log(cb);  
//             // cb()   --》1
//         }, 1000);
//     }
//     ajax(() => {
//         console.log("1");
//     })
// }


// {
//     function ajax(cb){
//         setTimeout(()=>{
//             console.log("2");
//         },1000)
//     }
//     ajax((cb2)=>{
//         console.log(1);         //1
//         setTimeout(()=>{
// 			cb2 && cb2()        //
// 		},1000)

//     })    
// }
/**解决回调地狱  Promise 改造回调函数 有两个参数
 *  resolve: 表示程序执行下一步要执行的函数
 *  reject: 表示出错要执行的函数
 *    有个.then()方法  是链式回调函数
 * */

// {
//     function ajax() {
//         return new Promise((resolve, reject) => {
//             setTimeout(() => resolve(console.log(1)), 1000)
//         })
//     }
//     ajax().then(() => {
//         console.log(1);
//     })
// }
// {
//     function ajax() {
//         return new Promise((resolve, reject) => {
//             setTimeout(() =>  resolve(console.log(1)))
//         })
//     }
//     ajax().then(() => {
//         console.log(2);
//         return new Promise((resolve, reject) => {
//             setTimeout(() =>  resolve(console.log(1)))
//         })
//     }).then(()=>{
//         console.log(2);
//     })  // 1212
// }


// //try--catch    .catch捕获异常
// {
//     function number(num){
//         return new Promise((resolve,reject)=>{
//             if(typeof num ==="number"&&!isNaN(num)){
//                 resolve(num)
//             }else{
//                 let err = new Error("请输入数字")
//                 reject(err)
//             }
//         })
//     }
//     let a = Number(prompt())
//     number(a).then(num=>console.log(num)).catch(err=>console.log(err))
// }
/**
 * .all() 里面放的数组  里面所有的都执行完在进行下一步
 * .race()里面放的数组  里面只要有一项执行完就进行下一步
 */
// //load  加载事件    error错误
// {
//     /**四张图片 创建img 标签,等四张图片都加载好了在渲染 */
//     let img1 = "./image//1.jpg";
//     let img2 = "./image//2.jpg";
//     let img3 = "./image//3.jpg";
//     let img4 = "./image//4.jpg";
//     function getimg(url){
//         return new Promise((resolve,reject)=>{
// 			const img = document.createElement("img");
//             img.src = url;
//             img.onload=()=>resolve(img)
//             img.onerrey=()=>reject(err)
//         })
//     }
//     function show(img){
//         // console.log(img);
// 		img.forEach(item=>{
// 			document.body.appendChild(item);
// 		})
//     }
//     //全部都执行完后 才会去执行后面的代码
//     Promise.all([getimg(img1),getimg(img2),getimg(img3),getimg(img4)]).then(show)

//     // function show(img){
//         //     $("body").append(img)
//         // }
//     // //只要有一个执行完成,就直接去执行后面的
//     // Promise.race([getimg(img1),getimg(img2),getimg(img3),getimg(img4)]).then(show)

// }

