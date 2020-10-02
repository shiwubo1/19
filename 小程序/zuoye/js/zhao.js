/**用span创建小方块 参数几个开始*/
function chuang(num){
    for(let i =0;i<(num*num);i++){
        console.log(i);
       let a = $(".box").append($("<span>"))
        console.log(a);
    }
    $("span").css({
        "display":"block",
        "width":(500/num),
        "height":(500/num),
        // "background-color":"blue"?S
    })
    console.log($("span"));
}
chuang(3)