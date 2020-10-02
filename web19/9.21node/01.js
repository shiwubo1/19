{
    /**引用http模块 */
    let http = require("http");
    /**创建一个服务器 */
    let server = http.createServer(function (req, res) {
        /**解决汉字乱码 */
        res.setHeader("content-type", "text/html; charset=utf-8");
        /**解决跨域 */
        res.setHeader("Access-Control-Allow-Origin", "*")
        /**res.end()  必须要有,输出的是字符串 */
        res.end("自行车")
    })
    /**创建链接 */
    server.listen(3000, "192.168.1.105")
    console.log(3000);
}


{
    /**引入http模块*/
    let http = require('http');
    /**引入系统文件模块 */
    let fs = require("fs")
    /**创建一个服务器 */
    let server = http.createServer(function (req, res) {
        /**解决汉字乱码 */
        res.setHeader("content-type", "text/html; charset=utf-8");
        /**解决跨域 */
        res.setHeader("Access-Control-Allow-Origin", "*")
        /**远程访问的ip */
        req = req.connection.remoteAddress
        res.end(req + "请稍等,马上为你上菜")
        console.log(req);
    })
    /**创建链接 */
    server.listen(8050, "192.168.1.105")
    console.log("8050");
}




{
    /**引入http模块*/
    let http = require('http');
    /**引入系统文件模块 */
    let fs = require("fs")
    /**创建一个服务器 */
    let server = http.createServer(function (req, res) {
        /**解决汉字乱码 */
        res.setHeader("content-type", "text/html; charset=utf-8");
        /**解决跨域 */
        res.setHeader("Access-Control-Allow-Origin", "*")
        /**读取json文件 */
        fs.readFile("./分类.json", function (err, data) {
            if (err) {
                throw new Error("读取失败");
                return
            }
            res.end(data)
        })
    })
    /**创建链接 */
    server.listen(8080, "192.168.1.105")
    console.log("8080");
}


{
    /**引入http模块*/
    let http = require('http');
    /**引入系统文件模块 */
    let fs = require("fs")
    /**引入url模块 */
    let url = require("url")
    /**创建一个服务器 */
    let server = http.createServer(function (req, res) {
        /**解决汉字乱码 */
        res.setHeader("content-type", "text/html; charset=utf-8");
        /**解决跨域 */
        res.setHeader("Access-Control-Allow-Origin", "*")
        if (req.url == "/favicon.ico") {
            return;
        }
        console.log(1);
        res.end()
    })
    /**创建链接 */
    server.listen(8000, "192.168.1.105")
    console.log("8000");
}

{
    /**引入http模块 */
    let http = require("http");
    /**引入url模块 */
    let url = require("url")
    /**引入系统文件模块 */
    let fs = require("fs")
    let server = http.createServer((req, res) => {
        /**解决汉字乱码 */
        res.setHeader("content-type", "text/html; charset=utf-8");
        /**解决跨域 */
        res.setHeader("Access-Control-Allow-Origin", "*");
        if (req.url === "/favicon.ico") {
            return;
        }
        if (req.url === "/a") {
            fs.readFile("./sanji.json", (err, data) => {
                if (err) {
                    console.log("失败");
                    return
                }
                res.end(data)
            })
        } else if (req.url === "/b") {
            fs.readFile("./分类.json", (err, data) => {
                if (err) {
                    console.log("失败");
                    return
                }
                res.end(data)
            })
        } else {
            res.end("你是谁？")
        }
    })
    server.listen(3500);
    console.log(3500);
}


{
    var modu = require("./02.js");
    modu.fa()
}

{
    //用户访问   /student/1234567890 查询学生的信息
    // 用户访问   /teacher/121212 查询老师信息
    /**引用http模块 */
    let http = require("http");
    /**引入url模块 */
    let url = require("url");
    /**创建一个服务器 */
    let server = http.createServer(function (req, res) {
        /**解决汉字乱码 */
        res.setHeader("content-type", "text/html; charset=utf-8");
        /**解决跨域 */
        res.setHeader("Access-Control-Allow-Origin", "*")
        /**res.end()  必须要有,输出的是字符串 */
        if(req.url ==="/favicon.ico"){
            return;
        }
        if(req.url.substr(0,9)==="/student/"){
            if(/^\d{10}$/.test(req.url.substr(9))){
                res.end("你所查询的学生信息,id是"+req.url.substr(9))
            }else{
                res.end("你所查询的学生信息错误，id是"+req.url.substr(9));
            }
        }
        if(req.url.substr(0,9)==="/teacher/"){
            if(/^\d{6}$/.test(req.url.substr(9))){
                res.end("你所查询的老师信息,id是"+req.url.substr(9))
            }else{
                res.end("你所查询的老师0信息错误，id是"+req.url.substr(9));
            }
        }
    })
    /**创建链接 */
    server.listen(3600, "192.168.1.105")
    console.log(3600);

}