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
    connection.query("insert into studentinfo(username,sex,password,domain,school,age,mail,studentNumber) values('郑十','男','123456','计算机科学与技术','一中',20,'123456@163.com',111111121)",(err,res)=>{
        if(err){
            console.log("连接失败",err.message);
            return;
        }
        console.log(res);
    })
    connection.end()
}


