// pages/components/popup/popup.js
Component({
  options: {
    multipleSlots: true
  },
  properties: {
    height: {
      type: String,
      value: '70%'
    },
    title: {
      type: String,
      value: '价格预估'
    },
    show: {
      type: Boolean,
      value: false,
      observer: function(d) {
        if (d) {
          this.setData({
            showBg:true
          })
          setTimeout(() => {
            this.setData({
              showCon: true
            })
          }, 0)
        } else {
          this.closePopup()
        }
      }
    },
  },
  data: {
    showCon: false,
    showBg: false
  },
  methods: {
    closePopup() {
      this.triggerEvent('closeModel')
      this.setData({
        showCon: false
      })
      setTimeout(() => {
        this.setData({
          show: false,
          showBg: false
        })
      }, 180)
    }
  }
})