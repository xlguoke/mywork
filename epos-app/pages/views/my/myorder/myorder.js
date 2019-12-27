// pages/views/my/myorder/myorder.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    statusList: [
      {
        status: 0,
        name: '全部'
      },
      {
        status: 1,
        name: '待支付'
      },
      {
        status: 2,
        name: '待取衣'
      },
      {
        status: 3,
        name: '已完成'
      }
    ],
    orderList: [{
      orderNo: 'SDKFJE_FDSKFLEf_ELS',
      status: '1',
      statusName: '待支付',
      url: '/pages/images/rinse_1.png',
      time: '2019-12-12',
      price: '66.66'
    }, {
      orderNo: 'SDKFJE_FDSKFLEf_ELS',
      status: '1',
      statusName: '待支付',
      url: '/pages/images/rinse_1.png',
      time: '2019-12-12',
      price: '66.66'
    }],
    showStatus: 0,
  },
  changeStatus(e) {
    let i = e.currentTarget.dataset.index;
    this.setData({
      showStatus: i
    })
  },
  onLoad: function (options) {

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