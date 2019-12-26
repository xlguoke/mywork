// pages/views/index/goodsList/goodsList.js
Page({
  data: {
    activeTabs: 0,
    goodsTypeList: [{
      title: '鞋类',
      code: '0'
    },
    {
      title: '上衣',
      code: '1'
    },
    {
      title: '西装',
      code: '2'
    }
    ],
    goodsList: [
      {
        url: '/pages/images/special_3.png',
        title: '衣服',
        price: '12.00',
        num: 10
      },
      {
        url: '/pages/images/special_3.png',
        title: '衣服',
        price: '12.00',
        num: 3
      },
      {
        url: '/pages/images/special_3.png',
        title: '衣服',
        price: '12.00',
        num: 0
      },
      {
        url: '/pages/images/special_3.png',
        title: '衣服',
        price: '12.00',
        num: 0
      }
    ],
    shopCarGoodsList: [
      {
        url: '/pages/images/special_3.png',
        title: '衣服衣服衣服',
        price: '9999.00',
        num: 10
      },
      {
        url: '/pages/images/special_3.png',
        title: '衣服',
        price: '12.00',
        num: 3
      }
    ],
    show: false
  },
  onLoad: function (options) {

  },
  onShow: function () {

  },
  // 选择商品类型
  changeTabs(e) {
    let _i = e.currentTarget.dataset.index;
    if (_i !== this.data.activeTabs) {
      this.setData({
        activeTabs: _i
      })
    }
  },
  openShopCar() {
    this.setData({
      show: true
    })
  },
  clearShopCar() {
    console.log('清空')
  },
  pickUpSubmit1() {
    console.log('预约取件')
  },
  pickUpSubmit2() {
    console.log('购物车->预约取件')
  },
  closeChopCar(){
    this.setData({
      show:false
    })
  }
})