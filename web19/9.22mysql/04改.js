{
    /**引入mysql 模块 */
    let mysql = require("mysql");
    /**连接数据库 */
    let connection = mysql.createConnection({
        /**地址 host*/
        host:"localhost",
        /**用户 user */
        user:"root",
        /**密码 password */
        password:"root",
        /**端口号 port*/
        port:"3306",
        /**数据库名字  database*/
        database:"username"
    })
    /**连接 */
    connection.connect()
    console.log(1);
    connection.query("update user set username='小小' where id = 4",(err,res)=>{
        if(err){
            console.log("失败"+err.message);
            return
        }
        console.log(res);
    })
    /**结束 */
    connection.end()


}