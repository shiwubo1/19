//logs.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    check: [
      { value: "banner" },
      { value: "apple", a: "true" },
      { value: "origin" },
      { value: "potato"}
    ],
    latitude: "",
    longitude: "",
    markers: [{
      iconPath: "../../image/01.jpg",
      id: 0,
      latitude: "",
      longitude: "",
      width: 50,
      height: 50
    }],
    background: []
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(this);
    wx.getLocation({
      success: res => {
        // console.log(res.latitude);
        // console.log(res.longitude);
        // console.log(this);
        this.setData({
          latitude: res.latitude,
          longitude: res.longitude,
          "markers[0].latitude": res.latitude,
          "markers[0].longitude": res.longitude,
        })
  }
})
wx.request({
  url: 'https://www.wumeili.top/w/website/bannerList',
  success: res => {
    // console.log(res.data.data);
    this.setData({
      background: res.data.data

    })
  }
})
  },

/**
 * 生命周期函数--监听页面初次渲染完成
 */
onReady: function () {
  /**生成实例 */
  let component = wx.createCanvasContext("canvas");
  /**设置线条的宽度 */
  component.setLineWidth(2);
  /**设置线条的颜色 */
  component.setStrokeStyle('red');
  /**moveTo  把路径移动到指定的点,不创建弧线 */
  component.moveTo(160, 100)
  /**are  画一个圆半圆 弧形 */
  component.arc(100, 100, 60, 0, 2 * Math.PI, true);
  component.moveTo(140, 100)
  component.arc(100, 100, 40, 0, Math.PI, false);
  component.moveTo(130, 80)
  component.arc(120, 80, 10, 0, 2 * Math.PI, false);
  component.moveTo(90, 80)
  component.arc(80, 80, 10, 0, 2 * Math.PI, false);
  component.moveTo(40, 40)
  /** strokeRect(左上角x,左上角y,长,宽)  创建一个矩形*/
  component.strokeRect(40, 40, 120, 120)
  /**给线条填充颜色 */
  component.stroke();
  // component.stroke();

  /**将写的渲染到画布上 */
  component.draw()
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
