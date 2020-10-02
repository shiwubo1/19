const uu = "https://www.wumeili.top/w/";
function ajax(url,data,success){
    wx.request({
      url:uu+url,
      data,
      success
    })    
}
module.exports = {
    ajax
}