// pages/views/my/addresmgr/address.js
Page({
  data: {
    addressList: [
      {
        user: '张三',
        tel: '13546312452',
        address: '重庆市江北区观音桥街道',
        default: 'true',
        id: '1'
      },
      {
        user: '张三',
        tel: '13546312452',
        address: '重庆市江北区观音桥街道',
        default: 'false',
        id: '2'
      }
    ],
    choose: ''
  },
  onLoad: function (options) {

  },
  goAdd() {
    wx.navigateTo({
      url: './add',
    })
  },
  chooseAddress(e) {
    let _i = e.currentTarget.dataset.index;
    let address = this.data.addressList[_i];
    let pages = getCurrentPages();
    if (pages.length > 1) {
      var prePage = pages[pages.length - 2]; // 获取上一页
      if (prePage.getAddress) {
        prePage.getAddress(address)
        wx.navigateBack()
      }
    }
  }
})