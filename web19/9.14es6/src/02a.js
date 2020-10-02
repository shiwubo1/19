
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
let a = 123;
function b() {
    console.log(123);
};
class C {
    say() {
        console.log("hello");
    }
}
//使用default 
export default {
    a,
    b,
    C
}