/**
        * 使用options传参,参数有url type datatype success
        * options:{
        * url:
        * type:
        * datatype:
        * success:function(response){    }
        * }
       */
var $ = {
    ajax: function (options) {
        /*处理url*/
        var url = options.url;
        if (url === undefined) {
            /* 如果没有传入地址,抛出一个自定义错误*/
            throw new Error("ajax必须传入url");
            return;
        }
        /*处理type 请求类型,默认是get*/
        var type = options.type || "get";
        /*处理datatype 返回的数据的类型 string和json 默认string*/
        var datatype = options.datatype || "string";
        /*开始请求数据*/
        /*1、创建xhr对象*/
        var xhr = null;
        if (window.XMLHttpRequest) {
            xhr = new XMLHttpRequest();
        } else {
            xhr = new ActiveXObject("Microsoft.XMLHTTP");
        };
        /*三、监控ajax请求的状态*/
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if ((xhr.status >= 200 && xhr.status < 300) || xhr.status === 304) {
                    if (typeof (options.success) === "function") {
                        var response = "";
                    }
                    if (datatype === "string") {
                        response = xhr.responseText;
                    } else if (datatype === "json") {
                        response = JSON.parse(xhr.responseText)
                    }
                    /*回调函数*/
                    options.success(response);
                }
            }
        };
        /*二、打开请求*/
        xhr.open(type, url, true);
        /*四、发送链接*/
        xhr.send("null");
    }
}
