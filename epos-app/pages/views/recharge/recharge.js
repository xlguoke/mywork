// pages/views/recharge/recharge.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    chooseMemberCard: ['13000000000', '15200000000'],
    memberIndex: -1,
    moneyList: [
      {
        code: 0,
        price: 10,
        give: 1
      },
      {
        code: 1,
        price: 100,
        give: 50
      },
      {
        code: 2,
        price: 1000,
        give: 500
      }
    ],
    moneyIndex: -1,
    payType: [
      {
        icon: '/pages/images/wx.png',
        pay: '微信支付',
        code:1
      },
      {
        icon: '/pages/images/wx.png',
        pay: '微信支付',
        code:2
      }
    ],
    payIndex: -1,
    totalMoney:0.00
  },
  chooseMemberCard(e) {
    this.setData({
      memberIndex: e.detail.value
    })
  },
  chooseMoney(e) {
    let _i = e.currentTarget.dataset.code;
    let money = this.data.moneyList[_i].price;
    this.setData({
      moneyIndex: _i,
      totalMoney:money
    })
  },
  choosePayType(e) {
    let pay = e.detail.value;
    this.setData({
      payIndex: pay
    })
  },
  paymentHandler(){
    let {memberIndex,moneyIndex,payIndex} = this.data;
      if(memberIndex==-1){
        wx.showToast({
          title: '请选择会员卡',
          icon:'none'
        })
        return;
      }
      if(moneyIndex==-1){
        wx.showToast({
          title: '请选择充值金额',
          icon:'none'
        })
        return;
      }
      if(payIndex==-1){
        wx.showToast({
          title: '请选择支付方式',
          icon:'none'
        })
        return;
      }

      let member = this.data.chooseMemberCard[memberIndex],
          money = this.data.moneyList[moneyIndex].price,
          payType = this.data.payType[payIndex].code;

          console.log(member,money,payType)
      //  wx.request() ...
  },
  onLoad: function (options) {

  },
})