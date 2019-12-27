// pages/views/my/orderdetail/detail.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        orderDetail: {
            orderNo: 'SDKFJE_FDSKFLEf_ELS',
            status: '1',
            statusName: '待支付',
            goodsList: [
                {
                    url: '/pages/images/rinse_1.png',
                    time: '2019-12-12',
                    price: '66.66',
                    color:'天蓝色',
                    dis:'7.5',
                    flaw:'xxxxxxxxxxxxx'
                },
                {
                    url: '/pages/images/rinse_1.png',
                    time: '2019-12-12',
                    price: '66.66',
                    color:'天蓝色',
                    dis:'7.5',
                    flaw:'xxxxxxxxxxxxx'
                }
            ]
        }
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        console.log(options)
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