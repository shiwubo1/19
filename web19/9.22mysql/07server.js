/**引入另一个文件 */
let db = require("./05db.js");
/**引入http模块 */
let http = require("http");
/**创建一个服务器 */
let server = http.createServer((req, res) => {
    /**解决文字乱码 */
    res.setHeader("Content-Type", "text/html,charset=uft-8");
    /**解决跨域 */
    res.setHeader("Access-Control-Allow-Origin","*");
    /**调用db模块 */
    db.query("select * from studentinfo",[],(rea,fields)=>{
        res.end(JSON.stringify(rea))
    })
})
server.listen(8080);
console.log(1);
