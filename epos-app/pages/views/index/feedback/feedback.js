// pages/views/index/feedback/feedback.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    feedBackTypes: [{
        title: '洗护质量',
        code: 0
      },
      {
        title: '服务态度',
        code: 1
      },
      {
        title: '物流速度',
        code: 2
      },
      {
        title: '付款流程',
        code: 3
      },
      {
        title: '产品易用性',
        code: 4
      },
      {
        title: '其他',
        code: 5
      }
    ],
    selectedType: -1,
    name: '',
    phone: '',
    feedbackContent: ''
  },
  chooseType(e) {
    let code = e.currentTarget.dataset.code;
    this.setData({
      selectedType: code
    })
  },
  changeVal(e) {
    let code = e.currentTarget.dataset.name,
      val = e.detail.value;
    this.setData({
      [code]: val
    })
  },
  //提交
  submitIdea() {
    let {
      name,
      phone,
      selectedType,
      feedbackContent
    } = this.data;

    console.log(name, phone, selectedType, feedbackContent)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
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