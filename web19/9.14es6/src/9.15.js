// {
//     /**数组的拓展运算符 ...
//      * 1)复制
//      * 2)分割
//      * 3)转换成参数传递给函数
//     */
//     let list = [1, 2, 3, 4, 5, 6, 7];
//     /**复制  原数组在后面改变,复制的数组不会跟着变*/
//     let listclone = [...list];
//     console.log(listclone);
//     // list.push(8,9)
//     // console.log(list);

//     /**分割 要从第几位开始 前面就几个逗号*/
//     let [, , , , , ...arr] = listclone;
//     console.log(arr);
//     /**将数组转换成参数传递给函数 */
//     function fn(x, y) {
//         return x + y
//     }
//     console.log(fn(...arr));
//     let a = `我是一个小${fn(...arr)}啊`
//     console.log(a);
// }
// {
//     /**新增数组的方法
//      * fill()
//      * find()
//      * findIndex()
//      * flat()
//      */
//     let arr = [1, 2, 2, [3, 3, [3, 4], 5]];
//     /**fill(要替换成的内容) 填充数组 替换数组的方法(全部替换)
//      * fill(内容,start ,end) 部分替换 start:开始下标(包括)  end:结束下标(不包括)
//      * fill(内容,start) 部分替换 start:开始下标(包括)-->后面全部
//     */
//     let arrfill = [...arr];
//     let result = arrfill.fill(5)
//     console.log(result);
//     arrfill = [...arr];
//     result = arrfill.fill(5, 2, 4)
//     console.log(result);
//     arrfill = [...arr];
//     result = arrfill.fill(5, 2)
//     console.log(result);
//     /**find(回调函数) 返回数组中第一个符合的元素*/
//     let a = arr.find(function (i) {
//         return i < 2
//     })
//     console.log(a);
//     /**findIndex(回调函数) 返回数组中第一个符合的元素的下标*/
//     a = arr.findIndex(function (i) {
//         return i < 2
//     })
//     console.log(a);
//     /**includes() 判断数组中是否含有指定的值*/
//     a = arr.includes(2)
//     console.log(a);
//     /**flat() 展开数组 参数是几 展开几层  不传参数  默认展开一层*/
//     a = arr.flat()
//     console.log(a);
//     a = arr.flat(2)
//     console.log(a);
/**filter(function(每一项值,每一项下标,当前数组){})  过滤 */
let ccc = [23, 15, 1, 1, 23, 512, 1];
// ccc.filter(function(item,index,a){
//     console.log(item);
//     console.log(index);
//     console.log(a);
// })
/**数组去重 */
let a = ccc.filter(function (item, index, a) {
    return ccc.indexOf(item) === index
})
console.log(a);
// }

// {
//     /*map()数据映射*/
//     let json = [
//         { name: "张三", status: 1 },
//         { name: "李四", status: 1 },
//         { name: "翠花", status: 0 }
//     ]
//     let a = json.map(function (item) {
//         return {
//             name: item.name,
//             status: item.status ? "男" : "女"
//         }
//     })
//     console.log(a);
//     let b = json.map(function (item) {
//         let obj = {};
//         Object.assign(obj, item);
//         obj.status = item.status ? "男" : "女";
//     })
// }
// {
//     reduce()计数
//     let str = "12312145123"
//     // reduce(function(返回值,当前值,index,Array/Object){},[]/{})
//     let result = str.split("").reduce(function (acc, cur) {
//         // console.log(acc);
//         // console.log(cur);
//         acc[cur] ? acc[cur]++ : acc[cur] = 1
//         return acc;
//     }, {});
//     console.log(result);
// }

// {
//     /**展开数组 */
//     let arr = [1,2,[3,4,[5,6]]]
//     let deep =function(arr){
//         return arr.reduce(function(acc,cur){    //计数
//             console.log(acc);
//             console.log(cur);
//             return acc.concat(Array.isArray(cur)?deep(cur):cur)  //判断cur是否是数组,如果是数组,就再次调用它自己,如果不是就返回cur
//         },[])
//     }
//     console.log(deep(arr));
// }




// {
//     /**对象的拓展 */
//     /**复制对象 */
//     let obj = {name:"tom",age:18}
//     let objclone = {...obj}
//     console.log(objclone);
//     /**给对象设置默认值 */
//     let objmoren = {...objclone,name:"lisa"}
//     console.log(objmoren);
//     /**合并对象 */
//     let obj1 = {sex:"男"}
//     let hebing = {...obj1,...objmoren}
//     console.log(hebing);
// }
// {
//     /**对象新增的方法 */
//     /**Object.is() 判断两个值是否相等  与严格相等很类似  但严格相等里(NaN===NaN)--->false 但在Object.is(NaN,NaN)里为true*/
//     let a = Object.is(NaN,NaN);
//     console.log(a);                 //true
//     a = Object.is(1,1);
//     console.log(a);                 //true
//     a = Object.is(1,"1");
//     console.log(a);                 //false
//     /**Object.assign(目标对象,来源对象) 用来值赋值的 */
//     let obj = {name:"tom",age:18}
//     let obj1 = {}
//     Object.assign(obj1,obj)
//     console.log(obj1);
//     /**Object.keys()用来遍历对象的属性名(键)   
//      * Object.values()用来遍历对象的属性值(值)
//      * Object.entriess()用来遍历对象的键与值
//       */
//     let obj2 = {sex: "男", name: "lisa", age: 18};
//     for (let i of Object.keys(obj2)){
//         console.log(i);
//     }
//     for (let i of Object.values(obj2)){
//         console.log(i);
//     }
//     for (let i of Object.entries(obj2)){
//         console.log(i);
//     }
// }

// {
//     /**Map对象用来保存键对值,是es6提供的一个新的构造函数
//      * Map本质上是建对值的集合,他和对象类似
//      * Map()只接受数组作为对象,并且数组的成员还是一个数组, 其中包含两个元素一个键 一个值
//      */
//     let map = new Map([
//         ["name", "zhangsan"],
//         ["age", 18],
//         ["sex", "男"]
//     ])
//     console.log(map);
//     /**长度 size */
//     console.log(map.size);      //3
//     /**增 改  set() */
//     map.set("hoppy", "basketball")
//     console.log(map);
//     map.set("name", "lisi")
//     console.log(map);
//     /**查  get()*/
//     let a = map.get("name")
//     console.log(a);
//     /**删 delete() */
//     map.delete("sex")
//     console.log(map);
//     /**全部删除 clear() */
//     map.clear()
//     console.log(map);
//     /**map 的遍历器 */
//     map = new Map([
//         ["name", "zhangsan"],
//         ["age", 18],
//         ["sex", "男"]
//     ])
//     console.log(map);
//     /**keys() values()  entries() */
//     for(let i of map.keys()){
//         console.log(i);
//     }
//     for(let i of map.values()){
//         console.log(i);
//     }
//     for(let i of map.entries()){
//         console.log(i);
//     }

//     /**forEach */
//     map.forEach(function(index,item){
//         console.log(item,index);
//     })
// }

