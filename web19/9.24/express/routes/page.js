var express = require("express");
var router = express.Router();
var db = require("../db");

router.get('/', (req, res, next) => {
    res.send({ aa: "成功", code: 1 })
})
/**查全部 */
router.get('/select', (req, res, next) => {
    // res.send("123")
    res.header("Access-Control-Allow-Origin", "*");
    db.query("select * from totleplan", [], (result, del) => {
        if (res.length === 0) {
            res.send({
                msg: "暂无数据",
                code: -1
            })
        } else {
            res.send(result)
        }
    })
})

/**添加 */
router.get('/insert', (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    let mrName = req.query.mrName;          /**计划名称 */
    let cmtMan = req.query.cmtMan;          /** 提交人*/
    let execMan = req.query.execMan;        /**计划执行人 */
    let cmtDate = req.query.cmtDate;        /**提交时间 */
    let comeDate = req.query.comeDate;      /**到厂时间 */
    let mmid = req.query.mmid;              /**材料 */
    let useloc = req.query.useloc;          /**使用位置 */
    let nnum = req.query.nnum;              /**使用量 */
    let mprice = req.query.mprice;          /**参考价格 */
    let ifover = req.query.ifover;          /**是否超额 */
    let msum = req.query.msum;              /**小计 */
    let provState = req.query.provState;    /**供应商确认状态 */
    /**连接数据库先查看数据库有没有 这个 计划名称 有的话返回有此计划,没有就添加进去 */
    db.query("select * from totleplan where mrName = ?", [mrName], (result, del) => {
        if (result.length) {
            res.send({
                msg: "数据库已经有此计划",
                code: -1
            })
        } else {
            db.query("insert into totleplan(mrName,cmtMan,execMan,cmtDate,comeDate,mmid,useloc,nnum,mprice,ifover,msum,provState) values (?,?,?,?,?,?,?,?,?,?,?,?)", [mrName, cmtMan, execMan, cmtDate, comeDate, mmid, useloc, nnum, mprice, ifover, msum, provState], (result, del) => {
                if (result) {
                    res.send({
                        msg: "添加成功",
                        code: 0
                    })
                } else {
                    res.send({
                        msg: "添加失败",
                        code: 0
                    })
                }
            })
        }
    })
})
/**修改 得先查然后才能修改 */
/** 用项目名字 查 */
router.get('/cha', (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    let mrName = req.query.mrName;
    db.query("select * from totleplan where mrName = ?", [mrName], (result, del) => {
        if (result.length !== 0) {
            res.send(result)
        } else {
            res.send({
                msg: "暂无此数据",
                code: 1
            })
        }
    })
})
/**更改 */
router.get('/update', (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    let id = req.query.id;                  /**计划id */
    let mrName = req.query.mrName;          /**计划名称 */
    let cmtMan = req.query.cmtMan;          /** 提交人*/
    let execMan = req.query.execMan;        /**计划执行人 */
    let cmtDate = req.query.cmtDate;        /**提交时间 */
    let comeDate = req.query.comeDate;      /**到厂时间 */
    let mmid = req.query.mmid;              /**材料 */
    let useloc = req.query.useloc;          /**使用位置 */
    let nnum = req.query.nnum;              /**使用量 */
    let mprice = req.query.mprice;          /**参考价格 */
    let ifover = req.query.ifover;          /**是否超额 */
    let msum = req.query.msum;              /**小计 */
    let provState = req.query.provState;    /**供应商确认状态 */

    db.query("select * from totleplan where mrName = ?", [mrName], (result, del) => {
        let a = true;
        for (let i = 0; i < result.length; i++) {
            if (result[i].id !== parseInt(id)) {
                a = false;
                break;
            }
        }
        if (a === false) {
            res.send({
                msg: "数据库已经有此计划",
                code: 1
            })
        } else {
            db.query("update totleplan set mrName = ?,cmtMan = ?,execMan = ?,cmtDate = ?,comeDate = ?,mmid = ?,useloc = ?,nnum = ?,mprice = ?,ifover = ?,msum = ?,provState = ? where id = ?", [mrName, cmtMan, execMan, cmtDate, comeDate, mmid, useloc, nnum, mprice, ifover, msum, provState, id], (result, del) => {
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
})
/**删除 */
router.get('/delete', (req, res, next) => {
    // res.send("123")
    res.header("Access-Control-Allow-Origin", "*");
    let mrName = req.query.mrName;
    db.query("delete from totleplan where mrName = ?", [mrName], (result, del) => {
        if (result) {
            res.send({
                msg: "删除成功",
                code: 0
            })
        } else {
            res.send({
                msg: "删除失败",
                code: 1
            })
        }
    })
})

/**注册 */
router.get("/zhuce", (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    let username = req.query.username;
    let tel = req.query.tel;
    let mail = req.query.mail;
    let password = req.query.password;
    db.query("select * from user where username= ?", [username], (result, del) => {
        if (result.length !== 0) {
            res.send({
                msg: "用户已注册",
                code: -1
            })
        } else {
            db.query("insert into user(username,tel,mail,password) values(?,?,?,?)", [username, tel, mail, password], (result, del) => {
                if (result) {
                    res.send({
                        msg: "注册成功",
                        code: 0
                    })
                } else {
                    res.send({
                        msg: "注册失败",
                        code: 1
                    })
                }
            })
        }
    })

})
/**登录 */
router.get("/denglu", (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");

    let username = req.query.username;
    let password = req.query.password;
    db.query("select * from user where username = ? and password = ?", [username, password], (result, del) => {
        if (result.length === 0) {
                    res.send({
                        msg: "未注册,请先注册",
                        code: 1
                    })
                } else {
                    res.send({
                        msg: "登陆成功",
                        code: 0
                    })
                }
0    })
})
    /*
    数据表名:totleplan
    id          项目id
    mrName      计划名称
    cmtMan      提交人
    execMan     计划执行人
    cmtDate     提交时间
    comeDate    到厂时间
    mmid        材料
    useloc      使用位置
    nnum        使用量
    mprice      参考价格
    ifover      是否超额
    msum        小计
    provState   供应商确认状态(已确认和未确认)
    */
    module.exports = router;
