{
    /**引入mysql模块 */
    let mysql = require("mysql");
    /**创建链接 */
    let connection = mysql.createConnection({
        /** 地址*/
        host:'localhost',
        /**用户 */
        user:'root',
        /**密码 */
        password:'root',
        /**端口号 */
        port:'3306',
        /**数据库名 */
        database:'username'
    })
    /**链接 */
    connection.connect()
    console.log(1);
    // /**查全部 */
    // connection.query("select * from user",(err,res)=>{
    //     if(err){
    //         console.log("连接失败"+err.ressage);
    //         return
    //     }
    //     console.log(res);
    // })
    // connection.end()
    /**查一个 */
    connection.query("select * from user where id = 2",(err,res)=>{
        if(err){
            console.log("连接失败"+err.ressage);
            return
        }
        console.log(res);
    })
    connection.end()
}