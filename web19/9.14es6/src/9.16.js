// {
//     /**set es6 提供的类似数组的数据结构 他是值得集合  里面的值不会重复
//      *      自带去重  只对同类型去重 不会隐式转换 
//      * */
//     let set = new Set()
//     console.log(set);  //{}
//     //增  add()
//     set.add(1)
//     set.add(2)
//     console.log(set);   //{1,2}
//     // 长度 size
//     console.log(set.size);  //2
//     //删 delete()
//     set.delete(1)
//     console.log(set);   //{2}
//     //判断有无 
//     let a = set.has(1)
//     console.log(a);     //false
//     a = set.has(2)
//     console.log(a);     //true
//     //清空clear()   
//     set.clear()
//     console.log(set);   //{}

//     /**可进行数组去重  将这个数组放入set构造函数中 set自带去重效果  */
//     let arr = [1, 2, 23, 5, 2, 41, 2, 51, 1, 12, 3, 1, 24, 2];
//     set = new Set(arr)
//     arr = Array.from(set)
//     console.log(arr);
// }

// {
//     /**Array  Object Map Set  增删改查 */
//     let arr = [1, 2, 3, 4, 5];
//     let obj = { name: "小明" };
//     let map = new Map([["name", "翠花"]])
//     let set = new Set()
//     /**增 */
//     //Array
//     arr.push(6);
//     arr.unshift(0);
//     console.log(arr);
//     //Object
//     obj["age"] = 15
//     console.log(obj);
//     //Map
//     map.set("age", 15)
//     console.log(map);
//     //set 
//     let bj = { name: "花花" }
//     set.add(bj)
//     console.log(set);
//     /**查 */
//     //Array
//     let a = arr.includes(5)
//     console.log(a);
//     //Object
//     a = "age" in obj
//     console.log(a);
//     //Map
//     a = map.has("name")
//     console.log(a);
//     //set 
//     a = set.has(bj)
//     console.log(a);
//     /**改 */
//     //Array
//     arr.splice(0, 1, 1)
//     console.log(arr);
//     //Object
//     obj["name"] = "王五"
//     console.log(obj);
//     //Map
//     map.set("name", "王五")
//     console.log(map);
//     //set
//     set.forEach(function (item) {
//         console.log(item);
//         if (typeof item === Object) {
//             item.name = item.name ? "王五" : "";
//         }
//     })
//     console.log(set);
//     /*删*/
//     //Array
//     arr.splice(0, 1)
//     console.log(arr);
//     //Object
//     delete obj.name
//     console.log(obj);
//     //map
//     map.delete(name)
//     console.log(map);
//     //set
//     set.delete(bj)
//     console.log(set);
// }




// {
//     /**代理  Proxy */
//     let obj = {
//         id: 5461,
//         name: "李四",
//         age: 18,
//         _siyou: "swimming",
//         tel: "15535355555",
//         time: "2019"
//     };

//     let objProxy = new Proxy(obj, {
//         /**拦截读取  get:function(目标值,键)*/
//         get: function (toget, key) {
//             if (key === "tel") {
//                 return toget[key].substring(0, 3) + "****" + toget[key].substring(7)
//             } else if (key === "time") {
//                 return toget[key].replace("2019", 2020)
//             }
//             return toget[key]
//         },
//         /**拦截设置 set:function(目标,键,值) */
//         set(toget,key,value){
//             /**toget[key] */
//             if(key ==="id" ){
//                 return toget[key]
//             }else{
//                 return toget[key] = value   
//             }
//         },
//         /**拦截in操作 has(目标,key)*/
//         has(toget,key){
//             if(key in toget){
//                 console.log(""+key,toget[key]);
//                 return true
//             }else{
//                 console.log("暂无此属性");
//                 return false
//             }
//         },
//         /**拦截delete操作 deleteProperty(目标,key)  id跟私有属性不能删  */
//         deleteProperty(toget,key){
//             if(key === "id"||key === "_siyou"){
//                 throw new Error("私有属性不能删除")
//                 // return false 
//             }else{
//                 delete toget[key];
//                 return true;
//             }
//         },
//         /**拦截遍历 ownKeys:function(目标,key) 过滤id 和第一位为_的*/
//         ownKeys(toget,key){
//             return Object.keys(toget).filter(function(item){
//                 return item !=="id" && !item.startsWith("_");
//             })
//         }
//     })
//     console.log(objProxy.tel);
//     console.log(objProxy.time);
//     objProxy.id = 511654;
//     console.log(objProxy.id);
//     console.log("name" in objProxy);
//     console.log(delete objProxy.tel);
//     // console.log(delete objProxy.id);
//     // console.log(delete objProxy._siyou);
//     console.log(Object.keys(objProxy));
// }

// {
//     /**Reflect 映射可以直接操作对象 */
//     let obj = {
//         name:"王五",
//         age:"18",
//         sex:"男"
//     }
//     console.log(Reflect.get(obj,"name"));
//     console.log(Reflect.set(obj,"name","赵六"));
//     console.log(obj);
//     console.log(Reflect.has(obj,"name"));
// }

{
    /**代理映射双向绑定 */
    //获取dom元素
    let inp = $("#int")[0];
    let i = $("#i")[0];
    // console.log(inp);
    // console.log(i);
    //初始化对象
    let obj = {};
    //代理对象
    let objProxy = new Proxy(obj, {
        //代理的选项
        get: function(target, key) {
            return Reflect.get(target, key)
        },
        set: function(target, key, value) {
            // console.log(target);
            // console.log(key);    //"text"
            // console.log(value);  //
            if (key === "text") {
                inp.value = inp.value == value ? inp.value : value;
                $(i).text(value);
            }
            console.log(target);
            console.log(key);    //"text"
            console.log(value);  //
            return Reflect.set(target, key, value)
        }
    })
    // $("body").on("keyup", $(inp), function (e) {
    //     $(i).text(e.target.value)
    //     // console.log(objProxy.key);
    // })
    inp.addEventListener("keyup",function(e){
        objProxy.text = e.target.value
    })
    // i.text = 111
}
