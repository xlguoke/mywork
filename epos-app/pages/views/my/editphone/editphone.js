// pages/views/my/editphone/editphone.js
const t = 10;
Page({
  data: {
    time: t,
    getCode:true
  },
  changeVal(e) {
    let label = e.currentTarget.dataset.name,
      val = e.detail.value;
    this.setData({
      [label]: val
    })
  },
  submitHandler() {
    let {phone,code}=this.data;
    console.log(phone,code)
  },
  getCode() {
    this.setData({
      getCode:false
    })
    let timer = setInterval(() => {
      let _t = this.data.time;
      _t--;
      if (_t < 0) {
        clearInterval(timer)
        _t = t
        this.setData({
          getCode:true
        })
      }
      this.setData({
        time: _t
      })
    }, 1000)
  }
})