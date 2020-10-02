"use strict";

// {
//     function fn(){
//     console.log(arguments);

//     }
//     fn(1,2,3)
// }


//     Iterator 遍历器   任何数据结构都可以用
// {
//         /* 
//         Symbol.iterator 遍历器对象,它本身是一个函数,里面有next()方法
//         他的写法 集合[Symbol.iterator]()
//         */
//        //遍历数组
//         let arr =[1,2,3,4];
//         let fn =arr[Symbol.iterator]()
//         console.log(fn.next());
//         console.log(fn.next());
//         console.log(fn.next());
//         console.log(fn.next());
//         console.log(fn.next());
//     //遍历对象
//     let obj = {
//         name:"zs",
//         age:18,
//         sex:"man"
//     }
//     //键值对
//     let fnobj = Object.entries(obj)[Symbol.iterator]()
//     console.log(fnobj.next());
//     console.log(fnobj.next());
//     console.log(fnobj.next());
//     console.log(fnobj.next());
//     //key
//     fnobj = Object.keys(obj)[Symbol.iterator]()
//     console.log(fnobj.next());
//     console.log(fnobj.next());
//     console.log(fnobj.next());
//     console.log(fnobj.next());
//     //values
//     fnobj = Object.values(obj)[Symbol.iterator]()
//     console.log(fnobj.next());
//     console.log(fnobj.next());
//     console.log(fnobj.next());
//     console.log(fnobj.next());

//     /**内部解构 */
//     function useIte(array){
//         //初始索引值为0 
//         let index = 0;
//         return {

//             next(){
//                 //判断index是否小于数组的长度,如果小于了,就返回当前下标的哪项,并index++,如果大于等于,就返回"已完成
//                 return index<array.length?{value:array[index++],done:false}:{
//                     value:"已完成",done:true
//                 }
//             }
//         }
//     }
//     let it = useIte([1,2,3])
//     console.log(it.next());
//     console.log(it.next());
//     console.log(it.next());
//     console.log(it.next());


//     /**原生的数据集合有 Array, Object, set, map, string,以及函数的agruments */

//     //例
//     let aa ={
//         color:"red",
//         name:"苹果",
//         size:"big"
//     }
//         // let arr =[1,2,3,4];
//         // let fn =arr[Symbol.iterator]()

//     let ab = Object.values(aa)[Symbol.iterator]()
//     console.log(ab.next());
//     console.log(ab.next());
//     console.log(ab.next());
//     console.log(ab.next());
// }


// Generator  函数 里面用 yiald 关键字
{
    //     let fn = function* () {
    //         yield 1;
    //         yield 2;
    //         yield 3;
    //     }
    //     let a = fn()
    //     console.log(a);
    //     console.log(a.next());
    //     console.log(a.next());
    //     console.log(a.next());
    //     console.log(a.next());

    //     function* fa() {
    //         yield 1;
    //         yield 2;
    //         yield 3;
    //     }
    //     a = fn()
    //     console.log(a.next());
    //     console.log(a.next());
    //     console.log(a.next());
    //     console.log(a.next());

    // // 应用场景
    // let obj = {
    //     a:1,
    //     b:2,
    //     c:3
    // }
    // obj[Symbol.iterator] = function*(){
    //     for(const key of Object.keys(obj)){
    //         yield obj[key]      
    //     }       
    // }
    // let n = obj[Symbol.iterator]()
    // console.log(n.next());
    // console.log(n.next());
    // console.log(n.next());
    // console.log(n.next());

    // let stat  log(states.next());
    //长循环 用户支付一笔订单,当用户付款成功,我们就提示,"付款成功,继续购物",当用户提交订单,但是为付款,我们就隔2秒提醒用户
}