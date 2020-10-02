/**先引入db模块 */
let db = require("./05db.js");
/**调用 */
db.query("select * from user",[],(res,fileds)=>{
    console.log(res);
})