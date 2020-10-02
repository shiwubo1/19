{
   /**删 */
   /**引入mysql模板 */
   let mysql = require("mysql");
   /**链接数据库 */
   let connection = mysql.createConnection({
       /**地址 host*/
       host:'localhost',
       /**用户 user */
       user:"root",
       /**密码 password */
       password:"root",
       /**端口号 port */
       port:"3306",
       /**数据库名  database*/
       database:"username"
   }) 
   /**链接 */
   connection.connect()
   /**操作 */
   connection.query("delete from user where username = '麻衣'",(err,res)=>{
    if(err){
        console.log("错误"+err.message);
        return
    }   
       console.log(res);
   })
   /**结束 */
   connection.end()
}