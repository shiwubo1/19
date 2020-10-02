var express = require("express");
var router = express.Router();
var db = require("../db");

router.get('/', (req, res, next) => {
    res.send({ aa: "成功", code: 1 })
})
/**注册 */
router.get('/zhuce', (req, res, next) => {
    let username = req.query.username;
    let age = req.query.age;
    let hobby = req.query.hobby;

    /**注册用户ajax传过来,先判断是否有传来的数据 */
    if (!username || !age || !hobby) {
        res.send({
            msg: "传入的参数错误",
            code: -1
        })
    } else {
        /**注册用户ajax传过来,在判断数据库有没有数据 */
        db.query("select * from user where username = ?", [username], (reslut, del) => {
            if (reslut.length) {
                res.send({
                    msg: "用户名已注册",
                    code: 1
                })
            } else {
                /**最后在添加 */
                db.query("insert into user(username,age,hobby) values(?,?,?)", [username, age, hobby], (reslut, del) => {
                    if (reslut) {
                        res.send({
                            msg: "注册成功",
                            code: 0
                        })
                    } else {
                        res.send({
                            msg: "注册失败",
                            code: 2
                        })
                    }
                })
            }
        })
    }
})
/**登录 */
router.post('/denglu', (req, res, next) => {
    // res.send("123")
    let username = req.body.username;
    let hobby = req.body.hobby;
    /**先判断,用户名跟密码不能为空,在去数据库里找看有没有 */
    if (!username && !hobby) {
        res.send({
            msg: "用户名和密码不能为空",
            code: -1
        })
    } else {
        db.query("select * from user where username = ?", [username], (result, del) => {
            if (result.length) {
                if (result[0].hobby === hobby) {
                    res.send({
                        msg: "登陆成功",
                        data: result,
                        code: 0
                    })
                } else {
                    res.send({
                        msg: "密码错误",
                        code: 2
                    })
                }
            } else {
                res.send({
                    msg: "用户未注册,请先注册",
                    code: 1
                })
            }
        })
    }

})

/**查 */
router.get('/cha', (req, res, next) => {
    let id = req.query.id;
    if (!id) {
        res.send({
            msg: "未登录,请先登录",
            code: -1
        })
    } else {
        db.query("select * from user where id = ?", [id], (result, del) => {
            if (!result.length) {
                res.send({
                    msg: "查询失败",
                    code: 1
                })
            } else {
                res.send(result)
            }
        })
    }
})
/**改 */
router.get('/gai', (req, res, next) => {
    // res.send({ aa: "成功", code: 1 })
    let id = req.query.id;
    let username = req.query.username;
    let age = req.query.age;
    let hobby = req.query.hobby;
    if (!username && !age && !hobby) {
        res.send({
            msg: "用户名,年龄,密码不能为空",
            code: -1
        })
    } else {
        db.query("update user set username = ?,age = ?,hobby = ? where id = ?", [username, age, hobby, id], (result, del) => {
            if (result) {
                res.send({
                    msg: "修改成功",
                    code: 0
                })
            } else {
                res.send({
                    msg: "修改失败",
                    code: 1
                })
            }
        })
    }
})

/**删 */
router.get('/shan', (req, res, next) => {
    let id = req.query.id;
    let username = req.query.username;
    let age = req.query.age;
    let hobby = req.query.hobby;
    if (!username && !age && !hobby) {
        res.send({
            msg: "用户名,年龄,密码不能为空",
            code: -1
        })
    } else {
        // console.log("1");
        db.query("select * from user where id = ?", [id], (result, del) => {
            if (!result.length) {
                res.send({
                    msg: "查询失败",
                    code: 1
                })
            } else {
                db.query("delete from user where id = ?", [id], (result, del) => {
                    console.log(result);
                    if (!result) {
                        res.send({
                            msg: "删除失败",
                            code: 2
                        })
                    } else {
                        res.send({
                            msg: "删除成功",
                            code: 0
                        })
                    }
                })
            }
        })
        // db.query("delete from user where id = ?,username = ?,age = ?,hobby = ?",[parseInt(id),username,age,hobby],(result,del)=>{
        //     if(result){
        //         res.send({
        //             msg:"删除成功",
        //             code:0
        //         })
        //     }else{
        //         res.send({
        //             msg:"删除失败",
        //             code:1
        //         })
        //     }
        // })
    }
})

module.exports = router;
