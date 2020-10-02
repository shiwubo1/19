// pages/xiangqing/xiangqing.js
let $ = require("../../utils/req")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name: "",
    page: 1,
    infoList: [],
    value: ""
  },
  inblur(e) {
    this.setData({
      value: e.detail.value
    })
  },
  taps() {
    this.setData({
      name: this.data.value,
      page:1
    })
    $.ajax("website/findGoodsList", { info: this.data.name, pageNo: this.data.page }, res => {
      res = res.data.data.tbk_dg_material_optional_response.result_list.map_data;
      this.setData({
        infoList: res
      })
    })
  },
  list(e){
    console.log(e.currentTarget.dataset.id);
    wx.navigateTo({
      url: '../list/list?id='+e.currentTarget.dataset.id,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      name: options.name
    })
    // console.log(this.data.name);

    $.ajax("website/findGoodsList", { info: this.data.name, pageNo: this.data.page }, res => {
      res = res.data.data.tbk_dg_material_optional_response.result_list.map_data;
      console.log(res);
      this.setData({
        infoList: res
      })
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
    this.setData({
      page: this.data.page + 1
    })
    console.log(this.data.page);
    $.ajax("website/findGoodsList", { info: this.data.name, pageNo: this.data.page }, res => {
      res = res.data.data.tbk_dg_material_optional_response.result_list.map_data;
      this.setData({
        infoList: res
      })
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})