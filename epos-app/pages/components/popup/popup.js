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
            observer: function (d) {
                if (d) {
                    setTimeout(() => {
                        this.setData({
                            showCon: true
                        })
                    }, 0)
                }
            }
        }
    },
    data: {
        showCon: false
    },
    methods: {
        closePopup() {
            this.setData({
                showCon: false
            })
            setTimeout(() => {
                this.setData({
                    show: false
                })
            }, 180)
        }
    }
})
