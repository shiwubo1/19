/**引入mysql模块 */
let mysql = require("mysql");
/**创建一个mysql的资源池 pool */
let pool = mysql.createPool({
    /**地址 */
    host:"localhost",
    /**用户  */
    user:"root",
    /**密码 */
    password:"root",
    /**端口 */
    port:"3306",
    /**数据库名 */
    database:"material"
})
/**导出 */
exports.query = (sql,arr,callback)=>{
    /**建立连接 */
    pool.getConnection((err,connection)=>{
        if(err){
            throw err; 
            return;
        }
        connection.query(sql,arr,(err,res,fileds)=>{
            /**将连接返回到连接池,让其他人复用 */
            connection.release();
            if(err) throw err;
            /**执行回调,将数据返回 */
            callback&&callback(res,fileds)
        })
    })
}

