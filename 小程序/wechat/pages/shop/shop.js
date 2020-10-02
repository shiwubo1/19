Page({

  /**
   * 页面的初始数据
   */
  data: {
    /**数据绑定{{}} */
    mes: "今天9月27日了,马上就要放国庆假了啊",
    /**列表渲染 */
    list: [
      { name: "锄禾日当午" },
      { name: "汗滴禾下土" },
      { name: "谁知盘中餐" },
      { name: "粒粒皆辛苦" }
    ],
    /**条件渲染 */
    tiao: 10,
    item: {
      index: 1,
      msg: "今天9月27日了",
      time: "现在16点30分"
    },
    x: 0,
    y: 0,
    id:0,
    name:"",
    background: ['../../image/img1.jpg', '../../image/img2.jpg', '../../image/img3.jpg'],

    shopping:[],

  },
  tap() {
    this.setData({
      x: 30,
      y: 30
    })
  },
  tapdas(e){
    console.log(e);
    this.setData({
      id:parseInt(e.currentTarget.id),
      name:e.currentTarget.dataset.name
    })
    console.log(e);
    wx.navigateTo({
      url:"../xiangqing/xiangqing?name="+e.currentTarget.dataset.name,
    },
    res=>{
      console.log(res);
    })
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    /*商品横向滚动*/
    wx.request({
      url: 'https://www.wumeili.top/w/website/findGoodsTypeList',
      success:res=>{
        // console.log(res.data.data);
        this.setData({
          shopping:res.data.data
        })
      }
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