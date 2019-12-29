// webapp/pages/index/index.js
Page({
  data: {
    sliderList: [{}, {}, {}],
    txtlist: [
      '这是第一条公告内容',
      '小程序上下滚动效果总结',
      '这是一行上下滚动的文字，文字最好短点，超过一行省略'
    ],
    specialGoods: [
      {
        title:'大衣/外套',
        url:'/pages/images/special_1.png',
        price:'80.00',
        activityPrice:'66.66',
        startTime:'5.1',
        endTime:'5.8',
        id:'86456343'
      },
      {
        title: '大衣/外套',
        url: '/pages/images/special_2.png',
        price: '80.00',
        activityPrice: '66.66',
        startTime: '5.1',
        endTime: '5.8',
        id: '86456343'
      },
      {
        title: '大衣/外套',
        url: '/pages/images/special_3.png',
        price: '80.00',
        activityPrice: '66.66',
        startTime: '5.1',
        endTime: '5.8',
        id: '86456343'
      }
    ]
  },
  // 抢购
  panicPaying(){},
  onLoad: function(options) {

  },
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})