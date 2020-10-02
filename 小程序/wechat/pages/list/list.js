const req = require("../../utils/req")

// pages/list/list.js
let $ = require("../../utils/req")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    info:""||603039157333,
    allinfo:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // this.setData({
    //   info:options.id
    // })
    console.log(this.data.info);
    $.ajax("website/findGoodsDetail",{info:this.data.info},res=>{
      res=res.data.data.detail.tbk_item_info_get_response.results.n_tbk_item[0]
      this.setData({
        allinfo:res
      })
      console.log(this.data.allinfo);
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})