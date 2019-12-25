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
    goodsList:[
      {
        url:'/pages/images/special_3.png',
        title:'衣服',
        price:'12.00'
      },
      {
        url: '/pages/images/special_3.png',
        title: '衣服',
        price: '12.00'
      },
      {
        url: '/pages/images/special_3.png',
        title: '衣服',
        price: '12.00'
      },
      {
        url: '/pages/images/special_3.png',
        title: '衣服',
        price: '12.00'
      }
    ]
  },
  onLoad: function(options) {

  },
  onShow: function() {

  },
  changeTabs(e) {
    let _i = e.currentTarget.dataset.index;
    if (_i !== this.data.activeTabs) {
      this.setData({
        activeTabs: _i
      })
    }
  }
})