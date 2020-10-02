{
    // node连接数据库
    /**引入mysql模块 */
    let mysql = require("mysql")
    /**创建连接 */
    let connection = mysql.createConnection({
        host:"localhost",
        user :"root",
        password:"root",
        port:"3306",
        database:"username"
    })
    /**连接数据库 */
    connection.connect()
    console.log('1');
    /**增  inset*/
    connection.query("insert into user(username,age,hobby) values('麻衣','20','playing')",(err,res)=>{
        if(err){
            console.log("连接失败",err.message);
            return;
        }
        console.log(res);
    })
    connection.end()
}


